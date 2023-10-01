import { type UserConfig } from "vitepress";
import { MermaidMarkdown } from "./mermaid-markdown";
import { MermaidPlugin, MermaidPluginConfig } from "./mermaid-plugin";
import { MermaidConfig } from "mermaid/dist/config.type";

export { MermaidMarkdown } from "./mermaid-markdown";
export { MermaidPlugin } from "./mermaid-plugin";

export { UserConfig };

declare module "vitepress" {
  interface UserConfig {
    mermaid?: MermaidConfig;
    mermaidPlugin?: MermaidPluginConfig;
  }
}

export const withMermaid = (config: UserConfig) => {
  if (!config.markdown) config.markdown = {};
  const markdownConfigOriginal = config.markdown.config || (() => {});
  config.markdown.config = (...args) => {
    MermaidMarkdown(...args, config.mermaidPlugin);
    markdownConfigOriginal(...args);
  };

  if (!config.vite) config.vite = {};
  if (!config.vite.plugins) config.vite.plugins = [];
  config.vite.plugins.push(MermaidPlugin(config.mermaid));
  if (!config.vite.optimizeDeps) config.vite.optimizeDeps = {};
  if (!config.vite.optimizeDeps.include) config.vite.optimizeDeps.include = [];

  config.vite.optimizeDeps.include = [
    ...config.vite.optimizeDeps.include,
    "@braintree/sanitize-url",
    "dayjs",
    "debug",
    "cytoscape-cose-bilkent",
    "cytoscape",
  ];
  if (!config.vite.resolve) config.vite.resolve = {};
  if (!config.vite.resolve.alias) config.vite.resolve.alias = {};
  const inputAlias = config.vite.resolve.alias;
  let objAlias = {};
  if (inputAlias) {
    // assume that inputAlias conform to vite standard
    if (Array.isArray(inputAlias) && inputAlias.length !== 0) {
      inputAlias.forEach((alia) => {
        objAlias[alia.find] = alia.replacement;
      });
    } else {
      objAlias = { ...inputAlias };
    }
  }

  config.vite.resolve.alias = {
    ...objAlias,
    "dayjs/plugin/advancedFormat.js": "dayjs/esm/plugin/advancedFormat",
    "dayjs/plugin/customParseFormat.js": "dayjs/esm/plugin/customParseFormat",
    "dayjs/plugin/isoWeek.js": "dayjs/esm/plugin/isoWeek",
    "cytoscape/dist/cytoscape.umd.js": "cytoscape/dist/cytoscape.esm.js",
  };

  return config;
};
