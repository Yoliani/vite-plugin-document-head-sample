import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import vitePluginDocumentHead from "vite-plugin-document-head/plugin";
// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    vitePluginDocumentHead({
      routeToFileMap: {
        '^/product/[^/]+$': 'src/meta/product-detail.ts',
        '/home': 'src/meta/index.ts',
        '/': 'src/meta/index.ts'
      },
      verbose: true,
    }),
  ],
});
