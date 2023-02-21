import { colors } from './colors';
import { spaces, lineHeights } from './spacing';
import { sizes } from './sizes';
import { fonts, fontWeights, fontSizes } from './fonts';

export const theme = {
  colors,
  spaces,
  lineHeights,
  sizes,
  fonts,
  fontSizes,
  fontWeights,
};

export type ThemeType = typeof theme;
