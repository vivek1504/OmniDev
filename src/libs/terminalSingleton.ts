import { Terminal as XTerm } from "xterm";

let terminal: XTerm | null = null;
let isOpened = false;

export function getTerminal() {
  if (!terminal) {
    terminal = new XTerm({
      fontSize: 12,
      cursorBlink: true,
      convertEol: true,
      scrollback: 2000,
      theme: { background: "#0e0e0e" },
    });
  }

  return {
    terminal,
    isOpened,
    markOpened() {
      isOpened = true;
    },
  };
}
