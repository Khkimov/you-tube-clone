<template>
  <div class="relative">
    <textarea
      v-bind="$attrs"
      v-model="modelValue"
      @input="adjustHeight"
      :maxlength="limit"
      ref="textarea"
      placeholder="Provide additional details (optional)"
      class="border rounded-sm pt-2 pb-8 px-2 resize-none w-full focus:outline-none overflow-hidden peer"
    />
    <BaseTextareaCounter>
      {{ counter }}
    </BaseTextareaCounter>
  </div>
</template>

<script setup>
import { computed, onMounted, ref, toRefs } from 'vue'
import BaseTextareaCounter from './BaseTextareaCounter.vue'

const props = defineProps({
  modelValue: String,
  limit: Number
})

const { modelValue, limit } = toRefs(props)
const textarea = ref(null)

const adjustHeight = () => {
  textarea.value.style.height = 'auto'
  textarea.value.style.height = `${textarea.value.scrollHeight}px`
}

onMounted(() => {
  adjustHeight()
})

const counter = computed(() => {
  return `${modelValue.value.length} / ${limit.value}`
})
</script>
