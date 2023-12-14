import { defineStore } from "pinia";
import { useMapStore } from "./map";
import { usePlayerStore } from "./player";
import { useCargoStore } from "./cargo";
import { useTargetStore } from "./target";
import { type LevelGameData, levelGameData } from '../src/game/gameData';
import { reactive } from "vue";

interface Game {
  isGameCompleted: boolean
  level: number
}

type GameData = LevelGameData[]

export const useGameStore = defineStore('gameStore', () => {

  const game = reactive<Game>({
    isGameCompleted: false,
    level: 1
  })

  function detectionGameCompleted() {
    const { cargos } = useCargoStore()
    game.isGameCompleted = cargos.every(c => c.onTarget)
  }

  function setupGame(gameData: GameData) {
    const levelGameData = gameData[game.level - 1]

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
