import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 change this if repo name is different
const repoName = "drmsite";

export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react()],
});
