import { defineConfig, mergeConfig } from "vite";
import lovable from "@lovable.dev/vite-tanstack-config";

export default defineConfig((configEnv) => {
  const lovableConfig = typeof lovable === "function" ? lovable(configEnv) : lovable;
  return mergeConfig(lovableConfig, {
    server: {
      host: "0.0.0.0",
      allowedHosts: true,
    },
    preview: {
      host: "0.0.0.0",
      port: 8080,
      allowedHosts: true,
    },
  });
});
