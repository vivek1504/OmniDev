import type { FileSystemTree } from "@webcontainer/api";

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
  "index.html": {
    file: {
      contents: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Vue + Vite</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
      contents: `import { defineConfig } from "vite";
import vue from "@vitejs/plugin-vue";

export default defineConfig({
  plugins: [vue()],
});
`,
    },
  },

  src: {
    directory: {
      "main.js": {
        file: {
          contents: `import { createApp } from "vue";
import App from "./App.vue";

createApp(App).mount("#app");
`,
        },
      },
      "App.vue": {
        file: {
          contents: `<template>
  <div class="app">
    <h1>Vue + Vite</h1>
    <p>Edit <code>src/App.vue</code> and save.</p>
  </div>
</template>

<script setup></script>

<style>
.app {
  font-family: system-ui, sans-serif;
  padding: 2rem;
}
</style>
`,
        },
      },
    },
  },
};

export const svelteProjectFiles: FileSystemTree = {
  "index.html": {
    file: {
      contents: `<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <title>Svelte + Vite</title>
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
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
  "dependencies": {
    "svelte": "^4.2.0"
  },
  "devDependencies": {
    "@sveltejs/vite-plugin-svelte": "^3.0.0",
    "vite": "^5.0.0"
  }
}`,
    },
  },

  "vite.config.js": {
    file: {
      contents: `import { defineConfig } from "vite";
import { svelte } from "@sveltejs/vite-plugin-svelte";

export default defineConfig({
  plugins: [svelte()],
});
`,
    },
  },

  src: {
    directory: {
      "main.js": {
        file: {
          contents: `import App from "./App.svelte";

new App({
  target: document.getElementById("app"),
});
`,
        },
      },
      "App.svelte": {
        file: {
          contents: `<script>
  let count = 0;
</script>

<main>
  <h1>Svelte + Vite</h1>
  <button on:click={() => count++}>
    count is {count}
  </button>
  <p>Edit <code>src/App.svelte</code> and save.</p>
</main>

<style>
  main {
    font-family: system-ui, sans-serif;
    padding: 2rem;
  }
</style>
`,
        },
      },
    },
  },
};
