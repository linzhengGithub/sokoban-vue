<template>
  <div>
    <Map />
    <template v-for="target in targets">
      <Target :x="target.x" :y="target.y" />
    </template>
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
import Target from '../Target/index.vue'
import { useCargoStore } from '../../../store/cargo'
import { useTargetStore } from '../../../store/target';

const { cargos, createCargo, addCargo } = useCargoStore()
const { targets } = useTargetStore()

addCargo(createCargo({ x: 2, y: 2 }))
addCargo(createCargo({ x: 3, y: 2 }))
</script>

<style scoped></style>
