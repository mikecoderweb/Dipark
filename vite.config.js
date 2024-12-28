import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  base: '/',
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: true
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  server: {
    port: 5500,
    strictPort: true,
    host: true
  }
})
