import { defineConfig } from "vitepress";
import { withMermaid } from "../../src";

import { version } from "../../package.json";

export default withMermaid(
  defineConfig({
    lang: "en-US",
    title: "VitePress Plugin Mermaid",
    description: "Mermaid support for vitepress",
    base: "/vitepress-plugin-mermaid/",
    lastUpdated: true,

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
  })
);

function nav() {
  return [
    { text: "Guide", link: "/guide/getting-started", activeMatch: "/guide/" },
    { text: version, link: "" },
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
        { text: "Styled Examples", link: "/guide/styles" },
      ],
    },
  ];
}
