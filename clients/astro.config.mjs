// @ts-check
import { defineConfig, fontProviders } from 'astro/config';
import react from '@astrojs/react';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
  },
  integrations: [
    react({
      include: ['**/react/*'],
    }),
  ],
  experimental: {
    fonts: [
      {
        provider: fontProviders.google(),
        name: 'Inter',
        cssVariable: '--font-inter',
        weights: ['400 700'],
        subsets: ['latin'],
      },
    ],
  },
});
