<template>
  <div class="border border-white" @click="handleClick">
    <template v-if="map[y][x] === MapTile.WALL">
      <img :src="wallImg" />
    </template>
    <template v-else-if="map[y][x] === MapTile.FLOOR">
      <img :src="floorImg" />
    </template>
  </div>
</template>

<script setup lang="ts">
import floorImg from '@/assets/floor.png'
import wallImg from '@/assets/wall.png'
import { MapTile } from '@/store/map'
import { useMapEditStore } from '@/store/edit/mapEdit'

interface Props {
  x: number
  y: number
}

const props = defineProps<Props>()

const { map, getCurrentSelectedEditElement } = useMapEditStore()

function handleClick() {
  if (getCurrentSelectedEditElement().name === 'wall') {
    map[props.y][props.x] = MapTile.WALL
  } else if (getCurrentSelectedEditElement().name === 'floor') {
    map[props.y][props.x] = MapTile.FLOOR
  }
}
</script>

<style scoped></style>
