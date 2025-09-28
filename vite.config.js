// vite.config.js
import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), "");
  const COLLEAGUE_BASE = env.VITE_COLLEAGUE_API_BASE || "http://84.247.140.193:5050";
  const COLLEAGUE_TOKEN = env.VITE_COLLEAGUE_API_TOKEN || "";

  return {
    plugins: [react()],
    server: {
      port: 5173,
      proxy: {
        // NUMAI în DEV: toate request-urile la /ext -> serverul colegilor
        "/ext": {
          target: COLLEAGUE_BASE, // http://84.247.140.193:5050
          changeOrigin: true,
          secure: false,
          rewrite: (p) => p.replace(/^\/ext/, "/api"),
          configure: (proxy) => {
            proxy.on("proxyReq", (proxyReq) => {
              if (COLLEAGUE_TOKEN) {
                proxyReq.setHeader("Authorization", `Bearer ${COLLEAGUE_TOKEN}`);
              }
              proxyReq.setHeader("Accept", "application/json");
              proxyReq.removeHeader?.("Origin");
              proxyReq.removeHeader?.("Referer");
            });
          },
        },
      },
    },
  };
});
