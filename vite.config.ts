import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'
import tailwindcss from '@tailwindcss/vite'
import { fileURLToPath, URL } from 'node:url'

// Two independent landing pages, each with its own HTML entry (real URLs, no client router).
export default defineConfig({
  plugins: [vue(), tailwindcss()],
  resolve: {
    alias: {
      '@': fileURLToPath(new URL('./src', import.meta.url)),
    },
  },
  build: {
    rollupOptions: {
      input: {
        clinica: fileURLToPath(new URL('./index.html', import.meta.url)),
        restaurante: fileURLToPath(new URL('./restaurante/index.html', import.meta.url)),
      },
    },
  },
})
