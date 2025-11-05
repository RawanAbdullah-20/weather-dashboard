<script setup lang="ts">
import ThemeToggle from '@/modules/core/components/theme-toggle.vue';
import DashboardCurrentLocation from '@/modules/dashboard/components/dashboard-current-location.vue';
import DashboardSearchInput from '@/modules/dashboard/components/dashboard-search-input.vue';

</script>
<template>
  <div>
    <ThemeToggle />
    <DashboardSearchInput />
    <DashboardCurrentLocation />
  </div>
</template>