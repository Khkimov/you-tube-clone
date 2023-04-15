<template>
  <div ref="root" :class="classes">
    <BaseTooltip v-if="props.isSmallScreen" text="Back" right>
      <button @click="emit('close')" class="mr-2 p-2 focus:outline-none">
        <BaseIcon name="arrowLeft" class="w-5 h-5" />
      </button>
    </BaseTooltip>
    <TheSearch />
    <BaseTooltip text="Search with your voice" :left="props.isSmallScreen">
      <button class="p-2 focus:outline-none">
        <BaseIcon name="microphone" class="w-5 h-5" />
      </button>
    </BaseTooltip>
  </div>
</template>

<script setup>
import BaseIcon from './BaseIcon.vue'
import BaseTooltip from './BaseTooltip.vue'
import TheSearch from './TheSearch.vue'
import { computed, onBeforeUnmount, onMounted, ref } from 'vue'

const props = defineProps(['isSmallScreen'])
const emit = defineEmits(['close'])
const root = ref(null)

const onClick = (event) => {
  if (!root.value.contains(event.target)) {
    emit('close')
  }
}

onMounted(() => {
  window.addEventListener('click', onClick)
})

onBeforeUnmount(() => {
  window.removeEventListener('click', onClick)
})

const classes = computed(() => {
  return props.isSmallScreen
    ? ['absolute', 'w-full', 'p-2', 'z-10', 'flex']
    : [
        'hidden',
        'sm:flex',
        'items-center',
        'justify-end',
        'p-2.5',
        'pl-8',
        'md:pl-12',
        'md:px-8',
        'flex-1',
        'lg:px-0',
        'lg:w-1/2',
        'max-w-screen-md'
      ]
})
</script>
