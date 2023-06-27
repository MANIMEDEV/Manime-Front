// import { defineConfig } from 'vite';
// import react from '@vitejs/plugin-react';
// import dotenv from 'dotenv';

// dotenv.config();

// const hostUrl: string | undefined = import.meta.env.VITE_HOST_URL;

// // https://vitejs.dev/config/
// export default defineConfig({
//   plugins: [react()],
//   server: {
//     host: hostUrl // Substitua pelo endereço IP do seu computador
//   }
// })


import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import dotenv from 'dotenv';

dotenv.config();

export default defineConfig({
  plugins: [react()],
  server: {
    host: process.env.VITE_HOST_URL || 'localhost'
  }
});
