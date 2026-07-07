import 'react-native-unistyles';

declare module 'react-native-unistyles' {
  export interface UnistylesThemes {
    light: {
      colors: {
        background: string;
        text: string;
      };
    };
  }
}
