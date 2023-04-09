<template>
  <div>
    <section :class="classes">
      <div class="bg-white bg-opacity-95 border-t border-b px-4 max-w-screen-2xl m-auto">
        <div class="py-3 flex space-x-3 overflow-auto text-sm whitespace-nowrap">
          <CategoriesItem
              v-for="category in categories"
              :key="category"
              :category="category"
              :is-active="category === 'All'"
          />
        </div>
      </div>
    </section>
  </div>
</template>

<script setup>
import {computed, ref} from "vue";
import CategoriesItem from "./CategoriesItem.vue";

const categories = ref([
  'All',
  'Trucks',
  'Tools',
  'Machines',
  'Engines',
  'Snow',
  'Ships',
  'Roads',
  'Tanks',
  'Building',
  'Mars',
  'Woodworking',
  'Tractors',
  'Songs',
  'TV Shows',
  'Football',
  'Planes',
  'Live',
  'Streets',
  'Math',
  'Programming'
])

const props = defineProps({
  isSidebarOpen: {
    type: Boolean
  }
})

const classes = computed(() => {
  return props.isSidebarOpen ? 'xl:pl-64' : 'md:pl-24'
})

</script>