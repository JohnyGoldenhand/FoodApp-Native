import 'styled-components/native';
import { DefaultTheme } from 'styled-components/native';
import { ThemeType } from './src/theme';

declare module 'styled-components/native' {
  export interface DefaultTheme extends ThemeType {}
}
