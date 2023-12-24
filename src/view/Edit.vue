<template>
  <div>
    <div class="flex w-full">
      <div class="w-4/6 bg-pink-500">
        <MapEdit />
        <EditPlayer />
      </div>
      <div class="w-2/6">store</div>
    </div>
    <div> <EditElementView /> </div>
  </div>
</template>

<script setup lang="ts">
import MapEdit from '@/components/Edit/MapEdit.vue'
import EditElementView from '@/components/Edit/EditElementView.vue'
import EditPlayer from '@/components/Edit/EditPlayer.vue'
</script>

<style scoped></style>
