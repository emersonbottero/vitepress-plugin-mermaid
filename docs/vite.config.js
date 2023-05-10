import { defineConfig } from "vite";
import path from "path";

export default defineConfig({
  resolve: {
    alias: {
      "@alt-point/vitepress-plugin-mermaid/Mermaid.vue": path.join(
        __dirname,
        "../dist/Mermaid.vue"
      ),
    },
  },
  server: {
    allow: ["../../"],
  },
});
