<script setup lang="ts">
import { computed } from "vue";

const proxy = import.meta.env.VITE_CORS_PROXY_URL;

const props = defineProps<{
  src: string;
  referer?: string;
}>();

const encodeUrl = computed(() => {
  const targetString = props.referer
    ? `${props.src}|${props.referer}`
    : props.src;

  const safeBytes = new TextEncoder().encode(targetString);
  const base64 = window.btoa(String.fromCharCode(...safeBytes));

  const urlSafeBase64 = base64
    .replace(/\+/g, "-")
    .replace(/\//g, "_")
    .replace(/=+$/, "");

  const extension = props.src.split('.').pop()?.split('?')[0] || "png";

  return `${proxy}/${urlSafeBase64}.${extension}`;
})
</script>

<template>
  <img :src="encodeUrl" />
</template>

<style scoped>
img {
  user-select: none;
}
</style>
