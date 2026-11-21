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
  await page.goto('http://localhost:5173/#management', { waitUntil: 'networkidle0' });

  // wait for image to settle
  await new Promise(r => setTimeout(r, 1200));

  const el = await page.$('#management');
  if (el) {
    const dest = path.join(outputDir, 'section_management_subrata_mukherjee.png');
    await el.screenshot({ path: dest });
    console.log('Saved section_management_subrata_mukherjee.png');
  }

  await browser.close();
}

run().catch(console.error);

