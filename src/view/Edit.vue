<template>
  <div>
    <div class="flex w-full">
      <div class="w-4/6 bg-pink-500">
        <MapEdit />
      </div>
      <div class="w-2/6">store</div>
    </div>
    <div> 元素选择区 </div>
  </div>
</template>

<script setup lang="ts">
import MapEdit from '@/components/Edit/MapEdit.vue';
</script>

<style scoped></style>
