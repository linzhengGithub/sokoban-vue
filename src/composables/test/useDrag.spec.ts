import { it, expect, describe } from 'vitest'
import { useDrag } from '../useDrag'

describe('drag test', () => {
  it('should start drag', () => {
    const { startDrag, isDraging } = useDrag()

    startDrag()

    expect(isDraging()).toBe(true);
  })
  it('should stop drag', () => {
    const { stopDrag, isDraging } = useDrag()

    stopDrag()

    expect(isDraging()).toBe(false);
  })
})
