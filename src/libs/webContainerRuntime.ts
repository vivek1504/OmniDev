import type { Terminal } from "xterm";
import { projectFiles } from "./projectFiles";
import { getWebContainer } from "./webContainerManager";

let workspaceStarting = false;
let shellProcess: any = null;
export async function startWorkspace(
  iframe: HTMLIFrameElement,
  terminal: Terminal
) {
  if (workspaceStarting) return;
  workspaceStarting = true;

  try {
    const webcontainer = await getWebContainer();

    await webcontainer.mount(projectFiles);

    terminal.writeln("\r\nInstalling dependencies...\r\n");

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

    terminal.write("\r\n Dependencies installed\r\n");

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
  }
}
