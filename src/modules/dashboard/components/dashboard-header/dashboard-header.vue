<script setup lang="ts">
import ThemeToggle from '@/modules/core/components/theme-toggle.vue';
import DashboardCurrentLocation from '@/modules/dashboard/components/dashboard-header/dashboard-current-location.vue';
import DashboardSearchInput from '@/modules/dashboard/components/dashboard-header/dashboard-search-input.vue';
import { ref, type Ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useDashboardStore } from '@/modules/dashboard/stores/dashboard.pinia';

const { searchQuery } = storeToRefs(useDashboardStore());

const search: Ref<string> = ref(searchQuery.value);
  
</script>
<template>
  <div class="flex flex-col md:flex-row items-center  gap-6 md:gap-8 lg:gap-16">
    <ThemeToggle />
    <DashboardSearchInput v-model="search" />
    <DashboardCurrentLocation @clearSearch="search=''" />
  </div>
</template>