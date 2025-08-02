import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'

// https://vitejs.dev/config/
export default defineConfig({
  base: '/reactcicd/',  // your repo name, for gh-pages
  plugins: [react()],
})
