import { defineConfig } from 'vitest/config'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  resolve: {
    alias: {
      '@': '/src'
    }
  },
  test: {
    environment: 'happy-dom',
    // coverage: {
    //   provider: 'v8',
    //   enabled: true,
    // }
  },
  plugins: [
    vue()
  ],
})
