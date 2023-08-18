import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true
  },
  integrations: [tailwind()],
  site: "https://minet.xanode.fr",
  output: "hybrid",
  adapter: vercel({
    analytics: true,
  }),
});