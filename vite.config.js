import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  build: {
    outDir: "build",
  },
  // base: "/selfstar/",
  plugins: [react()],
  server:{
  host:'0.0.0.0'    
  },

  define: {
    global: {},
  },

});
