import { useEffect, useState } from "react";
import { FileJson, FileCode, FileText, AlertTriangle } from "lucide-react";
import { getWebContainer } from "../lib/webContainerManager";
import { FileTree } from "./ui/FileTree";
import Editor from "@monaco-editor/react";
import { defineTheme } from "../lib/customeTheme";
import { useAtom } from "jotai";
import {
  deleteNodeAtom,
  refreshTreeAtom,
  selectedNodeAtom,
  treeAtom,
} from "../lib/atoms";
import type { FileNode } from "../lib/types";

export const CodeEditor = () => {
  const [treeData] = useAtom(treeAtom);
  const [_, refreshTree] = useAtom(refreshTreeAtom);
  const [selectedFile, setSelectedFile] = useState<string | null>(null);
  const [fileContent, setFileContent] = useState("");
  const [selectedNode, setSelectedNode] = useAtom<FileNode | null>(
    selectedNodeAtom
  );
  const [showDeleteModal, setshowDeleteModal] = useState(false);
  const [, deleteNode] = useAtom(deleteNodeAtom);

  useEffect(() => {
    refreshTree();
  }, []);

  useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Delete") {
        setshowDeleteModal(true);
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, []);

  useEffect(() => {
    async function loadFile() {
      if (!selectedFile) return;
      const wc = await getWebContainer();
      const content = await wc.fs.readFile(selectedFile, "utf-8");
      setFileContent(content);
    }
    loadFile();
  }, [selectedFile]);

  useEffect(() => {
    if (selectedNode?.type === "file") {
      setSelectedFile(selectedNode.path);
    } else {
      setSelectedFile(null);
    }
  }, [selectedNode]);

  useEffect(() => {
    if (!selectedFile) return;

    const timeout = setTimeout(async () => {
      const wc = await getWebContainer();
      await wc.fs.writeFile(selectedFile, fileContent);
    }, 300);

    return () => clearTimeout(timeout);
  }, [fileContent, selectedFile]);

  return (
    <div className="flex h-full bg-code overflow-hidden">
      <div className="w-50 border-r border-border overflow-hidden p-4">
        <FileTree
          data={treeData}
          selectedPath={selectedNode?.path ?? null}
          onNodeSelect={(node) => {
            setSelectedNode(node);
            if (node.type === "file") {
              setSelectedFile(node.path);
            }
          }}
        />
      </div>

      <div className="flex-1 flex flex-col overflow-hidden">
        {selectedFile && (
          <div className="h-9 shrink-0 flex items-end bg-sidebar border-b border-border px-0">
            <div className="flex items-center gap-2 px-4 py-2 h-full bg-code border-t border-r border-border text-xs min-w-[120px] select-none text-foreground">
              <FileIcon filename={selectedFile} />
              <span className="truncate">{selectedFile.split("/").pop()}</span>
            </div>
          </div>
        )}
        <div className="flex-1 relative bg-code">
          <Editor
            height="100%"
            path={selectedFile ?? undefined}
            value={fileContent}
            language={getLanguageFromPath(selectedFile)}
            theme="spark-dark"
            beforeMount={defineTheme}
            onChange={(value) => setFileContent(value ?? "")}
            options={{
              fontSize: 14,
              fontFamily: "JetBrains Mono, Fira Code, monospace",
              minimap: { enabled: false },
              scrollBeyondLastLine: false,
              padding: { top: 16 },
              renderLineHighlight: "none",
              overviewRulerBorder: false,
              scrollbar: {
                verticalScrollbarSize: 10,
                horizontalScrollbarSize: 10,
              },
            }}
          />
        </div>
      </div>

      {showDeleteModal && selectedNode && (
        <div
          className="fixed inset-0 bg-black/60 flex items-center justify-center z-50 animate-in fade-in duration-150"
          onClick={() => setshowDeleteModal(false)}
        >
          <div
            className="bg-card border border-border rounded-lg shadow-2xl w-80 p-5 flex flex-col gap-4 animate-in zoom-in-95 duration-200"
            onClick={(e) => e.stopPropagation()}
          >
            <div className="flex items-center gap-3">
              <div className="p-2 bg-destructive/20 rounded-full">
                <AlertTriangle className="w-5 h-5 text-destructive" />
              </div>
              <div>
                <div className="text-sm font-semibold text-foreground">
                  Delete {selectedNode.type === "file" ? "File" : "Folder"}
                </div>
                <div className="text-xs text-muted-foreground">
                  This action cannot be undone
                </div>
              </div>
            </div>

            <div className="bg-secondary/50 border border-border rounded-md px-3 py-2 text-sm text-foreground truncate">
              {selectedNode.name}
            </div>

            <div className="flex gap-2 justify-end">
              <button
                onClick={() => setshowDeleteModal(false)}
                className="px-4 py-2 text-xs font-medium text-muted-foreground hover:text-foreground rounded-md hover:bg-accent transition-colors"
              >
                Cancel
              </button>
              <button
                className="px-4 py-2 text-xs font-medium bg-destructive text-destructive-foreground rounded-md hover:bg-destructive/90 transition-colors"
                onClick={() => {
                  deleteNode();
                  setshowDeleteModal(false);
                }}
              >
                Delete
              </button>
            </div>
          </div>
        </div>
      )}
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

function FileIcon({ filename }: { filename: string }) {
  const Icon = getIconForFile(filename);
  return <Icon className="w-4 h-4 text-muted-foreground" />;
}

function getIconForFile(filename: string) {
  if (filename.endsWith(".ts") || filename.endsWith(".tsx")) return FileCode;
  if (filename.endsWith(".js") || filename.endsWith(".jsx")) return FileCode;
  if (filename.endsWith(".json")) return FileJson;
  if (filename.endsWith(".css")) return FileCode;
  if (filename.endsWith(".html")) return FileCode;
  return FileText;
}
