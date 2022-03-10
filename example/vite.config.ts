import { fileURLToPath, URL } from 'url'

import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import vConsolePlugin from 'vite-plugin-simple-vconsole'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    vue(),
    vConsolePlugin({
      enable: true,
    })
  ],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url))
    }
  }
})
