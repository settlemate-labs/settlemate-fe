import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';
import test from 'node:test';

const read = (file) => readFileSync(file, 'utf8');

test('dashboard API uses ky with the shared dashboard contract', () => {
  const api = read('src/features/dashboard/api.ts');
  const types = read('src/features/dashboard/types.ts');

  assert.ok(api.includes("from 'ky'"));
  assert.ok(api.includes('api/dashboard'));
  assert.ok(api.includes('json<DashboardSnapshot>'));
  assert.ok(types.includes('primaryMetric: string'));
  assert.ok(types.includes('secondaryMetric: string'));
  assert.ok(types.includes('alerts: string[]'));
});

test('dashboard screen renders two metrics and alert text', () => {
  const screen = read('src/features/dashboard/screen.tsx');

  assert.equal((screen.match(/<MetricCard/g) ?? []).length, 2);
  assert.ok(screen.includes('snapshot.primaryMetric'));
  assert.ok(screen.includes('snapshot.secondaryMetric'));
  assert.ok(screen.includes('snapshot.alerts.join'));
});
