<template>
  <div>
    <h3>地图行列设置</h3>
    <div class="space-y-2">
      <div> row: <input type="text" class="border border-yellow-500" v-model="row" /> </div>
      <div> col: <input type="text" class="border border-yellow-500" v-model="col" /> </div>
    </div>
    <h3>元素选择器</h3>
    <div class="flex space-x-2 items-center mb-2">
      <h3> 地图元素: </h3>
      <EditElement :edit-element="wallEditElement" />
      <EditElement :edit-element="floorEditElement" />
    </div>
    <div class="flex space-x-2 items-center mb-2">
      <h3> 玩家元素: </h3>
      <EditElement :edit-element="playerEditElement" />
    </div>
    <div class="flex space-x-2 items-center mb-2">
      <h3> 放置元素: </h3>
      <EditElement :edit-element="cargoEditElement" />
    </div>
    <div class="flex space-x-2 items-center mb-2">
      <h3> 当前选择元素: </h3>
      {{ currentSelectedEditElement }}
    </div>
  </div>
</template>

<script setup lang="ts">
import { useMapEditStore } from '@/store/edit/mapEdit'
import EditElement from './EditElement.vue'
import {
  wallEditElement,
  floorEditElement,
  playerEditElement,
  useEditElementStore,
  cargoEditElement
} from '@/store/edit/editElement'
import { toRefs, watchEffect, computed } from 'vue'

const { updateRowMap, updateColMap, initMap } = useMapEditStore()
const { getCurrentSelectedEditElement } = useEditElementStore()
const { row, col } = toRefs(useMapEditStore())

initMap()

watchEffect(() => {
  if (!row.value) return
  updateRowMap()
})

watchEffect(() => {
  if (!col.value) return
  updateColMap()
})

const currentSelectedEditElement = computed(() => {
  return getCurrentSelectedEditElement()?.name
})
</script>

<style scoped></style>
