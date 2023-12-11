import { Map } from "../../store/map"

export interface LevelGameData {
  map: Map
  player: { x: number, y: number }
  cargos: { x: number, y: number }[]
  targets: { x: number, y: number }[]
}

export const levelGameData: LevelGameData = {
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
