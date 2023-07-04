import mermaid, { ExternalDiagramDefinition, MermaidConfig } from "mermaid";

export const init = async (externalDiagrams: ExternalDiagramDefinition[]) => {
  try {
    if (mermaid.registerExternalDiagrams)
      await mermaid.registerExternalDiagrams(externalDiagrams);
  } catch (e) {
    console.error(e);
  }
};

export const render = async (
  id: string,
  code: string,
  config: MermaidConfig
): Promise<string> => {
  // await init;
  mermaid.initialize(config);
  const { svg } = await mermaid.render(id, code);
  return svg;
};
