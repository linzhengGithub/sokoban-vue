import { defineStore } from "pinia";
import { reactive } from "vue";
import { Position } from "@/composables/usePosition";

interface Target {
  x: number
  y: number
}

export const useTargetStore = defineStore('targetStore', () => {
  const targets = reactive<Target[]>([])

  const addTarget = (target: Target) => {
    targets.push(target)
  }

  const createTarget = ({ x, y }: { x: number, y: number }): Target => {
    return { x, y }
  }

  const findTarget = (position: Position) => {
    return targets.find(t => t.x === position.x && t.y === position.y)
  }

  function cleanAllTargets() {
    targets.splice(0, targets.length)
  }

  return { targets, addTarget, createTarget, findTarget, cleanAllTargets }
})
