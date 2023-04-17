<template>
  <input
    type="checkbox"
    :id="props.id"
    v-bind="$attrs"
    v-model="props.modelValue"
    class="h-5 w-5 cursor-pointer"
  />
  <label v-if="$slots.default" :for="props.id" class="pl-4 cursor-pointer flex-grow">
    <slot />
  </label>
</template>

<script setup>
const props = defineProps({
  id: Number,
  modelValue: Array
})
</script>
