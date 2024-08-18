import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
// import path, { resolve } from "path";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "build",
  },

  plugins: [react()],

  define: {
    // global: {},
  },
});
