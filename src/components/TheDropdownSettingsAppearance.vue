<template>
  <section class="flex border-b border-gray-200 text-black">
    <button class="px-3 focus:outline-none">
      <BaseIcon name="arrowLeft" class="w-5 h-5" />
    </button>
    <span class="py-3">Appearance</span>
  </section>
  <section class="py-2">
    <div class="text-gray-500 text-xs p-3">Setting applies to this browser only</div>
    <ul>
      <DropdownSettingsListItem
          v-for="(theme, themeId) in themes"
          :key="themeId"
          :label="theme"
          :active="themeId === selectedThemeId"
          @click="selectedThemeId = themeId"
      />
    </ul>
  </section>
</template>

<script setup>
import {ref} from "vue";
import DropdownSettingsListItem from "./DropdownSettingsListItem.vue";
import BaseIcon from "./BaseIcon.vue";

const selectedThemeId = ref(0)
const themes = ref(['Use device theme', 'Dark theme', 'Light theme'])
</script>