import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // IMPORTANT for GitHub Pages: base must match the repo name
  // Site URL: https://pluos.github.io/palyginam.lt-MAIN/
  base: '/palyginam.lt-MAIN/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
