<script setup lang="ts">
import { onClickOutside, useMagicKeys, whenever } from "@vueuse/core";
import { onMounted, ref, useTemplateRef } from "vue";
import BaseButton from "./BaseButton.vue";

const modelValue = defineModel<number | string>();

const props = defineProps<{
  items: string[];
  mode: string;
  default?: string | number;
}>();

const isOpen = ref<boolean>(false);
const selectButton = useTemplateRef("selectButton");

const keys = useMagicKeys();

onClickOutside(selectButton, () => (isOpen.value = false));

whenever(
  () => keys.escape?.value || keys.slash?.value,
  () => {
    isOpen.value = false;
  },
);

function isSelected(item: string, index: number) {
  return props.mode === "index"
    ? modelValue.value === index
    : modelValue.value === item;
}

function selectItem(item: string, index: number) {
  modelValue.value = props.mode === "string" ? item : index;
}

function optionLabel(item: string, index: number) {
  return props.mode === "index" ? props.items[index] : item;
}

onMounted(() => {
  if (!modelValue.value) {
    modelValue.value = props.default
      ? props.default
      : props.mode === "index"
        ? 0
        : props.items[0];
  }
});
</script>

<template>
  <div class="select">
    <BaseButton
      ref="selectButton"
      class="select-button"
      @click="isOpen = !isOpen"
    >
      <span class="selected-option">{{
        optionLabel(modelValue as string, modelValue as number)
      }}</span>
      <span
        :class="[
          'material-symbols-outlined',
          'dropdown-icon',
          { open: isOpen },
        ]"
        >keyboard_arrow_down</span
      >
    </BaseButton>
    <div :class="['options', { open: isOpen }]">
      <BaseButton
        v-for="(item, index) in items"
        :key="index"
        class="select-button option"
        @click="selectItem(item, index)"
      >
        <span class="option-label">{{ optionLabel(item, index) }}</span>
        <span v-if="isSelected(item, index)" class="material-symbols-outlined"
          >check_small</span
        >
      </BaseButton>
    </div>
  </div>
</template>

<style scoped>
.select {
  position: relative;
}

.select-button {
  width: 100%;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding-left: 10px;
  padding-right: 6px;
}

.material-symbols-outlined {
  font-size: 20px;
}

.dropdown-icon {
  transition: transform 0.2s ease-in-out;
}

.dropdown-icon.open {
  transform: rotate(180deg);
}

.options {
  width: 100%;
  max-height: 384px;
  border-radius: 8px;
  overflow: hidden;
  overflow-y: scroll;
  outline: 1px solid var(--bd0);
  outline-offset: -1px;
  display: flex;
  flex-direction: column;
  position: absolute;
  top: 31px;
  opacity: 0;
  pointer-events: none;
  transition: opacity 0.2s ease-in-out;
  z-index: 99;
}

.options.open {
  opacity: 1;
  pointer-events: auto;
}

.option {
  border-radius: 0;
  border: none;
  outline: 1px solid var(--bd0);
  flex: 0 0 auto;
}

.selected-option {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
}

.option-label {
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  display: block;
}

@media (max-width: 1239px) {
  .options {
    top: 39px;
  }
}
</style>
