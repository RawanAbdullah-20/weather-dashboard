<script setup lang="ts">
import { useThemeStore } from '@/modules/core/stores/theme.pinia';

const {toggleTheme} = (useThemeStore());
</script>
<template>
  <div>

<button @click="toggleTheme">
  Toggle Theme
</button>
</div>
</template>