import { it, expect, describe, beforeEach } from 'vitest'
import { useMapEditStore } from '../mapEdit'
import { createPinia, setActivePinia } from 'pinia';

describe('map edit test', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  })
  it('should be same to be col and row when init map', () => {
    const { map, initMap } = useMapEditStore()

    const row = 8
    const col = 8
    initMap()

    expect(map.length).toBe(row);
    expect(map[0].length).toBe(col);
  })
})
