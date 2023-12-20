<template>
  <div>
    <h3>元素选择器</h3>
    <div class="flex space-x-2 items-center">
      <h3> 地图元素: </h3>
      <EditElement :edit-element="wallEditElement" />
      <EditElement :edit-element="floorEditElement" />
    </div>
  </div>
</template>

<script setup lang="ts">
import EditElement from './EditElement.vue'
import { wallEditElement, floorEditElement } from '@/store/edit/editElement'
</script>

<style scoped></style>
