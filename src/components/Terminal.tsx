import { forwardRef, useEffect, useImperativeHandle, useRef } from "react";
import { Terminal as Xterm } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import { getTerminal } from "../lib/terminalSingleton";
import "xterm/css/xterm.css";
export interface TerminalHandle {
  term: Xterm | null;
}

interface TerminalProps {
  onReady?: () => void;
}

export const Terminal = forwardRef<TerminalHandle, TerminalProps>(
  ({ onReady }, ref) => {
    const containerRef = useRef<HTMLDivElement | null>(null);
    const termRef = useRef<Xterm | null>(null);
    const fitAddonRef = useRef<FitAddon | null>(null);

    useImperativeHandle(ref, () => ({
      term: termRef.current,
    }));

    useEffect(() => {
      if (!containerRef.current) return;

      const { terminal, isOpened, markOpened } = getTerminal();

      if (!isOpened) {
        const fitAddon = new FitAddon();
        terminal.loadAddon(fitAddon);

        terminal.open(containerRef.current);
        fitAddon.fit();

        fitAddonRef.current = fitAddon;
        markOpened();
        onReady?.();
      } else {
        fitAddonRef.current?.fit();
      }

      termRef.current = terminal;

      const resize = () => fitAddonRef.current?.fit();
      window.addEventListener("resize", resize);

      return () => {
        window.removeEventListener("resize", resize);
      };
    }, [onReady]);

    return (
      <div
        className={`h-full flex flex-col bg-terminal border-t border-border transition-all duration-300`}
      >
        <div className="flex-1 min-h-0 overflow-hidden">
          <div ref={containerRef} className="h-full w-full" />
        </div>
      </div>
    );
  }
);
