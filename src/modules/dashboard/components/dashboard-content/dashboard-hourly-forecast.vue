<script setup lang="ts">
import { computed } from 'vue';
import BaseCard from '@/modules/core/components/base-card.vue';
import useTimeComposable from '@/modules/core/composables/useTime.composable';
import useNumberComposable from '@/modules/core/composables/useNumber.composable';
import { CaWindyStrong } from '@kalimahapps/vue-icons';
import { useDashboardStore } from '@/modules/dashboard/stores/dashboard.pinia';
import { storeToRefs } from 'pinia';
import { useThemeStore } from '@/modules/core/stores/theme.pinia';

const { useTimeFormat } = useTimeComposable();
const { formatNumber } = useNumberComposable();
const { dashboardData } = storeToRefs(useDashboardStore());
const { forecast } = dashboardData.value || {};
const { isDark } = storeToRefs(useThemeStore());

const hourlyForecast = computed(() => {
  const hours = forecast?.forecastday?.[0]?.hour;
  if (!hours) return [];
  
  const nowTimestamp = Date.now() / 1000;
  return hours?.filter(({ time_epoch }) => time_epoch >= nowTimestamp);
});

// Get gradient color based on time of day
const getCardColor = (isDay: number) => {
  if (isDark.value) return 'bg-black';
  return isDay === 1 
    ? 'bg-gradient-to-b from-orange to-orange-50'
    : 'bg-gradient-to-b from-indigo to-indigo-50';
};
</script>

<template>
  <BaseCard class="h-full">
    <h3 class="text-2xl font-bold mb-4 text-center">Hourly Forecast:</h3>
    <div class="scrollbar-hover flex gap-2 overflow-x-auto ">
      <article v-for="({ time_epoch, is_day, condition, temp_c, wind_kph, time }) in hourlyForecast" :key="time_epoch" :class="[
        '  rounded-4xl p-3 min-w-[132px] text-center ',
        getCardColor(is_day)
      ]">
        <time  class="font-bold text-xl mb-2">{{ useTimeFormat(time) }}</time>
        <img :src="`https:${condition.icon}`" :alt="condition.text" class="w-16 h-16 mx-auto mb-2" />
        <p class="font-bold text-xl mb-2">{{ formatNumber(temp_c) }}°C</p>
        <CaWindyStrong class="w-8 h-8 mx-auto mb-2 text-blue-600" />
        <p class="font-semibold text-xl">{{ formatNumber(wind_kph) }}km/h</p>
      </article>
    </div>
  </BaseCard>
</template>

<style scoped>
.scrollbar-hover {
  scrollbar-width: thin;
  scrollbar-color: transparent transparent;
  transition: scrollbar-color 0.3s ease;
    justify-content: safe center; 
}

.scrollbar-hover:hover {
  scrollbar-color: var(--color-text) var(--color-card);
}

.scrollbar-hover::-webkit-scrollbar {
  height: 10px;
}

.scrollbar-hover::-webkit-scrollbar-track {
  background: transparent;
  border-radius: 10px;
  margin: 0 8px;
}

.scrollbar-hover::-webkit-scrollbar-thumb {
  background: transparent;
  border-radius: 10px;
  transition: background 0.3s ease;
}
</style>