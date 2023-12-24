<template>
  <div
    class="border border-white"
    @click="handleClick"
    @mousedown="handleMouseDown"
    @mousemove="handleMouseMove"
  >
    <template v-if="map[y][x] === MapTile.WALL">
      <img :src="wallImg" draggable="false" />
    </template>
    <template v-else-if="map[y][x] === MapTile.FLOOR">
      <img :src="floorImg" draggable="false" />
    </template>
  </div>
</template>

<script setup lang="ts">
import floorImg from '@/assets/floor.png'
import wallImg from '@/assets/wall.png'
import { MapTile } from '@/store/map'
import { useMapEditStore } from '@/store/edit/mapEdit'
import { useEditElementStore } from '@/store/edit/editElement'
import { useDrag } from '@/composables/useDrag'

interface Props {
  x: number
  y: number
}

const props = defineProps<Props>()

const { map } = useMapEditStore()
const { getCurrentSelectedEditElement } = useEditElementStore()
const { isDraging, startDrag, stopDrag } = useDrag()

function handleClick() {
  getCurrentSelectedEditElement()?.execute(props)
}

function handleMouseup() {
  stopDrag()
  window.removeEventListener('mouseup', handleMouseup)
}

function handleMouseDown() {
  startDrag()
  window.addEventListener('mouseup', handleMouseup)
}

function handleMouseMove() {
  if (isDraging()) {
    getCurrentSelectedEditElement()?.execute(props)
  }
}
</script>

<style scoped></style>
