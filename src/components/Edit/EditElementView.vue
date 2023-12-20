<template>
  <div>
    <h3>元素选择器</h3>
    <div class="flex space-x-2 items-center">
      <h3> 地图元素: </h3>
      <div>
        <img :src="wallImg" @click="handleClick(wallEditElement)" />
      </div>
      <div>
        <img :src="floorImg" @click="handleClick(floorEditElement)" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import floorImg from '@/assets/floor.png'
import wallImg from '@/assets/wall.png'
import { useEditElementStore } from '@/store/edit/editElement';
import { type EditElement, wallEditElement, floorEditElement } from '@/store/edit/editElement';

const {setCurrentSelectedEditElement} = useEditElementStore()

function handleClick(editElement: EditElement) {
  setCurrentSelectedEditElement(editElement)
}
</script>

<style scoped></style>
