<template>
  <div :class="classes">
    <ul>
      <li
        v-for="(text, id) in props.results"
        :key="text"
        :class="getItemClasses(id)"
        @mouseenter="emit('search-result-mouseenter', id)"
        @mouseleave="emit('search-result-mouseleave')"
        @click.stop="emit('search-result-click')"
      >
        <span @mouseenter="emit('search-result-mouseenter', id)">
          {{ text }}
        </span>
      </li>
    </ul>
    <a href="#" :class="reportLinkClasses" @click="openSearchPredictionsModal">
      Report search predictions
    </a>
    <teleport to="body">
      <TheModalSearchPredictions
        v-if="isSearchPredictionsModalOpen"
        :search-predictions="props.results"
        @close="isSearchPredictionsModalOpen = false"
      />
    </teleport>
  </div>
</template>

<script setup>
import { ref } from 'vue'
import TheModalSearchPredictions from './TheModalSearchPredictions.vue'

const isSearchPredictionsModalOpen = ref(false)

const props = defineProps({
  results: Array,
  activeResultId: null
})
const emit = defineEmits([
  'search-result-mouseenter',
  'search-result-mouseleave',
  'search-result-click'
])

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

const getItemClasses = (resultId) => {
  return [
    resultId === props.activeResultId ? 'bg-gray-100' : 'bg-transparent',
    'text-black',
    'px-3',
    'py-1',
    'select-none',
    'truncate'
  ]
}

const openSearchPredictionsModal = () => {
  isSearchPredictionsModalOpen.value = true
}
</script>
