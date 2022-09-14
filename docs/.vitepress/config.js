import { defineConfig } from "vitepress";
import MermaidPlugin from "../../src/mermaid-markdown.js";

export default defineConfig({
  lang: "en-US",
  title: "VitePress Plugin Mermaid",
  description: "Mermaid support for vitepress",

  lastUpdated: true,

  themeConfig: {
    nav: nav(),

    sidebar: {
      "/guide/": sidebarGuide(),
    },

    markdown: {
      config: MermaidPlugin,
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/emersonbottero/vitepress-plugin-mermaid",
      },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2019-present Evan You",
    },
  },
});

function nav() {
  return [
    { text: "Guide", link: "/guide/getting-started", activeMatch: "/guide/" },
  ];
}

function sidebarGuide() {
  return [
    {
      text: "Introduction",
      collapsible: true,
      items: [{ text: "Getting Started", link: "/guide/getting-started" }],
    },
  ];
}
