import react from '@vitejs/plugin-react'
import {defineConfig} from "vite";

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    host: true, // Allow access from outside the container
    port: '5173', // Set the port to match your Vite.js application
  },
  plugins: [react()],
  build: {
    outDir: 'dist',
    minify: 'terser',
    sourcemap: false,
  },
})
