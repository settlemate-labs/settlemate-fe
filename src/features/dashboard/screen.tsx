import { StyleSheet, Text, View } from 'react-native';
import { useUnistyles } from 'react-native-unistyles';
import { MetricCard } from '@/shared/components/metric-card';
import { useDashboardSnapshot } from './hooks';

export const DashboardScreen = () => {
  const { rt } = useUnistyles();
  const snapshot = useDashboardSnapshot();
  const containerStyle = rt.colorScheme === 'dark' ? styles.darkContainer : styles.container;

  return (
    <View style={containerStyle}>
      <Text style={styles.title}>{snapshot.title}</Text>
      <View style={styles.grid}>
        <MetricCard label="cleared payouts" value={snapshot.primaryMetric} />
        <MetricCard label="dispatch ETA" value={snapshot.secondaryMetric} />
      </View>
      <Text style={styles.alerts}>{snapshot.alerts.join(' / ')}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, gap: 16, padding: 24, backgroundColor: '#f8fafc' },
  darkContainer: { flex: 1, gap: 16, padding: 24, backgroundColor: '#111827' },
  title: { fontSize: 28, fontWeight: '700', color: '#0f172a' },
  grid: { flexDirection: 'row', gap: 12 },
  alerts: { color: '#475569' }
});
