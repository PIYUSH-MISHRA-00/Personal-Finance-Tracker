const assert = require('assert');
const fs = require('fs');
const path = require('path');

// Test 1: Verify that the build output exists
assert.ok(fs.existsSync('dist'), 'dist directory should exist');
assert.ok(fs.existsSync(path.join('dist', 'index.html')), 'dist/index.html should exist');
assert.ok(fs.existsSync(path.join('dist', 'assets')), 'dist/assets directory should exist');

// Test 2: Check the content of the built index.html
const indexContent = fs.readFileSync(path.join('dist', 'index.html'), 'utf-8');
assert.ok(indexContent.includes('<script'), 'index.html should include a script tag');

// Test 3: Verify that the Vite config includes the new security settings
const viteConfig = fs.readFileSync('vite.config.js', 'utf-8');
assert.ok(viteConfig.includes('cors: true'), 'Vite config should enable CORS');
assert.ok(viteConfig.includes('allowedHosts: \'all\''), 'Vite config should allow all hosts');

console.log('All tests passed successfully!');
