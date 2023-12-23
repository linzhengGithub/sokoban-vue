import { defineStore } from "pinia";
import { reactive, ref } from "vue";
import { MapTile } from "../map";

type MapEdit = MapTile[][]

export const useMapEditStore = defineStore('map-edit', () => {
  let map = reactive<MapEdit>([])

  const row = ref(8)
  const col = ref(8)

  function initMap(_row?: number, _col?: number) {
    if (_row) {
      setRow(_row)
    }
    if (_col) {
      setCol(_col)
    }

    for (let i = 0; i < row.value; i++) {
      const cells = []
      for (let j = 0; j < col.value; j++) {
        cells.push(MapTile.FLOOR)
      }
      map.push(cells)
    }
  }

  function updateRowMap() {
    const oldRow = map.length
    const col = map[0].length
    // 原本的 map row 小于 现在的 row = 增加
    // 原本的 map row 大于 现在的 row = 减少
    if (row.value > oldRow) {
      const diff = row.value - oldRow
      for (let i = 0; i < diff; i++) {
        map.push(new Array(col).fill(MapTile.FLOOR))
      }
    } else if (row.value < oldRow) {
      const diff = oldRow - row.value
      map.splice(map.length - diff, map.length)
    }
  }

  function updateColMap() {
    const oldCol = map[0].length
    // 原本的 map col 小于 现在的 col = 增加
    // 原本的 map col 大于 现在的 col = 减少
    if (col.value > oldCol) {
      const diff = col.value - oldCol
      map.forEach((cells) => {
        cells.push(...new Array(diff).fill(MapTile.FLOOR))
      })
    } else if (col.value < oldCol) {
      const diff = oldCol - col.value
      map.forEach((cells) => {
        cells.splice(cells.length - diff, cells.length)
      })
    }
  }

  function setRow(_row: number) {
    row.value = _row
  }

  function setCol(_col: number) {
    col.value = _col
  }

  return { map, row, col, initMap, setRow, setCol, updateRowMap, updateColMap }
})
