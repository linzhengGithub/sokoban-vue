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
    initMap(row, col)

    expect(map.length).toBe(row);
    expect(map[0].length).toBe(col);
  })

  describe('change row / col', () => {
    it('should be map row to equal the row when increase row', () => {
      const { initMap, map, updateRowMap, setRow } = useMapEditStore()

      initMap(2, 2)
      setRow(4)

      updateRowMap()

      expect(map).toMatchInlineSnapshot(`
        [
          [
            2,
            2,
          ],
          [
            2,
            2,
          ],
          [
            2,
            2,
          ],
          [
            2,
            2,
          ],
        ]
      `)
    })
  })
  it('should be map row to equal the row when decrease row', () => {
    const { initMap, map, updateRowMap, setRow } = useMapEditStore()

    initMap(4, 4)
    setRow(3)

    updateRowMap()

    expect(map).toMatchInlineSnapshot(`
      [
        [
          2,
          2,
          2,
          2,
        ],
        [
          2,
          2,
          2,
          2,
        ],
        [
          2,
          2,
          2,
          2,
        ],
      ]
    `)
  })

})
