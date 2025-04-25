import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginReactMetadata from "vite-plugin-react-metadata/plugin";
import * as indexMetadata from "./src/meta/index";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginReactMetadata({
      routeToFileMap: {
        "/": indexMetadata,
        "/home": indexMetadata,
      },
    }),
  ],
});
