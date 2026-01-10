import { Code2, Play, Share2 } from "lucide-react";

export const IdeHeader = () => {
  return (
    <div className="h-12 border-b border-border bg-sidebar flex items-center justify-between px-4 shrink-0">
      <div className="flex items-center gap-2">
        <div className="bg-primary/10 p-1 rounded-md">
          <Code2 className="w-5 h-5 text-primary" />
        </div>
        <span className="font-semibold text-sm tracking-tight text-foreground">
          OmniIDE
        </span>
      </div>

      <div className="flex bg-secondary/50 rounded-lg p-1 border border-border/50">
        <div className="px-3 py-1 text-xs font-medium text-foreground bg-background rounded-md shadow-sm">
          Code
        </div>
        <div className="px-3 py-1 text-xs font-medium text-muted-foreground hover:text-foreground cursor-pointer transition-colors">
          Design
        </div>
      </div>

      <div className="flex items-center gap-3">
        <button className="flex items-center gap-1.5 px-3 py-1.5 hover:bg-green-500/10 hover:text-green-400 text-green-500 text-xs font-medium rounded-md transition-colors border border-green-500/20">
          <Play className="w-3.5 h-3.5 fill-current" />
          <span>Run</span>
        </button>
        <button className="p-2 hover:bg-secondary rounded-md transition-colors text-muted-foreground hover:text-foreground">
          <Share2 className="w-4 h-4" />
        </button>
        <div className="text-xs text-muted-foreground px-2">v1.2.0</div>
      </div>
    </div>
  );
};
