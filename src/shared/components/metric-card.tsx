import { StyleSheet, Text, View } from 'react-native';

type Props = {
  label: string;
  value: string;
};

export const MetricCard = ({ label, value }: Props) => {
  return (
    <View style={styles.card}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  card: { flex: 1, borderRadius: 8, backgroundColor: '#ffffff', padding: 16 },
  label: { color: '#64748b', fontSize: 12 },
  value: { color: '#0f172a', fontSize: 24, fontWeight: '700' }
});
