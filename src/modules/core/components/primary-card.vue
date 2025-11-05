<script setup lang="ts">
</script>
<template>
  <div class="primary-card shadow">
    <slot />
  </div>
</template>

<style scoped>
.primary-card {
  padding: 1.5rem;
  background-color: var(--card-bg-color);
  border-radius: 30px;
  color:var(--text-color)
}
</style>