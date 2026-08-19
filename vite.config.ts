import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tsconfigPaths from "vite-tsconfig-paths";
import { tanstackStart } from "@tanstack/react-start/plugin";
import tailwindcss from "@tailwindcss/vite";

export default defineConfig({
  server: {
    host: "0.0.0.0",
    port: 8080,
    allowedHosts: [
      "farkhadivich-ai-production.up.railway.app",
      ".up.railway.app",
      ".railway.app",
    ],
  },
  preview: {
    host: "0.0.0.0",
    port: 8080,
    allowedHosts: [
      "farkhadivich-ai-production.up.railway.app",
      ".up.railway.app",
      ".railway.app",
    ],
  },
  plugins: [
    tanstackStart(),
    react(),
    tsconfigPaths(),
    tailwindcss(),
  ],
});
