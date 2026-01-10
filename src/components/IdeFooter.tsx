import { GitBranch, Check, Bell, Settings } from "lucide-react";

export const IdeFooter = () => {
  return (
    <div className="h-7 border-t border-border bg-sidebar flex items-center justify-between px-3 shrink-0 text-[11px] text-muted-foreground select-none">
      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5 hover:text-foreground cursor-pointer transition-colors">
          <GitBranch className="w-3 h-3" />
          <span>main</span>
        </div>
        <div className="flex items-center gap-1.5 hover:text-foreground cursor-pointer transition-colors">
          <div className="w-2 h-2 rounded-full bg-green-600 animate-pulse"></div>
          <span>working</span>
        </div>
        <div className="hover:text-foreground cursor-pointer transition-colors">
          0 Warnings
        </div>
      </div>

      <div className="flex items-center gap-4">
        <div className="flex items-center gap-1.5 hover:text-foreground cursor-pointer transition-colors">
          <Check className="w-3 h-3" />
          <span>Prettier</span>
        </div>
        <div className="hover:text-foreground cursor-pointer transition-colors">
          TypeScript JSX
        </div>
        <div className="flex items-center gap-3 pl-2 border-l border-border/50">
          <Bell className="w-3 h-3 hover:text-foreground cursor-pointer transition-colors" />
          <Settings className="w-3 h-3 hover:text-foreground cursor-pointer transition-colors" />
        </div>
      </div>
    </div>
  );
};
