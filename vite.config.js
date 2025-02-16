import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    cors: true, // Enable CORS for development
    allowedHosts: 'all', // Allow all hosts in development
  },
  preview: {
    cors: true, // Enable CORS for preview
    allowedHosts: 'all', // Allow all hosts in preview
  },
})
