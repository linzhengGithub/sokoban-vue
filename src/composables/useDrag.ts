let isDarg = false

export const useDrag = () => {
  function startDrag() {
    isDarg = true
  }
  function stopDrag() {
    isDarg = false
  }
  function isDraging() {
    return isDarg
  }
  return { startDrag, stopDrag, isDraging }
};
