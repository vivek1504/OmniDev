import type { FileNode } from "../../types";
import { type FileSystemAPI} from "@webcontainer/api"
import {Tree, type NodeRendererProps} from "react-arborist"
import {
  Folder,
  FolderOpen,
  FileCode,
  FileJson,
  FileText
} from "lucide-react";


type Props= {
    data:FileNode[]
    onFileSelect: (path:string)=> void
    selectedFile : any
}

export async function buildTree(fs:FileSystemAPI, dir: string="/"): Promise<FileNode[]>{
    const entries = await fs.readdir(dir,{withFileTypes:true})

    const nodes:FileNode[] = []

    for(const entry of entries){
        const fullPath = dir==="/" ? `/${entry.name}` :`${dir}/${entry.name}`
        if(entry.isDirectory()){
            nodes.push({
                id:fullPath,
                name:entry.name,
                type:"directory",
                path:fullPath,
                children: await buildTree(fs, fullPath)
            })
        }
        else{
            nodes.push({
                id:fullPath,
                name:entry.name,
                type:"file",
                path:fullPath
            })
        }
    }
    return nodes
}


export function FileTree({data, onFileSelect, selectedFile}:Props){
    return (
        <Tree
            data={data}
            openByDefault={false}
            width={260}
            height={600}
            indent={15}
            rowHeight={28}
            onSelect={(nodes)=>{
                const node = nodes[0];
                if(node?.data.type === "file"){
                    onFileSelect(node.data.path)
                }
            }}>
                {Node}
        </Tree>
        
    )
}

function Node({ node, style }: NodeRendererProps<FileNode>) {
    //@ts-ignore
  const isSelected = node.data.path === node.tree.props.selectedFile;
    const Icon = getIcon(node.data, node.isOpen)
  return (
    <div
      style={style}
      className={`
        flex items-center gap-2 px-2 cursor-pointer
        ${isSelected ? "bg-blue-500/15 text-blue-400" : "hover:bg-gray-800"}
      `}
      onClick={() => {
        if (node.data.type === "directory") {
          node.toggle();
        }
      }}
    >
      <Icon className="w-5 h-5 text-muted-foreground shrink-0" />
      <span className="truncate">{node.data.name}</span>
    </div>
  );
}

function getIcon(node: FileNode, isOpen: boolean) {
  if (node.type === "directory") {
    return isOpen ? FolderOpen : Folder;
  }

  if (node.name.endsWith(".ts") || node.name.endsWith(".tsx")) return FileCode;
  if (node.name.endsWith(".js") || node.name.endsWith(".jsx")) return FileCode;
  if (node.name.endsWith(".json")) return FileJson;
  if (node.name.endsWith(".css")) return FileText;
  if (node.name.endsWith(".html")) return FileCode;

  return FileText;
}
