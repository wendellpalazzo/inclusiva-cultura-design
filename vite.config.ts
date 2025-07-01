import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { globSync } from 'glob';

import Sitemap from "vite-plugin-sitemap";
import { createHtmlPlugin } from "vite-plugin-html";
import viteCompression from "vite-plugin-compression";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import MsClarity from 'vite-plugin-ms-clarity';

import vercel from "vite-plugin-vercel";


const routes = () => {
  return [
    "/",
    "/como-ajudar",
    "/como-ajudar/doe",
    "/como-ajudar/voluntarie-se",
    "/como-ajudar/parcerias",
    ...globSync(["src/data/blog/*", 'src/data/projetos/*']).map(route => route.replace("src/data/blog", "blog").replace("src/data/projetos", "projetos"))
  ]
}

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: process.env.PORT as unknown as number,
  },
  plugins: [
    Sitemap({
      hostname: "https://institutomaosdeouro.org.br",      
      dynamicRoutes: routes(),
      generateRobotsTxt: true,
      readable: true,
      outDir: path.resolve(__dirname, "public"),
    }),
    vercel(),
    react(),
    ViteImageOptimizer({
      includePublic: true,
      jpg: {
        progressive: true,
      },
      jpeg: {
        progressive: true,
      },
      png: {
        progressive: true,
      },
    }),
    viteCompression(),
    createHtmlPlugin({
      minify: true,
      inject: {
        data: {
          title: "Instituto Mãos de Ouro",
          description: "Instituto Mãos de Ouro - As mãos que transformam vidas",
        },
      },
    }),
    MsClarity({
      id: 's47m54ayur',
    })
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          react: ["react", "react-dom", "react-router-dom"],
        },
      },
    },
  },
}));
