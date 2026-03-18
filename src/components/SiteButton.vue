<script setup lang="ts">
import { useAsset } from "../composables/useAsset.ts";
import BaseButton from "./BaseButton.vue";

defineProps<{
  site: string;
  link: string;
}>();
</script>

<template>
  <a :href="link">
    <BaseButton class="link-button">
      <img :src="useAsset(`${site}.svg`)" alt="logo" />
      <span>{{ site }}</span>
    </BaseButton>
  </a>
</template>

<style scoped>
a {
  text-decoration: none;
}

.link-button {
  width: 164px;
  position: relative;
}

img {
  width: 20px;
  height: 20px;
  border: 1px solid var(--bd0);
  border-radius: 2px;
  box-sizing: border-box;
  position: absolute;
  top: 5px;
  left: 5px;
}

@media (max-width: 1239px) {
  .link-button {
    width: 100%;
  }

  img {
    width: 28px;
    height: 28px;
  }
}
</style>
