<script setup lang="ts">
import ThemeToggle from '@/modules/core/components/theme-toggle.vue';
import DashboardCurrentLocation from '@/modules/dashboard/components/dashboard-current-location.vue';
import DashboardSearchInput from '@/modules/dashboard/components/dashboard-search-input.vue';

</script>
<template>
  <div class="flex flex-col md:flex-row items-center  gap-6 md:gap-8 lg:gap-16">
    <ThemeToggle />
    <DashboardSearchInput />
    <DashboardCurrentLocation />
  </div>
</template>