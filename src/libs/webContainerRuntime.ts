import type { Terminal } from "xterm";
import { projectFiles } from "./projectFiles";
import { getWebContainer } from "./webContainerManager";

let workspaceStarting = false;
export async function startWorkspace(iframe : HTMLIFrameElement, terminal : Terminal){
    workspaceStarting = true

    try {
        const webcontainer =await getWebContainer();

        await webcontainer.mount(projectFiles)

        terminal.writeln('\r\nInstalling dependencies...\r\n')

        const installProcess = await webcontainer.spawn('npm',["install"])

         installProcess.output.pipeTo(
            new WritableStream({
                write(data) {
                terminal.write(data)
                },
            })
        )
                
        const exitcode = await installProcess.exit;
        if(exitcode !== 0){
            throw new Error('Unable to run npm install')
        }

        webcontainer.on('server-ready',(_, url)=>{
            iframe.src = url
        })

        workspaceStarting= false
        const devProcess =await webcontainer.spawn("npm",["run", "dev"])
        devProcess.output.pipeTo(new WritableStream({
            write(data){
                terminal.write(data)
            }
        }))

    }
    catch(e){
        terminal.writeln('\r\n❌ Error starting workspace\r\n')
        console.error("error starting workspace", e)
    }
}