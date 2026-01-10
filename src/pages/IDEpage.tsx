import { useEffect, useRef, useState } from "react";
import { startWorkspace } from "../libs/webContainerRuntime";
import { PreviewFrame } from "../components/PreviewFrame";
import { Terminal } from "../components/Terminal";
import type { TerminalHandle } from "../components/Terminal";
import { CodeEditor } from "../components/CodeEditor";
import { Sidebar } from "../components/Sidebar";
import { IdeHeader } from "../components/IdeHeader";
import { IdeFooter } from "../components/IdeFooter";
import { useSearchParams } from "react-router-dom";

export const IDEpage = () => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const terminalRef = useRef<TerminalHandle | null>(null);
  const [terminalReady, setTerminalReady] = useState(false);
  const [searchParams] = useSearchParams();
  const framework = searchParams.get("framework") || "React";

  useEffect(() => {
    if (!terminalReady) return;
    if (!terminalRef.current?.term) return;
    if (!iframeRef.current) return;
    if (!framework) return;

    startWorkspace(
      iframeRef.current,
      terminalRef.current.term,
      framework
    ).catch(console.error);
  }, [terminalReady]);

  return (
    <div className="flex flex-col h-screen overflow-hidden bg-background">
      <IdeHeader />

      <div className="flex-1 overflow-hidden relative">
        <div className="grid grid-cols-5 h-full">
          {/* LEFT PANEL */}
          <div className="col-span-3 flex h-full overflow-hidden border-r border-border">
            <Sidebar />

            <div className="flex-1 flex flex-col h-full overflow-hidden">
              {/* EDITOR */}
              <div className="flex-1 overflow-hidden p-1">
                <CodeEditor />
              </div>

              {/* TERMINAL (STICKY BOTTOM) */}
              <div className="h-50 shrink-0">
                <Terminal
                  ref={terminalRef}
                  onReady={() => {
                    setTerminalReady(true);
                  }}
                />
              </div>
            </div>
          </div>

          {/* RIGHT PANEL */}
          <div className="col-span-2 h-full overflow-hidden bg-background border-l border-zinc-900">
            <PreviewFrame ref={iframeRef} />
          </div>
        </div>
      </div>

      <IdeFooter />
    </div>
  );
};
