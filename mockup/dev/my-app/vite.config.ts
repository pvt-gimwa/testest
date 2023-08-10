import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      input: './src/main.tsx', // 指定入口文件路径
      output: {
        format: 'esm',
        entryFileNames: 'index.js'
      }
    }
  }
})
