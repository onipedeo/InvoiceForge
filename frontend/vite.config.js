import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';
import Commonjs from 'vite-plugin-commonjs';

dotenv.config({ path: process.cwd() + '/.env' });


// https://vitejs.dev/config/
export default defineConfig({
  // plugins: [react()],
  plugins: [react(), Commonjs()],
  server: {
    port: process.env.PORT,
    host: process.env.HOST,
    proxy: {
      '/api': {
        target: process.env.PROXY,
        changeOrigin: false,
        secure: false,
        ws: true,
      },
    },
  },
});
