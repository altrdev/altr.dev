# altr.dev

Personal site of Alessandro Travi, built with [Astro](https://astro.build) as a fully static site (no client-side framework) and deployed on Vercel.

- `/` – single-page resume, light/dark theme follows the system
- `/pdf` – print-optimized resume (used by the "Download resume" button through Microlink)

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview
```

## Content

All content lives in `src/data/site.js`. Edit it and the pages update.

## Config

- `PUBLIC_MEASUREMENT_ID` (or the legacy `NEXT_PUBLIC_MEASUREMENT_ID`) – Google Analytics ID, optional.
- Vercel framework preset is set to Astro through `vercel.json`.
