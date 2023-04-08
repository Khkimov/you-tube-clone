<template>
  <DropdownSettingsHeader
      title="Choose your location"
      @back="emit('select-menu', 'main')"
  />
  <section class="py-2">
    <ul class="max-h-96 overflow-auto">
      <DropdownSettingsListItem
          v-for="(location, locationId) in locations"
          :key="locationId"
          :label="location"
          :active="locationId === selectedLocationId"
          @click="selectedLocationId = locationId"
      />
    </ul>
  </section>
</template>

<script setup>
import {ref} from "vue";
import DropdownSettingsListItem from "./DropdownSettingsListItem.vue";
import DropdownSettingsHeader from "./DropdownSettingsHeader.vue";

const selectedLocationId = ref(0)
const locations = ref(['TJK', 'UK', 'Russia'])
const emit = defineEmits(['select-menu'])
</script>