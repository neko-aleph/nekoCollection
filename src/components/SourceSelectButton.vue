<script setup lang="ts">
import { useRoute, useRouter } from "vue-router";
import BaseButton from "./BaseButton.vue";

const props = defineProps<{
  source: string;
  format: string;
}>();

const route = useRoute();
const router = useRouter();

function changeSource(source: string) {
  router.push(
    `/${props.format.toLowerCase()}/${route.params.titleId}/${source.toLowerCase()}`,
  );
}
</script>

<template>
  <BaseButton
    :class="[
      'source-select-button',
      { selected: source.toLowerCase() === route.params.source },
    ]"
    @click="changeSource(source.toLowerCase())"
  >
    {{ source }}
  </BaseButton>
</template>

<style scoped>
.source-select-button {
  padding: 0 12px;
}

.source-select-button.selected {
  background: var(--fg0);
  color: var(--bg0);
}

.source-select-button.selected:hover {
  background: var(--fg0);
  color: var(--bg0);
}
</style>
