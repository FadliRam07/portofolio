import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    outDir: 'dist', // Pastikan output directory sesuai dengan setting Vercel
    sourcemap: false, // Opsional: matikan untuk mempercepat build
    rollupOptions: {
      output: {
        manualChunks: undefined // Hindari chunking error
      }
    }
  },
  server: {
    port: 3000, // Opsional: untuk development lokal
  },
  // Tambahkan ini jika deploy di subpath / custom domain
  // base: '/', 
})