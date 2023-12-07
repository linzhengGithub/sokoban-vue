<template>
  <div class="absolute" :style="position">
    <img :src="keeperImg" alt="" />
  </div>
</template>

<script setup lang="ts">
import keeperImg from '../../assets/keeper.png'
import { usePlayerStore } from '../../../store/player'
import { onMounted, onUnmounted } from 'vue'
import { usePosition } from '../../composables/usePosition'

useMove()
const { player } = usePlayerStore()
const { position } = usePosition(player)

function useMove() {
  const { movePlayerToLeft, movePlayerToRight, movePlayerToDown, movePlayerToUp } = usePlayerStore()

  function handleKeyup(e: KeyboardEvent) {
    switch (e.code) {
      case 'ArrowLeft':
        movePlayerToLeft()
        break
      case 'ArrowRight':
        movePlayerToRight()
        break
      case 'ArrowDown':
        movePlayerToDown()
        break
      case 'ArrowUp':
        movePlayerToUp()
        break

      default:
        break
    }
  }
  onMounted(() => {
    window.addEventListener('keyup', handleKeyup)
  })
  onUnmounted(() => {
    window.removeEventListener('keyup', handleKeyup)
  })
}
</script>

<style scoped></style>
