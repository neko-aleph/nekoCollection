<script setup lang="ts">
import { ref } from "vue";
import { useMobile } from "../composables/useMobile.ts";
import FormatSelect from "./FormatSelect.vue";
import HeaderLogo from "./HeaderLogo.vue";
import SearchBar from "./SearchBar.vue";

const format = ref<string>("");
const isMobile = useMobile();
</script>

<template>
  <header>
    <div class="content">
      <div v-if="!isMobile" class="left">
        <HeaderLogo />
      </div>
      <div class="right">
        <FormatSelect v-model="format" />
        <SearchBar :format="format" />
      </div>
    </div>
  </header>
</template>

<style scoped>
header {
  height: 52px;
  border-bottom: 1px solid var(--bd0);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  justify-content: center;
  position: sticky;
  top: 0;
  background: var(--bg0);
}

.content {
  width: 1200px;
  height: 52px;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;
}

.right {
  display: flex;
  flex-direction: row;
  gap: 5px;
}

@media (max-width: 1239px) {
  header {
    height: 60px;
  }

  .content {
    height: 60px;
    width: 100%;
    justify-content: center;
  }
}
</style>
