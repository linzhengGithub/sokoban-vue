import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { MapTile } from "../map";

type MapEdit = MapTile[][]

export const useMapEditStore = defineStore('map-edit', () => {
  let map = reactive<MapEdit>([])

  const row = ref(8)
  const col = ref(8)

  function initMap() {
    for (let i = 0; i < row.value; i++) {
    const cells = []
      for (let j = 0; j < col.value; j++) {
        cells.push(MapTile.FLOOR)
      }
      map.push(cells)
    }
  }

  return { map, row, col, initMap }
})
