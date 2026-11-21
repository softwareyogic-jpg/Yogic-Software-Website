const { execFileSync } = require('child_process');
const path = require('path');
const fs = require('fs');

const chromePath = 'C:\\Program Files\\Google\\Chrome\\Application\\chrome.exe';
const outputDir = 'C:\\Users\\user\\.gemini\\antigravity\\brain\\b1e5e33d-0e8a-4cca-aaad-439616c95ffe';

const viewports = [
  { name: 'desktop_1440.png', width: 1440, height: 2600 },
  { name: 'tablet_768.png', width: 768, height: 2600 },
  { name: 'mobile_390.png', width: 390, height: 2600 },
];

for (const vp of viewports) {
  const destPath = path.join(outputDir, vp.name);
  console.log(`Capturing ${vp.name}...`);
  try {
    execFileSync(chromePath, [
      '--headless=new',
      '--disable-gpu',
      `--window-size=${vp.width},${vp.height}`,
      '--hide-scrollbars',
      `--screenshot=${destPath}`,
      'http://localhost:4173/'
    ], { timeout: 20000 });
    console.log(`Saved: ${destPath} (exists: ${fs.existsSync(destPath)})`);
  } catch (err) {
    console.error(`Error capturing ${vp.name}:`, err.message);
  }
}

