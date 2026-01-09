import { useState } from "react";
import { Files, FilePlus, FolderPlus, FileCode, Folder } from "lucide-react";
import { useAtom } from "jotai";
import { createDirectoryAtom, createFileAtom } from "../libs/atomst";

type CreationMode = "file" | "folder" | null;

export const Sidebar = () => {
    const [creationMode, setCreationMode] = useState<CreationMode>(null);
    const [name, setName] = useState("")
    const [, createFile] = useAtom(createFileAtom)
    const [, createDirectory] = useAtom(createDirectoryAtom)

    return (
        <div className="w-12 shrink-0 flex flex-col items-center py-4 gap-4 bg-sidebar border-r border-border h-full relative">
            <div className="p-2 rounded-md bg-accent/50 text-accent-foreground cursor-pointer hover:bg-accent transition-colors relative group">
                <Files className="w-5 h-5" />
                <span className="absolute left-10 top-1/2 -translate-y-1/2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded shadow-md opacity-0 group-hover:opacity-100 whitespace-nowrap z-50 pointer-events-none transition-opacity">
                    Explorer
                </span>
            </div>

            <div className="w-8 h-px bg-border" />

            {/* New File Button */}
            <div className="relative">
                <div
                    className={`p-2 rounded-md cursor-pointer transition-colors relative group ${creationMode === "file" ? "bg-accent text-accent-foreground" : "hover:bg-accent hover:text-accent-foreground text-muted-foreground"}`}
                    onClick={() => {
                        setCreationMode(creationMode === "file" ? null : "file")
                    }}
                >
                    <FilePlus className="w-5 h-5" />
                    <span className="absolute left-10 top-1/2 -translate-y-1/2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded shadow-md opacity-0 group-hover:opacity-100 whitespace-nowrap z-50 pointer-events-none transition-opacity">
                        New File
                    </span>
                </div>

                {/* Inline Popover for File */}
                {creationMode === "file" && (
                    <div className="absolute left-14 top-1/2 -translate-y-1/2 bg-secondary border border-border rounded-lg shadow-lg p-3 z-50 w-60 animate-in fade-in slide-in-from-left-2 duration-150">
                        <div className="text-xs text-muted-foreground mb-2 font-medium">New File</div>
                        <div className="flex items-center gap-2 bg-background rounded-md border border-border px-3 py-2 ring-1 ring-ring/20">
                            <FileCode className="w-4 h-4 text-muted-foreground shrink-0" />
                            <input
                                autoFocus
                                placeholder="filename.ts"
                                className="flex-1 bg-transparent text-sm outline-none text-foreground placeholder:text-muted-foreground/50"
                                onKeyDown={(e) => {
                                     if (e.key === "Escape") {
                                        setCreationMode(null)
                                        setName("")
                                    };
                                    if (e.key === "Enter"){ 
                                        createFile(name)
                                        setCreationMode(null)
                                        setName("")
                                    }
                                }}
                                onBlur={() => setCreationMode(null)}
                                onChange={(e)=>setName(e.target.value)}
                            />
                        </div>
                    </div>
                )}
            </div>

            {/* New Folder Button */}
            <div className="relative">
                <div
                    className={`p-2 rounded-md cursor-pointer transition-colors relative group ${creationMode === "folder" ? "bg-accent text-accent-foreground" : "hover:bg-accent hover:text-accent-foreground text-muted-foreground"}`}
                    onClick={() => setCreationMode(creationMode === "folder" ? null : "folder")}
                >
                    <FolderPlus className="w-5 h-5" />
                    <span className="absolute left-10 top-1/2 -translate-y-1/2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded shadow-md opacity-0 group-hover:opacity-100 whitespace-nowrap z-50 pointer-events-none transition-opacity">
                        New Folder
                    </span>
                </div>

                {/* Inline Popover for Folder */}
                {creationMode === "folder" && (
                    <div className="absolute left-14 top-1/2 -translate-y-1/2 bg-secondary border border-border rounded-lg shadow-lg p-3 z-50 w-60 animate-in fade-in slide-in-from-left-2 duration-150">
                        <div className="text-xs text-muted-foreground mb-2 font-medium">New Folder</div>
                        <div className="flex items-center gap-2 bg-background rounded-md border border-border px-3 py-2 ring-1 ring-ring/20">
                            <Folder className="w-4 h-4 text-muted-foreground shrink-0" />
                            <input
                                autoFocus
                                placeholder="folder-name"
                                className="flex-1 bg-transparent text-sm outline-none text-foreground placeholder:text-muted-foreground/50"
                                onKeyDown={(e) => {
                                    if (e.key === "Escape") {
                                        setCreationMode(null)
                                        setName("")
                                    };
                                    if (e.key === "Enter"){ 
                                        createDirectory(name)
                                        setCreationMode(null)
                                        setName("")
                                    }
                                }}
                                onBlur={() => setCreationMode(null)}
                                onChange={(e)=>setName(e.target.value)}
                            />
                        </div>
                    </div>
                )}
            </div>
        </div>
    );
};
