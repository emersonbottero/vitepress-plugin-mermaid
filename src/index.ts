import { type UserConfig } from "vitepress";
import { MermaidMarkdown } from "./mermaid-markdown";
import { MermaidPlugin } from "./mermaid-plugin";
import { MermaidConfig } from "mermaid/dist/config.type";

export { MermaidMarkdown } from "./mermaid-markdown";
export { MermaidPlugin } from "./mermaid-plugin";

export { UserConfig };

declare module "vitepress" {
  interface UserConfig {
    mermaid?: MermaidConfig;
  }
}

export const withMermaid = (config: UserConfig) => {
  if (!config.markdown) config.markdown = {};
  const markdownConfigOriginal = config.markdown.config || (() => {});
  config.markdown.config = (...args) => {
    MermaidMarkdown(...args);
    markdownConfigOriginal(...args);
  };

  if (!config.vite) config.vite = {};
  if (!config.vite.plugins) config.vite.plugins = [];
  config.vite.plugins.push(MermaidPlugin(config.mermaid));
  if (!config.vite.optimizeDeps) config.vite.optimizeDeps = {};
  config.vite.optimizeDeps = {
    ...config.vite.optimizeDeps,
    include: [
      "@braintree/sanitize-url",
      "dayjs",
      "debug",
      "cytoscape-cose-bilkent",
      "cytoscape",
    ],
  };
  if (!config.vite.resolve) config.vite.resolve = {};
  if (!config.vite.resolve.alias) config.vite.resolve.alias = {};

  config.vite.resolve.alias = [
    ...config.vite.resolve.alias,
    {
      find: "dayjs/plugin/advancedFormat.js",
      replacement: "dayjs/esm/plugin/advancedFormat"
    },
    {
      find: "dayjs/plugin/customParseFormat.js",
      replacement: "dayjs/esm/plugin/customParseFormat"
    },
    {
      find: "dayjs/plugin/isoWeek.js",
      replacement: "dayjs/esm/plugin/isoWeek"
    },
    {
      find: "cytoscape/dist/cytoscape.umd.js",
      replacement: "cytoscape/dist/cytoscape.esm.js"
    },
  ];

  return config;
};
