export const MermaidMarkdown = (md) => {
  const sum = (o) => {
    function pad(hash, len) {
      while (hash.length < len) {
        hash = "0" + hash;
      }
      return hash;
    }

    function fold(hash, text) {
      var i;
      var chr;
      var len;
      if (text.length === 0) {
        return hash;
      }
      for (i = 0, len = text.length; i < len; i++) {
        chr = text.charCodeAt(i);
        hash = (hash << 5) - hash + chr;
        hash |= 0;
      }
      return hash < 0 ? hash * -2 : hash;
    }

    function foldObject(hash, o, seen) {
      return Object.keys(o).sort().reduce(foldKey, hash);
      function foldKey(hash, key) {
        return foldValue(hash, o[key], key, seen);
      }
    }

    function foldValue(input, value, key, seen) {
      var hash = fold(fold(fold(input, key), toString(value)), typeof value);
      if (value === null) {
        return fold(hash, "null");
      }
      if (value === undefined) {
        return fold(hash, "undefined");
      }
      if (typeof value === "object") {
        if (seen.indexOf(value) !== -1) {
          return fold(hash, "[Circular]" + key);
        }
        seen.push(value);
        return foldObject(hash, value, seen);
      }
      return fold(hash, value.toString());
    }

    function toString(o) {
      return Object.prototype.toString.call(o);
    }
    return pad(foldValue(0, o, "", []).toString(16), 8);
  };

  const fence = md.renderer.rules.fence.bind(md.renderer.rules);

  md.renderer.rules.fence = (tokens, index, options, env, slf) => {
    const token = tokens[index];

    if (token.info.trim() === "mermaid") {
      try {
        const content = token.content.trim();
        const key = `mermaid_${sum(index)}`;
        return `<Mermaid id="${key}"  graph="${encodeURIComponent(
          content
        )}"></Mermaid>`;
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
