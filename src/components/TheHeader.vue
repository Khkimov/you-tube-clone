<template>
  <header :class="classes">
    <div :class="['lg:w-1/4', 'flex', isMobileSearShown ? 'opacity-0' : 'opacity-100']">
      <div class="flex items-center xl:w-64 xl:bg-white pl-4">
        <button class="mr-3 sm:ml-2 sm:mr-6 focus:outline-none" @click="$emit('toggleSidebar')">
          <BaseIcon name="menu" />
        </button>
        <LogoMain />
      </div>
    </div>
    <TheSearchMobile v-if="isMobileSearShown" @close="closeMobileSearch">
      <TheSearch :search-query="searchQuery" @update-search-query="searchQuery = $event" />
    </TheSearchMobile>
    <TheSearchMain v-else>
      <TheSearch :search-query="searchQuery" @update-search-query="searchQuery = $event" />
    </TheSearchMain>
    <div
      :class="[
        'flex',
        'items-center',
        'justify-end',
        'lg:w-1/4',
        'sm:space-x-3',
        'p-2',
        'sm:px-4',
        isMobileSearShown ? 'opacity-0' : 'opacity-100'
      ]"
    >
      <BaseTooltip text="Search with your voice">
        <button class="sm:hidden p-2 focus:outline-none">
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
</template>

<script setup>
import TheDropdownApps from './TheDropdownApps.vue'
import TheDropdownSettings from './TheDropdownSettings.vue'
import LogoMain from './LogoMain.vue'
import TheSearch from './TheSearch.vue'
import TheSearchMobile from './TheSearchMobile.vue'
import ButtonLogin from './ButtonLogin.vue'
import BaseIcon from './BaseIcon.vue'
import BaseTooltip from './BaseTooltip.vue'
import { computed, onMounted, onUnmounted, ref } from 'vue'
import TheSearchMain from './TheSearchMain.vue'

const isSmallScreen = ref(false)
const isMobileSearchActive = ref(false)
const classes = ref(['flex', 'justify-between', 'w-full', 'bg-white', 'bg-opacity-95'])
const searchQuery = ref('')

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

const isMobileSearShown = computed(() => {
  return isSmallScreen.value && isMobileSearchActive.value
})

onMounted(() => {
  onResize()
  window.addEventListener('resize', onResize)
})

onUnmounted(() => {
  window.removeEventListener('resize', onResize)
})
</script>
