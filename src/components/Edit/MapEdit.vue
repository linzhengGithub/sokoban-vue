<template>
  <div>
    <div v-for="(_row, i) in map" class="flex">
      <div v-for="(_col, j) in map[i]">
        <MapBlock :x="j" :y="i" />
      </div>
    </div>
  </div>
</template>

<script setup lang="ts">
import MapBlock from './MapBlock.vue'
import { useMapEditStore } from '../../store/edit/mapEdit'

const { map } = useMapEditStore()
</script>

<style scoped></style>
