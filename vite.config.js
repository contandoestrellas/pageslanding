import { defineConfig } from 'vite';
import { resolve } from 'path';

export default defineConfig({
  root: 'landing-vecinos',
  build: {
    rollupOptions: {
      input: {
        sushi: resolve(__dirname, 'landing-vecinos/sushi/index.html'),
        unas: resolve(__dirname, 'landing-vecinos/unas/index.html'),
        comida: resolve(__dirname, 'landing-vecinos/comida/index.html'),
      },
      output: {
        entryFileNames: '[name]/[name].js',
        chunkFileNames: 'shared/[name]-[hash].js',
        assetFileNames: '[name]-[hash][extname]'
      }
    },
    outDir: '../dist'
  },
  server: {
    port: 5173,
    host: true,
    open: '/sushi/index.html'
  }
});
