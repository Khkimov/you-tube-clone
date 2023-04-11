<template>
  <div class="flex w-full mr-2">
    <div class="relative flex w-full">
      <TheSearchInput
          v-model:query="query"
          @focus="isSearchInputFocused = true"
          @blur="isSearchInputFocused = false"
      />
      <TheSearchResults v-show="isSearchResultsShow" :results="results" />
    </div>
    <TheSearchButton />
  </div>
</template>

<script setup>
import TheSearchInput from "./TheSearchInput.vue";
import TheSearchButton from "./TheSearchButton.vue";
import TheSearchResults from "./TheSearchResults.vue";
import {computed, ref} from "vue";

const query = ref('')
const isSearchInputFocused = ref(false)
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

  return keywords.value.filter(result => {
    return result.includes(trimmedQuery.value)
  })
})

const trimmedQuery = computed(() => {
  return query.value.replace(/\s+/g, ' ').trim()
})

const isSearchResultsShow = computed(() => {
  return isSearchInputFocused.value && results.value.length
})
</script>