import { defineConfig } from 'vite'
import vue from '@vitejs/plugin-vue'

// https://vitejs.dev/config/
export default defineConfig({
  mode: 'development',
  plugins: [vue()],
  base: 'https://joyful-mermaid-1c6798.netlify.app/'
})
