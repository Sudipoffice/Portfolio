import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      injectRegister: false,
      includeAssets: ['icon.svg'],
      manifest: {
        name: 'Sudip Mandal — Full Stack Developer',
        short_name: 'Sudip Mandal',
        description:
          'Portfolio of Sudip Mandal — Full Stack Developer specializing in the MERN stack, AI-driven products and production web apps.',
        theme_color: '#0f172a',
        background_color: '#0f172a',
        display: 'standalone',
        start_url: '/',
        icons: [
          {
            src: '/icon.svg',
            sizes: 'any',
            type: 'image/svg+xml',
            purpose: 'any maskable',
          },
        ],
      },
      workbox: {
        globPatterns: ['**/*.{js,css,html,webp,png,svg,woff2,woff,pdf}'],
        cleanupOutdatedCaches: true,
        navigateFallback: '/index.html',
        runtimeCaching: [
          {
            urlPattern: /^https:\/\/sudipoffice\.github\.io\/.*\.(webp|png|jpe?g|svg|gif)(\?.*)?$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'portfolio-images-v1',
              expiration: {
                maxEntries: 120,
                maxAgeSeconds: 30 * 24 * 60 * 60,
              },
            },
          },
          {
            urlPattern: /^https:\/\/sudipoffice\.github\.io\/.*\.(woff2?|ttf|otf)(\?.*)?$/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'portfolio-fonts-v1',
              cacheableResponse: { statuses: [0, 200] },
              expiration: {
                maxEntries: 40,
                maxAgeSeconds: 60 * 24 * 60 * 60,
              },
            },
          },
          {
            urlPattern: /^https:\/\/cdn\.jsdelivr\.net\/.*/,
            handler: 'CacheFirst',
            options: {
              cacheName: 'portfolio-icons-v1',
              expiration: {
                maxEntries: 60,
                maxAgeSeconds: 30 * 24 * 60 * 60,
              },
            },
          },
        ],
      },
    }),
  ],
  server: {
    host: true,
    port: 5173,
  },
  build: {
    minify: 'esbuild',
    rollupOptions: {
      output: {
        manualChunks: {
          vendor: ['react', 'react-dom', 'react-router-dom'],
        },
      },
    },
  },
})