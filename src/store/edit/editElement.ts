import { Position } from "@/composables/usePosition";
import { useMapEditStore } from '@/store/edit/mapEdit';
import { defineStore } from "pinia";
import { MapTile } from "../map";


export interface EditElement {
  execute: (position: Position) => void
}

export const wallEditElement: EditElement = {
  execute: (position) => {
    const { map } = useMapEditStore()
    map[position.y][position.x] = MapTile.WALL
  }
};

export const floorEditElement: EditElement = {
  execute: (position) => {
    const { map } = useMapEditStore()
    map[position.y][position.x] = MapTile.FLOOR
  }
};

export const useEditElementStore = defineStore('edit-element', () => {
  let currentSelectedEditElement: EditElement

  function getCurrentSelectedEditElement() {
    return currentSelectedEditElement
  }

  function setCurrentSelectedEditElement(editElement: EditElement) {
    return currentSelectedEditElement = editElement
  }

  return { getCurrentSelectedEditElement, setCurrentSelectedEditElement }
})
