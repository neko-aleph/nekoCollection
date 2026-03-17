<script setup lang="ts">
import { useScroll } from "@vueuse/core";
import { useTemplateRef } from "vue";
import type { Recommendation, Relation } from "../types/title.ts";
import ScrollButton from "./ScrollButton.vue";
import TitleLink from "./TitleLink.vue";

defineProps<{
  linkType: string;
  links: (Recommendation | Relation)[];
}>();

const list = useTemplateRef("list");
const { x } = useScroll(list, { behavior: "smooth" });

function scroll(direction: number) {
  if (!list.value) return;
  x.value += (list.value.offsetWidth + 10) * direction;
}
</script>

<template>
  <div class="links">
    <h2>{{ linkType }}</h2>
    <div class="list" ref="list">
      <TitleLink v-for="link in links" :key="link.id" :link="link" />
    </div>
    <div class="scroll-buttons">
      <ScrollButton direction="left" @click="scroll(-1)" />
      <ScrollButton direction="right" @click="scroll(1)" />
    </div>
  </div>
</template>

<style scoped>
h2 {
  font-size: 12px;
  font-weight: 600;
  margin: 0;
}

.links {
  display: flex;
  flex-direction: column;
  gap: 10px;
  width: 338px;
  position: relative;
}

.list {
  display: flex;
  flex-direction: row;
  gap: 10px;
  width: 338px;
  height: 150px;
  overflow: hidden;
}

.scroll-buttons {
  display: flex;
  flex-direction: row;
  gap: 5px;
  position: absolute;
  bottom: 10px;
  right: 0;
}

@media (max-width: 1219px) {
  .links {
    width: calc(100vw - 20px);
    max-width: 400px;
  }

  .list {
    width: 100%;
    max-width: 400px;
  }
}
</style>
