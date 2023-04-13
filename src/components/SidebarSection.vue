<template>
  <section :class="useAttrs.class || 'py-2 border-b'">
    <slot></slot>
  </section>
</template>

<script setup>
import { useAttrs } from 'vue'
</script>
