<script setup lang="ts">
import DashboardHeader from '@/modules/dashboard/components/dashboard-header/dashboard-header.vue';

import { storeToRefs } from 'pinia';
import { useDashboardStore } from '@/modules/dashboard/stores/dashboard.pinia';
import { onMounted } from 'vue';
import DashboardContent from '@/modules/dashboard/components/dashboard-content/dashboard-content.vue';
import BaseLoading from '@/modules/core/components/BaseLoading.vue';
const { dashboardData, isLoadingDashboard } = storeToRefs(useDashboardStore());
const { fetchWeatherData } = useDashboardStore();
const { searchQuery } = storeToRefs(useDashboardStore());


onMounted(() => {
  if (!dashboardData.value) {
    const search = searchQuery.value;
    fetchWeatherData({ location: search ||undefined});
  }
});

</script>
<template>
  <div>
    <DashboardHeader />
    <div class="my-6 md:my-8 lg:my-12">
      <BaseLoading v-if="isLoadingDashboard" size="w-12 h-12" />
      <DashboardContent v-else />
    </div>
  </div>
</template>