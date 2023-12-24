<template>
  <div class="absolute border border-blue-500" :style="position">
    <img :src="keeperImg" alt="" />
  </div>
</template>

<script setup lang="ts">
import keeperImg from '@/assets/keeper.png'
import { usePosition } from '@/composables/usePosition'
import { STEP_EDIT } from '@/composables/usePosition'
import { useEditPlayerStore } from '@/store/edit/editPlayer'

const { player } = useEditPlayerStore()

const { position } = usePosition(player, STEP_EDIT)
</script>

<style scoped></style>
