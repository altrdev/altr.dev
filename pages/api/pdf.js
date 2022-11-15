const chromium = require("@sparticuz/chromium");
const puppeteer = require("puppeteer-core");

async function handler(req, res) {
    const url = process.env.URL || "localhost:3000";
    const protocol = req.headers['x-forwarded-proto'] || 'http';
    const browser = await puppeteer.launch({
        args: chromium.args,
        defaultViewport: chromium.defaultViewport,
        executablePath: await chromium.executablePath,
        headless: true,
        ignoreHTTPSErrors: true,
      });
    

    const page = await browser.newPage();
    await page.goto(`${protocol}://${url}/pdf?obfuscate=false`, {waitUntil: 'networkidle0'});
    
    const pdf = await page.pdf({
        displayHeaderFooter: false,
        format: 'letter',
        landscape: false,
        margin: {
            bottom: 0,
            left: 0,
            right: 0,
            top: 0,
        },
        preferCSSPageSize: false,
        printBackground: true,
        scale: 1,
    });

    await browser.close();
    res.setHeader('Content-Type', 'application/pdf');
    res.setHeader('Content-Disposition', `filename="AT_Resume.pdf"`);
    res.end(pdf);
}

export default handler;
