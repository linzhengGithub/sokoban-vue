<template>
  <div>
    <h3>地图行列设置</h3>
    <div class="space-y-2">
      <div> row: <input type="text" class="border border-yellow-500" v-model="row" /> </div>
      <div> col: <input type="text" class="border border-yellow-500" v-model="col" /> </div>
    </div>
    <h3>元素选择器</h3>
    <div class="flex space-x-2 items-center">
      <h3> 地图元素: </h3>
      <EditElement :edit-element="wallEditElement" />
      <EditElement :edit-element="floorEditElement" />
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMapEditStore } from '@/store/edit/mapEdit'
import EditElement from './EditElement.vue'
import { wallEditElement, floorEditElement } from '@/store/edit/editElement'

const { row, col } = useMapEditStore()
</script>

<style scoped></style>
