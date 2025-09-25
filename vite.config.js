import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    rollupOptions: {
      external: (id) => {
        // Exclude API files from the build
        return id.includes('/api/')
      }
    }
  },
  server: {
    // Exclude API directory from dev server processing
    fs: {
      deny: ['**/api/**']
    }
  }
})
