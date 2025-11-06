<script setup lang="ts">
import BaseLoading from '@/modules/core/components/BaseLoading.vue';
import { useDashboardStore } from '@/modules/dashboard/stores/dashboard.pinia';
import { storeToRefs } from 'pinia';
import { MdTwoToneMyLocation } from '@kalimahapps/vue-icons';
const { getCurrentWeatherData } = useDashboardStore();
const { isLoadingDashboard } = storeToRefs(useDashboardStore());

const emit = defineEmits<{
  (e: 'clearSearch'): void;
}>();

const handleGetCurrentLocation = () => {
  getCurrentWeatherData();
  emit('clearSearch');
};
</script>

<template>
  <button @click.prevent="handleGetCurrentLocation" :disabled="isLoadingDashboard"
    class="bg-primary flex gap-2 items-center  px-2  md:px-4 py-3.5 lg:px-6 rounded-full shadow-lg/30 cursor-pointer w-full md:w-auto transition-all duration-300 ease-in-out  hover:shadow-md">
    
    <BaseLoading v-if="isLoadingDashboard" />
    <template v-else>
      <MdTwoToneMyLocation class="w-6 h-6 text-white" />
      <span class="text-white font-extrabold text-sm md:text-base lg:text-lg">
        Current Location
      </span>
    </template>

  </button>

</template>