import { defineStore } from "pinia";

export const useMapStore = defineStore('mapStore', () => {
  const map = [1, 2, 3]
  return { map }
})
