import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// The proxy forwards any request starting with /api to the Spring Boot server,
// so the browser thinks frontend and backend are on the same address.
export default defineConfig({
  plugins: [react()],
  server: {
    port: 5173,
    proxy: {
      "/api": {
        target: "http://localhost:8080",
        changeOrigin: true,
      },
    },
  },
  test: {
    environment: "jsdom",
    globals: true,
  },
});
