import { defineConfig } from "vite";

export default defineConfig({
  resolve: {
    alias: {
      "vitepress-plugin-mermaid/Mermaid.vue": "../../../../../dist/Mermaid.vue",
    },
  },
});
