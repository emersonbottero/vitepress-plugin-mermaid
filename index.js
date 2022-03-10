const MermaidPlugin = (md) => {
  md.use(require("vpress-mdi-details").details).use(
    require("vpress-mdi-details").mermaid
  );
};

module.exports = MermaidPlugin;
