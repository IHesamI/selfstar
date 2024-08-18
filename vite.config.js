import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// import path, { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "dev-build",
  },
  preview: {
    port: 3000,
  },
  plugins: [react()],
  server: {
    port: 3000,
  },

  define: {
    // global: {},
  },
});
