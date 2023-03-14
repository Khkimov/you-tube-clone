<template>
  <TheHeader />
  <TheSmallSideBar />
  <TheSidebar/>
  <TheMobileSidebar/>
  <TheCategories/>
  <TheVideos/>
</template>

<script>
import {defineComponent} from "vue";
import TheHeader from "./components/TheHeader.vue";
import TheSmallSideBar from "./components/TheSmallSideBar.vue";
import TheSidebar from "./components/TheSidebar.vue";
import TheMobileSidebar from "./components/TheMobileSidebar.vue";
import TheCategories from "./components/TheCategories.vue";
import TheVideos from "./components/TheVideos.vue";

export default defineComponent({
  components: {TheVideos, TheCategories, TheMobileSidebar, TheSidebar, TheSmallSideBar, TheHeader}
})
</script>
