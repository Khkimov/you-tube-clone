<template>
  <div class="flex items-start mt-3">
    <img :src="`https://picsum.photos/seed/avatar${props.index}/68`" class="mr-3 rounded-full w-9 h-9" alt="">
    <div class="text-sm">
      <span class="font-semibold text-gray-800">Video title</span>
      <div class="mt-1 flex items-center">
        <span>Channel name {{ props.index }}</span>
        <BaseIcon name="checkCircle" class="w-3.5 h-3.5 ml-1" />
      </div>
      <div v-html="summary"></div>
    </div>
    <button class="-mt-1 ml-auto p-1 opacity-0 group-hover:opacity-100 text-gray-500 hover:text-gray-700 focus:outline-none">
      <BaseIcon name="dotsVertical" />
    </button>
  </div>
</template>

<script setup>
import BaseIcon from "./BaseIcon.vue";
import {computed} from "vue";

const props = defineProps({
  index: {
    type: Number
  }
})

const summary = computed(() => {
  const days = props.index === 1 ? 'day' : 'days'
  return `${props.index}K views &middot; ${ props.index } ${days} ago`
})
</script>
