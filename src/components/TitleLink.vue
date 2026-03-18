<script setup lang="ts">
import type { TitleResult } from "../types/searchResult.ts";
import type { Recommendation, Relation } from "../types/title.ts";
import { formatFormat } from "../util/formatFormat.ts";
import { formatTitle } from "../util/formatTitle.ts";
import Heading from "./Heading.vue";
import TitleCover from "./TitleCover.vue";
import TitleLinkButton from "./TitleLinkButton.vue";
import TitleLinkProperties from "./TitleLinkProperties.vue";
import TitleLinkType from "./TitleLinkType.vue";

defineProps<{
  link: Recommendation | Relation | TitleResult;
}>();
</script>

<template>
  <div class="link">
    <TitleCover :image="link.image" size="small" />
    <div class="link-info">
      <div class="link-info-block">
        <Heading size="small" class="title-link-heading">
          {{ formatTitle(link.title) }}
        </Heading>
        <TitleLinkType
          v-if="'relationType' in link"
          :link-type="`${link.relationType.charAt(0).toUpperCase()}${link.relationType.slice(1).toLowerCase()}`"
        />
        <TitleLinkProperties
          :format="formatFormat(link.type)"
          :status="link.status || 'Unknown'"
        />
      </div>
      <div class="link-info-block">
        <TitleLinkButton :title-id="link.id.toString()" :format="link.type" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.link {
  display: flex;
  flex-direction: row;
  gap: 10px;
  text-decoration: none;
  min-width: 338px;
}

.link:visited {
  color: var(--fg0);
}

.link-info {
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  padding-bottom: 10px;
}

.link-info-block {
  display: flex;
  flex-direction: column;
  gap: 0;
}

.title-link-heading {
  display: -webkit-box;
  -webkit-box-orient: vertical;
  -webkit-line-clamp: 2;
  overflow: hidden;
  white-space: normal;
  word-break: break-word;
}

@media (max-width: 1239px) {
  .link {
    min-width: min(calc(100vw - 40px), 400px);
    max-width: 400px !important;
  }

  .title-link-heading {
    text-align: left;
  }
}
</style>
