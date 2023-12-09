import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { useMapStore } from './map'
import { useCargoStore } from './cargo';

export const usePlayerStore = defineStore('playerStore', () => {
  const player = reactive({
    x: 1,
    y: 1
  })
  const { isWall } = useMapStore()
  const { findCargo } = useCargoStore()


  const movePlayerToLeft = () => {
    if (isWall({ x: player.x - 1, y: player.y })) return

    const cargo = findCargo({ x: player.x - 1, y: player.y })

    if (cargo) {
      cargo.x -= 1
    }

    player.x -= 1
  }

  const movePlayerToRight = () => {
    if (isWall({ x: player.x + 1, y: player.y })) return

    const cargo = findCargo({ x: player.x + 1, y: player.y })

    if (cargo) {
      cargo.x += 1
    }

    player.x += 1
  }
  const movePlayerToDown = () => {
    if (isWall({ x: player.x, y: player.y + 1 })) return

    const cargo = findCargo({ x: player.x, y: player.y + 1 })

    if (cargo) {
      cargo.y += 1
    }

    player.y += 1
  }
  const movePlayerToUp = () => {
    if (isWall({ x: player.x, y: player.y - 1 })) return

    const cargo = findCargo({ x: player.x, y: player.y - 1 })

    if (cargo) {
      cargo.y -= 1
    }

    player.y -= 1
  }

  return { player, movePlayerToLeft, movePlayerToRight, movePlayerToDown, movePlayerToUp }
})
