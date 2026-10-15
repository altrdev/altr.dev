import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://altr.dev',
  trailingSlash: 'never',
  build: { format: 'file' },
  // keep the existing Vercel env var name (NEXT_PUBLIC_MEASUREMENT_ID) working
  vite: { envPrefix: ['PUBLIC_', 'NEXT_PUBLIC_'] },
});
