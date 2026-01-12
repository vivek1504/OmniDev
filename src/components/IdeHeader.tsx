import { getWebContainer } from "@/lib/webContainerManager";
import { Play, Share2, Download, Upload, Loader2 } from "lucide-react";
import { useEffect, useState } from "react";
import JSZip from "jszip";
import { saveAs } from "file-saver";
import { useAtom } from "jotai";
import { isRunningAtom } from "@/lib/atoms";
import { runDevServer } from "@/lib/webContainerRuntime";

export const IdeHeader = () => {
  const [webContainer, setWebContainer] = useState<any>(null);
  const [isDownloading, setIsDownloading] = useState(false);
  const [isRunning, setIsRunning] = useAtom(isRunningAtom);

  useEffect(() => {
    getWebContainer().then(setWebContainer);
  }, []);

  const handleDownload = async () => {
    if (!webContainer || isDownloading) return;
    setIsDownloading(true);
    try {
      await downloadProject(webContainer);
    } finally {
      setIsDownloading(false);
    }
  };

  const handleRun = async () => {
    if (!webContainer || isRunning) return;
    try {
      await runDevServer();
    } catch (e) {
      console.log(e);
      setIsRunning(false);
    }
  };

  return (
    <div className="h-12 border-b border-border bg-sidebar flex items-center justify-between px-4 shrink-0">
      <button
        onClick={() => (window.location.href = "/")}
        className="flex items-center gap-2 cursor-pointer"
      >
        <img src="/logo.png" alt="Forge" className="h-6 rounded-md" />
      </button>
      <div className="flex items-center gap-2">
        <button
          onClick={handleDownload}
          disabled={isDownloading}
          className={`flex items-center font-normal gap-1.5 px-3 py-1.5 text-xs rounded-md transition-all border cursor-pointer ${
            isDownloading
              ? "bg-blue-500/10 text-blue-400 border-blue-500/30"
              : "hover:bg-blue-500/10 hover:text-blue-400 text-blue-500 border-blue-500/20"
          }`}
        >
          {isDownloading ? (
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
          ) : (
            <Download className="w-3.5 h-3.5" />
          )}
          <span>{isDownloading ? "Downloading..." : "Download"}</span>
        </button>

        <button className="flex items-center font-medium gap-1.5 px-3 py-1.5 hover:bg-violet-500/10 hover:text-violet-400 text-violet-500 text-xs rounded-md transition-colors border border-violet-500/20 cursor-pointer">
          <Upload className="w-3.5 h-3.5" />
          <span>Publish</span>
        </button>
      </div>

      <div className="flex items-center gap-3">
        <button
          onClick={handleRun}
          disabled={isRunning}
          className={`flex items-center gap-1.5 px-3 py-1.5 text-xs font-medium rounded-md transition-all border cursor-pointer ${
            isRunning
              ? "bg-green-500/10 text-green-400 border-green-500/30"
              : "hover:bg-green-500/10 hover:text-green-400 text-green-500 border-green-500/20"
          }`}
        >
          {isRunning ? (
            <Loader2 className="w-3.5 h-3.5 animate-spin" />
          ) : (
            <Play className="w-3.5 h-3.5 fill-current" />
          )}
          <span>{isRunning ? "Running..." : "Run"}</span>
        </button>
        <button className="p-2 hover:bg-secondary rounded-md transition-colors text-muted-foreground hover:text-foreground">
          <Share2 className="w-4 h-4" />
        </button>
        <div className="text-xs text-muted-foreground px-2">v1.0.0</div>
      </div>
    </div>
  );
};

async function readAllFiles(
  webContainer: any,
  base = "/"
): Promise<{ path: string; content: string }[]> {
  const result: { path: string; content: string }[] = [];

  async function walk(dir: string) {
    const entries = await webContainer.fs.readdir(dir, {
      withFileTypes: true,
    });

    for (const entry of entries) {
      const fullPath = dir === "/" ? `/${entry.name}` : `${dir}/${entry.name}`;

      if (entry.isFile()) {
        const content = await webContainer.fs.readFile(fullPath, "utf-8");
        result.push({
          path: fullPath.replace(/^\//, ""),
          content,
        });
      } else if (entry.isDirectory()) {
        if (entry.name === "node_modules") continue;

        await walk(fullPath);
      }
    }
  }

  await walk(base);
  return result;
}

async function downloadProject(webContainer: any) {
  if (!webContainer) return;

  const zip = new JSZip();
  const files = await readAllFiles(webContainer);

  for (const file of files) {
    zip.file(file.path, file.content);
  }

  const blob = await zip.generateAsync({ type: "blob" });
  saveAs(blob, "project.zip");
}
