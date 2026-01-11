import { WebContainer } from "@webcontainer/api";

let webcontainerInstance: WebContainer | null = null;
let bootPromise: Promise<WebContainer> | null = null;

export async function getWebContainer() {
    if (webcontainerInstance) return webcontainerInstance

    if (!bootPromise) {
        bootPromise = WebContainer.boot().then((wc) => {
            webcontainerInstance = wc;
            return wc
        })
    }
    return bootPromise;
}
