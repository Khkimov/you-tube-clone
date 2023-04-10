<template>
  <DropdownSettingsHeader
      title="Choose your location"
      @back="emit('close')"
  />
  <section class="py-2">
    <ul class="max-h-96 overflow-auto">
      <DropdownSettingsListItem
          v-for="(location, locationId) in locations"
          :key="locationId"
          :label="location"
          :active="locationId === props.selectedOptions.location.id"
          @click="selectOption({ id: locationId, text: location})"
      />
    </ul>
  </section>
</template>

<script setup>
import {ref} from "vue";
import DropdownSettingsListItem from "./DropdownSettingsListItem.vue";
import DropdownSettingsHeader from "./DropdownSettingsHeader.vue";

const locations = ref(['TJK', 'UK', 'Russia'])
const emit = defineEmits(['close', 'select-option'])
const props = defineProps(['selectedOptions'])

const selectOption = (location) => {
  emit('select-option', { name: 'location', value: location })
}
</script>