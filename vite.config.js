import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  server: {
    host: true, // هذا السطر يسمح للأجهزة الأخرى بالوصول للمشروع
    port: 3000, 
  },
  plugins: [react()],
})
