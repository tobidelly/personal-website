import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

// https://vitejs.dev/config/
export default defineConfig({
  server: {
    fs: {
      allow: ['src', 'public', 'node_modules'] // Include 'src', 'public', and 'node_modules' directories
    }
  },
  plugins: [react()],
  assetsInclude: ['**/*.png', '**/*.jpg', '**/*.svg']
});