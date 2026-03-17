<script setup lang="ts">
defineProps<{
  format: string;
  status: string;
}>();
</script>

<template>
  <span>{{ format }}・{{ status }}</span>
</template>
