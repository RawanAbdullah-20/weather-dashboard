
import { defineStore } from 'pinia';
import { computed, readonly, ref } from 'vue';


// Theme Store to manage light and dark themes
export const useThemeStore = defineStore('theme', () => {
    const theme = ref<'light' | 'dark'>('light');

    const toggleTheme = () => {
        theme.value = theme.value === 'light' ? 'dark' : 'light';
        document.documentElement.setAttribute('data-theme', theme.value);

    }


    const isDark = computed(() => theme.value === 'dark');

    return {
        currentTheme: readonly(theme),
        isDark,
        toggleTheme,
    };
       
});