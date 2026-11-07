import { defineConfig } from 'vite'
export default defineConfig({
  define: { 'process.env.NODE_ENV': '"production"' },
  build: {
    outDir: 'ui', emptyOutDir: false,
    lib: { entry: 'ui/Workshop.jsx', formats: ['iife'], name: 'UranoNoel', fileName: () => 'bundle.js' },
  },
})
