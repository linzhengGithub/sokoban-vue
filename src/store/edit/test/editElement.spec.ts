import { it, expect, describe, beforeEach } from 'vitest'
import { useMapEditStore } from '../mapEdit'
import { MapTile } from '@/store/map'
import { useEditElementStore, wallEditElement, floorEditElement, playerEditElement, cargoEditElement, targetEditElement } from '../editElement'
import { createPinia, setActivePinia } from 'pinia'
import { useEditPlayerStore } from '../editPlayer'
import { useEditCargoStore } from '../editCargo'
import { useEditTargetStore } from '../editTarget'

describe('edit element test', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  });
  it('should be changed to wall when current selected element is wall', () => {
    const { map, initMap } = useMapEditStore()
    const { getCurrentSelectedEditElement, setCurrentSelectedEditElement } = useEditElementStore()

    initMap()
    setCurrentSelectedEditElement(wallEditElement)
    getCurrentSelectedEditElement()!.execute({ x: 1, y: 1 })

    expect(map[1][1]).toBe(MapTile.WALL);
  })

  it('should be changed to floor when current selected element is floor', () => {
    const { map, initMap } = useMapEditStore()
    const { getCurrentSelectedEditElement, setCurrentSelectedEditElement } = useEditElementStore()

    initMap()
    setCurrentSelectedEditElement(floorEditElement)
    getCurrentSelectedEditElement()!.execute({ x: 1, y: 1 })

    expect(map[1][1]).toBe(MapTile.FLOOR);
  })

  it('should be update position of player when current selected element is player', () => {
    const { player } = useEditPlayerStore()
    const { getCurrentSelectedEditElement, setCurrentSelectedEditElement } = useEditElementStore()

    const position = { x: 1, y: 1 }
    setCurrentSelectedEditElement(playerEditElement)
    getCurrentSelectedEditElement()!.execute(position)

    expect(player.x).toBe(position.x);
    expect(player.y).toBe(position.y);
  })

  it('should be update position of cargo when current selected element is cargo', () => {
    const { cargos } = useEditCargoStore()
    const { getCurrentSelectedEditElement, setCurrentSelectedEditElement } = useEditElementStore()

    const position = { x: 1, y: 1 }
    setCurrentSelectedEditElement(cargoEditElement)
    getCurrentSelectedEditElement()!.execute(position)

    expect(cargos[0].x).toBe(position.x);
    expect(cargos[0].y).toBe(position.y);
  })

  it('should be update position of target when current selected element is target', () => {
    const { targets } = useEditTargetStore()
    const { getCurrentSelectedEditElement, setCurrentSelectedEditElement } = useEditElementStore()

    const position = { x: 1, y: 1 }
    setCurrentSelectedEditElement(targetEditElement)
    getCurrentSelectedEditElement()!.execute(position)

    expect(targets[0].x).toBe(position.x);
    expect(targets[0].y).toBe(position.y);
  })


})
