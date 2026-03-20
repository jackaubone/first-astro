// @ts-check
import { defineConfig } from 'astro/config';

import preact from '@astrojs/preact';

// https://astro.build/config
export default defineConfig({
  site: 'https://jackaubone.github.io',
  base: '/first-astro',
  integrations: [preact()],
});

// domain is https://jackaubone.github.io/first-astro/