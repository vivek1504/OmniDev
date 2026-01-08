import type { Terminal as XTermTerminal } from "xterm";

export interface TerminalHandle {
  getInstance: () => XTermTerminal | null;
}

export type FileNode = {
    id: string
    name: string
    type: "file" | "directory"
    children? : FileNode[]
    path:string,
}