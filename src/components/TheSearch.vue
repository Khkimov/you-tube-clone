<template>
  <div class="flex w-full mr-2">
    <div class="relative flex w-full">
      <TheSearchInput
        v-model:query="query"
        @update:query="updateSearchResults"
        @change-state="toggleSearchResults"
        :has-results="results.length"
        @keyup.up="handlePreviousSearchResult"
        @keyup.down="handleNextSearchResult"
        @enter="selectSearchResult"
        @keydown.up.prevent
      />
      <TheSearchResults
        v-show="isSearchResultsShown"
        :results="results"
        :active-result-id="activeSearchResultId"
        @search-result-mouseenter="activeSearchResultId = $event"
        @search-result-mouseleave="activeSearchResultId = null"
        @search-result-click="selectSearchResult"
      />
    </div>
    <TheSearchButton
        @click.stop="selectSearchResult"
    />
  </div>
</template>

<script setup>
import TheSearchInput from './TheSearchInput.vue'
import TheSearchButton from './TheSearchButton.vue'
import TheSearchResults from './TheSearchResults.vue'
import { computed, onBeforeUnmount, onMounted, ref, watch } from 'vue'

const props = defineProps(['searchQuery'])
const emit = defineEmits(['update-search-query'])

const results = ref([])
const query = ref(props.searchQuery)
const activeQuery = ref(props.searchQuery)
const activeSearchResultId = ref(null)
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

const updateSearchResults = () => {
  activeSearchResultId.value = null
  activeQuery.value = query.value

  if (query.value === '') {
    results.value = []
  } else {
    results.value = keywords.value.filter((result) => {
      return result.includes(trimmedQuery.value)
    })
  }
}

const trimmedQuery = computed(() => {
  return query.value.replace(/\s+/g, ' ').trim()
})

const toggleSearchResults = (isSearchInputActive) => {
  isSearchResultsShown.value = isSearchInputActive && results.value.length > 0
}

const handleClick = () => {
  toggleSearchResults(false)
}

onMounted(() => {
  document.addEventListener('click', handleClick)
})

onBeforeUnmount(() => {
  document.removeEventListener('click', handleClick)
})

const handlePreviousSearchResult = () => {
  if (isSearchResultsShown.value) {
    makePreviousSearchResultActive()
    updateQueryWithSearchResult()
  } else {
    toggleSearchResults(true)
  }
}

const handleNextSearchResult = () => {
  if (isSearchResultsShown.value) {
    makeNextSearchResultActive()
    updateQueryWithSearchResult()
  } else {
    toggleSearchResults(true)
  }
}

watch(
  () => query.value,
  (newValue, oldValue) => {
    emit('update-search-query', newValue)
  }
)

const makePreviousSearchResultActive = () => {
  if (activeSearchResultId.value === null) {
    activeSearchResultId.value = results.value.length - 1
  } else if (activeSearchResultId.value === 0) {
    activeSearchResultId.value = null
  } else {
    activeSearchResultId.value--
  }
}

const makeNextSearchResultActive = () => {
  if (activeSearchResultId.value === null) {
    activeSearchResultId.value = 0
  } else if (activeSearchResultId.value + 1 === results.value.length) {
    activeSearchResultId.value = null
  } else {
    activeSearchResultId.value++
  }
}

const updateQueryWithSearchResult = () => {
  const hasActiveSearchResult = activeSearchResultId.value !== null

  query.value = hasActiveSearchResult
    ? results.value[activeSearchResultId.value]
    : activeQuery.value
}

const selectSearchResult = () => {
  query.value = activeSearchResultId.value ? results.value[activeSearchResultId.value] : query.value

  toggleSearchResults(false)
  updateSearchResults()
}
</script>
