import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
  },

  plugins: [
    react(),
    mode === "development" && componentTagger(),

    // ⭐ Prevent Vite from transforming /admin/index.html
    {
      name: "no-transform-admin",
      enforce: "post" as const,
      transformIndexHtml(html: string, ctx: { path?: string }) {
        if (ctx?.path?.startsWith("/admin")) {
          return html; // leave CMS admin HTML untouched
        }
      },
    },
  ].filter(Boolean),

  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
