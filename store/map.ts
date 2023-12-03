import { defineStore } from "pinia";

export enum MapTile {
  WALL = 1,
  FLOOR = 2
}

type Map = MapTile[][]

export const useMapStore = defineStore('mapStore', () => {
  const map = [
    [1, 1, 1, 1, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 2, 2, 2, 1],
    [1, 1, 1, 1, 1]
  ]

  function setupMap(newMap: Map) {
    map.splice(0, map.length, ...newMap)
  }

  return { map, setupMap }
})
