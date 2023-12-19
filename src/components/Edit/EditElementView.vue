<template>
  <div>
    <h3>元素选择器</h3>
    <div class="flex space-x-2 items-center">
      <h3> 地图元素: </h3>
      <div>
        <img :src="wallImg" @click="handleClick('wall')" />
      </div>
      <div>
        <img :src="floorImg" @click="handleClick('floor')" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import floorImg from '@/assets/floor.png'
import wallImg from '@/assets/wall.png'
import { useMapEditStore } from '@/store/edit/mapEdit'

const { setCurrentSelectedEditElement } = useMapEditStore()

function handleClick(name: 'wall' | 'floor') {
  setCurrentSelectedEditElement({ name })
}
</script>

<style scoped></style>
