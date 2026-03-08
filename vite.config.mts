import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

export default defineConfig({
  plugins: [react()],
  root: ".",
  publicDir: "public",
  build: {
    sourcemap: false,
    rollupOptions: {
      input: "./public/index.html"
    }
  },
  server: {
    open: true,
  },
});

