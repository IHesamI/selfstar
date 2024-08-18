import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "dev-build",
  },
  root: "./",
  preview: {
    port: 3000,
  },
  plugins: [react()],
  server: {
    open: true,
    port: 3000,
    host: "0.0.0.0",
  },

  define: {
    // global: {},
  },
});
