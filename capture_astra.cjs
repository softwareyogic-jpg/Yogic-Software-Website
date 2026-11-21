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
  await page.goto('http://localhost:5173/#products', { waitUntil: 'networkidle0' });

  await new Promise(r => setTimeout(r, 1000));

  // 1. Capture products grid showing the new highlights
  const el = await page.$('#products');
  if (el) {
    await el.screenshot({ path: path.join(outputDir, 'section_products_updated.png') });
    console.log('Saved section_products_updated.png');
  }

  // 2. Click on "Explore Full Features" for Yogic Astra Shakti
  const btn = await page.$('button[aria-label="Explore Full Features for Yogic Astra Shakti"]');
  if (btn) {
    await btn.click();
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(outputDir, 'product_modal_updated.png') });
    console.log('Saved product_modal_updated.png');
  }

  await browser.close();
}

run().catch(console.error);

