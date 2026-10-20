import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://altr.dev',
  trailingSlash: 'never',
  build: { format: 'file' },
});
