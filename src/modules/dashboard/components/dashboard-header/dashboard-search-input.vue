<script setup lang="ts">
import { useDashboardStore } from '@/modules/dashboard/stores/dashboard.pinia';
import { storeToRefs } from 'pinia';
import { ref, type Ref } from 'vue';
import { BsSearch } from '@kalimahapps/vue-icons';

const { searchWeatherData } = useDashboardStore();
const { searchQuery } = storeToRefs(useDashboardStore());
const search: Ref<string> = ref(searchQuery.value);

const handleInputSearch = () => {
  searchWeatherData({ search: search.value });
};
</script>
<template>
  <div class="relative flex-1 ">
    <!-- Search Icon -->
    <div class="absolute top-4.5 left-0 flex items-center ps-5 pointer-events-none">
      <BsSearch class="w-6 h-6 text-text" />
    </div>

    <!-- Input -->
    <input id="search-input" type="text" v-model="search" @keydown.enter="handleInputSearch"
      placeholder="Search for your preferred city..."
      class="w-full py-4 ps-14 pr-6 text-text bg-card border-2 border-text rounded-full focus:outline-none placeholder:text-text" />
  </div>
</template>