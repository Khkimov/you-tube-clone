<template>
  <textarea
    v-bind="$attrs"
    v-model="modelValue"
    placeholder="Provide additional details (optional)"
    class="border rounded-sm pt-2 pb-5 px-2 resize-none w-full focus:outline-none"
  />
</template>

<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  modelValue: String
})

const { modelValue } = toRefs(props)
</script>
