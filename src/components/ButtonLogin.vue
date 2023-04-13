<template>
  <button :class="classes">
    <BaseIcon name="userCircle" class="mr-2 w-7 h-7" />
    Sign In
  </button>
</template>

<script setup>
import BaseIcon from './BaseIcon.vue'
import { computed, useAttrs } from 'vue'

const classes = computed(() => {
  return (
    useAttrs.class ||
    'focus:outline-none flex items-center px-2 py-0.5 mt-3 text-sm text-blue-700 uppercase border border-blue-700 rounded-sm'
  )
})
</script>

<style lang="scss" scoped></style>
