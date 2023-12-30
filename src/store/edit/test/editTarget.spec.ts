import { it, expect, describe, beforeEach } from 'vitest'
import { createPinia, setActivePinia } from 'pinia';
import { useEditTargetStore } from '../editTarget';

describe('editTarget test', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  });
  it('should remove a target', () => {
    const { targets, addTarget, createTarget, removeTarget } = useEditTargetStore()

    const target = createTarget({ x: 1, y: 1 })
    addTarget(target)
    removeTarget(target)

    expect(targets.length).toBe(0);
  })
})
