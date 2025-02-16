import { defineConfig } from 'vite'

export default defineConfig({
  server: {
    cors: {
      origin: ['http://localhost:3000', 'https://example.com'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true,
    },
    allowedHosts: ['localhost', '*.example.com'],
  },
  preview: {
    cors: {
      origin: ['http://localhost:3000', 'https://example.com'],
      methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS'],
      allowedHeaders: ['Content-Type', 'Authorization'],
      credentials: true,
    },
    allowedHosts: ['localhost', '*.example.com'],
  },
})
