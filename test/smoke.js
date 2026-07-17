const assert = require('node:assert/strict');
const fs = require('node:fs');
const path = require('node:path');

const root = path.join(__dirname, '..');
for (const file of ['public/index.html', 'public/styles.css', 'public/app.js']) {
  assert.equal(fs.existsSync(path.join(root, file)), true, `${file} should exist`);
}

const html = fs.readFileSync(path.join(root, 'public/index.html'), 'utf8');
for (const label of ['Scores', 'Standings', 'Predict', 'Futures', 'gameCenter']) {
  assert.match(html, new RegExp(label), `app should include ${label}`);
}

console.log('✓ App shell, assets, and core product surfaces verified');
