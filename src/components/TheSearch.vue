<template>
<!--  <div-->
<!--      class="hidden sm:flex items-center justify-end p-2.5 pl-8 md:pl-12 md:px-8 flex-1 lg:px-0 lg:w-1/2 max-w-screen-md">-->
  <div class="flex w-full h-full">
    <TheSearchInput/>
    <TheSearchButton/>
  </div>
<!--  </div>-->
</template>

<script setup>

import TheSearchInput from "./TheSearchInput.vue";
import TheSearchButton from "./TheSearchButton.vue";
</script>

<style lang="scss" scoped>

</style>