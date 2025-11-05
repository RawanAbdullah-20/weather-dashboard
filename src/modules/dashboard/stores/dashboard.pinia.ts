
import axiosInstance from '@/plugins/axios';
import { defineStore } from 'pinia';
import { computed, ref, type Ref } from 'vue';
import { DashboardApis } from '../constants/dashboard.constant';
import { router } from '@/plugins/router';
import { useRoute } from 'vue-router';


export const useDashboardStore = defineStore('dashboard', () => {
    const isLoadingDashboard: Ref<boolean> = ref(false);
    const dashboardData: Ref<any> = ref(null);
    const route = useRoute();

    const fetchWeatherData = async ({ location='auto:ip' }: { location?: string }) => {
        isLoadingDashboard.value = true;
        try {
            const { data } = await axiosInstance(DashboardApis.GetCurrentWeather,
                {
                    params: { q: location }
                }
            );
            isLoadingDashboard.value = false;
            dashboardData.value = data;
        } catch (error) {
            isLoadingDashboard.value = false;
        }
    }

    const getCurrentWeatherData = async () => {
        await fetchWeatherData({ location: 'auto:ip' });
        //remove query param from url after fetching data for auto:ip
        router.replace({
            query: {}
        });
    };

    const searchWeatherData = async ({ search }: { search: string }) => {
        if(search==searchQuery.value) return; //avoid duplicate search
        const location = search.trim();
        if (!location) return;
        await fetchWeatherData({ location });
        // Update URL query without redirect
        router.replace({
            query: { search: location }
        });
    }

    const searchQuery = computed(() => route?.query?.search as string || '');

    return {
        isLoadingDashboard,
        dashboardData,
        searchQuery,
        getCurrentWeatherData,
        searchWeatherData,
        fetchWeatherData
    };

});