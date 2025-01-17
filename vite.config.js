import { defineConfig } from 'vite'

export default defineConfig({
  root: './frontend/src',
  publicDir: '../public',
  server: {
    port: 5175,
    open: true,
    // Handle SPA routing
    historyApiFallback: true
  },
  build: {
    outDir: '../dist',
    emptyOutDir: true,
    rollupOptions: {
      input: {
        main: './frontend/src/index.html',
      }
    }
  },
  resolve: {
    alias: {
      '@': '/src',
      '@components': '/components',
      '@pages': '/pages',
      '@styles': '/styles'
    }
  }
})
