import { defineConfig } from "@lovable.dev/vite-tanstack-config";

export default defineConfig({
  tanstackStart: {
    server: { entry: "server" },
  },
  preview: {
    host: "0.0.0.0",
    port: 8080,
    allowedHosts: true,
  },
  server: {
    host: "0.0.0.0",
    allowedHosts: true,
  },
});
