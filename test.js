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
assert.ok(viteConfig.includes('cors:'), 'Vite config should include CORS settings');
assert.ok(viteConfig.includes('origin:'), 'Vite config should specify allowed origins');
assert.ok(viteConfig.includes('methods:'), 'Vite config should specify allowed methods');
assert.ok(viteConfig.includes('allowedHeaders:'), 'Vite config should specify allowed headers');
assert.ok(viteConfig.includes('credentials: true'), 'Vite config should allow credentials');
assert.ok(viteConfig.includes('allowedHosts:'), 'Vite config should specify allowed hosts');

// Test 4: Verify that the CORS settings are applied to both server and preview
assert.ok(viteConfig.includes('server: {') && viteConfig.includes('preview: {'), 'Vite config should include settings for both server and preview');

console.log('All tests passed successfully!');
