<template>
  <header :class="classes">
    <div :class="leftSideClasses">
      <div class="flex items-center xl:w-64 xl:bg-white pl-4">
        <button class="mr-3 sm:ml-2 sm:mr-6 focus:outline-none" @click="emit('toggleSidebar')">
          <BaseIcon name="menu" />
        </button>
        <LogoMain />
      </div>
    </div>
    <TheSearchWrapper
      v-show="isSearchShown"
      :is-small-screen="isSmallScreen"
      @close="closeMobileSearch"
      @open-voice-modal="isVoiceModalOpen = true"
    />
    <div :class="rightSideClasses">
      <BaseTooltip text="Search with your voice">
        <button class="sm:hidden p-2 focus:outline-none" @click="isVoiceModalOpen = true">
          <BaseIcon name="microphone" class="w-5 h-5" />
        </button>
      </BaseTooltip>
      <BaseTooltip text="Search">
        <button @click.stop="isMobileSearchActive = true" class="sm:hidden p-2 focus:outline-none">
          <BaseIcon name="search" class="w-5 h-5" />
        </button>
      </BaseTooltip>
      <TheDropdownApps />
      <TheDropdownSettings />
      <ButtonLogin />
    </div>
  </header>
  <teleport to="body">
    <BaseModal v-if="isVoiceModalOpen" @close="isVoiceModalOpen = false" />
  </teleport>
</template>

<script setup>
import { computed, onMounted, onUnmounted, provide, ref } from 'vue'
import TheDropdownApps from './TheDropdownApps.vue'
import TheDropdownSettings from './TheDropdownSettings.vue'
import LogoMain from './LogoMain.vue'
import ButtonLogin from './ButtonLogin.vue'
import BaseIcon from './BaseIcon.vue'
import BaseTooltip from './BaseTooltip.vue'
import TheSearchWrapper from './TheSearchWrapper.vue'
import BaseModal from './BaseModal.vue'

const emit = defineEmits(['toggleSidebar'])
const isSmallScreen = ref(false)
const isMobileSearchActive = ref(false)
const isVoiceModalOpen = ref(false)
const classes = ref(['flex', 'justify-between', 'w-full', 'bg-white', 'bg-opacity-95'])
provide(
  'isMobileSearchActive',
  computed(() => isMobileSearchActive.value)
)

const onResize = () => {
  if (window.innerWidth < 640) {
    isSmallScreen.value = true
    return
  }

  closeMobileSearch()
  isSmallScreen.value = false
}

const closeMobileSearch = () => {
  isMobileSearchActive.value = false
}

const isSearchShown = computed(() => {
  return isMobileSearShown.value || !isSmallScreen.value
})

const isMobileSearShown = computed(() => {
  return isSmallScreen.value && isMobileSearchActive.value
})

const leftSideClasses = computed(() => {
  return ['lg:w-1/4', 'flex', opacity.value]
})
const rightSideClasses = computed(() => {
  return [
    'flex',
    'items-center',
    'justify-end',
    'lg:w-1/4',
    'sm:space-x-3',
    'p-2',
    'sm:px-4',
    opacity.value
  ]
})

const opacity = computed(() => {
  return isMobileSearShown.value ? 'opacity-0' : 'opacity-100'
})

onMounted(() => {
  onResize()
  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
})
</script>
