const mermaidPlugin = (md) => {
  const temp = md.renderer.rules.fence.bind(md.renderer.rules);
  md.renderer.rules.fence = (tokens, index, options, env, slf) => {
    const token = tokens[index];

    if (token.info.trim() === "mermaid") {
      try {
        const escapeHtml = require("markdown-it/lib/common/utils").escapeHtml;
        const content = escapeHtml(token.content.trim());
        return `<Mermaid  graph="${content}"></Mermaid>`;
      } catch (err) {
        return `<pre>${err}</pre>`;
      }
    }
    return temp(tokens, index, options, env, slf);
  };
};

module.exports = mermaidPlugin;
