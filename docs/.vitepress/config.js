import { defineConfig } from "vitepress";
import { MermaidMarkdown } from "../../src/mermaid-markdown";

export default defineConfig({
  lang: "en-US",
  title: "VitePress Plugin Mermaid",
  description: "Mermaid support for vitepress",
  base: "/vitepress-plugin-mermaid/",
  lastUpdated: true,
  markdown: {
    config: MermaidMarkdown,
  },

  themeConfig: {
    nav: nav(),

    sidebar: {
      "/guide/": sidebarGuide(),
    },

    socialLinks: [
      {
        icon: "github",
        link: "https://github.com/emersonbottero/vitepress-plugin-mermaid",
      },
    ],

    footer: {
      message: "Released under the MIT License.",
      copyright: "Copyright © 2021-present Emerson Bottero",
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
      items: [
        { text: "Getting Started", link: "/guide/getting-started" },
        { text: "More Examples", link: "/guide/more-examples" },
      ],
    },
  ];
}
