import { defineStore } from "pinia";
import { useMapStore } from "./map";
import { usePlayerStore } from "./player";
import { useCargoStore } from "./cargo";
import { useTargetStore } from "./target";
import { type LevelGameData } from '../src/game/gameData';
import { reactive } from "vue";

interface Game {
  isGameCompleted: boolean
}

export const useGameStore = defineStore('gameStore', () => {

  const game = reactive<Game>({
    isGameCompleted: false
  })

  function detectionGameCompleted() {
    const { cargos } = useCargoStore()
    game.isGameCompleted = cargos.every(c => c.onTarget)
  }

  function setupGame(levelGameData: LevelGameData) {
    const { setupMap } = useMapStore()
    const { player } = usePlayerStore()
    const { createCargo, addCargo } = useCargoStore()
    const { addTarget, createTarget } = useTargetStore()

    setupMap(levelGameData.map)
    player.x = levelGameData.player.x
    player.y = levelGameData.player.y
    levelGameData.cargos.forEach(c => addCargo(createCargo({ x: c.x, y: c.y })))
    levelGameData.targets.forEach(t => addTarget(createTarget({ x: t.x, y: t.y })))
  }

  return { game, detectionGameCompleted, setupGame }
})
