import { defineStore } from "pinia";
import { reactive } from "vue";
import { generateId } from '@/utils/id';

export interface EditCargo {
  x: number
  y: number
  id: number
}

export const useEditCargoStore = defineStore('edit-cargo-store', () => {
  const cargos = reactive<EditCargo[]>([])

  function createCargo({ x, y }: { x: number, y: number }): EditCargo {
    return {
      id: generateId(),
      x,
      y,
    }
  }

  function addCargo(cargo: EditCargo) {
    cargos.push(cargo)
  }

  return { cargos, createCargo, addCargo }

})
