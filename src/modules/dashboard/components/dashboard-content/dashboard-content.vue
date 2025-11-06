<script setup lang="ts">
import DashboardHourlyForecast from './dashboard-hourly-forecast.vue';
import DashboardDailyForecast from './dashboard-daily-forecast.vue';
import DashboardLocationTime from './dashboard-location-time.vue';
import DashboardCurrentWeather from './dashboard-current-weather.vue';


</script>
<template>
    <div class="flex flex-col lg:flex-row gap-8 mb-8 ">
      <div class="lg:w-2/5">
       <DashboardLocationTime/>
      </div>
      <div class="lg:w-3/5">
        <DashboardCurrentWeather/>
      </div>
    </div>
    <div class="flex flex-col lg:flex-row gap-8 ">
      <div class="lg:w-1/3">
        <DashboardDailyForecast/>
      </div>
      <div class="lg:w-2/3">
      <DashboardHourlyForecast/>
      </div>
    </div>


</template>
