<template>
  <div class="uppercase text-sm font-semibold px-6 py-2">
    {{ props.title }}
  </div>
</template>

<script setup>
const props = defineProps({
  title: {
    type: String
  }
})
</script>
