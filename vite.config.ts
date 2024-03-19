import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@api': '/src/api',
      '@components': '/src/components',
      '@navigation': '/src/navigation',
      '@store': '/src/store',
      '@interfaces': '/src/interfaces',
      '@utils': '/src/utils'
    }
  },
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests/setup.js'
  }
});
