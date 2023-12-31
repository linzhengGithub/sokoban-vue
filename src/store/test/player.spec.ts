import { it, expect, describe, beforeEach } from 'vitest'
import { usePlayerStore } from '../player'
import { createPinia, setActivePinia } from 'pinia';
import { useMapStore } from '../map';
import { useCargoStore } from '../cargo';

describe('keyup test group', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  });

  describe('normal move', () => {
    beforeEach(() => {
      const { player } = usePlayerStore()
      player.x = 1
      player.y = 1
      const { setupMap } = useMapStore()
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

  describe('collision wall', () => {
    beforeEach(() => {
      const { setupMap } = useMapStore()
      const newMap = [
        [1, 1, 1, 1, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 1, 1, 1, 1]
      ]
      setupMap(newMap)
    });
    it('should not move to left when collision a wall', () => {
      const { player, movePlayerToLeft } = usePlayerStore()
      player.x = 1
      player.y = 1
      movePlayerToLeft()
      expect(player.x).toBe(1);
    })

    it('should not move to right when collision a wall', () => {
      const { player, movePlayerToRight } = usePlayerStore()
      player.x = 3
      player.y = 1
      movePlayerToRight()
      expect(player.x).toBe(3);
    })

    it('should not move to down when collision a wall', () => {
      const { player, movePlayerToDown } = usePlayerStore()
      player.x = 1
      player.y = 3
      movePlayerToDown()
      expect(player.y).toBe(3);
    })

    it('should not move to up when collision a wall', () => {
      const { player, movePlayerToUp } = usePlayerStore()
      player.x = 1
      player.y = 1
      movePlayerToUp()
      expect(player.y).toBe(1);
    })
  })

  describe('push a cargo', () => {
    beforeEach(() => {
      const { setupMap } = useMapStore()
      const newMap = [
        [1, 1, 1, 1, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 2, 2, 2, 1],
        [1, 1, 1, 1, 1]
      ]
      setupMap(newMap)
    });
    it('should push a cargo to left', () => {
      const { createCargo, addCargo } = useCargoStore()
      const cargo = createCargo({ x: 2, y: 1 })
      addCargo(cargo)

      const { player, movePlayerToLeft } = usePlayerStore()
      player.x = 3
      player.y = 1
      movePlayerToLeft()

      expect(player.x).toBe(2);
      expect(cargo.x).toBe(1);
    })

    it('should push a cargo to right', () => {
      const { createCargo, addCargo } = useCargoStore()
      const cargo = createCargo({ x: 2, y: 1 })
      addCargo(cargo)

      const { player, movePlayerToRight } = usePlayerStore()
      player.x = 1
      player.y = 1
      movePlayerToRight()

      expect(player.x).toBe(2);
      expect(cargo.x).toBe(3);
    })

    it('should push a cargo to down', () => {
      const { createCargo, addCargo } = useCargoStore()
      const cargo = createCargo({ x: 2, y: 2 })
      addCargo(cargo)

      const { player, movePlayerToDown } = usePlayerStore()
      player.x = 2
      player.y = 1
      movePlayerToDown()

      expect(player.y).toBe(2);
      expect(cargo.y).toBe(3);
    })

    it('should push a cargo to up', () => {
      const { createCargo, addCargo } = useCargoStore()
      const cargo = createCargo({ x: 2, y: 2 })
      addCargo(cargo)

      const { player, movePlayerToUp } = usePlayerStore()
      player.x = 2
      player.y = 3
      movePlayerToUp()

      expect(player.y).toBe(2);
      expect(cargo.y).toBe(1);
    })

    it('should not push cargo when the cargo hit wall', () => {
      const { createCargo, addCargo } = useCargoStore()
      const cargo = createCargo({ x: 3, y: 1 })
      addCargo(cargo)

      const { player, movePlayerToRight } = usePlayerStore()
      player.x = 2
      player.y = 1
      movePlayerToRight()

      expect(player.x).toBe(2);
      expect(cargo.x).toBe(3);
    })

    it('should not push cargo when the cargo hit other cargo', () => {
      const { createCargo, addCargo } = useCargoStore()
      const cargo = createCargo({ x: 2, y: 1 })
      addCargo(cargo)
      addCargo(createCargo({ x: 3, y: 1 }))
      
      const { player, movePlayerToRight } = usePlayerStore()
      player.x = 1
      player.y = 1
      movePlayerToRight()

      expect(player.x).toBe(1);
      expect(cargo.x).toBe(2);
    })

  })
})
