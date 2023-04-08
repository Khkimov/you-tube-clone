<template>
  <div class="flex w-full">
    <input
        ref="inputRef"
        type="text"
        placeholder="Search"
        :class="classes">
  </div>
</template>

<script setup>
import {computed, onMounted, ref} from "vue";

const inputRef = ref(null)

onMounted(() => {
  if (window.innerWidth < 640) {
    inputRef.value.focus()
  }
})

const classes = computed(() => {
  return [
    'w-full',
    'px-3',
    'shadow-inner',
    'rounded-bl-sm',
    'rounded-tl-sm',
    'border',
    'border-gray-300',
    'focus:border-blue-700',
    'focus:outline-none'
  ]
})
</script>