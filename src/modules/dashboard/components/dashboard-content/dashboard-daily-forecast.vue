<script setup lang="ts">
import BaseCard from '@/modules/core/components/base-card.vue';
import useTimeComposable from '@/modules/core/composables/useTime.composable';
import { useDashboardStore } from '@/modules/dashboard/stores/dashboard.pinia';
import { storeToRefs } from 'pinia';
import useNumberComposable from '@/modules/core/composables/useNumber.composable';

const { useDateTime } = useTimeComposable();
const { formatNumber } = useNumberComposable();
const { dashboardData } = storeToRefs(useDashboardStore());
const { forecast } = dashboardData.value || {};

</script>

<template>
  <BaseCard class="h-full">
    <h3 class="text-2xl font-bold mb-4 text-center">5 Days Forecast:</h3>
    <div v-for="({ day, date }) in forecast?.forecastday" :key="`forecast-${date}`"
      class="flex items-center justify-between p-1 rounded-lg transition-all duration-300 ease-in-out hover:bg-primary/10 hover:scale-105 cursor-pointer group">
      <img :src="`https:${day?.condition?.icon}`" :alt="day?.condition?.text" class="w-12 h-12 group-hover:scale-110" />
      <p class="text-xl text-text font-bold group-hover:text-primary">{{ formatNumber(day?.maxtemp_c) }}°C</p>
      <p class="text-text text-sm text-center font-bold group-hover:text-primary">{{ useDateTime(date) }}</p>
    </div>
  </BaseCard>
</template>