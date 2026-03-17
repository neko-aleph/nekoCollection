<script setup lang="ts">
defineProps<{
  linkType: string;
}>();
</script>

<template>
  <span class="link-type">{{ linkType }}</span>
</template>

<style scoped>
.link-type {
  font-weight: 600;
}
</style>
