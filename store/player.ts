import { defineStore } from 'pinia'

export const usePlayerStore = defineStore('playerStore', () => {
  const player = {
    x: 1,
    y: 1
  }
  
  return { player }
})
