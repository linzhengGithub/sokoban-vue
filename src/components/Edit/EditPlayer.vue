<template>
  <div class="absolute border border-blue-500" :style="position">
    <img :src="keeperImg" alt="" />
  </div>
</template>

<script setup lang="ts">
import keeperImg from '@/assets/keeper.png'
import { usePosition } from '@/composables/usePosition'

const { position } = usePosition({ x: 1, y: 1 }, 34)
</script>

<style scoped></style>
