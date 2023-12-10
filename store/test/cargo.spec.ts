import { it, expect, describe, beforeEach } from 'vitest'
import { useCargoStore } from '../cargo'
import { createPinia, setActivePinia } from 'pinia';
import { useTargetStore } from '../target';

describe('cargo test', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  });
  it('should add a cargo', () => {
    const { cargos, createCargo, addCargo } = useCargoStore()

    addCargo(createCargo({ x: 2, y: 2 }))

    expect(cargos.length).toBe(1)
  })

  describe('on target', () => {
    it('shift in', () => {
      const { createCargo, addCargo, moveCargo } = useCargoStore()
      const cargo = createCargo({ x: 1, y: 2 })
      addCargo(cargo)

      const {addTarget, createTarget} = useTargetStore()
      addTarget(createTarget({ x: 2, y: 2 }))

      moveCargo(cargo, 1, 0)

      expect(cargo.onTarget).toBe(true);
    })

    it('shift out', () => {
      const { createCargo, addCargo, moveCargo } = useCargoStore()
      const cargo = createCargo({ x: 1, y: 2 })
      addCargo(cargo)

      const {addTarget, createTarget} = useTargetStore()
      addTarget(createTarget({ x: 2, y: 2 }))

      moveCargo(cargo, 1, 0)
      moveCargo(cargo, 1, 0)

      expect(cargo.onTarget).toBe(false);
    })
  })
})
