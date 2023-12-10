import { defineStore } from "pinia";
import { reactive } from "vue";

interface Target {
  x: number
  y: number
}

export const useTargetStore = defineStore('targetStore', () => {
  const targets: Target[] = reactive([
    {
      x: 4,
      y: 2
    },
    {
      x: 4,
      y: 3
    }
  ])

  return { targets }
})
