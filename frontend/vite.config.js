// frontend/vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Dev-only proxy (ignored in production builds)
  server: {
    proxy: {
      '/api': { target: 'http://localhost:10001', changeOrigin: true },
      '/chat': { target: 'http://localhost:10001', changeOrigin: true },
    },
  },
})
