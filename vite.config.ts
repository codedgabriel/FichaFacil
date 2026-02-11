import { defineConfig } from 'vite';

// https://vitejs.dev/config/
export default defineConfig({
  // Define your Vite configuration options here
  server: {
    open: true, // opens the app in the default browser
  },
  build: {
    outDir: 'dist',
  },
});
