import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { VitePWA } from 'vite-plugin-pwa'

export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      registerType: 'autoUpdate',
      // Pastikan file-file ini ikut ter-cache
      includeAssets: ['favicon.ico', 'robots.txt', 'images/logo.png'],

      manifest: {
        name: 'King Barbershop',
        short_name: 'KingBarber',
        description: 'Aplikasi Booking Online Premium King Barbershop',
        theme_color: '#d4af37', // Warna Emas untuk Status Bar HP
        background_color: '#0d0d0d', // Warna Background Splash Screen
        display: 'standalone',
        orientation: 'portrait',

        // Konfigurasi Icon agar support Windows & Android
        icons: [
          {
            src: '/images/logo.png',
            sizes: '192x192',
            type: 'image/png',
            purpose: 'any' // Icon standar
          },
          {
            src: '/images/logo.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'any' // Icon besar standar
          },
          {
            src: '/images/logo.png',
            sizes: '512x512',
            type: 'image/png',
            purpose: 'maskable' // Icon untuk Android/Windows (Adaptive)
          }
        ]
      },

      // Konfigurasi Offline Cache (Workbox)
      workbox: {
        runtimeCaching: [
          {
            // 1. Cache Gambar dari Unsplash (Agar foto layanan tampil saat offline)
            urlPattern: /^https:\/\/images\.unsplash\.com\/.*/i,
            handler: 'CacheFirst',
            options: {
              cacheName: 'unsplash-images-cache',
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 60 * 24 * 30 // Simpan selama 30 Hari
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          },
          {
            // 2. Cache Request API Backend (Agar data teks tampil saat sinyal buruk)
            urlPattern: ({ url }) => url.href.includes('/api/'),
            handler: 'NetworkFirst', // Coba internet dulu, kalau mati baru ambil cache
            options: {
              cacheName: 'api-data-cache',
              networkTimeoutSeconds: 5,
              expiration: {
                maxEntries: 50,
                maxAgeSeconds: 60 * 5 // Cache valid selama 5 menit
              },
              cacheableResponse: {
                statuses: [0, 200]
              }
            }
          }
        ]
      }
    })
  ]
})