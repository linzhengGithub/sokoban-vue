import { it, expect, describe, beforeEach } from 'vitest'
import { useCargoStore } from '../cargo'
import { createPinia, setActivePinia } from 'pinia';

describe('cargo test', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  });
  it('should add a cargo', () => {
    const { cargos, createCargo, addCargo } = useCargoStore()

    addCargo(createCargo({ x: 2, y: 2 }))

    expect(cargos.length).toBe(1)
  })
})
