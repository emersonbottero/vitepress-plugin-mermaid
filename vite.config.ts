const path = require("path");
const { defineConfig } = require("vite");
import { viteStaticCopy } from "vite-plugin-static-copy";
import dts from "vite-plugin-dts";

export default defineConfig({
  plugins: [
    viteStaticCopy({
      targets: [
        {
          src: "src/Mermaid.vue",
          dest: "./",
        },
        {
          src: "src/mermaid.ts",
          dest: "./",
        },
      ],
    }),
    dts(),
  ],
  build: {
    lib: {
      entry: path.resolve(__dirname, "src/index.ts"),
      name: "MermaidPlugin",
      fileName: (format: string) =>
        format == "es"
          ? `vitepress-plugin-mermaid.${format}.mjs`
          : `vitepress-plugin-mermaid.${format}.js`,
    },
    rollupOptions: {
      // make sure to externalize deps that shouldn't be bundled
      // into your library
      external: [
        "vue",
        // "markdown-it",
        // "mermaid",
        // "@mermaid-js/mermaid-mindmap",
      ],
      output: {
        // Provide global variables to use in the UMD build
        // for externalized deps
        globals: {
          vue: "Vue",
        },
      },
    },
  },
});
