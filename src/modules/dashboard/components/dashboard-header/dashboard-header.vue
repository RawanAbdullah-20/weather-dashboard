<script setup lang="ts">
import ThemeToggle from '@/modules/core/components/base-theme-toggle.vue';
import DashboardCurrentLocation from '@/modules/dashboard/components/dashboard-header/dashboard-current-location.vue';
import DashboardSearchInput from '@/modules/dashboard/components/dashboard-header/dashboard-search-input.vue';
import { ref, type Ref } from 'vue';
import { storeToRefs } from 'pinia';
import { useDashboardStore } from '@/modules/dashboard/stores/dashboard.pinia';

const { searchQuery } = storeToRefs(useDashboardStore());
const search: Ref<string> = ref(searchQuery.value);

</script>
<template>
  <div class="flex flex-col gap-4 lg:flex-row lg:items-center lg:gap-6">
    <ThemeToggle />
    <DashboardSearchInput v-model="search" class="lg:flex-1 " />
    <DashboardCurrentLocation @clearSearch="search = ''" />
  </div>
</template>