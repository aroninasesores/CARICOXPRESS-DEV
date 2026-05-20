// @ts-check
import {defineConfig, fontProviders} from "astro/config";
import tailwindcss from "@tailwindcss/vite";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

export default defineConfig({
  site: "https://www.caricoxpress.com",
  output: "static",

  integrations: [sitemap(), robotsTxt()],

  fonts: [
    {
      provider: fontProviders.google(),
      name: "Plus Jakarta Sans",
      cssVariable: "--font-display",
      weights: ["100", "400", "500", "700", "900"],
      styles: ["normal", "italic"],
    },
    {
      provider: fontProviders.google(),
      name: "Archivo",
      cssVariable: "--font-body",
      weights: ["400", "500", "700", "800"],
      styles: ["normal", "italic"],
    },
  ],

  prefetch: {
    prefetchAll: true,
    defaultStrategy: "viewport",
  },

  vite: {
    plugins: [tailwindcss()],
    build: {
      cssMinify: "lightningcss",
    },
  },
});
