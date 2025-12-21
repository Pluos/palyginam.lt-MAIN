import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  // Using custom domain palyginam.lt, so base path is root
  base: '/',
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});
