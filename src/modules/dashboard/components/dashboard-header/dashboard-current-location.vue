<script setup lang="ts">
import BaseLoading from '@/modules/core/components/BaseLoading.vue';
import { useDashboardStore } from '@/modules/dashboard/stores/dashboard.pinia';
import { storeToRefs } from 'pinia';
import { MdTwoToneMyLocation } from '@kalimahapps/vue-icons';
const { getCurrentWeatherData } = useDashboardStore();
const { isLoadingDashboard } = storeToRefs(useDashboardStore());

</script>

<template>
  <button @click.prevent="getCurrentWeatherData" :disabled="isLoadingDashboard"
    class="bg-primary flex gap-2 items-center py-1 px-2 md:py-2 md:px-4 lg:py-3.5 lg:px-6 rounded-full shadow-lg/30 cursor-pointer w-full md:w-auto">
    
    <BaseLoading v-if="isLoadingDashboard" />
    <template v-else>
      <MdTwoToneMyLocation class="w-6 h-6 text-white" />
      <span class="text-white font-extrabold text-sm md:text-base lg:text-lg">
        Current Location
      </span>
    </template>

  </button>

</template>