<script setup lang="ts">
import ProxiedImage from "./ProxiedImage.vue";

defineProps<{
  image: string;
  referer?: string;
}>();
</script>

<template>
  <ProxiedImage
    :src="image"
    :referer="referer"
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
