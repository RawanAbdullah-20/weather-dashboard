<script setup lang="ts">
import PrimaryCard from '@/modules/core/components/primary-card.vue';


</script>
<template>
    <div class="flex flex-col md:flex-row gap-6 mb-6 ">
      <div class="md:w-1/2 lg:w-2/5">
        <PrimaryCard>
          Primary Card #1
        </PrimaryCard>
      </div>
      <div class="md:w-1/2 lg:w-3/5">

        <PrimaryCard>
          Primary Card #2
        </PrimaryCard>
      </div>
    </div>
    <div class="flex flex-col md:flex-row gap-6 ">
      <div class="md:w-1/2 lg:w-1/3">
        <PrimaryCard>
          Primary Card #3
        </PrimaryCard>
      </div>
      <div class="md:w-1/2 lg:w-2/3">
        <PrimaryCard>
          Primary Card #4
        </PrimaryCard>
      </div>
    </div>


</template>
