import { it, expect, describe } from 'vitest'
import { usePosition } from '../usePosition'
import { reactive } from 'vue'

describe('usePosition test group', () => {
  it('should return position', () => {
    const pos = {
      x: 1,
      y: 1
    }

    const { position } = usePosition(pos)

    expect(position.value).toEqual({
      left: '32px',
      top: '32px'
    });
  })

  it('should set step', () => {
    const pos = {
      x: 1,
      y: 1
    }

    const { position } = usePosition(pos, 34)

    expect(position.value).toEqual({
      left: '34px',
      top: '34px'
    });
  })

  it('should update position when reactive data changed', () => {
    const pos = reactive({
      x: 2,
      y: 1
    })

    const { position } = usePosition(pos)

    expect(position.value).toEqual({
      left: '64px',
      top: '32px',
    });
  })

})
