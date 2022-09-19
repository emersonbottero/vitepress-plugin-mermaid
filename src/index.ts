import type { DefaultTheme, UserConfig } from "vitepress";
import { MermaidMarkdown } from "./mermaid-markdown";
import { MermaidPlugin, type MermaidConfig } from "./mermaid-plugin";

export { MermaidMarkdown } from "./mermaid-markdown";
export { MermaidPlugin } from "./mermaid-plugin";

export interface VitePressMermaidOptions<ThemeConfig = any>
  extends UserConfig<ThemeConfig> {
  mermaid?: Partial<MermaidConfig>;
}

export const withMermaid = (
  config: VitePressMermaidOptions<DefaultTheme.Config>
) => {
  if (!config.markdown) config.markdown = {};
  const markdownConfigOriginal = config.markdown.config || (() => {});
  config.markdown.config = (...args) => {
    MermaidMarkdown(...args);
    markdownConfigOriginal(...args);
  };

  if (!config.vite) config.vite = {};
  if (!config.vite.plugins) config.vite.plugins = [];
  config.vite.plugins.push(MermaidPlugin(config.mermaid));

  return config;
};
