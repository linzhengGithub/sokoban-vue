<template>
  <div>
    <Map />
    <Player />
    <template v-for="cargo in cargos">
      <Cargo :x="cargo.x" :y="cargo.y" />
    </template>
  </div>
</template>

<script setup lang="ts">
import Map from '../Map/index.vue'
import Player from '../Player/index.vue'
import Cargo from '../Cargo/index.vue'
import { useCargoStore } from '../../../store/cargo'

const { cargos, createCargo, addCargo } = useCargoStore()

addCargo(createCargo({ x: 2, y: 2 }))
addCargo(createCargo({ x: 3, y: 2 }))
</script>

<style scoped></style>
