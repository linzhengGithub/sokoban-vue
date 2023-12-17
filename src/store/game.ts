import { defineStore } from "pinia";
import { useMapStore } from "./map";
import { usePlayerStore } from "./player";
import { useCargoStore } from "./cargo";
import { useTargetStore } from "./target";
import { type LevelGameData } from '@/game/gameData';
import { reactive } from "vue";

interface Game {
  isGameCompleted: boolean
  level: number
}

type GameData = LevelGameData[]

let _gameData: GameData

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
    _gameData = gameData

    setupLevel()
  }

  function toNextLevel() {
    game.level += 1

    game.isGameCompleted = false

    setupLevel()
  }

  function setupLevel() {
    const levelGameData = _gameData[game.level - 1]

    const { setupMap } = useMapStore()
    const { player } = usePlayerStore()
    const { createCargo, addCargo, cleanAllCargos } = useCargoStore()
    const { addTarget, createTarget, cleanAllTargets } = useTargetStore()

    setupMap(levelGameData.map)
    player.x = levelGameData.player.x
    player.y = levelGameData.player.y

    cleanAllCargos()
    levelGameData.cargos.forEach(c => addCargo(createCargo({ x: c.x, y: c.y })))

    cleanAllTargets()
    levelGameData.targets.forEach(t => addTarget(createTarget({ x: t.x, y: t.y })))
  }

  return { game, detectionGameCompleted, setupGame, toNextLevel }
})
