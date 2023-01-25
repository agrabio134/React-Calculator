import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import config from 'dotenv';




config.config();


// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  //change port to 3000 using dotenv config
  server: {
    port: process.env.PORT, 
  },
 
 


})
