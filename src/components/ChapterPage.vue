<script setup lang="ts">
import { computed } from "vue";
import ProxiedImage from "./ProxiedImage.vue";

const props = defineProps<{
  image: string;
  referer?: string;
}>();

const proxy = import.meta.env.VITE_CORS_PROXY_URL;
const otherProxy = import.meta.env.VITE_OTHER_CORS_PROXY_URL;

const encodeProxyUrl = computed(() => {
  return props.referer
    ? `/${window.btoa(`${props.image}|${props.referer}`)}`
    : props.image;
});
</script>

<template>
  <ProxiedImage
    :src="encodeProxyUrl"
    :proxy="referer ? proxy : otherProxy"
    class="page"
  />
</template>

<style scoped>
.page {
  width: 100%;
  object-fit: contain;
  background: var(--bg1);
}
</style>
