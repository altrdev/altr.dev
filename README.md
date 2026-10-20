# altr.dev

Personal site of Alessandro Travi, built with [Astro](https://astro.build) as a fully static site (no client-side framework) and deployed on Vercel.

- `/` – single-page resume, light/dark theme follows the system
- `/pdf` – print-optimized resume, also exported as `/alessandro-travi-resume.pdf` (the "View resume" button)

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview
npm run check    # type-check
```

## Resume PDF

`/pdf` is the source of the resume. `npm run build` renders it to `alessandro-travi-resume.pdf` with headless Chrome (`scripts/resume.mjs`, `puppeteer-core` + `@sparticuz/chromium` on Vercel). If that step fails, the build still succeeds and the copy committed in `public/` is served instead.

After changing the content, refresh the committed copy and commit it:

```bash
npm run resume   # set CHROME_PATH if Chrome is not in a common location
```

## Content

All content lives in `src/data/site.ts`. Edit it and the pages update.

## Config

- Analytics: Vercel Web Analytics and Speed Insights (cookieless), enabled from the Vercel dashboard; not loaded on `/pdf`.
- Vercel settings live in `vercel.json` (clean URLs, no trailing slash).
