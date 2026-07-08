import { existsSync, readFileSync, readdirSync } from 'node:fs';
import { join } from 'node:path';

const required = [
  'app.json',
  'pnpm-lock.yaml',
  'src/app/_layout.tsx',
  'src/app/index.tsx',
  'src/features/dashboard/api.ts',
  'src/features/dashboard/hooks.ts',
  'src/features/dashboard/types.ts',
  'src/features/dashboard/index.ts',
  'src/features/dashboard/screen.tsx',
  'src/shared/components/metric-card.tsx',
  'src/theme/unistyles.ts'
];

for (const file of required) {
  if (!existsSync(file)) throw new Error(`missing ${file}`);
}

const pkg = JSON.parse(readFileSync('package.json', 'utf8'));
const app = JSON.parse(readFileSync('app.json', 'utf8'));
if (!pkg.packageManager?.startsWith('pnpm@')) throw new Error('pnpm packageManager missing');
if (!pkg.dependencies?.ky) throw new Error('ky dependency missing');
if (app.expo?.experiments?.reactCompiler !== true) throw new Error('react compiler experiment missing');
if (!readFileSync('src/features/dashboard/api.ts', 'utf8').includes("from 'ky'")) {
  throw new Error('dashboard api must use ky');
}
if (!readFileSync('src/features/dashboard/screen.tsx', 'utf8').includes('react-native-unistyles')) {
  throw new Error('screen must use react-native-unistyles');
}

const sourceFiles = (dir) => readdirSync(dir, { withFileTypes: true }).flatMap((entry) => {
  const path = join(dir, entry.name);
  return entry.isDirectory() ? sourceFiles(path) : [path];
}).filter((file) => /\.(ts|tsx)$/.test(file));

for (const file of sourceFiles('src')) {
  const body = readFileSync(file, 'utf8');
  if (/\bfunction\b/.test(body)) throw new Error(`function declaration forbidden: ${file}`);
  if (!file.startsWith('src/app/') && /export\s+default\b/.test(body)) {
    throw new Error(`default export outside app route: ${file}`);
  }
}

console.log(`${pkg.name}_self_check_ok`);
