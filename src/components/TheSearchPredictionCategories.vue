<template>
  <div class="space-y-3 text-black text-sm mt-5">
    <div v-for="(label, index) in categories" :key="label" class="flex items-center">
      <BaseRadio
        :id="`search-prediction-category-${index}`"
        :value="label"
        v-bind="$attrs"
        v-model="modelValue"
      >
        {{ label }}
      </BaseRadio>
    </div>
  </div>
</template>

<script setup>
import { toRefs } from 'vue'
import BaseRadio from './BaseRadio.vue'

const props = defineProps({
  categories: Array,
  modelValue: String
})

const { categories, modelValue } = toRefs(props)
</script>
