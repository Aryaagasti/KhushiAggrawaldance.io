import { defineConfig } from "vite"
import react from "@vitejs/plugin-react"
import tailwindcss from "@tailwindcss/vite"

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    port: 5172,
    host: true,
    open: true,
  },
  preview: {
    port: 5172,
    host: true,
  },
  define: {
    // Make environment variables available
    "process.env": process.env,
  },
})
