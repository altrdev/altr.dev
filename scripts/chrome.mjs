// Puppeteer launch options shared by the build-time scripts (resume.mjs, brand.mjs).
import { existsSync } from 'node:fs';

export async function launchOptions() {
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
