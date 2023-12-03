import { it, expect, describe, beforeEach } from 'vitest'
import { usePlayerStore } from '../player'
import { createPinia, setActivePinia } from 'pinia';
import { useMapStore } from '../map';

describe('keyup test group', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    const { player } = usePlayerStore()
    const { setupMap } = useMapStore()
    player.x = 1
    player.y = 1
    const newMap = [
      [2, 2, 2],
      [2, 2, 2],
      [2, 2, 2],
    ]
    setupMap(newMap)
  });
  it('press left, player to left', () => {
    const { player, movePlayerToLeft } = usePlayerStore()

    movePlayerToLeft()

    expect(player.x).toBe(0)
  })


  it('press right, player to right', () => {
    const { player, movePlayerToRight } = usePlayerStore()

    movePlayerToRight()

    expect(player.x).toBe(2)
  })
  it('press down, player to down', () => {
    const { player, movePlayerToDown } = usePlayerStore()

    movePlayerToDown()

    expect(player.y).toBe(2)
  })
  it('press up, player to up', () => {
    const { player, movePlayerToUp } = usePlayerStore()

    movePlayerToUp()

    expect(player.y).toBe(0)
  })
})
