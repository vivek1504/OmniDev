import type { Terminal } from "xterm";
import {
  reactProjectFiles,
  nodeProjectFiles,
  svelteProjectFiles,
  vueProjectFiles,
} from "./projectFiles";
import { getWebContainer } from "./webContainerManager";

let workspaceStarting = false;
let shellProcess: any = null;
export async function startWorkspace(
  iframe: HTMLIFrameElement,
  terminal: Terminal,
  framework: string
) {
  if (workspaceStarting) return;
  workspaceStarting = true;

  try {
    if (!framework) return;

    const webcontainer = await getWebContainer();

    shellProcess?.kill();
    shellProcess = null;

    terminal.clear();

    let projectFiles = null;
    if (framework === "React") projectFiles = reactProjectFiles;
    if (framework === "Node.js") projectFiles = nodeProjectFiles;
    if (framework === "Vue") projectFiles = vueProjectFiles;
    if (framework === "Svelte") projectFiles = svelteProjectFiles;

    if (!projectFiles) return;

    await webcontainer.mount(projectFiles);
    terminal.writeln("\x1b[34m~/my-project >\x1b[0m npm install");

    const installProcess = await webcontainer.spawn("npm", ["install"]);
    installProcess.output.pipeTo(
      new WritableStream({
        write(data) {
          terminal.write(data);
        },
      })
    );

    const exitCode = await installProcess.exit;

    if (exitCode !== 0) {
      throw new Error("npm install failed");
    }

    webcontainer.on("server-ready", (_, url) => {
      iframe.src = url;
    });

    shellProcess = await webcontainer.spawn("jsh", {
      terminal: {
        cols: terminal.cols,
        rows: terminal.rows,
      },
    });

    const writer = shellProcess.input.getWriter();

    shellProcess.output.pipeTo(
      new WritableStream({
        write(data) {
          terminal.write(data);
        },
      })
    );

    terminal.onData((data) => {
      writer.write(data);

      if (data === "\u0003") {
        iframe.src = "about:blank";
      }
    });

    terminal.onResize(({ cols, rows }) => {
      shellProcess.resize({ cols, rows });
    });

    workspaceStarting = false;

    writer.write("npm run dev\r");
  } catch (e) {
    terminal.writeln("\r\n❌ Error starting workspace\r\n");
    console.error("error starting workspace", e);
  } finally {
    workspaceStarting = false;
  }
}
