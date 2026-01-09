import { atom } from "jotai";
import type { FileNode } from "../types";
import { getWebContainer } from "./webContainerManager";
import { buildTree } from "../components/ui/FileTree";

export const selectedNodeAtom = atom<FileNode | null>(null)
export const treeAtom = atom<FileNode[]>([])

export const refreshTreeAtom = atom(
    null,
    async (_get, set) => {
        const wc = await getWebContainer()
        const tree = await buildTree(wc.fs)
        set(treeAtom, tree)
    }
)

export const targetDirectoryAtom = atom((get) => {
    const node = get(selectedNodeAtom)

    if (!node) return "/"
    if (node.type === "directory") return node.path

    return node.path.substring(0, node.path.lastIndexOf("/")) || "/"
})

export const createFileAtom = atom(
    null,
    async (get, set, name: string) => {
        const wc = await getWebContainer()
        const dir = get(targetDirectoryAtom)

        const path = dir === "/" ? `${name}` : `${dir}/${name}`
        await wc.fs.writeFile(path, "")

        const tree = await buildTree(wc.fs)
        set(treeAtom, tree)

        set(selectedNodeAtom, {
            id: path,
            name,
            type: "file",
            path
        })
    }
)

export const createDirectoryAtom = atom(
    null,
    async (get, set, name: string) => {
        const wc = await getWebContainer()
        const dir = get(targetDirectoryAtom)

        const path = dir === "/" ? `${name}` : `${dir}/${name}`
        await wc.fs.mkdir(path)

        const tree = await buildTree(wc.fs)
        set(treeAtom, tree)

        set(selectedNodeAtom, {
            id: path,
            name,
            type: "directory",
            path
        })
    }
)
 
export const deleteNodeAtom = atom(
    null,
    async (get, set)=>{
        const wc = await getWebContainer()
        const node = get(selectedNodeAtom)

        if(!node) return
        if(node.path==="/") return

        if(node.type === "file"){
            await wc.fs.rm(node.path)
        }else{
            await wc.fs.rm(node.path, {recursive: true})
        }

        const tree = await buildTree(wc.fs)
        set(treeAtom, tree)

        set(selectedNodeAtom, null)
    }
)