<template>
  <div class="absolute border border-blue-500" :style="position">
    <img :src="cargoImg" alt="" />
  </div>
</template>

<script setup lang="ts">
import cargoImg from '@/assets/cargo.png'
import { usePosition, STEP_EDIT } from '@/composables/usePosition';
import { type EditCargo } from '@/store/edit/editCargo';

interface Props {
  cargo: EditCargo
}

const props = defineProps<Props>()

const { position } = usePosition(props.cargo, STEP_EDIT)
</script>

<style scoped></style>
