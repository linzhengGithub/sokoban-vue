import { defineStore } from 'pinia'
import { reactive } from 'vue'
import { useMapStore } from './map'
import { useCargoStore } from './cargo';

interface Player {
  x: number
  y: number
}

export const usePlayerStore = defineStore('playerStore', () => {
  const player = reactive<Player>({
    x: 0,
    y: 0
  })
  const { isWall } = useMapStore()

  function _move(dx: number, dy: number) {
    const nextPosition = {
      x: player.x + dx,
      y: player.y + dy
    }

    if (isWall(nextPosition)) return;

    const { findCargo, moveCargo } = useCargoStore()

    const cargo = findCargo(nextPosition)

    if (cargo) {
      const isMoveCargo = moveCargo(cargo, dx, dy)
      if (!isMoveCargo) return;
    }

    player.x += dx
    player.y += dy
  }

  const movePlayerToLeft = () => {
    _move(-1, 0)
  }

  const movePlayerToRight = () => {
    _move(1, 0)
  }
  const movePlayerToDown = () => {
    _move(0, 1)
  }
  const movePlayerToUp = () => {
    _move(0, -1)
  }

  return { player, movePlayerToLeft, movePlayerToRight, movePlayerToDown, movePlayerToUp }
})
