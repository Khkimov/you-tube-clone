<template>
  <section class="py-2 border-b">
    <ul>
      <DropdownSettingsListItem
        v-for="menuItem in props.menuItems.slice(0, 8)"
        :key="menuItem.label"
        :label="menuItem.label"
        :icon="menuItem.icon"
        :with-sub-menu="menuItem.withSubMenu"
        @click.stop="selectMenu(menuItem)"
      />
    </ul>
  </section>
  <section class="py-2">
    <ul>
      <DropdownSettingsListItem
        :label="menuItems[8].label"
        :icon="menuItems[8].icon"
        :with-sub-menu="menuItems[8].withSubMenu"
        @click.stop="selectMenu(menuItems[8])"
      />
    </ul>
  </section>
</template>

<script setup>
import DropdownSettingsListItem from './DropdownSettingsListItem.vue'
import { ref } from 'vue'

const emit = defineEmits(['select-menu'])
const props = defineProps(['menuItems'])

const selectMenu = (menuItem) => {
  if (menuItem.withSubMenu) {
    emit('select-menu', menuItem)
  }
}
</script>
