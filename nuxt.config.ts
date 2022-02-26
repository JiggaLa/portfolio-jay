import { defineNuxtConfig } from "nuxt3";
import postcssOptions from "./postcss.config.js";

// https://v3.nuxtjs.org/docs/directory-structure/nuxt.config
export default defineNuxtConfig({
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
