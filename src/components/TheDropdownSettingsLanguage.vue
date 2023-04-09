<template>
  <DropdownSettingsHeader
      title="Choose your language"
      @back="emit('select-menu', 'main')"
  />
  <section class="py-2">
    <ul class="max-h-96 overflow-auto">
      <DropdownSettingsListItem
          v-for="(language, languageId) in languages"
          :key="languageId"
          :label="language"
          :active="languageId === props.selectedOptions.languageId"
          @click="selectOption(languageId)"
      />
    </ul>
  </section>
</template>

<script setup>
import {ref} from "vue";
import DropdownSettingsListItem from "./DropdownSettingsListItem.vue";
import DropdownSettingsHeader from "./DropdownSettingsHeader.vue";

const languages = ref(['English', 'Russia'])
const emit = defineEmits(['select-menu', 'select-option'])
const props = defineProps(['selectedOptions'])

const selectOption = (languageId) => {
  emit('select-option', { name: 'languageId', value: languageId })
}
</script>