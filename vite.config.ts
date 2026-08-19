import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
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
  server: {
    host: "0.0.0.0",
    allowedHosts: [
      "farkhadivich-ai-production.up.railway.app",
      ".up.railway.app",
      ".railway.app",
    ],
  },
  vite: {
    preview: {
      host: "0.0.0.0",
      port: 8080,
      allowedHosts: [
        "farkhadivich-ai-production.up.railway.app",
        ".up.railway.app",
        ".railway.app",
      ],
    },
  },
});
