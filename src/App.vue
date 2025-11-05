<script setup lang="ts">
import { storeToRefs } from 'pinia';
import { useThemeStore } from './modules/core/stores/theme.pinia';

const { currentTheme } = storeToRefs(useThemeStore());
</script>

<template>
  <div class="main-container" :data-theme="currentTheme">
    <RouterView />
  </div>
</template>

<style scoped>
.main-container {
  /* padding:63px 77px;  */
  padding: 2rem;

}
</style>
