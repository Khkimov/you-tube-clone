<template>
  <div class="space-y-3 text-black text-sm mt-5">
    <div v-for="(label, index) in props.searchPredictions" :key="label" class="flex items-center">
      <BaseCheckbox
        :id="`search-prediction-${index}`"
        :value="label"
        v-bind="$attrs"
        v-model="props.modelValue"
      >
        {{ label }}
      </BaseCheckbox>
    </div>
  </div>
</template>

<script setup>
import BaseCheckbox from './BaseCheckbox.vue'

const props = defineProps({
  searchPredictions: Array,
  modelValue: Array
})
</script>
