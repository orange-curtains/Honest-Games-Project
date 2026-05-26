// @ts-check
import { defineConfig, fontProviders } from "astro/config";

import tailwindcss from '@tailwindcss/vite';

import mdx from "@astrojs/mdx";

export default defineConfig({
  fonts: [
    {
      provider: fontProviders.fontsource(),
      name: "Outfit",
      cssVariable: "--font-primary",
  },
    {
        provider: fontProviders.local(),
        name: "FFF Forward",
        cssVariable: "--font-accent",
        options: {
          variants: [{
            src: ['./public/assets/fonts/fff-forward.regular-webfont.woff'],
            weight: 'normal',
            style: 'normal'
          }]
        }
      },
],

  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [mdx()]
});