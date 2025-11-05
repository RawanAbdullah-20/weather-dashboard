<script setup lang="ts">
import { useThemeStore } from '@/modules/core/stores/theme.pinia';
import { storeToRefs } from 'pinia';
import { computed } from 'vue';

const { toggleTheme } = (useThemeStore());
const {  isDark } = storeToRefs(useThemeStore());
 const themeText=computed(()=>(isDark.value ? 'Dark Mode' : 'Light Mode'));
</script>
<template>
  <div>
    <button @click.prevent="toggleTheme()"
      class="bg-card border-1 border-dark relative w-20 h-10 rounded-full transition-colors duration-300 ease-in-out focus:outline-none focus:ring-none">
      <!-- Toggle Circle -->
      <span :class="[
        'absolute top-1/2 -translate-y-1/2 w-8 h-8 rounded-full transition-transform duration-300 ease-in-out bg-dark',
        isDark
          ? '-translate-x-8'
          : 'translate-x-0'
      ]" />
    </button>

    <p class="
        text-md font-bold">
      {{ themeText }}
    </p>
  </div>
</template>