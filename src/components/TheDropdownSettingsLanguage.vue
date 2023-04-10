<template>
  <DropdownSettingsHeader
      title="Choose your language"
      @back="emit('close')"
  />
  <section class="py-2">
    <ul class="max-h-96 overflow-auto">
      <DropdownSettingsListItem
          v-for="(language, languageId) in languages"
          :key="languageId"
          :label="language"
          :active="languageId === props.selectedOptions.language.id"
          @click="selectOption({ id: languageId, text: language})"
      />
    </ul>
  </section>
</template>

<script setup>
import {ref} from "vue";
import DropdownSettingsListItem from "./DropdownSettingsListItem.vue";
import DropdownSettingsHeader from "./DropdownSettingsHeader.vue";

const languages = ref(['English', 'Russia'])
const emit = defineEmits(['close', 'select-option'])
const props = defineProps(['selectedOptions'])

const selectOption = (language) => {
  emit('select-option', { name: 'language', value: language })
}
</script>