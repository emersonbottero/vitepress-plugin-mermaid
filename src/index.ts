import { type UserConfig } from "vitepress";
import { MermaidMarkdown } from "./mermaid-markdown";
import { MermaidPlugin } from "./mermaid-plugin";

export { MermaidMarkdown } from "./mermaid-markdown";
export { MermaidPlugin } from "./mermaid-plugin";

export const withMermaid = (config: UserConfig) => {
  if (!config.markdown) config.markdown = {};
  const markdownConfigOriginal = config.markdown.config || (() => {});
  config.markdown.config = (...args) => {
    MermaidMarkdown(...args);
    markdownConfigOriginal(...args);
  };

  if (!config.vite) config.vite = {};
  if (!config.vite.plugins) config.vite.plugins = [];
  config.vite.plugins.push(MermaidPlugin());

  return config;
};
