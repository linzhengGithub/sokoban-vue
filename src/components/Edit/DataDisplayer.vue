<template>
  <div class="ml-2">
    <h2>数据展示区</h2>
    <textarea name="" id="" cols="30" rows="10" class="border border-solid border-red-400">{{ levelGameData }}</textarea>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue';
import { type LevelGameData} from '@/game/gameData'
import { useMapEditStore } from '@/store/edit/mapEdit';
import { useEditPlayerStore } from '@/store/edit/editPlayer';
import { useEditCargoStore } from '@/store/edit/editCargo';
import { useEditTargetStore } from '@/store/edit/editTarget';

const {map} = useMapEditStore()
const {player} = useEditPlayerStore()
const {cargos} = useEditCargoStore()
const {targets} = useEditTargetStore()

function format(data:{x:number, y: number}[]) {
  return data.map(({x,y}) => ({x,y}))
}

const levelGameData = computed<LevelGameData>(() => {
  return {
    map,
    player,
    cargos: format(cargos),
    targets: format(targets)
  }
})
</script>

<style scoped></style>
