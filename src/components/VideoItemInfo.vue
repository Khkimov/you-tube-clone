<template>
  <div class="flex items-start mt-3">
    <img :src="`https://picsum.photos/seed/avatar${props.index}/68`" class="mr-3 rounded-full w-9 h-9" alt="">
    <div class="text-sm">
      <span class="font-semibold text-gray-800">Video title</span>
      <div class="mt-1 flex">
        <BaseTooltip :text="channelName" top>
          <span>{{ channelName }}</span>
        </BaseTooltip>
        <BaseTooltip text="Verified" top>
          <BaseIcon name="checkCircle" class="w-3.5 h-3.5 ml-1"/>
        </BaseTooltip>
      </div>
      <div v-html="summary"></div>
    </div>
    <VideoItemDropdown/>
  </div>
</template>

<script setup>
import BaseIcon from "./BaseIcon.vue";
import {computed, ref} from "vue";
import VideoItemDropdown from "./VideoItemDropdown.vue";
import BaseTooltip from "./BaseTooltip.vue";

const props = defineProps({
  index: {
    type: Number
  }
})
const channelName = ref(`Channel name ${props.index}`)

const summary = computed(() => {
  const days = props.index === 1 ? 'day' : 'days'
  return `${props.index}K views &middot; ${ props.index } ${days} ago`
})
</script>
