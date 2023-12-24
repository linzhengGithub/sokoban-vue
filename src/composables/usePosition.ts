import { computed } from "vue"

export interface Position {
  x: number
  y: number
}
export function usePosition(pos: Position, step: number = 32) {

  const position = computed(() => {
    return {
      left: pos.x * step + 'px',
      top: pos.y * step + 'px'
    }
  })

  return { position }
}
