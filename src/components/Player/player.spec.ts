import { it, expect, describe, beforeEach } from 'vitest'
import { usePlayerStore } from '../../../store/player'
import { useMove } from './player'
import { createPinia, setActivePinia } from 'pinia';
import { useMapStore } from '@/store/map';

describe('keyup test group', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
    const { setupMap } = useMapStore()
    const newMap = [
      [2, 2, 2],
      [2, 2, 2],
      [2, 2, 2],
    ]
    setupMap(newMap)
  });
  it('press key, play movement', () => {
    const { player } = usePlayerStore()
    player.x = 1
    player.y = 1
    useMove()

    window.dispatchEvent(new KeyboardEvent('keyup', { code: 'ArrowLeft' }))
    expect(player.x).toBe(0)

    window.dispatchEvent(new KeyboardEvent('keyup', { code: 'ArrowRight' }))
    expect(player.x).toBe(1)

    window.dispatchEvent(new KeyboardEvent('keyup', { code: 'ArrowDown' }))
    expect(player.y).toBe(2)

    window.dispatchEvent(new KeyboardEvent('keyup', { code: 'ArrowUp' }))
    expect(player.y).toBe(1)
  })
})
