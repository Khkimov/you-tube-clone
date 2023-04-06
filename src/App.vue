<template>
  <TheHeader @toggle-sidebar="toggleSidebar"/>
  <TheSidebarCompact v-if="isCompactSidebarOpen" />
  <TheSidebar v-if="isSidebarOpen" />
  <TheMobileSidebar
      :is-open="isSidebarMobileOpen"
      @close="closeSidebarMobile"
  />
  <TheCategories :is-sidebar-open="isSidebarOpen" />
  <TheVideos :is-sidebar-open="isSidebarOpen" />
</template>

<script setup>
import TheHeader from "./components/TheHeader.vue";
import TheSidebarCompact from "./components/TheSidebarCompact.vue";
import TheSidebar from "./components/TheSidebar.vue";
import TheMobileSidebar from "./components/TheMobileSidebar.vue";
import TheCategories from "./components/TheCategories.vue";
import TheVideos from "./components/TheVideos.vue";
import {onMounted, ref} from "vue";

const isCompactSidebarActive = ref(false)
const isSidebarMobileOpen = ref(false)
const isCompactSidebarOpen = ref(false)
const isSidebarOpen = ref(false)

onMounted(() => {
  onResize()

  window.addEventListener('resize', onResize)
})

const onResize = () => {
  if (window.innerWidth < 768) {
    isCompactSidebarOpen.value = false
    isSidebarOpen.value = false
  } else if (window.innerWidth < 1280) {
    isCompactSidebarOpen.value = true
    isSidebarOpen.value = false
  } else {
    isCompactSidebarOpen.value = isCompactSidebarActive.value
    isSidebarOpen.value = !isCompactSidebarActive.value
    isSidebarMobileOpen.value = false
  }
}

const toggleSidebar = () => {
  if (window.innerWidth >= 1280) {
    isCompactSidebarActive.value = !isCompactSidebarActive.value
    onResize()
  } else {
    openSidebarMobile()
  }
}
const openSidebarMobile = () => {
  return isSidebarMobileOpen.value = true
}

const closeSidebarMobile = () => {
  return isSidebarMobileOpen.value = false
}
</script>
