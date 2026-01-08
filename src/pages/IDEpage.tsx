import { useEffect, useRef, useState } from "react"
import { startWorkspace } from "../libs/webContainerRuntime";
import { PreviewFrame } from "../components/PreviewFrame";
import { Terminal } from "../components/Terminal";
import type { TerminalHandle } from "../components/Terminal";
import { CodeEditor } from "../components/CodeEditor";


export const IDEpage = () => {
  const iframeRef = useRef<HTMLIFrameElement | null>(null);
  const terminalRef = useRef<TerminalHandle | null>(null);
  const [terminalReady, setTerminalReady] = useState(false);

  useEffect(() => {
    if (!terminalReady) return;
    if (!terminalRef.current?.term) return;
    if (!iframeRef.current) return;

    startWorkspace(iframeRef.current, terminalRef.current.term).catch(console.error);
  }, [terminalReady]);

  return (
    <div className="grid grid-cols-5 h-screen overflow-hidden">
      {/* LEFT PANEL */}
      <div className="col-span-3 flex flex-col h-full overflow-hidden">
        {/* EDITOR */}
        <div className="flex-1 overflow-hidden">
          <CodeEditor />
        </div>

        {/* TERMINAL (STICKY BOTTOM) */}
        <div className="h-64 shrink-0">
          <Terminal
            ref={terminalRef}
            onReady={() => setTerminalReady(true)}
          />
        </div>
      </div>

      {/* RIGHT PANEL */}
      <div className="col-span-2 h-full border-l border-border overflow-hidden">
        <PreviewFrame ref={iframeRef} />
      </div>
    </div>
  );
};

