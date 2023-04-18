<template>
  <BaseModal class="max-w-2xl" with-close-button>
    <p class="text-2xl mb-52">{{ text }}</p>
    <TheButtonSearchWithVoice @change-text="text = $event" />
  </BaseModal>
</template>

<script setup>
import { ref } from 'vue'
import BaseModal from './BaseModal.vue'
import TheButtonSearchWithVoice from './TheButtonSearchWithVoice.vue'
const text = ref(null)
</script>
