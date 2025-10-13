import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  // Base path for production assets
  // Netlify deploys at domain root, so keep '/'.
  // If deploying to GitHub Pages project page, change to '/invercenter-site/'.
  base: '/',
  plugins: [react()],
})
