<script setup lang="ts">
import BaseCard from '@/modules/core/components/base-card.vue';
import { useDashboardStore } from '@/modules/dashboard/stores/dashboard.pinia';
import { storeToRefs } from 'pinia';
import { LuSunrise, LuSunset, CaUvIndexAlt, CaWindyStrong, CaHumidityAlt, ChClock } from '@kalimahapps/vue-icons';
import useNumberComposable from '@/modules/core/composables/useNumber.composable';
import { computed } from 'vue';

const { dashboardData } = storeToRefs(useDashboardStore());
const { current } = dashboardData.value || {};
const { temp_c, feelslike_c, condition, humidity, uv, wind_kph, pressure_mb } = current || {};
const { formatNumber } = useNumberComposable();
const isTemperatureDifferent = computed(() => {
    return formatNumber(temp_c) !== formatNumber(feelslike_c);
});

const weatherStats = computed(() => [
    {
        icon: CaHumidityAlt,
        value: `${humidity}%`,
        label: 'Humidity'
    },
    {
        icon: CaWindyStrong,
        value: `${wind_kph}km/h`,
        label: 'Wind Speed'
    },
    {
        icon: ChClock,
        value: `${pressure_mb}hPa`,
        label: 'Pressure'
    },
    {
        icon: CaUvIndexAlt,
        value: uv,
        label: 'UV'
    }
]);

</script>

<template>
    <BaseCard class="h-full">
        <div class="flex justify-between flex-col md:flex-row gap:3 md:gap-6  h-full">
            <!-- Left: Temperature & Sun -->
            <div class="flex flex-col items-center justify-between text-text ">
                <div>
                    <h2
                        class="text-5xl md:text-7xl font-bold bg-gradient-to-r from-text to-transparent bg-clip-text text-transparent">
                        {{ formatNumber(temp_c) }}°C</h2>
                    <p v-if="isTemperatureDifferent" class="text-md md:text-lg font-semibold">Feels like: {{
                        formatNumber(feelslike_c) }}°C
                    </p>
                </div>
                <div class="space-y-3 mt-6">
                    <div class="flex items-center gap-3">
                        <LuSunrise class="w-8 h-10" />
                        <div>
                            <p class="font-bold md:text-xl">Sunrise</p>
                            <p class="text-md font-semibold">06:37 AM</p>
                        </div>
                    </div>
                    <div class="flex items-center gap-3">
                        <LuSunset class="w-8 h-10" />
                        <div>
                            <p class="font-bold md:text-xl">Sunset</p>
                            <p class="text-md font-semibold">20:37 PM</p>
                        </div>
                    </div>
                </div>
            </div>
            <!-- Center: Weather Icon -->
            <div class="flex flex-col items-center justify-between ">
                <img :src="`https:${condition?.icon}`"
                    class=" h-32 w-32 md:w-46 md:h-46 object-cover  transition-all duration-500 ease-in-out hover:scale-110 hover:rotate-12" />
                <p class="text-2xl md:text-3xl font-bold text-center">{{ condition?.text }}</p>
            </div>

            <!-- Right: Stats -->
            <div class="grid grid-cols-2 gap-4">
                <div v-for="({ value, label, icon }) in weatherStats" :key="label"
                    class="text-center flex flex-col justify-between items-center min-w-[100px]">
                    <component :is="icon" class="w-8 h-8" />
                    <p class="md:text-xl font-bold ">{{ value }}</p>
                    <p class="text-md">{{ label }}</p>
                </div>
            </div>

        </div>
    </BaseCard>
</template>