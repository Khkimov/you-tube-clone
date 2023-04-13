<template>
  <DropdownSettingsHeader title="Appearance" @back="emit('close')" />
  <section class="py-2">
    <div class="text-gray-500 text-xs p-3">Setting applies to this browser only</div>
    <ul>
      <DropdownSettingsListItem
        v-for="(themeName, themeId) in themes"
        :key="themeId"
        :label="themeName"
        :active="themeId === props.selectedOptions.theme.id"
        @click="selectOption({ id: themeId, text: themeName })"
      />
    </ul>
  </section>
</template>

<script setup>
import { ref } from 'vue'
import DropdownSettingsListItem from './DropdownSettingsListItem.vue'
import DropdownSettingsHeader from './DropdownSettingsHeader.vue'

const themes = ref(['Device theme', 'Dark theme', 'Light theme'])
const emit = defineEmits(['close', 'select-option'])
const props = defineProps(['selectedOptions'])

const selectOption = (theme) => {
  emit('select-option', { name: 'theme', value: theme })
}
</script>
