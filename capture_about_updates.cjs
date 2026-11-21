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
  await page.goto('http://localhost:5173/', { waitUntil: 'networkidle0' });
  await new Promise(r => setTimeout(r, 600));

  // 1. Hero & Navbar with Est. 2021 & Eyebrow badge
  const heroEl = await page.$('#hero');
  if (heroEl) {
    await heroEl.screenshot({ path: path.join(outputDir, 'hero_with_est_2021.png') });
    console.log('Saved hero_with_est_2021.png');
  }

  // 2. About section on home page with 5 values & Read Story button
  const aboutEl = await page.$('#about');
  if (aboutEl) {
    await aboutEl.screenshot({ path: path.join(outputDir, 'about_section_5_values.png') });
    console.log('Saved about_section_5_values.png');
  }

  // 3. Milestones with 2021 Year Founded (4 cards)
  const milestonesEl = await page.$('#milestones');
  if (milestonesEl) {
    await milestonesEl.screenshot({ path: path.join(outputDir, 'milestones_with_2021.png') });
    console.log('Saved milestones_with_2021.png');
  }

  // 4. Click "Read Full Company Story & Philosophy" to open dedicated full screen modal
  const readStoryBtn = await page.$('button:has-text("Read Full Company Story"), button:has-text("Story")');
  // fallback finding by text
  const btns = await page.$$('button');
  for (const b of btns) {
    const txt = await page.evaluate(el => el.innerText, b);
    if (txt && txt.includes('Read Full Company Story')) {
      await b.click();
      await new Promise(r => setTimeout(r, 600));
      await page.screenshot({ path: path.join(outputDir, 'about_full_story_modal.png') });
      console.log('Saved about_full_story_modal.png');
      break;
    }
  }

  await browser.close();
  console.log('All verification captures complete!');
}

run().catch(console.error);

