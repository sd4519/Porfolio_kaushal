import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";
import { readFileSync } from "node:fs";

// The personal-use font is served only in the local design preview.
// A licensed webfont must replace it before public distribution.
const localMockaPreview = {
  name: "local-mocka-preview",
  apply: "serve",
  configureServer(server) {
    server.middlewares.use("/__local-fonts/mocka.otf", (request, response, next) => {
      if (request.method !== "GET" && request.method !== "HEAD") return next();
      try {
        const font = readFileSync(new URL("./.local-assets/mocka/Mocka.otf", import.meta.url));
        response.setHeader("Content-Type", "font/otf");
        response.setHeader("Cache-Control", "no-store");
        response.end(request.method === "HEAD" ? undefined : font);
      } catch {
        response.statusCode = 404;
        response.end();
      }
    });
  },
};

export default defineConfig({
  resolve: { alias: { '@': new URL('./src', import.meta.url).pathname.replace(/^\/(\w:)/, '$1') } },
  build: {
    outDir: "dist/client",
  },
  optimizeDeps: {
    include: ["react", "react-dom/client"],
  },
  server: {
    host: "0.0.0.0",
    allowedHosts: ["terminal.local"],
    warmup: {
      clientFiles: ["./src/main.jsx"],
    },
  },
  plugins: [react(), tailwindcss(), localMockaPreview],
});
