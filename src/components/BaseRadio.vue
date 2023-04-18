<template>
  <input type="radio" class="h5 w-5 cursor-pointer" :id="id" v-bind="$attrs" v-model="modelValue" />
  <label v-if="$slots.default" :for="id" class="pl-4 cursor-pointer flex-grow">
    <slot />
  </label>
</template>

<script setup>
import { toRefs } from 'vue'

const props = defineProps({
  id: String,
  modelValue: String
})

const { id, modelValue } = toRefs(props)
</script>
