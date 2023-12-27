import { Position } from "@/composables/usePosition";
import { useMapEditStore } from '@/store/edit/mapEdit';
import { defineStore } from "pinia";
import { MapTile } from "../map";
import floorImg from '@/assets/floor.png'
import wallImg from '@/assets/wall.png'
import playerImg from '@/assets/keeper.png';
import { useEditPlayerStore } from "./editPlayer";
import { ref } from "vue";
import cargoImg from '@/assets/cargo.png';
import { useEditCargoStore } from "./editCargo";

export interface EditElement {
  name: string
  img: string
  execute: (position: Position) => void
}

export const wallEditElement: EditElement = {
  name: '墙',
  img: wallImg,
  execute: (position) => {
    const { map } = useMapEditStore()
    map[position.y][position.x] = MapTile.WALL
  }
};

export const floorEditElement: EditElement = {
  name: '地板',
  img: floorImg,
  execute: (position) => {
    const { map } = useMapEditStore()
    map[position.y][position.x] = MapTile.FLOOR
  }
};

export const playerEditElement: EditElement = {
  name: '玩家',
  img: playerImg,
  execute: (position) => {
    const { player } = useEditPlayerStore()
    player.x = position.x
    player.y = position.y
  }
};

export const cargoEditElement: EditElement = {
  name: '箱子',
  img: cargoImg,
  execute: (position) => {
    const { addCargo, createCargo } = useEditCargoStore()
    addCargo(createCargo({ x: position.x, y: position.y }))
  }
};

export const useEditElementStore = defineStore('edit-element', () => {
  let currentSelectedEditElement = ref<EditElement | undefined>()

  function getCurrentSelectedEditElement() {
    return currentSelectedEditElement.value
  }

  function setCurrentSelectedEditElement(editElement: EditElement) {
    return currentSelectedEditElement.value = editElement
  }

  return { getCurrentSelectedEditElement, setCurrentSelectedEditElement }
})
