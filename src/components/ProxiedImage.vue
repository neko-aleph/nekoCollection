<script setup lang="ts">
defineProps<{
  src: string;
  proxy: string;
}>();
</script>

<template>
  <img :src="`${proxy}${src}`" />
</template>

<style scoped>
img {
  user-select: none;
}
</style>
