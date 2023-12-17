<template>
  <div>
    <Map />
    <template v-for="target in targets">
      <Target :x="target.x" :y="target.y" />
    </template>
    <Player />
    <template v-for="cargo in cargos" :key="cargo.id">
      <Cargo :cargo="cargo" />
    </template>
    <div v-if="game.isGameCompleted">
      <button @click="handleToNextLevel"> 下一关 </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import Map from '@/components/Map/index.vue'
import Player from '@/components/Player/index.vue'
import Cargo from '@/components/Cargo/index.vue'
import Target from '@/components/Target/index.vue'
import { useCargoStore } from '@/store/cargo'
import { useTargetStore } from '@/store/target'
import { useGameStore } from '@/store/game'
import { gameData } from '@/game/gameData'

const { cargos } = useCargoStore()
const { targets } = useTargetStore()

const { setupGame, game, toNextLevel } = useGameStore()
setupGame(gameData)

function handleToNextLevel() {
  toNextLevel()
}
</script>

<style scoped></style>
