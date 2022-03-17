<template>
  <div>
    <div v-html="svg"></div>
  </div>
</template>
<script>
import { onMounted, ref } from "vue";
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
    const svg = ref(undefined);
    onMounted(() => {
      import("./mermaid.min.js")
        .then((mermaid) => {
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
      svg,
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
