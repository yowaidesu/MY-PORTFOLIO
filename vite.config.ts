import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  // Use root base for Netlify (serve from site root)
  base: '/MY-PORTFOLIO/',
  server: {
    hmr: false,
  },
})
