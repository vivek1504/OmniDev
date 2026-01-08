import type { Terminal as XTermTerminal } from "xterm";

export interface TerminalHandle {
  getInstance: () => XTermTerminal | null;
}