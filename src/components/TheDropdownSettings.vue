<template>
  <div class="relative" ref="root">
    <BaseTooltip text="Settings">
    <button
        @click="isOpen = !isOpen"
        class="relative p-2 focus:outline-none">
      <BaseIcon name="dotsVertical" class="w-5 h-5"/>
    </button>
    </BaseTooltip>
    <transition
        enter-active-class="transition ease-out duration-100"
        enter-from-class="transition opacity-0 scale-95"
        enter-to-class="transform opacity-100 scale-100"
        leave-active-class="transition ease-in duration-75"
        leave-from-class="transform opacity-100 scale-100"
        leave-to-class="transform opacity-0 scale-95"
    >
      <div
          v-show="isOpen"
          ref="dropdownSetting"
          tabindex="-1"
          @keydown.esc="isOpen = false"
          :class="dropdownClasses"
      >
        <TheDropdownSettingsMain
            v-if="selectedMenu === 'main'"
            @select-menu="showSelectedMenu"
        />
        <TheDropdownSettingsAppearance
            v-else-if="selectedMenu === 'appearance'"
            @select-menu="showSelectedMenu"
        />
      </div>
    </transition>
  </div>
</template>

<script setup>
import {computed, nextTick, onMounted, ref, watch} from "vue";
import BaseIcon from "./BaseIcon.vue";
import BaseTooltip from "./BaseTooltip.vue";
import TheDropdownSettingsMain from "./TheDropdownSettingsMain.vue";
import TheDropdownSettingsAppearance from "./TheDropdownSettingsAppearance.vue";

const isOpen = ref(false)
const root = ref(null)
const dropdownSetting = ref(null)
const selectedMenu = ref('main')

onMounted(() => {
  window.addEventListener('click', event => {
    if (!root.value.contains(event.target)) {
      isOpen.value = false
    }
  })
})

watch(() => isOpen.value, (newValue, oldValue) => {
  nextTick(() => isOpen.value && dropdownSetting.value.focus())
})

const showSelectedMenu = (selected) => {
  selectedMenu.value = selected
}

const dropdownClasses = computed(() => {
  return [
    'z-10',
    'absolute',
    'top-9',
    '-right-full',
    'sm:right-0',
    'bg-white',
    'w-72',
    'border',
    'border-t-0',
    'focus:outline-none'
  ]
})
</script>
