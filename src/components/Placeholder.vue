<script setup lang="ts">
const props = defineProps<{
  width: number;
  height: number;
  marginTop?: number;
}>();
</script>

<template>
  <div class="placeholder">
    <slot />
  </div>
</template>

<style scoped>
.placeholder {
  width: v-bind(props.width + "px");
  height: v-bind(props.height + "px");
  margin-top: v-bind(props.marginTop + "px");
  background: var(--bg1);
  border-radius: 8px;
  border: 1px solid var(--bd0);
  box-sizing: border-box;
  background-image: linear-gradient(
    to right,
    var(--bg1) 0%,
    var(--wv0) 20%,
    var(--bg1) 40%,
    var(--bg1) 100%
  );
  background-repeat: no-repeat;
  background-size: 200% 100%;
  animation: shimmer 0.75s infinite linear;
}

@keyframes shimmer {
  0% {
    background-position: 200% 0;
  }
  100% {
    background-position: -200% 0;
  }
}

@media (max-width: 1239px) {
  .placeholder {
    max-width: min(calc(100vw - 40px), 400px);
  }
}
</style>
