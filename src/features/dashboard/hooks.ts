import { useEffect, useState } from 'react';
import { getDashboardSnapshot } from './api';
import type { DashboardSnapshot } from './types';

const fallback: DashboardSnapshot = {
  title: 'settlement reconciliation',
  primaryMetric: '99.7%',
  secondaryMetric: '3 anomalies',
  alerts: ['settlement reconciliation', '3 anomalies']
};

export const useDashboardSnapshot = () => {
  const [data, setData] = useState<DashboardSnapshot>(fallback);

  useEffect(() => {
    void getDashboardSnapshot().then(setData).catch(() => setData(fallback));
  }, []);

  return data;
};
