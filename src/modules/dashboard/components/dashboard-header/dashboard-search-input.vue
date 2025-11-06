<script setup lang="ts">
import { useDashboardStore } from '@/modules/dashboard/stores/dashboard.pinia';
import { BsSearch } from '@kalimahapps/vue-icons';

const { searchWeatherData } = useDashboardStore();
const search = defineModel<string>(); 

const handleInputSearch = () => {
  searchWeatherData({ search: search.value || '' });
};
</script>
<template>
  <div class="relative lg:flex-1 ">
    <!-- Search Icon -->
    <div class="absolute top-4.5 left-0 flex items-center ps-5 pointer-events-none">
      <BsSearch class="w-6 h-6 text-text" />
    </div>

    <!-- Input -->
    <input id="search-input" type="text" v-model="search" @keydown.enter="handleInputSearch"
      placeholder="Search for your preferred city..."
      class="w-full py-4 ps-14 pr-6 text-text bg-card border-2 border-card rounded-full focus:outline-none placeholder:text-text shadow-md transition-all duration-300 ease-in-out hover:shadow-lg " />
  </div>
</template>