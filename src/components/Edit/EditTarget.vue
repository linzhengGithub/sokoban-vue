<template>
  <div class="absolute border border-blue-500" :style="position" @dblclick="handleDbClick">
    <img :src="targetImg" alt="" />
  </div>
</template>

<script setup lang="ts">
import targetImg from '@/assets/target.png'
import { usePosition, STEP_EDIT } from '@/composables/usePosition';
import { type EditTarget, useEditTargetStore } from '@/store/edit/editTarget';

interface Props {
  target: EditTarget
}

const props = defineProps<Props>()

const { position } = usePosition(props.target, STEP_EDIT)
const { removeTarget } = useEditTargetStore()

function handleDbClick() {
  removeTarget(props.target)
}
</script>

<style scoped></style>
