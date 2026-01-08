import { useEffect, useState } from "react";
import type { FileNode } from "../types";
import { getWebContainer } from "../libs/webContainerManager";
import { buildTree, FileTree } from "./ui/FileTree";
import Editor from "@monaco-editor/react"
import { defineTheme } from "../libs/customeTheme";

export const CodeEditor = () => {
  const [treeData, setTreeData] = useState<FileNode[]>([])
  const [selectedFile, setSelectedFile] = useState<string | null>(null)
  const [fileContent, setFileContent] = useState("")

  useEffect(()=>{
    async function loadTree(){
      const wc = await getWebContainer();
      const tree = await buildTree(wc.fs)
      setTreeData(tree)
    }
    loadTree()
  },[])

  useEffect(()=>{
    async function loadFile(){
      if(!selectedFile) return;
      const wc = await getWebContainer();
      const content = await wc.fs.readFile(selectedFile, "utf-8")
      setFileContent(content)
    }
    loadFile()
  }, [selectedFile])

  useEffect(()=>{
    if(!selectedFile) return;

    const timeout = setTimeout(async ()=>{
      const wc = await getWebContainer();
      await wc.fs.writeFile(selectedFile, fileContent)
    }, 300)

    return ()=> clearTimeout(timeout);
  }, [fileContent, selectedFile])

  return (
    <div className="flex h-full bg-code overflow-hidden">
      <div className="w-50 border-r border-border overflow-hidden p-4">
        <FileTree
          data={treeData}
          selectedFile={selectedFile}
          onFileSelect={(path) => setSelectedFile(path)}
        />
      </div>

      <div className="flex-1 overflow-hidden p-2 m-2">
        <Editor
          height="100%"
          path={selectedFile ?? undefined}
          value={fileContent}
          language={getLanguageFromPath(selectedFile)}
          theme="spark-dark"
          beforeMount={defineTheme}
          onChange={(value) => setFileContent(value ?? "")}
          options={{
            fontSize: 15,
              fontFamily: "JetBrains Mono, Fira Code, monospace",
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              padding: { top: 12 },
              renderLineHighlight: "none",
              overviewRulerBorder: false,
              scrollbar: {
                verticalScrollbarSize: 8,
                horizontalScrollbarSize: 8,
              },
          }}
        />
      </div>
    </div>
  );
};

function getLanguageFromPath(path: string | null) {
  if (!path) return "plaintext";
  if (path.endsWith(".js")) return "javascript";
  if (path.endsWith(".ts")) return "typescript";
  if (path.endsWith(".jsx")) return "javascript";
  if (path.endsWith(".tsx")) return "typescript";
  if (path.endsWith(".json")) return "json";
  if (path.endsWith(".css")) return "css";
  if (path.endsWith(".html")) return "html";
  return "plaintext";
}