import { defineConfig } from 'astro/config';
import fuse from 'astro-fuse';
import tailwind from "@astrojs/tailwind";
import vercel from "@astrojs/vercel/serverless";

// https://astro.build/config
export default defineConfig({
  experimental: {
    assets: true,
    viewTransitions: true,
  },
  integrations: [
    fuse({
      keys: [
        'content',
        'frontmatter.title',
      ],
    }),
    tailwind(),
  ],
  site: "https://minet.xanode.fr",
  output: "hybrid",
  adapter: vercel({
    analytics: true,
  }),
});