<script setup lang="ts">
const props = defineProps<{
  height: number;
}>();
</script>

<template>
  <span class="message">Nothing found</span>
</template>

<style scoped>
.message {
  width: 100%;
  height: v-bind(props.height + "px");
  text-align: center;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: var(--bg1);
  border: 1px solid var(--bd0);
  border-radius: 8px;
  box-sizing: border-box;
}
</style>
