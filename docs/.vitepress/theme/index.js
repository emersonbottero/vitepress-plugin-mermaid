import DefaultTheme from "vitepress/theme";
import Mermaid from "../../../Mermaid.vue";

export default {
  ...DefaultTheme,
  enhanceApp({ app }) {
    // register global components
    app.component("Mermaid", Mermaid);
  },
};
