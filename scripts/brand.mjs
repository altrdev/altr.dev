// Renders the logo and the social preview with headless Chrome:
//
//   npm run brand   (needs Chrome locally, set CHROME_PATH if not in a common location)
//
// Writes public/favicon.ico, public/images/icons/touch-icon-*.png and public/images/og.png.
// The outputs are committed, so builds never need to run this.
import { mkdir, writeFile } from 'node:fs/promises';
import { dirname, join, resolve } from 'node:path';
import { fileURLToPath } from 'node:url';
import { launchOptions } from './chrome.mjs';

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..');
const pub = join(root, 'public');

const GREEN = '#0eb57d';
const MONO = "ui-monospace, 'SF Mono', Menlo, Consolas, monospace";

// "at" plus a cursor detached from the last letter. Square viewBox so it scales to any icon size.
const logo = (rx) => `<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 512 512">
  <rect width="512" height="512" rx="${rx}" fill="${GREEN}"/>
  <text x="62" y="340" font-family="${MONO}" font-size="270" font-weight="700" fill="#fff" textLength="290" lengthAdjust="spacingAndGlyphs">at</text>
  <rect x="392" y="146" width="58" height="204" fill="#fff"/>
</svg>`;

const page = (body, w, h) => `<!doctype html><meta charset="utf-8"><style>html,body{margin:0;width:${w}px;height:${h}px;background:transparent;overflow:hidden}</style>${body}`;

const ogHtml = `<div style="width:1200px;height:630px;box-sizing:border-box;padding:84px 96px;background:#0d1117;color:#e6edf3;position:relative;font-family:system-ui,-apple-system,'Segoe UI',sans-serif">
  <div style="font:500 30px ${MONO};color:${GREEN}">~$ whoami</div>
  <div style="font-weight:800;font-size:92px;letter-spacing:-0.02em;line-height:1.1;margin-top:18px">Alessandro Travi</div>
  <div style="font:500 36px ${MONO};color:#8b949e;margin-top:14px">Software Engineer<span style="display:inline-block;width:20px;height:38px;background:${GREEN};margin-left:14px;vertical-align:-6px"></span></div>
  <div style="font-size:32px;line-height:1.45;max-width:760px;margin-top:40px;color:#e6edf3">Backend, cloud infrastructure and AI consulting, plus IoT and 3D printing projects.</div>
  <div style="position:absolute;left:96px;bottom:70px;font:500 32px ${MONO};color:${GREEN}">altr.dev</div>
  <div style="position:absolute;right:96px;bottom:70px;width:132px;height:132px">${logo(30)}</div>
</div>`;

// ICO container holding PNG images (supported by every current browser).
function ico(images) {
  const head = Buffer.alloc(6 + 16 * images.length);
  head.writeUInt16LE(1, 2);
  head.writeUInt16LE(images.length, 4);
  let offset = head.length;
  images.forEach(({ size, png }, i) => {
    const e = 6 + 16 * i;
    head[e] = size; head[e + 1] = size;
    head.writeUInt16LE(1, e + 4);
    head.writeUInt16LE(32, e + 6);
    head.writeUInt32LE(png.length, e + 8);
    head.writeUInt32LE(offset, e + 12);
    offset += png.length;
  });
  return Buffer.concat([head, ...images.map((i) => i.png)]);
}

const browser = await (await import('puppeteer-core')).default.launch(await launchOptions());
try {
  const shot = async (body, w, h, scale = 1) => {
    const p = await browser.newPage();
    await p.setViewport({ width: w, height: h, deviceScaleFactor: scale });
    await p.setContent(page(body, w, h));
    const png = Buffer.from(await p.screenshot({ omitBackground: true }));
    await p.close();
    return png;
  };
  const icon = (size, rx) => shot(`<div style="width:${size}px;height:${size}px">${logo(rx).replace('<svg ', `<svg width="${size}" height="${size}" `)}</div>`, size, size);

  await mkdir(join(pub, 'images', 'icons'), { recursive: true });
  // iOS rounds the corners itself, so touch icons are full-bleed squares
  for (const [name, size] of [['touch-icon-ipad', 152], ['touch-icon-ipad-retina', 167], ['touch-icon-iphone-retina', 180]]) {
    await writeFile(join(pub, 'images', 'icons', `${name}.png`), await icon(size, 0));
  }
  const sizes = [16, 32, 48];
  await writeFile(join(pub, 'favicon.ico'), ico(await Promise.all(sizes.map(async (size) => ({ size, png: await icon(size, Math.round(size * 0.22)) })))));
  await writeFile(join(pub, 'images', 'og.png'), await shot(ogHtml, 1200, 630));
  console.log('[brand] wrote favicon.ico, touch icons and og.png');
} finally {
  await browser.close();
}
