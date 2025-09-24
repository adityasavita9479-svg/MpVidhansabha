import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { viteStaticCopy } from 'vite-plugin-static-copy'

export default defineConfig({
  plugins: [
    react(),
    viteStaticCopy({
      targets: [
        {
          src: 'web.config', // copy this file to dist root
          dest: ''
        }
      ]
    })
  ],
  base: './', // ✅ relative paths so assets load in /mpvs/ subfolder
})
