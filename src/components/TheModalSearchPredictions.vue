<template>
  <BaseModal class="md:w-4/5 max-w-2xl">
    <p class="text-base text-black tracking-wide">Report search predictions</p>
    <TheSearchPredictionsList
      v-model="selectedSearchPredictions"
      :search-predictions="props.searchPredictions"
    />
    <p class="text-xs text-gray-600 mt-5">The selected predictions are:</p>
    <TheSearchPredictionCategories
      v-model="selectedSearchPredictionCategory"
      :categories="searchPredictionCategories"
    />
    <div class="text-black text-sm mt-6">
      <BaseTextarea v-model="searchPredictionDetails" />
    </div>
    <template #footer="{ close }">
      <BaseButton @click="close" class="ml-auto">Cancel</BaseButton>
      <BaseButton class="ml-1 text-gray-400 cursor-auto" disabled> Report </BaseButton>
    </template>
  </BaseModal>
</template>

<script setup>
import { ref } from 'vue'
import BaseModal from './BaseModal.vue'
import TheSearchPredictionsList from './TheSearchPredictionsList.vue'
import BaseButton from './BaseButton.vue'
import TheSearchPredictionCategories from './TheSearchPredictionCategories.vue'
import BaseTextarea from './BaseTextarea.vue'

const props = defineProps({
  searchPredictions: Array
})
const selectedSearchPredictions = ref([])
const selectedSearchPredictionCategory = ref(null)
const searchPredictionCategories = ref([
  'Hateful',
  'Sexually Explicit',
  'Violent',
  'Dangerous and harmful activity',
  'Other'
])
const searchPredictionDetails = ref('')
</script>
