import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

export default defineConfig({
  plugins: [react(), tailwindcss()],
  server: {
    headers: {
      "Content-Security-Policy":
        "default-src 'self'; connect-src 'self' http://localhost:* https://localhost:* https://bopgdnrglovormebwmza.supabase.co; img-src * data: blob:; script-src 'self' 'unsafe-inline'; style-src 'self' 'unsafe-inline';"
    }
  }
})
