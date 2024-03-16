import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@components': '/src/components',
      '@navigation': '/src/navigation',
      '@store': '/src/store'
    }
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests/setup.js'
  }
});
