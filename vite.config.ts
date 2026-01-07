import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: '/',
  plugins: [react()],
  build: {
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes('node_modules/react') || id.includes('node_modules/react-dom')) {
            return 'vendor-react';
          }
          if (id.includes('node_modules/gsap') || id.includes('node_modules/@gsap') || id.includes('node_modules/kute')) {
            return 'vendor-animation';
          }
          if (id.includes('node_modules/react-icons') || id.includes('node_modules/lucide-react') || id.includes('node_modules/@heroicons')) {
            return 'vendor-icons';
          }
        },
      },
    },
    chunkSizeWarningLimit: 500,
    sourcemap: false,
    minify: 'esbuild',
  },
})
