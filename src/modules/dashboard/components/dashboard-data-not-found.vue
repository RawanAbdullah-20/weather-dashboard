<script setup lang="ts">
import { WiDayCloudy } from '@kalimahapps/vue-icons';
</script>

<template>
  <div class="flex flex-col items-center justify-center gap-4 pt-10">
    <WiDayCloudy class="w-32 h-32 text-text animate-bounce " />
    <h2 class="text-3xl font-bold text-text  text-center ">
      No Weather Data Found
    </h2>
    <p class="text-lg text-gray-500 text-center max-w-md">
      We couldn't find weather data for this location. Please try searching for another city.
    </p>
  </div>
</template>