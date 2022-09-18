# vitepress-plugin-mermaid

Add mermaid support for Vitepress.
It detects any dark theme that are set in body as long as it has dark in the name

See the [docs 📕](https://emersonbottero.github.io/vitepress-plugin-mermaid/)  
and a [complex example 😎](https://emersonbottero.github.io/vitepress-plugin-mermaid/guide/more-examples.html#render)

## Install

```bash
npm i vitepress-plugin-mermaid -s
```

## Setup it up

Add plugin

```js
//vite.config.ts
import { defineConfig } from "vite";
import { MermaidPlugin } from "vitepress-plugin-mermaid";

export default defineConfig({
  plugins: [MermaidPlugin()],
});
```

Add markdown

```js
//.vitepress/config.js
import  { MermaidMarkdown } from "vitepress-plugin-mermaid";

module.exports = {
  ...
  markdown: {
    config: MermaidMarkdown,
  },
  ...
}
```

Use in any Markdown file

````md
<!---any-file.md-->

```mermaid
flowchart TD
  Start --> Stop
```
````
