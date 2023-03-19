<template>
  <a href="#" class="mb-7 group">
    <VideoItemThumbnail :index="props.index" />
    <VideoItemInfo :index="props.index" />
  </a>
</template>

<script setup>
import VideoItemThumbnail from "./VideoItemThumbnail.vue";
import VideoItemInfo from "./VideoItemInfo.vue";

const props = defineProps({
  index: {
    type: Number
  }
})
</script>
