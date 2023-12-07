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

const { cargos } = useCargoStore()

</script>

<style scoped></style>
