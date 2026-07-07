import ky from 'ky';
import type { DashboardSnapshot } from './types';

const client = ky.create({
  prefixUrl: process.env.EXPO_PUBLIC_API_URL ?? 'http://localhost:8080',
  timeout: 5000
});

export const getDashboardSnapshot = async () =>
  client.get('api/dashboard').json<DashboardSnapshot>();
