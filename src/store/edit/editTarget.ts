import { defineStore } from "pinia";
import { reactive } from "vue";

export interface EditTarget {
  x: number
  y: number
}

export const useEditTargetStore = defineStore('edit-target-store', () => {
  const targets = reactive<EditTarget[]>([
    {
      x: 4,
      y: 4
    }
  ])
  return { targets }
});
