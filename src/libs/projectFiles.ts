import type { FileSystemTree } from "@webcontainer/api";

export const reactProjectFiles: FileSystemTree = {
  src: {
    directory: {
      assets: {
        directory: {
          "react.svg": {
            file: {
              contents: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><g fill="#61DAFB"><circle cx="64" cy="64" r="11.4"/><path d="M107.3 45.2c-2.2-.8-4.5-1.6-6.9-2.3.6-2.4 1.1-4.8 1.5-7.1 2.1-13.2-.2-22.5-6.6-26.1-1.9-1.1-4-1.6-6.4-1.6-7 0-15.9 5.2-24.9 13.9-9-8.7-17.9-13.9-24.9-13.9-2.4 0-4.5.5-6.4 1.6-6.4 3.7-8.7 13-6.6 26.1.4 2.3.9 4.7 1.5 7.1-2.4.7-4.7 1.4-6.9 2.3C8.2 50 1.4 56.6 1.4 64s6.9 14 19.3 18.8c2.2.8 4.5 1.6 6.9 2.3-.6 2.4-1.1 4.8-1.5 7.1-2.1 13.2.2 22.5 6.6 26.1 1.9 1.1 4 1.6 6.4 1.6 7.1 0 16-5.2 24.9-13.9 9 8.7 17.9 13.9 24.9 13.9 2.4 0 4.5-.5 6.4-1.6 6.4-3.7 8.7-13 6.6-26.1-.4-2.3-.9-4.7-1.5-7.1 2.4-.7 4.7-1.4 6.9-2.3 12.5-4.8 19.3-11.4 19.3-18.8s-6.8-14-19.3-18.8zM92.5 14.7c4.1 2.4 5.5 9.8 3.8 20.3-.3 2.1-.8 4.3-1.4 6.6-5.2-1.2-10.7-2-16.5-2.5-3.4-4.8-6.9-9.1-10.4-13 7.4-7.3 14.9-12.3 21-12.3 1.3 0 2.5.3 3.5.9zM81.3 74c-1.8 3.2-3.9 6.4-6.1 9.6-3.7.3-7.4.4-11.2.4-3.9 0-7.6-.1-11.2-.4-2.2-3.2-4.2-6.4-6-9.6-1.9-3.3-3.7-6.7-5.3-10 1.6-3.3 3.4-6.7 5.3-10 1.8-3.2 3.9-6.4 6.1-9.6 3.7-.3 7.4-.4 11.2-.4 3.9 0 7.6.1 11.2.4 2.2 3.2 4.2 6.4 6 9.6 1.9 3.3 3.7 6.7 5.3 10-1.7 3.3-3.4 6.6-5.3 10zm8.3-3.3c1.5 3.5 2.7 6.9 3.8 10.3-3.4.8-7 1.4-10.8 1.9 1.2-1.9 2.5-3.9 3.6-6 1.2-2.1 2.3-4.2 3.4-6.2zM64 97.8c-2.4-2.6-4.7-5.4-6.9-8.3 2.3.1 4.6.2 6.9.2 2.3 0 4.6-.1 6.9-.2-2.2 2.9-4.5 5.7-6.9 8.3zm-18.6-15c-3.8-.5-7.4-1.1-10.8-1.9 1.1-3.3 2.3-6.8 3.8-10.3 1.1 2 2.2 4.1 3.4 6.1 1.2 2.2 2.4 4.1 3.6 6.1zm-7-25.5c-1.5-3.5-2.7-6.9-3.8-10.3 3.4-.8 7-1.4 10.8-1.9-1.2 1.9-2.5 3.9-3.6 6-1.2 2.1-2.3 4.2-3.4 6.2zM64 30.2c2.4 2.6 4.7 5.4 6.9 8.3-2.3-.1-4.6-.2-6.9-.2-2.3 0-4.6.1-6.9.2 2.2-2.9 4.5-5.7 6.9-8.3zm22.2 21l-3.6-6c3.8.5 7.4 1.1 10.8 1.9-1.1 3.3-2.3 6.8-3.8 10.3-1.1-2.1-2.2-4.2-3.4-6.2zM31.7 35c-1.7-10.5-.3-17.9 3.8-20.3 1-.6 2.2-.9 3.5-.9 6 0 13.5 4.9 21 12.3-3.5 3.8-7 8.2-10.4 13-5.8.5-11.3 1.4-16.5 2.5-.6-2.3-1-4.5-1.4-6.6zM7 64c0-4.7 5.7-9.7 15.7-13.4 2-.8 4.2-1.5 6.4-2.1 1.6 5 3.6 10.3 6 15.6-2.4 5.3-4.5 10.5-6 15.5C15.3 75.6 7 69.6 7 64zm28.5 49.3c-4.1-2.4-5.5-9.8-3.8-20.3.3-2.1.8-4.3 1.4-6.6 5.2 1.2 10.7 2 16.5 2.5 3.4 4.8 6.9 9.1 10.4 13-7.4 7.3-14.9 12.3-21 12.3-1.3 0-2.5-.3-3.5-.9zM96.3 93c1.7 10.5.3 17.9-3.8 20.3-1 .6-2.2.9-3.5.9-6 0-13.5-4.9-21-12.3 3.5-3.8 7-8.2 10.4-13 5.8-.5 11.3-1.4 16.5-2.5.6 2.3 1 4.5 1.4 6.6zm9-15.6c-2 .8-4.2 1.5-6.4 2.1-1.6-5-3.6-10.3-6-15.6 2.4-5.3 4.5-10.5 6-15.5 13.8 4 22.1 10 22.1 15.6 0 4.7-5.8 9.7-15.7 13.4z"/></g></svg>`,
            },
          },
        },
      },

      "App.css": {
        file: {
          contents: `#root {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.react:hover {
  filter: drop-shadow(0 0 2em #61dafbaa);
}

@keyframes logo-spin {
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
}

@media (prefers-reduced-motion: no-preference) {
  a:nth-of-type(2) .logo {
    animation: logo-spin infinite 20s linear;
  }
}

.card {
  padding: 2em;
}

.read-the-docs {
  color: #888;
}`,
        },
      },

      "index.css": {
        file: {
          contents: `:root {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;
  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}`,
        },
      },

      "App.jsx": {
        file: {
          contents: `import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <div>
        <a href="https://vite.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <button onClick={() => setCount(count + 1)}>
        count is {count}
      </button>
    </>
  )
}

export default App`,
        },
      },

      "main.jsx": {
        file: {
          contents: `import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>
)`,
        },
      },
    },
  },
  public: {
    directory: {
      "vite.svg": {
        file: {
          contents: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><defs><linearGradient id="a" x1="6" x2="235" y1="33" y2="344" gradientTransform="translate(0 .937) scale(.3122)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#41d1ff"/><stop offset="1" stop-color="#bd34fe"/></linearGradient><linearGradient id="b" x1="194.651" x2="236.076" y1="8.818" y2="292.989" gradientTransform="translate(0 .937) scale(.3122)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffea83"/><stop offset=".083" stop-color="#ffdd35"/><stop offset="1" stop-color="#ffa800"/></linearGradient></defs><path fill="url(#a)" d="M124.766 19.52 67.324 122.238c-1.187 2.121-4.234 2.133-5.437.024L3.305 19.532c-1.313-2.302.652-5.087 3.261-4.622L64.07 25.187a3.09 3.09 0 0 0 1.11 0l56.3-10.261c2.598-.473 4.575 2.289 3.286 4.594Zm0 0"/><path fill="url(#b)" d="M91.46 1.43 48.954 9.758a1.56 1.56 0 0 0-1.258 1.437l-2.617 44.168a1.563 1.563 0 0 0 1.91 1.614l11.836-2.735a1.562 1.562 0 0 1 1.88 1.836l-3.517 17.219a1.562 1.562 0 0 0 1.985 1.805l7.308-2.223c1.133-.344 2.223.652 1.985 1.812l-5.59 27.047c-.348 1.692 1.902 2.614 2.84 1.164l.625-.968 34.64-69.13c.582-1.16-.421-2.48-1.69-2.234l-12.185 2.352a1.558 1.558 0 0 1-1.793-1.965l7.95-27.562A1.56 1.56 0 0 0 91.46 1.43Zm0 0"/></svg>`,
        },
      },
    },
  },

  "index.html": {
    file: {
      contents: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>test2</title>
  </head>
  <body>
    <div id="root"></div>
    <script type="module" src="/src/main.jsx"></script>
  </body>
</html>`,
    },
  },

  "package.json": {
    file: {
      contents: `{
  "name": "test2",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite"
  },
  "dependencies": {
    "react": "^19.2.0",
    "react-dom": "^19.2.0"
  },
  "devDependencies": {
    "@vitejs/plugin-react": "^5.1.1",
    "vite": "^7.2.4"
  }
}`,
    },
  },

  "vite.config.js": {
    file: {
      contents: `import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
})`,
    },
  },
};

export const nodeProjectFiles: FileSystemTree = {
  "package.json": {
    file: {
      contents: `{
  "name": "node-starter",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "node index.js"
  }
}`,
    },
  },
  "index.js": {
    file: {
      contents: `console.log("🚀 Node.js project running");

setInterval(() => {
  console.log("Still alive:", new Date().toLocaleTimeString());
}, 2000);
`,
    },
  },
};

export const vueProjectFiles: FileSystemTree = {
  src: {
    directory: {
      assets: {
        directory: {
          "vue.svg": {
            file: {
              contents: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#42b883" d="M78.8,10L64,35.4L49.2,10H0l64,110l64-110C128,10,78.8,10,78.8,10z"/><path fill="#35495e" d="M78.8,10L64,35.4L49.2,10H25.6L64,76l38.4-66H78.8z"/></svg>`,
            },
          },
        },
      },

      "App.vue": {
        file: {
          contents: `<script setup>
import { ref } from 'vue'
import viteLogo from '/vite.svg'
import vueLogo from './assets/vue.svg'

const count = ref(0)
</script>

<template>
  <div>
    <a href="https://vite.dev" target="_blank">
      <img :src="viteLogo" class="logo" alt="Vite logo" />
    </a>
    <a href="https://vuejs.org/" target="_blank">
      <img :src="vueLogo" class="logo vue" alt="Vue logo" />
    </a>
  </div>
  <h1>Vite + Vue</h1>
  <div class="card">
    <button type="button" @click="count++">count is {{ count }}</button>
    <p>
      Edit
      <code>src/App.vue</code> to test HMR
    </p>
  </div>
  <p class="read-the-docs">
    Click on the Vite and Vue logos to learn more
  </p>
</template>

<style scoped>
.logo {
  height: 6em;
  padding: 1.5em;
  will-change: filter;
  transition: filter 300ms;
}
.logo:hover {
  filter: drop-shadow(0 0 2em #646cffaa);
}
.logo.vue:hover {
  filter: drop-shadow(0 0 2em #42b883aa);
}
</style>
`,
        },
      },

      "main.js": {
        file: {
          contents: `import { createApp } from 'vue'
import './style.css'
import App from './App.vue'

createApp(App).mount('#app')
`,
        },
      },

      "style.css": {
        file: {
          contents: `:root {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

.card {
  padding: 2em;
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

.read-the-docs {
  color: #888;
}
`,
        },
      },
    },
  },
  public: {
    directory: {
      "vite.svg": {
        file: {
          contents: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><defs><linearGradient id="a" x1="6" x2="235" y1="33" y2="344" gradientTransform="translate(0 .937) scale(.3122)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#41d1ff"/><stop offset="1" stop-color="#bd34fe"/></linearGradient><linearGradient id="b" x1="194.651" x2="236.076" y1="8.818" y2="292.989" gradientTransform="translate(0 .937) scale(.3122)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffea83"/><stop offset=".083" stop-color="#ffdd35"/><stop offset="1" stop-color="#ffa800"/></linearGradient></defs><path fill="url(#a)" d="M124.766 19.52 67.324 122.238c-1.187 2.121-4.234 2.133-5.437.024L3.305 19.532c-1.313-2.302.652-5.087 3.261-4.622L64.07 25.187a3.09 3.09 0 0 0 1.11 0l56.3-10.261c2.598-.473 4.575 2.289 3.286 4.594Zm0 0"/><path fill="url(#b)" d="M91.46 1.43 48.954 9.758a1.56 1.56 0 0 0-1.258 1.437l-2.617 44.168a1.563 1.563 0 0 0 1.91 1.614l11.836-2.735a1.562 1.562 0 0 1 1.88 1.836l-3.517 17.219a1.562 1.562 0 0 0 1.985 1.805l7.308-2.223c1.133-.344 2.223.652 1.985 1.812l-5.59 27.047c-.348 1.692 1.902 2.614 2.84 1.164l.625-.968 34.64-69.13c.582-1.16-.421-2.48-1.69-2.234l-12.185 2.352a1.558 1.558 0 0 1-1.793-1.965l7.95-27.562A1.56 1.56 0 0 0 91.46 1.43Zm0 0"/></svg>`,
        },
      },
    },
  },

  "index.html": {
    file: {
      contents: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + Vue</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>`,
    },
  },

  "package.json": {
    file: {
      contents: `{
  "name": "vue-vite-starter",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "dependencies": {
    "vue": "^3.4.0"
  },
  "devDependencies": {
    "vite": "^5.0.0",
    "@vitejs/plugin-vue": "^5.0.0"
  }
}`,
    },
  },

  "vite.config.js": {
    file: {
      contents: `import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

export default defineConfig({
  plugins: [vue()],
})`,
    },
  },
};

export const svelteProjectFiles: FileSystemTree = {
  src: {
    directory: {
      assets: {
        directory: {
          "svelte.svg": {
            file: {
              contents: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><path fill="#ff3e00" d="M110.43 16.936C98.553-.076 75.09-5.118 58.13 5.696l-29.792 19a34.198 34.198 0 0 0-15.48 22.897 35.912 35.912 0 0 0 3.542 23.103 34.106 34.106 0 0 0-5.15 12.86 36.428 36.428 0 0 0 6.201 27.503c11.877 17.012 35.34 22.054 52.3 11.24l29.792-19a34.198 34.198 0 0 0 15.48-22.897 35.912 35.912 0 0 0-3.541-23.104 34.106 34.106 0 0 0 5.15-12.859 36.428 36.428 0 0 0-6.202-27.503z"/><path fill="#fff" d="M55.219 112.662a27.63 27.63 0 0 1-29.684-10.444 23.297 23.297 0 0 1-3.975-17.62 21.498 21.498 0 0 1 .677-2.9l.558-1.852 1.63 1.116a38.49 38.49 0 0 0 11.633 5.818l1.105.332-.102 1.106a7.037 7.037 0 0 0 1.288 4.966 8.86 8.86 0 0 0 9.514 3.35 8.186 8.186 0 0 0 2.015-.835l29.792-18.999a7.302 7.302 0 0 0 3.295-4.878 7.478 7.478 0 0 0-1.276-5.655 8.86 8.86 0 0 0-9.514-3.35 8.186 8.186 0 0 0-2.015.835L59.5 69.858a25.536 25.536 0 0 1-6.284 2.603 27.63 27.63 0 0 1-29.684-10.445 23.297 23.297 0 0 1-3.975-17.62 22.773 22.773 0 0 1 10.281-15.213l29.792-18.999a25.536 25.536 0 0 1 6.284-2.603 27.63 27.63 0 0 1 29.684 10.444 23.297 23.297 0 0 1 3.975 17.62 21.498 21.498 0 0 1-.677 2.9l-.558 1.852-1.63-1.116a38.49 38.49 0 0 0-11.633-5.818l-1.105-.332.102-1.106a7.037 7.037 0 0 0-1.288-4.966 8.86 8.86 0 0 0-9.514-3.35 8.186 8.186 0 0 0-2.015.835L41.463 42.542a7.302 7.302 0 0 0-3.295 4.878 7.478 7.478 0 0 0 1.276 5.655 8.86 8.86 0 0 0 9.514 3.35 8.186 8.186 0 0 0 2.015-.835l10.657-6.806a25.536 25.536 0 0 1 6.284-2.603 27.63 27.63 0 0 1 29.684 10.445 23.297 23.297 0 0 1 3.976 17.62 22.773 22.773 0 0 1-10.282 15.213l-29.792 18.999a25.536 25.536 0 0 1-6.283 2.604z"/></svg>`,
            },
          },
        },
      },

      "App.svelte": {
        file: {
          contents: `<script>
  import viteLogo from '/vite.svg'
  import svelteLogo from './assets/svelte.svg'
  import Counter from './lib/Counter.svelte'
</script>

<main>
  <div>
    <a href="https://vite.dev" target="_blank" rel="noreferrer">
      <img src={viteLogo} class="logo" alt="Vite Logo" />
    </a>
    <a href="https://svelte.dev" target="_blank" rel="noreferrer">
      <img src={svelteLogo} class="logo svelte" alt="Svelte Logo" />
    </a>
  </div>
  <h1>Vite + Svelte</h1>

  <div class="card">
    <Counter />
  </div>

  <p>
    Check out <a href="https://github.com/sveltejs/kit#readme" target="_blank" rel="noreferrer">SvelteKit</a>, the official Svelte app framework powered by Vite!
  </p>

  <p class="read-the-docs">
    Click on the Vite and Svelte logos to learn more
  </p>
</main>

<style>
  .logo {
    height: 6em;
    padding: 1.5em;
    will-change: filter;
    transition: filter 300ms;
  }
  .logo:hover {
    filter: drop-shadow(0 0 2em #646cffaa);
  }
  .logo.svelte:hover {
    filter: drop-shadow(0 0 2em #ff3e00aa);
  }
  .read-the-docs {
    color: #888;
  }
</style>
`,
        },
      },

      lib: {
        directory: {
          "Counter.svelte": {
            file: {
              contents: `<script>
  let count = 0
  const increment = () => {
    count += 1
  }
</script>

<button on:click={increment}>
  count is {count}
</button>
`,
            },
          },
        },
      },

      "main.js": {
        file: {
          contents: `import './app.css'
import App from './App.svelte'

const app = new App({
  target: document.getElementById('app'),
})

export default app
`,
        },
      },

      "app.css": {
        file: {
          contents: `:root {
  font-family: system-ui, Avenir, Helvetica, Arial, sans-serif;
  line-height: 1.5;
  font-weight: 400;

  color-scheme: light dark;
  color: rgba(255, 255, 255, 0.87);
  background-color: #242424;

  font-synthesis: none;
  text-rendering: optimizeLegibility;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

a {
  font-weight: 500;
  color: #646cff;
  text-decoration: inherit;
}
a:hover {
  color: #535bf2;
}

body {
  margin: 0;
  display: flex;
  place-items: center;
  min-width: 320px;
  min-height: 100vh;
}

h1 {
  font-size: 3.2em;
  line-height: 1.1;
}

#app {
  max-width: 1280px;
  margin: 0 auto;
  padding: 2rem;
  text-align: center;
}

button {
  border-radius: 8px;
  border: 1px solid transparent;
  padding: 0.6em 1.2em;
  font-size: 1em;
  font-weight: 500;
  font-family: inherit;
  background-color: #1a1a1a;
  cursor: pointer;
  transition: border-color 0.25s;
}
button:hover {
  border-color: #646cff;
}
button:focus,
button:focus-visible {
  outline: 4px auto -webkit-focus-ring-color;
}

.card {
  padding: 2em;
}
`,
        },
      },

      "vite-env.d.ts": {
        file: {
          contents: `/// <reference types="svelte" />
/// <reference types="vite/client" />
`,
        },
      },
    },
  },
  public: {
    directory: {
      "vite.svg": {
        file: {
          contents: `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 128 128"><defs><linearGradient id="a" x1="6" x2="235" y1="33" y2="344" gradientTransform="translate(0 .937) scale(.3122)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#41d1ff"/><stop offset="1" stop-color="#bd34fe"/></linearGradient><linearGradient id="b" x1="194.651" x2="236.076" y1="8.818" y2="292.989" gradientTransform="translate(0 .937) scale(.3122)" gradientUnits="userSpaceOnUse"><stop offset="0" stop-color="#ffea83"/><stop offset=".083" stop-color="#ffdd35"/><stop offset="1" stop-color="#ffa800"/></linearGradient></defs><path fill="url(#a)" d="M124.766 19.52 67.324 122.238c-1.187 2.121-4.234 2.133-5.437.024L3.305 19.532c-1.313-2.302.652-5.087 3.261-4.622L64.07 25.187a3.09 3.09 0 0 0 1.11 0l56.3-10.261c2.598-.473 4.575 2.289 3.286 4.594Zm0 0"/><path fill="url(#b)" d="M91.46 1.43 48.954 9.758a1.56 1.56 0 0 0-1.258 1.437l-2.617 44.168a1.563 1.563 0 0 0 1.91 1.614l11.836-2.735a1.562 1.562 0 0 1 1.88 1.836l-3.517 17.219a1.562 1.562 0 0 0 1.985 1.805l7.308-2.223c1.133-.344 2.223.652 1.985 1.812l-5.59 27.047c-.348 1.692 1.902 2.614 2.84 1.164l.625-.968 34.64-69.13c.582-1.16-.421-2.48-1.69-2.234l-12.185 2.352a1.558 1.558 0 0 1-1.793-1.965l7.95-27.562A1.56 1.56 0 0 0 91.46 1.43Zm0 0"/></svg>`,
        },
      },
    },
  },

  "index.html": {
    file: {
      contents: `<!doctype html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <link rel="icon" type="image/svg+xml" href="/vite.svg" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Vite + Svelte</title>
  </head>
  <body>
    <div id="app"></div>
    <script type="module" src="/src/main.js"></script>
  </body>
</html>`,
    },
  },

  "package.json": {
    file: {
      contents: `{
  "name": "svelte-vite-starter",
  "private": true,
  "type": "module",
  "scripts": {
    "dev": "vite",
    "build": "vite build",
    "preview": "vite preview"
  },
  "devDependencies": {
    "@sveltejs/vite-plugin-svelte": "^3.0.0",
    "svelte": "^4.2.0",
    "vite": "^5.0.0"
  }
}`,
    },
  },

  "vite.config.js": {
    file: {
      contents: `import { defineConfig } from 'vite'
import { svelte } from '@sveltejs/vite-plugin-svelte'

export default defineConfig({
  plugins: [svelte()],
})`,
    },
  },

  "svelte.config.js": {
    file: {
      contents: `import { vitePreprocess } from '@sveltejs/vite-plugin-svelte'

export default {
  preprocess: vitePreprocess(),
}`,
    },
  },
};
