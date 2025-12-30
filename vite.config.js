import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";
import { visualizer } from "rollup-plugin-visualizer";
import viteCompression from "vite-plugin-compression";
import purgeCss from "vite-plugin-purgecss";

export default defineConfig({
  // ✅ Must be "./" for subfolder deployments (e.g., http://localhost/leaders/)
  // Use "" only if hosted at domain root like http://example.com/
  base: "./",

  plugins: [
    react(),

    // ✅ Copy necessary static assets + web.config
    viteStaticCopy({
      targets: [
        { src: "public/web.config", dest: "" },
        { src: "public/misc", dest: "misc" },
        { src: "public/hero", dest: "hero" },
        { src: "public/tours", dest: "tours" },
        { src: "public/galleries", dest: "galleries" },
        { src: "public/leaders", dest: "leaders" },
        { src: "public/bootstrap", dest: "bootstrap" },
        { src: "public/fontawesome", dest: "fontawesome" },
      ],
    }),

    // ✅ Purge unused CSS safely
    purgeCss({
      content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
      safelist: [/^fa-/, /^navbar/, /^modal/, /^collapse/, /^carousel/],
    }),

    // ✅ Compression (Brotli + Gzip)
    viteCompression({ algorithm: "brotliCompress", ext: ".br" }),
    viteCompression({ algorithm: "gzip", ext: ".gz" }),

    // ✅ Bundle visualizer (optional)
    visualizer({
      filename: "dist/stats.html",
      open: false,
      gzipSize: true,
      brotliSize: true,
    }),
  ],

  resolve: {
    dedupe: ["react", "react-dom"],
  },

  optimizeDeps: {
    include: [
      "react",
      "react-dom",
      "framer-motion",
      "lucide-react",
      "@fortawesome/react-fontawesome",
      "yet-another-react-lightbox",
      "react-pdf",
      "bootstrap",
      "@popperjs/core",
    ],
  },

  css: { devSourcemap: true },

  build: {
    outDir: "dist",
    assetsDir: "assets",
    emptyOutDir: true,
    cssCodeSplit: true,
    chunkSizeWarningLimit: 2000,
    sourcemap: false,
    minify: "terser",
    terserOptions: {
      compress: { drop_console: true, drop_debugger: true },
      format: { comments: false },
    },
    rollupOptions: {
      output: {
        entryFileNames: "assets/[name]-[hash].js",
        chunkFileNames: "assets/[name]-[hash].js",
        assetFileNames: "assets/[name]-[hash][extname]",
        manualChunks(id) {
          if (id.includes("node_modules")) {
            if (id.includes("framer-motion")) return "vendor-motion";
            if (id.includes("lucide-react")) return "vendor-icons";
            if (id.includes("@fortawesome")) return "vendor-fontawesome";
            if (id.includes("react-pdf")) return "vendor-pdf";
            if (id.includes("bootstrap")) return "vendor-bootstrap";
            if (id.includes("@popperjs")) return "vendor-popper";
            return "vendor";
          }
        },
      },
    },
  },

  server: {
    open: true,
    port: 5173,
  },
});


// import { defineConfig } from "vite";
// import react from "@vitejs/plugin-react";
// import { viteStaticCopy } from "vite-plugin-static-copy";
// import { visualizer } from "rollup-plugin-visualizer";
// import viteCompression from "vite-plugin-compression";
// import purgeCss from "vite-plugin-purgecss";

// const isProd = process.env.NODE_ENV === "production";
// const shouldCopyMisc = process.env.COPY_MISC === "true" || isProd;

// export default defineConfig({
//   base: "./",

//   plugins: [
//     react(),

//     // copy static assets; copy misc only when COPY_MISC=true or in production
//     shouldCopyMisc &&
//       viteStaticCopy({
//         targets: [
//           { src: "public/web.config", dest: "" },
//           // copy from project-root/misc -> dist/misc (use glob)
//           { src: "misc/**", dest: "misc" },

//           { src: "public/hero", dest: "hero" },
//           { src: "public/tours", dest: "tours" },
//           { src: "public/galleries", dest: "galleries" },
//           { src: "public/leaders", dest: "leaders" },
//           { src: "public/bootstrap", dest: "bootstrap" },
//           { src: "public/fontawesome", dest: "fontawesome" },
//         ],
//       }),

//     purgeCss({
//       content: ["./index.html", "./src/**/*.{js,jsx,ts,tsx}"],
//       safelist: [/^fa-/, /^navbar/, /^modal/, /^collapse/, /^carousel/],
//     }),

//     // compress only typical web assets in production (exclude misc)
//     isProd &&
//       viteCompression({
//         filter: /\.(js|mjs|json|css|html|svg|woff2?)$/i,
//         threshold: 1024,
//         algorithm: "brotliCompress",
//         ext: ".br",
//       }),

//     isProd &&
//       viteCompression({
//         filter: /\.(js|mjs|json|css|html|svg|woff2?)$/i,
//         threshold: 1024,
//         algorithm: "gzip",
//         ext: ".gz",
//       }),

//     isProd &&
//       visualizer({
//         filename: "dist/stats.html",
//         open: false,
//         gzipSize: true,
//         brotliSize: true,
//       }),
//   ].filter(Boolean),

//   resolve: {
//     dedupe: ["react", "react-dom"],
//   },

//   optimizeDeps: {
//     include: [
//       "react",
//       "react-dom",
//       "framer-motion",
//       "lucide-react",
//       "@fortawesome/react-fontawesome",
//       "yet-another-react-lightbox",
//       "react-pdf",
//       "bootstrap",
//       "@popperjs/core",
//     ],
//   },

//   css: { devSourcemap: true },

//   build: {
//     outDir: "dist",
//     assetsDir: "assets",
//     // keep dist during local dev to avoid re-copying 20+ GB
//     emptyOutDir: isProd ? true : false,
//     cssCodeSplit: true,
//     chunkSizeWarningLimit: 2000,
//     sourcemap: false,
//     minify: isProd ? "terser" : false,
//     terserOptions: {
//       compress: { drop_console: true, drop_debugger: true },
//       format: { comments: false },
//     },
//     rollupOptions: {
//       output: {
//         entryFileNames: "assets/[name]-[hash].js",
//         chunkFileNames: "assets/[name]-[hash].js",
//         assetFileNames: "assets/[name]-[hash][extname]",
//         manualChunks(id) {
//           if (id.includes("node_modules")) {
//             if (id.includes("framer-motion")) return "vendor-motion";
//             if (id.includes("lucide-react")) return "vendor-icons";
//             if (id.includes("@fortawesome")) return "vendor-fontawesome";
//             if (id.includes("react-pdf")) return "vendor-pdf";
//             if (id.includes("bootstrap")) return "vendor-bootstrap";
//             if (id.includes("@popperjs")) return "vendor-popper";
//             return "vendor";
//           }
//         },
//       },
//     },
//   },

//   server: {
//     open: true,
//     port: 5173,
//   },
// });
