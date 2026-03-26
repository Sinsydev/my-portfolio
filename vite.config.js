import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/my-portfolio/",
  plugins: [
    react(),
    // You can uncomment the visualizer if you need it for bundle analysis
    // visualizer({
    //   filename: "dist/stats.html",
    //   template: "treemap",
    //   gzipSize: true,
    //   brotliSize: true,
    //   open: false,
    // }),
  ],
  resolve: {
    dedupe: ["react", "react-dom"],
  },
  optimizeDeps: {
    include: ["react", "react-dom"],
  },
  build: {
    chunkSizeWarningLimit: 1000,
  },
});