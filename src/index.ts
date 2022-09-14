import { Plugin } from "vite";
export { MermaidMarkdown } from "./mermaid-markdown";

const registerMermaidComponent = (code: string) => {
  if (code.includes("```mermaid")) {
    const scriptSetupTag = /<script.*?setup\b[^<]/gi.exec(code);

    if (scriptSetupTag?.length) {
      code = code.replace(
        scriptSetupTag[0],
        scriptSetupTag[0] +
          '\nimport Mermaid from "vitepress-plugin-mermaid/Mermaid.vue"\n'
      );

      //   console.log(code);

      return code;
    }

    const frontmatterData = /---([^-]+)---/.exec(code);
    if (code.slice(0, 3) === "---" && frontmatterData?.length) {
      const frontmatterCode = frontmatterData[0];
      code = code.replace(
        frontmatterCode,
        frontmatterCode +
          '\n<script setup>import Mermaid from "vitepress-plugin-mermaid/Mermaid.vue";</script>\n'
      );
    } else {
      code =
        '\n<script setup>import Mermaid from "vitepress-plugin-mermaid/Mermaid.vue";</script>\n' +
        code;
    }
  }
  return code;
};

export interface Options {
  // add plugin options here
}

const DEFAULT_OPTIONS: Options = {
  // set default values
  //TODO: Add options
};

export function MermaidPlugin(inlineOptions?: Partial<Options>): Plugin {
  // eslint-disable-next-line no-unused-vars
  const options = {
    ...DEFAULT_OPTIONS,
    ...inlineOptions,
  };

  return {
    name: "vite-plugin-mermaid",
    enforce: "post",

    config(config, { command }) {
      // if (command === 'build') {
      //   config.root = 'foo'
      // }
    },

    transform(src, id) {
      //Register Mermaid component in vue instance creation
      if (id.includes("vitepress/dist/client/app/index.js")) {
        src =
          "\nimport Mermaid from 'vitepress-plugin-mermaid/Mermaid.vue';\n" +
          src;
        src = src.replace(
          "// install global components",
          "// install global components\n\t\tapp.component('Mermaid', Mermaid);\n"
        );
        return {
          code: src,
          map: null, // provide source map if available
        };
      }

      // if (id.includes("vitepress/dist/client/app/data.js")) {
      //   console.log(id);
      //   src = src.replace("return data;", "\nconsole.log(data);\nreturn data;");

      //   return {
      //     code: src,
      //     map: null, // provide source map if available
      //   };
      // }
    },
  };
}
