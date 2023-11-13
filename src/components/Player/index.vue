<template>
  <div class="absolute" :style="position">
    <img :src="keeperImg" alt="" />
  </div>
</template>

<script setup lang="ts">
import keeperImg from '../../assets/keeper.png'
import { usePlayerStore } from '../../../store/player'
import { computed, onMounted, onUnmounted } from 'vue';

useMove()
const { position } = usePosition()

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

function usePosition() {
  const { player } = usePlayerStore()
  const STEP = 32
  const position = computed(() => {
    return {
      left: player.x * STEP + 'px',
      top: player.y * STEP + 'px'
    }
  })
  return { position }
}
</script>

<style scoped></style>
