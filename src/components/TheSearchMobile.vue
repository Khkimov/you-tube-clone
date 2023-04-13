<template>
  <div ref="root" class="absolute w-full p-2 z-10 flex">
    <BaseTooltip text="Back" right>
      <button @click="emit('close')" class="mr-2 p-2 focus:outline-none">
        <BaseIcon name="arrowLeft" class="w-5 h-5" />
      </button>
    </BaseTooltip>
    <TheSearch />
    <BaseTooltip text="Search with your voice" left>
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
import { onBeforeUnmount, onMounted, ref } from 'vue'

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
</script>
