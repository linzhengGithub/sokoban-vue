<template>
  <div>
    <div class="flex w-full">
      <div class="w-4/6 bg-pink-500">
        <MapEdit />
        <EditPlayer />
        <template v-for="cargo in cargos" :key="cargo.id">
          <EditCargo :cargo="cargo" />
        </template>
      </div>
      <div class="w-2/6">store</div>
    </div>
    <div> <EditElementView /> </div>
  </div>
</template>

<script setup lang="ts">
import MapEdit from '@/components/Edit/MapEdit.vue'
import EditElementView from '@/components/Edit/EditElementView.vue'
import EditPlayer from '@/components/Edit/EditPlayer.vue'
import EditCargo from '@/components/Edit/EditCargo.vue'
import { useEditCargoStore } from '@/store/edit/editCargo'

const { cargos } = useEditCargoStore()
</script>

<style scoped></style>
