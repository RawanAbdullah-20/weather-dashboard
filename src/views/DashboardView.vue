<script setup lang="ts">
import PrimaryCard from '@/modules/core/components/primary-card.vue';
import DashboardHeader from '@/modules/dashboard/components/dashboard-header.vue';

</script>
<template>
  <div>
    <DashboardHeader />
    Dashboard View
    <PrimaryCard>
      Primary Card #1
    </PrimaryCard>
    <PrimaryCard>
      Primary Card #2
    </PrimaryCard>
  </div>
</template>