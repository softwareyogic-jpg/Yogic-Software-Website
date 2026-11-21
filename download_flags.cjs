const https = require('https');
const fs = require('fs');
const path = require('path');

const flagsDir = path.join(__dirname, 'public', 'assets', 'flags');
if (!fs.existsSync(flagsDir)) {
  fs.mkdirSync(flagsDir, { recursive: true });
}

const codes = ['in', 'bd', 'mx', 'ec', 'es', 'ae', 'ug', 'ph', 've'];

function download(code) {
  return new Promise((resolve) => {
    const filePath = path.join(flagsDir, `${code}.png`);
    const file = fs.createWriteStream(filePath);
    const url = `https://flagcdn.com/w160/${code}.png`;
    https.get(url, (response) => {
      if (response.statusCode === 200) {
        response.pipe(file);
        file.on('finish', () => {
          file.close();
          console.log(`Successfully downloaded ${code}.png (${fs.statSync(filePath).size} bytes)`);
          resolve(true);
        });
      } else {
        console.error(`Failed ${code}: Status ${response.statusCode}`);
        resolve(false);
      }
    }).on('error', (err) => {
      console.error(`Error ${code}: ${err.message}`);
      resolve(false);
    });
  });
}

async function main() {
  for (const c of codes) {
    await download(c);
  }
}

main();

