<script setup lang="ts">
import ProxiedImage from "./ProxiedImage.vue";

const proxy = import.meta.env.VITE_OTHER_CORS_PROXY_URL;

defineProps<{
  image: string;
  size: string;
}>();
</script>

<template>
  <ProxiedImage :src="image" :proxy="proxy" :class="[`cover`, size]" />
</template>

<style scoped>
.cover {
  width: 180px;
  height: 270px;
  background: var(--bg1);
  border: 1px solid var(--bd0);
  border-radius: 8px;
  box-sizing: border-box;
  object-fit: cover;
}

.small {
  width: 100px;
  height: 150px;
}

.large {
  width: 180px;
  height: 270px;
}
</style>
