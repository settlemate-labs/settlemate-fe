import { Text, View } from 'react-native';
import { createStyleSheet, useStyles } from 'react-native-unistyles';

type Props = {
  label: string;
  value: string;
};

export const MetricCard = ({ label, value }: Props) => {
  const { styles } = useStyles(stylesheet);

  return (
    <View style={styles.card}>
      <Text style={styles.label}>{label}</Text>
      <Text style={styles.value}>{value}</Text>
    </View>
  );
};

const stylesheet = createStyleSheet(() => ({
  card: { flex: 1, borderRadius: 8, backgroundColor: '#ffffff', padding: 16 },
  label: { color: '#64748b', fontSize: 12 },
  value: { color: '#0f172a', fontSize: 24, fontWeight: '700' }
}));
