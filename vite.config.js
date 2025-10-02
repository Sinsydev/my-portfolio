 import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { visualizer } from "rollup-plugin-visualizer";

export default defineConfig({
  base: "./my-portfolio", 
  plugins: [
    react(),
    visualizer({
      filename: "dist/stats.html",
      template: "treemap",
      gzipSize: true,
      brotliSize: true,
      open: false,
    }),
  ],
  resolve: {
    dedupe: ["react", "react-dom"], // 👈 ensures only one React instance
  },
  build: {
    chunkSizeWarningLimit: 1000,
    rollupOptions: {
      output: {
        manualChunks(id) {
          if (id.includes("node_modules/react") || id.includes("node_modules/react-dom")) {
            return "react";
          }
          if (id.includes("node_modules/axios")) {
            return "axios";
          }
          if (id.includes("node_modules/react-router")) {
            return "react-router";
          }
          if (id.includes("node_modules/redux") || id.includes("node_modules/@reduxjs")) {
            return "redux";
          }
          if (id.includes("node_modules")) {
            return "vendor";
          }
        },
      },
    },
  },
});


