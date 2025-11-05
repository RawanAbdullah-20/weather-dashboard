<script setup lang="ts">
import PrimaryCard from '@/modules/core/components/primary-card.vue';
import DashboardHourlyForecast from './dashboard-hourly-forecast.vue';
import DashboardDailyForecast from './dashboard-daily-forecast.vue';
import DashboardLocationTime from './dashboard-location-time.vue';
import DashboardCurrentWeather from './dashboard-current-weather.vue';


</script>
<template>
    <div class="flex flex-col md:flex-row gap-6 mb-6 ">
      <div class="md:w-1/2 lg:w-2/5">
       <DashboardLocationTime/>
      </div>
      <div class="md:w-1/2 lg:w-3/5">
        <DashboardCurrentWeather/>
      </div>
    </div>
    <div class="flex flex-col md:flex-row gap-6 ">
      <div class="md:w-1/2 lg:w-1/3">
        <DashboardDailyForecast/>
      </div>
      <div class="md:w-1/2 lg:w-2/3">
      <DashboardHourlyForecast/>
      </div>
    </div>


</template>
