export const MermaidMarkdown = (md, pluginOptions) => {
  const fence = md.renderer.rules.fence.bind(md.renderer.rules);

  md.renderer.rules.fence = (tokens, index, options, env, slf) => {
    const token = tokens[index];

    if (token.info.trim() === "mermaid") {
      try {
        const key = index;
        const cssClass = pluginOptions?.class || 'mermaid';
        return `
      <Suspense> 
      <template #default>
      <Mermaid id="mermaid-${key}" class="${cssClass}" graph="${encodeURIComponent(
          token.content
        )}"></Mermaid>
      </template>
        <!-- loading state via #fallback slot -->
        <template #fallback>
          Loading...
        </template>
      </Suspense>`;
      } catch (err) {
        return `<pre>${err}</pre>`;
      }
    }

    // //Allow to write fences to highlight mermaid code itself (Shiki's default is also mermaid)
    if (token.info.trim() === "mmd") {
      tokens[index].info = "mermaid";
    }

    return fence(tokens, index, options, env, slf);
  };
};
