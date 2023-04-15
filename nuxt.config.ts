// https://nuxt.com/docs/api/configuration/nuxt-config
export default defineNuxtConfig({
  app: {
    head: {
      title: "Portfolio Jay",
      htmlAttrs: {
        lang: "en",
      },
      meta: [
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

    rootTag: "main",
  },

  css: ["@/assets/css/main.css", "@/assets/css/3-basics/base.css"],

  modules: ["@nuxtjs/tailwindcss", "@nuxtjs/html-validator"],

  /**
   * Module configuration options
   */

  // Tailwind Config
  tailwindcss: {},

  // HTML Validator Options
  htmlValidator: {},
});
