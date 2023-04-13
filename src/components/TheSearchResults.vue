<template>
  <div :class="classes">
    <ul>
      <li v-for="(text, id) in props.results" :key="text" :class="itemClasses(id)">
        {{ text }}
      </li>
    </ul>
    <a href="#" :class="reportLinkClasses">Report search predictions</a>
  </div>
</template>

<script setup>
import { computed } from 'vue'

const props = defineProps({
  results: Array,
  activeResultId: null
})

const classes = [
  'absolute',
  'top-full',
  'w-full',
  'bg-white',
  'border',
  'border-t-0',
  'border-gray-300',
  'shadow-md',
  'pt-4'
]
const reportLinkClasses = [
  'w-full',
  'inline-block',
  'text-right',
  'text-xs',
  'italic',
  'text-gray-500',
  'hover:text-black',
  'pr-2'
]

const itemClasses = computed(() => {
  return (resultId) => [
    resultId === props.activeResultId ? 'bg-gray-100' : 'hover:bg-gray-100',
    'text-black',
    'px-3',
    'py-1',
    'select-none',
    'truncate'
  ]
})
</script>
