<template>
  <div>
    <img :src="editElement.img" @click="handleClick" />
  </div>
</template>

<script setup lang="ts">
import { useEditElementStore } from '@/store/edit/editElement'
import { EditElement } from '@/store/edit/editElement'

interface Props {
  editElement: EditElement
}

const { setCurrentSelectedEditElement } = useEditElementStore()

const props = defineProps<Props>()

function handleClick() {
  setCurrentSelectedEditElement(props.editElement)
}
</script>

<style scoped></style>
