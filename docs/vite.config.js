import { defineConfig } from "vite";
import { MermaidPlugin } from "../";

export default defineConfig({
  plugins: [MermaidPlugin()],
  resolve: {
    alias: {
      "vitepress-plugin-mermaid/Mermaid.vue": "../../../../../dist/Mermaid.vue",
    },
  },
});
