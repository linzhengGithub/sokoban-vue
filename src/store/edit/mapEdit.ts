import { defineStore } from "pinia";
import { reactive } from "vue";

interface EditElement {
  name: 'wall' | 'floor'
}

export const useMapEditStore = defineStore('map-edit', () => {
  const map = reactive([
    [2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2],
    [2, 2, 2, 2, 2, 2]
  ])
  let currentSelectedEditElement: EditElement

  function getCurrentSelectedEditElement() {
    return currentSelectedEditElement
  }

  function setCurrentSelectedEditElement(editElement: EditElement) {
    return currentSelectedEditElement = editElement
  }

  return { map, getCurrentSelectedEditElement, setCurrentSelectedEditElement }
})
