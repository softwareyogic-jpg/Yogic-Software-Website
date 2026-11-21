const puppeteer = require('puppeteer');
const path = require('path');

const outputDir = 'C:\\Users\\user\\.gemini\\antigravity\\brain\\b1e5e33d-0e8a-4cca-aaad-439616c95ffe';
const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';

async function run() {
  console.log('Launching Puppeteer...');
  const browser = await puppeteer.launch({
    executablePath: chromePath,
    headless: 'new',
    args: ['--no-sandbox', '--disable-setuid-sandbox', '--disable-gpu']
  });

  const page = await browser.newPage();

  // 1. Desktop Full Page
  console.log('Capturing Desktop Full Page (1440px)...');
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0', timeout: 30000 });
  await page.screenshot({ path: path.join(outputDir, 'desktop_full.png'), fullPage: true });

  // 2. Tablet Full Page
  console.log('Capturing Tablet Full Page (768px)...');
  await page.setViewport({ width: 768, height: 1024, deviceScaleFactor: 1 });
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(outputDir, 'tablet_full.png'), fullPage: true });

  // 3. Mobile Full Page
  console.log('Capturing Mobile Full Page (390px)...');
  await page.setViewport({ width: 390, height: 844, deviceScaleFactor: 1, isMobile: true, hasTouch: true });
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' });
  await page.screenshot({ path: path.join(outputDir, 'mobile_full.png'), fullPage: true });

  // 4. Clean Desktop Sections
  console.log('Capturing Clean Desktop Sections...');
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });
  await page.goto('http://localhost:4173/', { waitUntil: 'networkidle0' });

  const sections = ['hero', 'global-reach', 'about', 'milestones', 'chairman', 'products', 'why-trust', 'testimonials', 'careers', 'contact'];
  for (const s of sections) {
    const el = await page.$(`#${s}`);
    if (el) {
      await el.screenshot({ path: path.join(outputDir, `section_${s.replace('-', '_')}.png`) });
      console.log(`Saved section_${s.replace('-', '_')}.png`);
    }
  }

  // 5. Open Modal & Capture Modal State
  console.log('Testing interactive modal dialog on Desktop...');
  const exploreBtn = await page.$('button[aria-label="Learn more about Yogic Astra Shakti"]');
  if (exploreBtn) {
    await exploreBtn.click();
    await new Promise(r => setTimeout(r, 600));
    await page.screenshot({ path: path.join(outputDir, 'product_modal_desktop.png') });
    console.log('Saved product_modal_desktop.png');
  }

  await browser.close();
  console.log('All captures completed successfully!');
}

run().catch(err => {
  console.error('Capture failed:', err);
  process.exit(1);
});
