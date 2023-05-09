import mermaid from "mermaid";
import { version } from "mermaid/package.json";
import mindmap from "@mermaid-js/mermaid-mindmap";

const init = (async () => {
  try {
    if (mermaid.registerExternalDiagrams)
      await mermaid.registerExternalDiagrams([mindmap]);
  } catch (e) {
    console.error(e);
  }
})();

export const render = async (
  id: string,
  code: string,
  config: any
): Promise<string> => {
  await init;
  mermaid.initialize(config);
  const result = await mermaid.render(id, code)
  return result.svg
};
