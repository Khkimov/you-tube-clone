<template>
  <div class="flex w-full mr-2">
    <div class="relative flex w-full">
      <TheSearchInput
        v-model:query="query"
        @change-state="toggleSearchResults"
        :has-results="results.length"
      />
      <TheSearchResults v-show="isSearchResultsShown" :results="results" />
    </div>
    <TheSearchButton />
  </div>
</template>

<script setup>
import TheSearchInput from './TheSearchInput.vue'
import TheSearchButton from './TheSearchButton.vue'
import TheSearchResults from './TheSearchResults.vue'
import { computed, ref, watch } from 'vue'

const props = defineProps(['searchQuery'])
const emit = defineEmits(['update-search-query'])
const query = ref(props.searchQuery)
const isSearchResultsShown = ref(false)
const keywords = ref([
  'new york giants',
  'new york alicia keys',
  'new york giants vs washington football',
  'new york',
  'new york song',
  'new york new york frank sinatra',
  'new york jets',
  'new york city',
  'new york giants live',
  'new york state of mind',
  'new york giants vs washington football live',
  'new york giants injury',
  'new york giants live stream',
  'new york accent'
])

const results = computed(() => {
  if (!query.value) {
    return []
  }

  return keywords.value.filter((result) => {
    return result.includes(trimmedQuery.value)
  })
})

const trimmedQuery = computed(() => {
  return query.value.replace(/\s+/g, ' ').trim()
})

const toggleSearchResults = (isSearchInputActive) => {
  isSearchResultsShown.value = isSearchInputActive && results.value.length
}

watch(
  () => query.value,
  (newValue, oldValue) => {
    emit('update-search-query', newValue)
  }
)
</script>
