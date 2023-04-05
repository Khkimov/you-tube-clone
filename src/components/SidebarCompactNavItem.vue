<template>
  <li>
    <a href="#" :class="classes">
      <BaseIcon :name="props.icon" class="w-6 h-6 mb-1.5" />
      <span class="text-xs">{{ props.label }}</span>
    </a>
  </li>
</template>

<script setup>
import {computed} from "vue";
import BaseIcon from "./BaseIcon.vue";

const props = defineProps({
  isActive: Boolean,
  label: String,
  icon: String
})

const classes = computed(() => {
  const classes = [
    'flex',
    'flex-col',
    'items-center',
    'px-2',
    'py-5',
    'hover:bg-gray-100'
  ]
  return props.isActive ? [...classes, 'text-red-500'] : classes
})

</script>