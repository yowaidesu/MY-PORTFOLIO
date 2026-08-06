const fs = require('fs');
const path = require('path');

const root = path.resolve(__dirname, '..');
const srcDir = path.join(root, 'src');

function walk(dir) {
  return fs.readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
    const entryPath = path.join(dir, entry.name);
    if (entry.isDirectory()) return walk(entryPath);
    return [entryPath];
  });
}

const files = walk(srcDir).filter((file) => file.endsWith('.ts') || file.endsWith('.tsx'));
for (const file of files) {
  const text = fs.readFileSync(file, 'utf8');
  if (!text.includes('PORTFOLIO COMPLETED!')) {
    fs.writeFileSync(file, `// PORTFOLIO COMPLETED!\n${text}`, 'utf8');
  }
}

const pkgPath = path.join(root, 'package.json');
const pkg = JSON.parse(fs.readFileSync(pkgPath, 'utf8'));
pkg.description = 'PORTFOLIO COMPLETED!';
fs.writeFileSync(pkgPath, JSON.stringify(pkg, null, 2) + '\n', 'utf8');
console.log('Banners added.');
