import { Code2, Play, Share2, Download, Upload } from "lucide-react";
import { useNavigate } from "react-router-dom";

export const IdeHeader = () => {
  const navigate = useNavigate()
  return (
    <div className="h-12 border-b border-border bg-sidebar flex items-center justify-between px-4 shrink-0">
      <button onClick={() => navigate("/")} className="flex items-center gap-2 cursor-pointer">
        <div className="bg-primary/10 p-1 rounded-md">
          <Code2 className="w-5 h-5 text-primary" />
        </div>
        <span className="font-semibold text-sm tracking-tight text-foreground">
          OmniIDE
        </span>
      </button>

      <div className="flex items-center gap-2">
        <button className="flex items-center font-normal gap-1.5 px-3 py-1.5 hover:bg-blue-500/10 hover:text-blue-400 text-blue-500 text-xs rounded-md transition-colors border border-blue-500/20 cursor-pointer">
          <Download className="w-3.5 h-3.5" />
          <span>Download</span>
        </button>
        <button className="flex items-center font-medium gap-1.5 px-3 py-1.5 hover:bg-violet-500/10 hover:text-violet-400 text-violet-500 text-xs rounded-md transition-colors border border-violet-500/20 cursor-pointer">
          <Upload className="w-3.5 h-3.5" />
          <span>Publish</span>
        </button>
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
