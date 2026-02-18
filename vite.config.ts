
import path from 'path';
import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import mdx from '@mdx-js/rollup';

export default defineConfig({
  server: {
    port: 8080,
    host: true,
  },
  plugins: [
    {
      ...mdx({
        providerImportSource: "@mdx-js/react"
      }),
      enforce: 'pre'
    },
    react()
  ],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, '.'),
    }
  },
  build: {
    sourcemap: false
  }
});
