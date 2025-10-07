import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: process.env.NODE_ENV === 'production' ? '/BKM_Tekstil/' : '/',
  server: {
    port: 3000,
    host: true
  }
})