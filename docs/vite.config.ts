import { defineConfig } from 'vite'
import VueJsx from '@vitejs/plugin-vue-jsx'
import minimist from 'minimist'

const argv = minimist(process.argv.slice(2))
const build = argv.build || false

export default defineConfig({
  base: build ? '/test-hj-ui/' : '/',
  plugins: [
    VueJsx()
  ],
  server: {
    port: 3100
  }
})
