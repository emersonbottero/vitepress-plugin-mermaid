<template>
  <div>
    mermaid graph
    <div v-html="svg"></div>
  </div>
</template>
<script>
import { onMounted, ref, computed, h } from "vue";
export default {
  name: "Mermaid",
  props: {
    id: {
      type: String,
      required: true,
    },
    graph: {
      type: String,
      required: true,
    },
  },
  setup(props, context) {
    const code = `<div class="language-mermaid"><pre><code>${props.graph}</code></pre></div>`;
    const show = ref(false);
    const svg = ref(undefined);
    const rendered = computed(() => svg.value !== undefined);
    onMounted(() => {
      import("./mermaid.min.js")
        .then(() => {
          mermaid.mermaidAPI.initialize({ startOnLoad: false });
          console.log("... mermaid rendering");
          mermaid.mermaidAPI.render(
            props.id,
            props.graph,
            (svg_rendered, ...args) => {
              svg.value = svg_rendered.replace(
                /xmlns="http:\/\/www.w3.org\/2000\/svg" height="100%" /,
                `xmlns="http://www.w3.org/2000/svg" `
              );
            }
          );
        })
        .catch((error) => {
          console.log("... local import failed, try existing");
          window.mermaid.mermaidAPI.render(
            props.id,
            props.graph,
            (svg_rendered, ...args) => {
              svg.value = svg_rendered.replace(
                /xmlns="http:\/\/www.w3.org\/2000\/svg" height="100%" /,
                `xmlns="http://www.w3.org/2000/svg" `
              );
            }
          );
        });
    });
    return {
      code,
      svg,
      rendered,
      show,
    };
  },
};
</script>

<style>
.mermaid {
  cursor: pointer;
  padding: 5px;
}
</style>
