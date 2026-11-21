const puppeteer = require('puppeteer');
const path = require('path');

const outputDir = 'C:\\Users\\user\\.gemini\\antigravity\\brain\\b1e5e33d-0e8a-4cca-aaad-439616c95ffe';
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function run() {
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.goto('http://localhost:5173/#global-reach', { waitUntil: 'networkidle0' });

  // wait for flags to render
  await new Promise(r => setTimeout(r, 1200));

  const el = await page.$('#global-reach');
  if (el) {
    const dest = path.join(outputDir, 'section_global_reach_v2.png');
    await el.screenshot({ path: dest });
    console.log('Saved section_global_reach_v2.png');
  }

  await browser.close();
}

run().catch(console.error);

