import { usePlayerStore } from '../../../store/player';

export function useMove() {
  const { movePlayerToLeft, movePlayerToRight, movePlayerToDown, movePlayerToUp } = usePlayerStore()

  window.addEventListener('keyup', (e: KeyboardEvent) => {
    switch (e.code) {
      case 'ArrowLeft':
        movePlayerToLeft()
        break
      case 'ArrowRight':
        movePlayerToRight()
        break
      case 'ArrowDown':
        movePlayerToDown()
        break
      case 'ArrowUp':
        movePlayerToUp()
        break
    }
  })
}
