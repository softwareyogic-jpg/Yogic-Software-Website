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

  // 1. Open Yogic Astra Aadi modal
  const aadiBtn = await page.$('button[aria-label="Explore Full Features for Yogic Astra Aadi"]');
  if (aadiBtn) {
    await aadiBtn.click();
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(outputDir, 'modal_astra_aadi.png') });
    console.log('Saved modal_astra_aadi.png');
    // close modal
    await page.keyboard.press('Escape');
    await new Promise(r => setTimeout(r, 400));
  }

  // 2. Open Secure EMI modal
  const secureEmiBtn = await page.$('button[aria-label="Explore Full Features for Secure EMI"]');
  if (secureEmiBtn) {
    await secureEmiBtn.click();
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(outputDir, 'modal_secure_emi.png') });
    console.log('Saved modal_secure_emi.png');
  }

  await browser.close();
}

run().catch(console.error);

