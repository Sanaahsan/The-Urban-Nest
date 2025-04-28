import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [tailwindcss(),react()],
})
// tailwind.config.js
module.exports = {
  theme: {
    extend: {
      colors: {
        'primary': '#495057',
        'secondary': '#343a40',
        'bg-light': '#f8f9fa',
        'bg-dark': '#e9ecef',
        'text-primary': '#212529',
        'text-secondary': '#adb5bd',
        'border': '#ced4da',
      },
    },
  },
}
