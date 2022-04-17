const mermaidPlugin = (md) => {
  const hash = require("hash-sum");
  const escapeHtml = require("markdown-it/lib/common/utils").escapeHtml;

  const temp = md.renderer.rules.fence.bind(md.renderer.rules);
  md.renderer.rules.fence = (tokens, index, options, env, slf) => {
    const token = tokens[index];

    if (token.info.trim() === "mermaid") {
      try {
        const content = escapeHtml(token.content.trim());
        const key = `mermaid_${hash(index)}`;
        return `<Mermaid id="${key}"  graph="${content}"></Mermaid>`;
      } catch (err) {
        return `<pre>${err}</pre>`;
      }
    }
    return temp(tokens, index, options, env, slf);
  };
};

module.exports = mermaidPlugin;
