import { defineNuxtConfig } from "nuxt3";
import postcssOptions from "./postcss.config.js";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
  meta: {
    title: "Portfolio Jay",
    meta: [
      { charset: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        hid: "description",
        name: "description",
        content:
          "Work for money and design and develop for love! I'm Japheth, a UX/UI designer and front-end developer based in Cyprus.",
      },
      { name: "format-detection", content: "telephone=no" },
      { name: "msapplication-TileColor", content: "#0f0f0f" },
      {
        name: "theme-color",
        media: "(prefers-color-scheme: light)",
        content: "#0f0f0f",
      },
      {
        name: "theme-color",
        media: "(prefers-color-scheme: dark)",
        content: "#030307",
      },
    ],
    link: [
      { rel: "icon", type: "image/svg+xml", href: "/favicon.svg" },
      {
        rel: "apple-touch-icon",
        href: "/pwa-192x192.png",
      },
      {
        rel: "mask-icon",
        href: "/safari-pinned-tab.svg",
        color: "#0f0f0f",
      },
    ],
  },

  css: ["@/assets/css/main.css", "@/assets/css/3-basics/base.css"],

  build: {
    postcss: {
      postcssOptions,
      plugins: {
        tailwindcss: {},
        autoprefixer: {},
      },
    },
  },
});
