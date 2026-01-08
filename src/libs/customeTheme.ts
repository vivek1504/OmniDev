export const defineTheme = (monaco: any) => {
monaco.editor.defineTheme("spark-dark", {
  base: "vs-dark",
  inherit: true,
  rules: [],
  colors: {
    "editor.background": "#101215",
    "editor.foreground": "#e6e6e6",
    "editor.lineHighlightBackground": "#16181d",
    "editor.selectionBackground": "#2a2e35",
    "editorCursor.foreground": "#d1d5db",
    "editorWhitespace.foreground": "#4b5563",
    "editorGutter.background": "#101215"
  }
});
};
