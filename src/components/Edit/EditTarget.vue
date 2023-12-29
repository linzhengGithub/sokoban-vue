<template>
  <div class="absolute border border-blue-500" :style="position">
    <img :src="targetImg" alt="" />
  </div>
</template>

<script setup lang="ts">
import targetImg from '@/assets/target.png'
import { usePosition, STEP_EDIT } from '@/composables/usePosition'

interface Props {
  x: number
  y: number
}

const props = defineProps<Props>()

const { position } = usePosition({ x: props.x, y: props.y }, STEP_EDIT)

</script>

<style scoped></style>
