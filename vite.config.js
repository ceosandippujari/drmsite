import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// 👇 change `drmsite` to your repo name if different
const repoName = "drmsite";


export default defineConfig({
  base: `/${repoName}/`,
  plugins: [react()],
});
