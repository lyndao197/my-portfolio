import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  // For GitHub Pages project sites, change this to "/REPOSITORY-NAME/".
  // For local development or a custom domain, keep "/".
  base: "/"
});