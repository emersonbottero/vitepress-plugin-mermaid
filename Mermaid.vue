<template>
  <div v-html="svg"></div>
</template>

<script setup>
import { onMounted, ref, watch } from "vue";
import Mermaid from "mermaid/dist/mermaid.esm.min.mjs";

const props = defineProps({
  graph: {
    type: String,
    required: true,
  },
  id: {
    type: String,
    required: true,
  },
});

const svg = ref(undefined);
onMounted(() => {
  const mut = new MutationObserver((mutations, mut) => {
    mutations.forEach((mutation) => {
      if (mutation.attributeName === "class") {
        renderChart();
      }
    });
  });

  mut.observe(document.documentElement, {
    attributes: true,
  });

  mut.observe(document.body, {
    attributes: true,
  });

  renderChart();
});

const renderChart = () => {
  let hasDarkClass = false;
  document.body.classList.forEach((i) => {
    if (i.toLowerCase().includes("dark")) hasDarkClass = true;
  });
  document.documentElement.classList.forEach((i) => {
    if (i.toLowerCase().includes("dark")) hasDarkClass = true;
  });
  Mermaid.mermaidAPI.initialize({
    theme: hasDarkClass ? "dark" : "",
    startOnLoad: false,
  });
  // console.log("... mermaid rendering", hasDarkClass);
  Mermaid.mermaidAPI.render(
    props.id,
    decodeURIComponent(props.graph),
    (svg_rendered, ...args) => {
      svg.value = svg_rendered;
    }
  );
};
</script>
