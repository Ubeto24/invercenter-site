import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // GitHub Pages project page base
  base: '/invercenter-site/',
  plugins: [react()],
})
