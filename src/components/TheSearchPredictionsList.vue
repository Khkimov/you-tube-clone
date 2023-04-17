<template>
  <div class="space-y-3 text-black text-sm mt-5">
    <div v-for="(label, index) in props.searchPredictions" :key="label" class="flex items-center">
      <input
        type="checkbox"
        class="h-5 w-5 cursor-pointer"
        :id="index"
        :value="label"
        v-bind="$attrs"
        v-model="props.modelValue"
      />
      <label :for="index" class="pl-4 cursor-pointer flex-grow">
        {{ label }}
      </label>
    </div>
  </div>
</template>

<script setup>
const props = defineProps({
  searchPredictions: Array,
  modelValue: Array
})
</script>
