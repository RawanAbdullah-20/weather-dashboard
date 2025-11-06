<script setup lang="ts">
import { ref, onMounted, onUnmounted, computed } from 'vue';
import PrimaryCard from '@/modules/core/components/primary-card.vue';
import useTimeComposable from '@/modules/core/composables/useTime.composable';
import { useDashboardStore } from '@/modules/dashboard/stores/dashboard.pinia';
import { storeToRefs } from 'pinia';

const { dashboardData } = storeToRefs(useDashboardStore());
const { location } = dashboardData.value || {};
const { useDateTime, useTimeFormat } = useTimeComposable();

const currentTime = ref(new Date());
let interval: ReturnType<typeof setInterval>;

const formattedTime = computed(() => 
  useTimeFormat(currentTime.value, location?.tz_id)
);

const formattedDate = computed(() => 
  useDateTime(currentTime.value, location?.tz_id)
);

onMounted(() => {
  interval = setInterval(() => {
    currentTime.value = new Date();
  }, 10000 ); // Update every 10 seconds
});

onUnmounted(() => {
  clearInterval(interval);
});
</script>

<template>
  <PrimaryCard class="h-full flex flex-col justify-around items-center text-center">
    <p class="text-2xl md:text-4xl font-bold">{{ location?.name }}</p>
    <div class="mt-10">
      <p class="text-5xl md:text-8xl font-bold">{{ formattedTime }}</p>
      <p class="md:text-xl">{{ formattedDate }}</p>
    </div>
  </PrimaryCard>
</template>