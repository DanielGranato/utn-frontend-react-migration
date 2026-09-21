import { copyFileSync } from 'node:fs'
import { resolve } from 'node:path'
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const pagesBase = '/utn-frontend-react-migration/'

export default defineConfig(({ mode }) => ({
  base: mode === 'production' ? pagesBase : '/',
  plugins: [
    react(),
    {
      name: 'github-pages-404',
      closeBundle() {
        copyFileSync(resolve('dist/index.html'), resolve('dist/404.html'))
      },
    },
  ],
}))

