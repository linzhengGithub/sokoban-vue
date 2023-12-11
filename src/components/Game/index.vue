<template>
  <div>
    <Map />
    <template v-for="target in targets">
      <Target :x="target.x" :y="target.y" />
    </template>
    <Player />
    <template v-for="cargo in cargos">
      <Cargo :cargo="cargo" />
    </template>
  </div>
</template>

<script setup lang="ts">
import Map from '../Map/index.vue'
import Player from '../Player/index.vue'
import Cargo from '../Cargo/index.vue'
import Target from '../Target/index.vue'
import { useCargoStore } from '../../../store/cargo'
import { useTargetStore } from '../../../store/target'
import { useGameStore } from '../../../store/game';
import { levelGameData } from '../../game/gameData';

const { cargos} = useCargoStore()
const { targets} = useTargetStore()

const { setupGame } = useGameStore()
setupGame(levelGameData)

</script>

<style scoped></style>
