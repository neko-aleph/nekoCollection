<script setup lang="ts">
import { computed } from "vue";
import { useRoute } from "vue-router";
import Placeholder from "./Placeholder.vue";

const props = defineProps<{
  episodeNumber: number;
  episodesFetched: boolean;
}>();

const emit = defineEmits(["episodeEnded"]);
const route = useRoute();
const iframeUrl = import.meta.env.VITE_EMBED_PLAYER_URL;

const src = computed(() => {
  if (route.params.source === "hd-1") {
    return `${iframeUrl}/animepahe/${route.params.titleId}/${props.episodeNumber}/sub`;
  } else {
    return `${iframeUrl}/anime/${route.params.titleId}/${props.episodeNumber}/sub`;
  }
});
</script>

<template>
  <Placeholder :height="384" :width="682" class="player" :key="episodeNumber">
    <iframe
      v-if="episodeNumber && episodesFetched"
      :src="src"
      frameBorder="0"
      scrolling="no"
      allowFullScreen
    ></iframe>
  </Placeholder>
</template>

<style scoped>
.player {
  display: flex;
  justify-content: center;
  align-items: center;
  overflow: hidden;
}

iframe {
  height: 382px;
  width: 680px;
}

@media (max-width: 1219px) {
  .player {
    width: min(calc(100vw - 20px), 400px);
    height: min(calc((100vw - 20px) / 9 * 16), 225px);
  }

  iframe {
    width: min(calc(100vw - 20px), 400px);
    height: min(calc((100vw - 20px) / 9 * 16), 225px);
  }
}
</style>
