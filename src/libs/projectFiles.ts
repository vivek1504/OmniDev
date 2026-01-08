import type { FileSystemTree } from "@webcontainer/api";

export const projectFiles: FileSystemTree = {
    src: {
        directory: {
            "App.css": {
                file: {
                    contents: `@import "tailwindcss";`    
                }
            },

            "index.css": {
                file:{
                    contents: `@import "tailwindcss";`
                }
            },

            "App.jsx": {
                file:{
                    contents:`
                    import './App.css'

                    // AppGeneratingLoader.tsx
                    import { useEffect, useState } from "react";

                    const messages = [
                    "Analyzing your prompt…",
                    "Designing application structure…",
                    "Generating components…",
                    "Wiring logic and state…",
                    "Finalizing code…",
                    ];

                    function App() {
                    const [step, setStep] = useState(0);

                    useEffect(() => {
                        const interval = setInterval(() => {
                        setStep((prev) => (prev + 1) % messages.length);
                        }, 1800);

                        return () => clearInterval(interval);
                    }, []);

                    return (
                        <div className="min-h-screen flex items-center justify-center bg-slate-950 text-slate-100">
                        <div className="w-full max-w-md rounded-xl bg-slate-900/80 border border-slate-800 p-8 shadow-2xl">
                            <div className="flex flex-col items-center text-center space-y-4">
                            <Spinner />

                            <h2 className="text-xl font-semibold tracking-tight">
                                Building your app
                            </h2>

                            <p className="text-sm text-slate-400">{messages[step]}</p>

                            <Dots />
                            </div>
                        </div>
                        </div>
                    );
                    }

                    function Spinner() {
                    return (
                        <div className="h-12 w-12 rounded-full border-4 border-slate-700 border-t-sky-400 animate-spin" />
                    );
                    }

                    function Dots() {
                    return (
                        <div className="flex space-x-1 text-slate-500">
                        <span className="animate-pulse">•</span>
                        <span className="animate-pulse delay-150">•</span>
                        <span className="animate-pulse delay-300">•</span>
                        </div>
                    );
                    }
                    export default App
                `
                }
            },

            "main.jsx": {
                file:{
                    contents:`
                    import { StrictMode } from 'react'
                    import { createRoot } from 'react-dom/client'
                    import './index.css'
                    import App from './App.jsx'

                    createRoot(document.getElementById('root')).render(
                    <StrictMode>
                        <App />
                    </StrictMode>,
                    )
                    `
                }
            },

        }
    },

    "index.html": {
        file: {
            contents:`
            <!doctype html>
            <html lang="en">
            <head>
                <meta charset="UTF-8" />
                <link rel="icon" type="image/svg+xml" href="/vite.svg" />
                <meta name="viewport" content="width=device-width, initial-scale=1.0" />
                <title>tsfr</title>
            </head>
            <body>
                <div id="root"></div>
                <script type="module" src="/src/main.jsx"></script>
            </body>
            </html>    `
        }
    },

    "package.json": {
        file:{
            contents:`
            {
            "name": "tsfr",
            "private": true,
            "version": "0.0.0",
            "type": "module",
            "scripts": {
                "dev": "vite",
                "build": "vite build",
                "lint": "eslint .",
                "preview": "vite preview"
            },
            "dependencies": {
                "@tailwindcss/vite": "^4.1.17",
                "react": "^19.2.0",
                "react-dom": "^19.2.0",
                "tailwindcss": "^4.1.17",
                "react-icons": "^5.5.0"
            },
            "devDependencies": {
                "@eslint/js": "^9.39.1",
                "@types/react": "^19.2.5",
                "@types/react-dom": "^19.2.3",
                "@vitejs/plugin-react": "^5.1.1",
                "eslint": "^9.39.1",
                "eslint-plugin-react-hooks": "^7.0.1",
                "eslint-plugin-react-refresh": "^0.4.24",
                "globals": "^16.5.0",
                "vite": "^7.2.4"
            }
            }`
        }
    },

    "vite.config.js": {
        file: {
            contents : `
            import { defineConfig } from 'vite'
            import react from '@vitejs/plugin-react'
            import tailwindcss from "@tailwindcss/vite"
            process.env.TAILWIND_DISABLE_OXIDE = '1'

            // https://vite.dev/config/
            export default defineConfig({
            plugins: [react(), tailwindcss()],
            })`
        }
    }

}     