<template>
  <div class="relative" ref="root">
    <BaseTooltip text="Settings">
      <button @click="toggle" class="relative p-2 focus:outline-none">
        <BaseIcon name="dotsVertical" class="w-5 h-5" />
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
        @keydown.esc="close"
        :class="dropdownClasses"
      >
        <component
          v-if="selectedMenu"
          :is="menu"
          :selected-options="selectedOptions"
          @select-option="selectOption"
          @close="closeMenu"
        />
        <TheDropdownSettingsMain v-else :menu-items="menuItems" @select-menu="selectMenu" />
      </div>
    </transition>
  </div>
</template>

<script setup>
import { computed, defineAsyncComponent, nextTick, onMounted, reactive, ref, watch } from 'vue'
import BaseIcon from './BaseIcon.vue'
import BaseTooltip from './BaseTooltip.vue'
import TheDropdownSettingsMain from './TheDropdownSettingsMain.vue'

const isOpen = ref(false)
const root = ref(null)
const dropdownSetting = ref(null)
const selectedMenu = ref(null)
const dropdownClasses = ref([
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
])
const selectedOptions = reactive({
  theme: {
    id: 0,
    text: 'Device theme'
  },
  language: {
    id: 0,
    text: 'English'
  },
  location: {
    id: 0,
    text: 'TJK'
  },
  restrictedMode: {
    enabled: false,
    text: 'Off'
  }
})

onMounted(() => {
  window.addEventListener('click', (event) => {
    if (!root.value.contains(event.target)) {
      close()
    }
  })
})

const open = () => {
  isOpen.value = true
}
const close = () => {
  isOpen.value = false

  setTimeout(() => closeMenu, 100)
}

const selectMenu = (menuItem) => {
  selectedMenu.value = menuItem

  dropdownSetting.value.focus()
}
const closeMenu = () => {
  selectMenu(null)
}

const selectOption = (option) => {
  selectedOptions[option.name] = option.value
}

const toggle = () => {
  isOpen.value ? close() : open()
}

watch(
  () => isOpen.value,
  (newValue, oldValue) => {
    nextTick(() => isOpen.value && dropdownSetting.value.focus())
  }
)

const menu = computed(() => {
  const menuComponentNames = {
    appearance: './TheDropdownSettingsAppearance.vue',
    language: './TheDropdownSettingsLanguage.vue',
    location: './TheDropdownSettingsLocation.vue',
    restricted_mode: './TheDropdownSettingsRestrictedMode.vue'
  }

  return selectedMenu.value
    ? defineAsyncComponent(() => import(menuComponentNames[selectedMenu.value.id]))
    : null
})

const menuItems = computed(() => {
  return [
    {
      id: 'appearance',
      label: 'Appearance: ' + selectedOptions.theme.text,
      icon: 'sun',
      withSubMenu: true
    },
    {
      id: 'language',
      label: 'Language: ' + selectedOptions.language.text,
      icon: 'translate',
      withSubMenu: true
    },
    {
      id: 'location',
      label: 'Location: ' + selectedOptions.location.text,
      icon: 'globeAlt',
      withSubMenu: true
    },
    {
      id: 'settings',
      label: 'Settings',
      icon: 'cog',
      withSubMenu: false
    },
    {
      id: 'your_data_in_youTube',
      label: 'Your data in YouTube',
      icon: 'shieldCheck',
      withSubMenu: false
    },
    {
      id: 'help',
      label: 'Help',
      icon: 'questionMarkCircle',
      withSubMenu: false
    },
    {
      id: 'send_feedback',
      label: 'Send feedback',
      icon: 'chatAlt',
      withSubMenu: false
    },
    {
      id: 'keyboard_shortcuts',
      label: 'Keyboard shortcuts',
      icon: 'calculator',
      withSubMenu: false
    },
    {
      id: 'restricted_mode',
      label: 'Restricted Mode: ' + selectedOptions.restrictedMode.text,
      icon: null,
      withSubMenu: true
    }
  ]
})
</script>
