import { it, expect, describe, beforeEach } from 'vitest'
import { useTargetStore } from '../target'
import { createPinia, setActivePinia } from 'pinia';

describe('target test', () => {
  beforeEach(() => {
    setActivePinia(createPinia())
  });
  it('should clean targets', () => {
    const { targets, addTarget, createTarget, cleanAllTargets } = useTargetStore()
    addTarget(createTarget({ x: 1, y: 2 }))
    addTarget(createTarget({ x: 2, y: 2 }))

    cleanAllTargets()

    expect(targets.length).toBe(0);
  })
})
