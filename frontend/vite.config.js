import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config({ path: process.cwd() + '/.env' });

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    proxy: process.env.PROXY,
    port: process.env.PORT,
    host: process.env.HOST,
    private: false,
  },
});
