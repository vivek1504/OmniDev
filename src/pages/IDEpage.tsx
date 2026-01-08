import { useEffect, useRef, useState } from "react"
import { startWorkspace } from "../libs/webContainerRuntime";
import { PreviewFrame } from "../components/PreviewFrame";
import { Terminal } from "../components/Terminal";
import type { TerminalHandle } from "../components/Terminal";


export const IDEpage = ()=>{
    const iframeRef = useRef<HTMLIFrameElement | null>(null);
    const terminalRef = useRef<TerminalHandle | null>(null)
    const [terminalReady, setTerminalReady] = useState(false);

    useEffect(()=>{
        console.log("Terminal ready:",terminalReady)
        console.log("Terminal ref:",terminalRef.current)
        console.log("Iframe ref:",iframeRef.current)
        if(!terminalReady) return
        if(!terminalRef.current?.term) return
        if(!iframeRef.current) return
        startWorkspace(iframeRef.current, terminalRef.current?.term).catch((e)=>{
            console.log("Webcontainer error:",e)
        })
    },[terminalReady])

    return (
        <div>
            <div>
                <PreviewFrame ref={iframeRef}></PreviewFrame>
            </div>

            <div>
                <Terminal ref={terminalRef}
                onReady={()=> setTerminalReady(true)}></Terminal>
            </div>

        </div>
    )
}