import { it, expect, describe, beforeEach } from 'vitest'
import { useMapEditStore } from '../mapEdit'
import { MapTile } from '@/store/map'
import { useEditElementStore, wallEditElement, floorEditElement } from '../editElement'
import { createPinia, setActivePinia } from 'pinia'

describe('edit element test', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  });
  it('should be changed to wall when current selected element is wall', () => {
    const { map, initMap } = useMapEditStore()
    const { getCurrentSelectedEditElement, setCurrentSelectedEditElement } = useEditElementStore()

    initMap()
    setCurrentSelectedEditElement(wallEditElement)
    getCurrentSelectedEditElement().execute({ x: 1, y: 1 })

    expect(map[1][1]).toBe(MapTile.WALL);
  })

  it('should be changed to floor when current selected element is floor', () => {
    const { map, initMap } = useMapEditStore()
    const { getCurrentSelectedEditElement, setCurrentSelectedEditElement } = useEditElementStore()

    initMap()
    setCurrentSelectedEditElement(floorEditElement)
    getCurrentSelectedEditElement().execute({ x: 1, y: 1 })

    expect(map[1][1]).toBe(MapTile.FLOOR);
  })
})
