# altr.dev

Personal site of Alessandro Travi, built with [Astro](https://astro.build) as a fully static site (no client-side framework) and deployed on Vercel.

- `/` – single-page resume, light/dark theme follows the system
- `/pdf` – print-optimized resume, also exported as `/alessandro-travi-resume.pdf` (the "Download resume" button)

## Develop

```bash
npm install
npm run dev      # http://localhost:4321
npm run build    # static output in dist/
npm run preview
```

## Resume PDF

`/pdf` is the source of the resume. `npm run build` renders it to `alessandro-travi-resume.pdf` with headless Chrome (`scripts/resume.mjs`, `puppeteer-core` + `@sparticuz/chromium` on Vercel). If that step fails, the build still succeeds and the copy committed in `public/` is served instead.

After changing the content, refresh the committed copy and commit it:

```bash
npm run resume   # set CHROME_PATH if Chrome is not in a common location
```

## Content

All content lives in `src/data/site.js`. Edit it and the pages update.

## Config

- `PUBLIC_MEASUREMENT_ID` (or the legacy `NEXT_PUBLIC_MEASUREMENT_ID`) – Google Analytics ID, optional.
- Vercel framework preset is set to Astro through `vercel.json`.
