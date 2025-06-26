import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

import Sitemap from "vite-plugin-sitemap";
import { createHtmlPlugin } from "vite-plugin-html";
import viteCompression from "vite-plugin-compression";
import { ViteImageOptimizer } from "vite-plugin-image-optimizer";
import MsClarity from 'vite-plugin-ms-clarity';


import vercel from "vite-plugin-vercel";

const routes = [
  "/",
  "/projetos",
  "/blog",
  "/como-ajudar",
  "/como-ajudar/doe",
  "/como-ajudar/volutarie-se",
  "/como-ajudar/parcerias",
  "/blog/entrevista-com-aina-lyvea-instituto-maos-de-ouro-14-anos",
  "/blog/historia-impacto-maos-de-ouro",
  "/blog/importancia-libras-comunidade-surda",
  "/blog/projetos-educacionais-inclusao",
  "/projetos/curso-de-extensao-em-formacao-de-tradutores-e-interpretes-de-libras",
  "/projetos/doando-amor",
  "/projetos/sopao-de-ouro"
];

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: process.env.PORT as unknown as number,
  },
  plugins: [
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
    Sitemap({
      hostname: "https://institutomaosdeouro.org.br/",
      dynamicRoutes: routes,
      generateRobotsTxt: true,
    }),
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
