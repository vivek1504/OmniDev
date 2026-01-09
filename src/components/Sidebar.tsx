import { useAtom } from "jotai";
import { Files, FilePlus, FolderPlus } from "lucide-react";
import { createFileAtom } from "../libs/atomst";

export const Sidebar = () => {
    const [, createFile]= useAtom(createFileAtom)


    return (
        <div className="w-12 shrink-0 flex flex-col items-center py-4 gap-4 bg-sidebar border-r border-border h-full">
            <div className="p-2 rounded-md bg-accent/50 text-accent-foreground cursor-pointer hover:bg-accent transition-colors relative group">
                <Files className="w-5 h-5" />
                <span className="absolute left-10 top-1/2 -translate-y-1/2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded shadow-md opacity-0 group-hover:opacity-100 whitespace-nowrap z-50 pointer-events-none transition-opacity">
                    Explorer
                </span>
            </div>

            <div className="w-8 h-px bg-border" />

            <div className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground text-muted-foreground cursor-pointer transition-colors relative group">
                <FilePlus className="w-5 h-5" />
                <span className="absolute left-10 top-1/2 -translate-y-1/2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded shadow-md opacity-0 group-hover:opacity-100 whitespace-nowrap z-50 pointer-events-none transition-opacity">
                    New File
                </span>
            </div>

            <div className="p-2 rounded-md hover:bg-accent hover:text-accent-foreground text-muted-foreground cursor-pointer transition-colors relative group">
                <FolderPlus className="w-5 h-5" />
                <span className="absolute left-10 top-1/2 -translate-y-1/2 px-2 py-1 bg-popover text-popover-foreground text-xs rounded shadow-md opacity-0 group-hover:opacity-100 whitespace-nowrap z-50 pointer-events-none transition-opacity">
                    New Folder
                </span>
            </div>
        </div>
    );
};
