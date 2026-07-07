import { StyleSheet } from 'react-native-unistyles';

StyleSheet.configure({
  settings: {
    initialTheme: () => 'light'
  },
  themes: {
    light: {
      colors: {
        background: '#f8fafc',
        text: '#0f172a'
      }
    }
  }
});
