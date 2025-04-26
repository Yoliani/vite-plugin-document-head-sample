import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginReactMetadata from "vite-plugin-react-metadata-ssr/plugin";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginReactMetadata({
      routeToFileMap: {
        "/": "src/meta/index.ts",
        "/home": "src/meta/index.ts",
      },
      verbose: true,
    }),
  ],
});
