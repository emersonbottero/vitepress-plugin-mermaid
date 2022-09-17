<template>
  <div v-html="svg"></div>
</template>

<script setup>
import { onMounted, onUnmounted, ref, toRaw } from "vue";
import Mermaid from "mermaid";
import { useData } from "vitepress";

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

const svg = ref(null);
let mut = null;

const { page } = useData();
const { frontmatter } = toRaw(page.value);
const mermaidPageTheme = frontmatter.mermaidTheme || "";

onMounted(async () => {
  mut = new MutationObserver(() => renderChart());
  mut.observe(document.documentElement, { attributes: true });
  renderChart();
  //refresh images on first render
  setTimeout(() => {
    let imgElements = document.getElementsByTagName("img");
    let imgs = Array.from(imgElements);
    let counter = imgs.length;
    // console.log(counter, counter == 0);
    Promise.all(
      imgs
        .filter((img) => !img.complete)
        .map(
          (img) =>
            new Promise((resolve) => {
              // console.log(".....");
              img.onload = img.onerror = resolve;
            })
        )
    ).then(() => {
      // console.log("images finished loading");
      renderChart();
    });
  }, 100);
});

onUnmounted(() => mut.disconnect());

const renderChart = () => {
  let hasDarkClass = document.documentElement.classList.contains("dark");
  Mermaid.mermaidAPI.initialize({
    theme: hasDarkClass ? "dark" : mermaidPageTheme,
    startOnLoad: false,
    securityLevel: "loose",
  });
  Mermaid.mermaidAPI.render(
    props.id,
    decodeURIComponent(props.graph),
    (svg_rendered, ...args) => {
      svg.value = svg_rendered;
    }
  );
};
</script>
