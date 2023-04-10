<template>
  <div class="relative" ref="root">
    <BaseTooltip text="Settings">
    <button
        @click="toggle"
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
          @keydown.esc="close"
          :class="dropdownClasses"
      >
<!--        <component-->
<!--            :is="menu"-->
<!--            @select-menu="showSelectedMenu"-->
<!--            @select-option="selectOption"-->
<!--            :selected-options="selectedOptions"-->
<!--        />-->
        <TheDropdownSettingsMain
            v-if="selectedMenu === 'main'"
            @select-menu="showSelectedMenu"
            @select-option="selectOption"
            :selected-options="selectedOptions"
        />
        <TheDropdownSettingsAppearance
            v-else-if="selectedMenu === 'appearance'"
            @select-menu="showSelectedMenu"
            @select-option="selectOption"
            :selected-options="selectedOptions"
        />
        <TheDropdownSettingsLanguage
            v-else-if="selectedMenu === 'language'"
            @select-menu="showSelectedMenu"
            @select-option="selectOption"
            :selected-options="selectedOptions"
        />
        <TheDropdownSettingsLocation
            v-else-if="selectedMenu === 'location'"
            @select-menu="showSelectedMenu"
            @select-option="selectOption"
            :selected-options="selectedOptions"
        />
        <TheDropdownSettingsRestrictedMode
            v-else-if="selectedMenu === 'restricted_mode'"
            @select-menu="showSelectedMenu"
            @select-option="selectOption"
            :selected-options="selectedOptions"
        />
      </div>
    </transition>
  </div>
</template>

<script setup>
import {computed, nextTick, onMounted, reactive, ref, watch} from "vue";
import BaseIcon from "./BaseIcon.vue";
import BaseTooltip from "./BaseTooltip.vue";
import TheDropdownSettingsMain from "./TheDropdownSettingsMain.vue";
import TheDropdownSettingsAppearance from "./TheDropdownSettingsAppearance.vue";
import TheDropdownSettingsLanguage from "./TheDropdownSettingsLanguage.vue";
import TheDropdownSettingsLocation from "./TheDropdownSettingsLocation.vue";
import TheDropdownSettingsRestrictedMode from "./TheDropdownSettingsRestrictedMode.vue";

const isOpen = ref(false)
const root = ref(null)
const dropdownSetting = ref(null)
const selectedMenu = ref('main')
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
  window.addEventListener('click', event => {
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

  setTimeout(() => selectedMenu.value = 'main', 100)
}

watch(() => isOpen.value, (newValue, oldValue) => {
  nextTick(() => isOpen.value && dropdownSetting.value.focus())
})

const showSelectedMenu = (selected) => {
  selectedMenu.value = selected

  dropdownSetting.value.focus()
}

const selectOption = (option) => {
  selectedOptions[option.name] = option.value
}

const toggle = () => {
  isOpen.value ? close() : open()
}

// const menu = computed(() => {
//   const menuComponentNames = {
//     main: 'TheDropdownSettingsMain',
//     appearance: 'TheDropdownSettingsAppearance',
//     language: 'TheDropdownSettingsLanguage',
//     location: 'TheDropdownSettingsLocation',
//     restricted_mode: 'TheDropdownSettingsRestrictedMode'
//   }
//
//   return menuComponentNames[selectedMenu.value]
// })
</script>
