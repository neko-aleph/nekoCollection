<script setup lang="ts">
const modelValue = defineModel<number>({ default: 0 });

defineProps<{
  episodes: number;
}>();

function select(id: number) {
  modelValue.value = id;
}
</script>

<template>
  <div class="episodes">
    <button
      v-for="(episode, index) in episodes"
      :key="episode"
      @click="select(index)"
      :class="['episode', { active: modelValue === index }]"
    >
      {{ `Episode ${index + 1}` }}
    </button>
  </div>
</template>

<style scoped>
.episodes {
  display: flex;
  flex-direction: column;
  background: var(--bg0);
  color: var(--fg0);
  border-radius: 8px;
  height: 384px;
  width: 150px;
  overflow: hidden;
  overflow-y: scroll;
  outline: 1px solid var(--bd0);
  outline-offset: -1px;
}

.episode {
  font-family: var(--font-sans), sans-serif;
  font-size: 12px;
  text-align: left;
  padding-left: 10px;
  height: 32px;
  width: 150px;
  background: var(--bg0);
  border: none;
  outline: 1px solid var(--bd0);
  flex: 0 0 auto;
  transition: background 0.2s ease-in-out;
}

.episode:hover {
  background: var(--bg1);
}

.active {
  background: var(--fg0);
  color: var(--bg0);
}

.active:hover {
  background: var(--fg0);
}
</style>
