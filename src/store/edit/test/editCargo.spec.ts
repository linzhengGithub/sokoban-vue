import { it, expect, describe, beforeEach } from 'vitest'
import { useEditCargoStore } from '../editCargo'
import { createPinia, setActivePinia } from 'pinia';

describe('editCargo test', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  });
  it('should remove cargo', () => {
    const { cargos, addCargo, createCargo, removeCargo } = useEditCargoStore()

    const cargo = createCargo({ x: 1, y: 1 })
    addCargo(cargo)
    removeCargo(cargo)

    expect(cargos.length).toBe(0);
  })
})
