if (!__dirname.endsWith('scripts')) throw new Error('This script must be run from the scripts directory!');

/// PROGRAM START ///
const rimraf = require('rimraf');
const { join } = require('path');

const parentDir = join(__dirname, '..');

console.log('\x1b[34m%s\x1b[0m', 'Cleaning Routes...');
rimraf.sync(join(parentDir, '.routify'));
console.log('\x1b[34m%s\x1b[0m', 'Cleaning Svelte app...');
rimraf.sync(join(parentDir, 'public', 'build'));
console.log('\x1b[32m%s\x1b[0m', 'Svelte app cleaned successfully!');
