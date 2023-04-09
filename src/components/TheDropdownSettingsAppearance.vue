<template>
  <DropdownSettingsHeader
      title="Appearance"
      @back="emit('select-menu', 'main')"
  />
  <section class="py-2">
    <div class="text-gray-500 text-xs p-3">Setting applies to this browser only</div>
    <ul>
      <DropdownSettingsListItem
          v-for="(theme, themeId) in themes"
          :key="themeId"
          :label="theme"
          :active="themeId === props.selectedOptions.themeId"
          @click="selectOption(themeId)"
      />
    </ul>
  </section>
</template>

<script setup>
import {ref} from "vue";
import DropdownSettingsListItem from "./DropdownSettingsListItem.vue";
import DropdownSettingsHeader from "./DropdownSettingsHeader.vue";

const themes = ref(['Use device theme', 'Dark theme', 'Light theme'])
const emit = defineEmits(['select-menu', 'select-option'])
const props = defineProps(['selectedOptions'])

const selectOption = (themeId) => {
  emit('select-option', { name: 'themeId', value: themeId })
}
</script>