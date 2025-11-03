<script setup lang="ts">
</script>
<template>
  <div class="primary-card">
    <slot />

  </div>
</template>

<style scoped>
.primary-card {
  padding: 1.5rem;
  box-shadow: 10px 10px 4px rgba(0, 0, 0, 0.5);
  background-color: #D9D9D9;
  border-radius: 30px;
}
</style>