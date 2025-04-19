import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react-swc'
import { fileURLToPath } from 'url'
import path, { dirname } from 'path'

const __filePath = fileURLToPath(import.meta.url);
const __dirname = dirname(__filePath);


// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@images": path.resolve(__dirname, "./src/assets/images"),
      "@svg": path.resolve(__dirname, "./src/assets/svg"),
      "@cart": path.resolve(__dirname, "./src/features/cart"),
      "@ui": path.resolve(__dirname, "./src/shared/ui"),
      "@style": path.resolve(__dirname, "./src/style")
    }
  }
})
