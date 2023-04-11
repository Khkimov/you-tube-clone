<template>
  <div class="relative w-full">
    <input
        ref="inputRef"
        type="text"
        placeholder="Search"
        :class="classes"
        :value="props.query"
        @input="updateQuery($event.target.value)"
    >
    <button
        class="absolute top-0 right-0 h-full px-3 focus:outline-none"
        v-show="props.query"
        @click="updateQuery('')"
    >
      <BaseIcon name="x" class="w-4 h-4"/>
    </button>
  </div>
</template>

<script setup>
import {computed, onMounted, ref} from "vue";
import BaseIcon from "./BaseIcon.vue";

const inputRef = ref(null)
const props = defineProps(['query'])
const emit = defineEmits(['update:query'])

onMounted(() => {
  if (window.innerWidth < 640) {
    inputRef.value.focus()
  }
})

const updateQuery = (query) => {
  emit('update:query', query)
}

const classes = computed(() => {
  return [
    'w-full',
    'h-full',
    'px-3',
    'shadow-inner',
    'rounded-bl-sm',
    'rounded-tl-sm',
    'border',
    'border-gray-300',
    'focus:border-blue-700',
    'focus:outline-none'
  ]
})
</script>