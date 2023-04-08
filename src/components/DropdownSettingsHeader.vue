<template>
  <section class="flex border-b border-gray-200 text-black">
    <button
        @click.stop="emit('back')"
        class="px-3 focus:outline-none">
      <BaseIcon name="arrowLeft" class="w-5 h-5" />
    </button>
    <span class="py-3">{{ props.title }}</span>
  </section>
</template>

<script setup>
import BaseIcon from "./BaseIcon.vue";

const emit = defineEmits(['back'])
const props = defineProps({
  title: String
})
</script>