
import { defineStore } from 'pinia';
import { readonly, ref } from 'vue';


// Theme Store to manage light and dark themes
export const useThemeStore = defineStore('theme', () => {
    const theme = ref<'light' | 'dark'>('light');

    const toggleTheme = () => {
        theme.value = theme.value === 'light' ? 'dark' : 'light';
    }

    return {
        currentTheme: readonly(theme),
        toggleTheme
    };
       
});