import { Terminal as XTerm } from "xterm";

let terminal: XTerm | null = null;
let isOpened = false;

export function getTerminal() {
  if (!terminal) {
    terminal = new XTerm({
      fontSize: 14,
      cursorBlink: true,
      convertEol: true,
      scrollback: 5000,
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
