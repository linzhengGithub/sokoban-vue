import { it, expect, describe, beforeEach } from 'vitest'
import { useMapStore } from '../map'
import { usePlayerStore } from '../player'
import { useCargoStore } from '../cargo'
import { useTargetStore } from '../target'
import { useGameStore } from '../game'
import { createPinia, setActivePinia } from 'pinia'

describe('game test', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    const { setupMap } = useMapStore()
    const newMap = [
      [1, 1, 1, 1, 1],
      [1, 2, 2, 2, 1],
      [1, 2, 2, 2, 1],
      [1, 2, 2, 2, 1],
      [1, 1, 1, 1, 1]
    ]
    setupMap(newMap)
  });
  it('should game completed', () => {
    const { detectionGameCompleted, game } = useGameStore()

    const { createCargo, addCargo, moveCargo } = useCargoStore()
    const cargo = createCargo({ x: 1, y: 2 })
    addCargo(cargo)
    const {addTarget, createTarget} = useTargetStore()
    addTarget(createTarget({ x: 2, y: 2 }))

    moveCargo(cargo, 1, 0)
    detectionGameCompleted()

    expect(game.isGameCompleted).toBe(true);
  })
  it('should game not completed', () => {
    const { detectionGameCompleted, game } = useGameStore()

    const { createCargo, addCargo, moveCargo } = useCargoStore()
    const cargo = createCargo({ x: 1, y: 2 })
    addCargo(cargo)
    const {addTarget, createTarget} = useTargetStore()
    addTarget(createTarget({ x: 2, y: 2 }))

    moveCargo(cargo, 1, 0)
    moveCargo(cargo, 1, 0)
    detectionGameCompleted()

    expect(game.isGameCompleted).toBe(false);
  })
  it('should setup game', () => {
    const levelGameData = {
      map: [
        [1, 1, 1, 1, 1, 1, 1],
        [1, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 1],
        [1, 2, 2, 2, 2, 2, 1],
        [1, 1, 1, 1, 1, 1, 1]
      ],
      player: {
        x: 1,
        y: 1
      },
      cargos: [
        { x: 2, y: 2 },
        { x: 3, y: 2 }
      ],
      targets: [
        { x: 4, y: 2 },
        { x: 4, y: 3 }
      ]
    }
    const { setupGame } = useGameStore()
    const { map } = useMapStore()
    const { player } = usePlayerStore()
    const { cargos } = useCargoStore()
    const { targets } = useTargetStore()

    const gameData = [levelGameData]
    setupGame(gameData)

    expect(map).toEqual(levelGameData.map);
    expect(player.x).toBe(levelGameData.player.x);
    expect(player.y).toBe(levelGameData.player.y);
    expect(cargos.length).toBe(2);
    expect(targets.length).toBe(2);

  })
})
