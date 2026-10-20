// Renders /pdf to a PDF after `astro build`.
//
//   build (Vercel):  astro build && node scripts/resume.mjs
//   locally:         npm run resume   (also refreshes the committed copy in public/)
//
// A failure here never fails the build: the PDF committed in public/ is already
// copied into dist/ by Astro, so it simply stays as the fallback.
import { createServer } from 'node:http';
import { existsSync } from 'node:fs';
import { copyFile, mkdir, readFile, stat } from 'node:fs/promises';
import { dirname, extname, join, normalize, resolve, sep } from 'node:path';
import { fileURLToPath } from 'node:url';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const dist = join(root, 'dist');
const fileName = 'alessandro-travi-resume.pdf';
const updatePublic = process.argv.includes('--update-public');

const types = { '.html': 'text/html; charset=utf-8', '.css': 'text/css', '.js': 'text/javascript', '.svg': 'image/svg+xml', '.webp': 'image/webp', '.png': 'image/png', '.jpg': 'image/jpeg', '.ico': 'image/x-icon', '.json': 'application/json' };

function serve() {
  const server = createServer(async (req, res) => {
    try {
      let path = decodeURIComponent(new URL(req.url, 'http://x').pathname);
      if (path === '/pdf') path = '/pdf.html';
      const file = normalize(join(dist, path));
      if (file !== dist && !file.startsWith(dist + sep)) throw new Error('outside dist');
      const body = await readFile(file);
      res.writeHead(200, { 'content-type': types[extname(file)] ?? 'application/octet-stream' });
      res.end(body);
    } catch {
      res.writeHead(404).end();
    }
  });
  return new Promise((ok) => server.listen(0, '127.0.0.1', () => ok(server)));
}

async function launchOptions() {
  if (process.env.VERCEL) {
    const { default: chromium } = await import('@sparticuz/chromium');
    return { executablePath: await chromium.executablePath(), args: chromium.args, headless: 'shell' };
  }
  const candidates = [
    process.env.CHROME_PATH,
    '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome',
    '/Applications/Chromium.app/Contents/MacOS/Chromium',
    '/usr/bin/google-chrome',
    '/usr/bin/chromium',
    '/usr/bin/chromium-browser',
    'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe',
  ].filter(Boolean);
  const executablePath = candidates.find((p) => existsSync(p));
  if (!executablePath) throw new Error('Chrome not found: set CHROME_PATH');
  return { executablePath, args: ['--no-sandbox'], headless: true };
}

async function main() {
  if (!existsSync(join(dist, 'pdf.html'))) throw new Error('dist/pdf.html missing: run `astro build` first');
  const { default: puppeteer } = await import('puppeteer-core');
  const options = await launchOptions();
  const server = await serve();
  let browser;
  try {
    browser = await puppeteer.launch(options);
    const page = await browser.newPage();
    await page.goto(`http://127.0.0.1:${server.address().port}/pdf`, { waitUntil: 'networkidle0' });
    await page.emulateMediaType('print');
    const out = join(dist, fileName);
    await page.pdf({ path: out, format: 'A4', printBackground: true, preferCSSPageSize: true });
    const { size } = await stat(out);
    console.log(`[resume] wrote dist/${fileName} (${Math.round(size / 1024)} kB)`);
    if (updatePublic) {
      await mkdir(join(root, 'public'), { recursive: true });
      await copyFile(out, join(root, 'public', fileName));
      console.log(`[resume] updated public/${fileName}, commit it`);
    }
  } finally {
    await browser?.close();
    server.close();
  }
}

main().catch((err) => {
  console.warn(`[resume] PDF generation skipped: ${err.message}`);
  console.warn('[resume] keeping the committed public/ copy as fallback');
  process.exitCode = updatePublic ? 1 : 0;
}).finally(() => process.exit());
