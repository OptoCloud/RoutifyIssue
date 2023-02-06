if (!__dirname.endsWith('scripts')) throw new Error('This script must be run from the scripts directory!');

/// PROGRAM START ///
const { join } = require('path');
const { execSync } = require('child_process');

// Start the clean script first
execSync('node clean.js', {
  cwd: __dirname,
  stdio: 'inherit',
});

const parentDir = join(__dirname, '..');

console.log('\x1b[34m%s\x1b[0m', 'Building routes...');
execSync('npx routify --single-build', { cwd: parentDir, stdio: 'inherit' });
console.log('\x1b[34m%s\x1b[0m', 'Building Svelte app...');
execSync('npx rollup -c', { cwd: parentDir, stdio: 'inherit' });
console.log('\x1b[32m%s\x1b[0m', 'Svelte app built successfully!');
