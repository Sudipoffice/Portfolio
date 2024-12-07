import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
    server: {
      host: true, // or use '0.0.0.0'
      port: 5173, // optional: specify your desired port
    },
  
})
