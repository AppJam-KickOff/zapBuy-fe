import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import crxMV3 from "vite-plugin-crx-mv3";

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    crxMV3({
      manifest: "./src/manifest.json",
    }),
  ],
});
