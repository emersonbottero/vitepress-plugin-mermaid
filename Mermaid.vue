<template>
  <div v-html="svg"></div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import Mermaid from "mermaid";
import hash from "./hash-sum";

const props = defineProps({
  graph: {
    type: String,
    required: true,
  },
});

const onBodyClassChange = (mutationsList, observer) => {
  mutationsList.forEach((mutation) => {
    if (mutation.attributeName === "class") {
      renderChart();
    }
  });
};

const mutationObserver = new MutationObserver(onBodyClassChange);

mutationObserver.observe(document.body, { attributes: true });

const svg = ref(undefined);
onMounted(() => renderChart());

const renderChart = () => {
  let hasDarkClass = false;
  document.body.classList.forEach((i) => {
    if (i.toLowerCase().includes("dark")) hasDarkClass = true;
  });
  Mermaid.mermaidAPI.initialize({
    theme: hasDarkClass ? "dark" : "",
    startOnLoad: false,
  });
  // console.log("... mermaid rendering", hasDarkClass);
  Mermaid.mermaidAPI.render(
    hash(props.graph),
    props.graph,
    (svg_rendered, ...args) => {
      svg.value = svg_rendered;
    }
  );
};
</script>
