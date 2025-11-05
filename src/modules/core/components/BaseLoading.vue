<script setup lang="ts">
withDefaults(
  defineProps<{
    size?: string;
    color?:string;
  }>(),
  {
    size: 'w-7 h-7',
    color:'text'
  }
);
</script>

<template>
  <span
    :class="[
      size,`border-${color}`,
      'border-4 border-b-transparent rounded-full animate-spin mx-auto block'
    ]"
  ></span>
</template>