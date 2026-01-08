import { forwardRef, useEffect, useImperativeHandle, useRef, useState } from "react";
import { Terminal as Xterm } from "xterm";
import { FitAddon } from "xterm-addon-fit";
import { getTerminal } from "../libs/terminalSingleton";
import {Terminal as TerminalIcon, X, Maximize2, Minimize2,} from "lucide-react";
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

    const [isExpanded, setIsExpanded] = useState(false);

    useImperativeHandle(ref, () => ({
      term: termRef.current,
    }));

    useEffect(() => {
      if (!containerRef.current) return;

      const {terminal, isOpened, markOpened}  = getTerminal();

      if (!isOpened) {
        const fitAddon = new FitAddon();
        terminal.loadAddon(fitAddon);

        terminal.open(containerRef.current);
        fitAddon.fit();

        terminal.writeln("$ WebContainer Terminal Ready");

        fitAddonRef.current = fitAddon;
        markOpened();
        onReady?.();
      } else {
        // ✅ already opened once, just refit
        fitAddonRef.current?.fit();
      }

      termRef.current = terminal;

      const resize = () => fitAddonRef.current?.fit();
      window.addEventListener("resize", resize);

      return () => {
        window.removeEventListener("resize", resize);
      };
    }, [onReady]);


    useEffect(() => {
      setTimeout(() => fitAddonRef.current?.fit(), 300);
    }, [isExpanded]);

    return (
      <div
        className={`flex flex-col bg-terminal border-t border-border transition-all duration-300 ${
          isExpanded ? "h-64" : "h-36"
        }`}
      >
        {/* Header */}
        <div className="h-8 flex items-center justify-between px-3 bg-secondary/20 border-b border-border">
          <div className="flex items-center gap-2">
            <TerminalIcon className="w-3.5 h-3.5 text-primary" />
            <span className="text-xs font-medium">Terminal</span>
          </div>
        </div>

        {/* Terminal body */}
        <div className="flex-1 overflow-hidden">
          <div ref={containerRef} className="h-full w-full" />
        </div>
      </div>
    );
  }
);  