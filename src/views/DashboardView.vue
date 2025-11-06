<script setup lang="ts">
import DashboardHeader from '@/modules/dashboard/components/dashboard-header/dashboard-header.vue';

import { storeToRefs } from 'pinia';
import { useDashboardStore } from '@/modules/dashboard/stores/dashboard.pinia';
import { onMounted } from 'vue';
import DashboardContent from '@/modules/dashboard/components/dashboard-content/dashboard-content.vue';
import BaseLoading from '@/modules/core/components/BaseLoading.vue';
import DashboardDataNotFound from '@/modules/dashboard/components/dashboard-data-not-found.vue';
const { dashboardData, isLoadingDashboard,searchQuery } = storeToRefs(useDashboardStore());
const { fetchWeatherData } = useDashboardStore();


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
      <DashboardDataNotFound v-if="!isLoadingDashboard&& !dashboardData" />
      <template v-else>
      <BaseLoading v-if="isLoadingDashboard" size="w-12 h-12" />
      <DashboardContent v-else />
    </template>
    </div>
  </div>
</template>