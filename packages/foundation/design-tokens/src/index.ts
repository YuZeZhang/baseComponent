// Colors
export const colors = {
  primary: {
    50: '#e6f4ff',
    100: '#bae0ff',
    200: '#91caff',
    300: '#69b1ff',
    400: '#4096ff',
    500: '#1677ff', // Brand Color
    600: '#0958d9',
    700: '#003eb3',
    800: '#002c8c',
    900: '#001d66',
  },
  neutral: {
    white: '#ffffff',
    black: '#000000',
    gray1: '#ffffff',
    gray2: '#fafafa',
    gray3: '#f5f5f5',
    gray4: '#f0f0f0',
    gray5: '#d9d9d9',
    gray6: '#bfbfbf',
    gray7: '#8c8c8c',
    gray8: '#595959',
    gray9: '#434343',
    gray10: '#262626',
    gray11: '#1f1f1f',
    gray12: '#141414',
    gray13: '#000000',
  },
  error: {
    base: '#ff4d4f',
    hover: '#ff7875',
    active: '#d9363e',
  },
  warning: {
    base: '#faad14',
    hover: '#ffc53d',
    active: '#d48806',
  },
  success: {
    base: '#52c41a',
    hover: '#73d13d',
    active: '#389e0d',
  },
} as const;

// Spacing
export const spacing = {
  xs: 4,
  sm: 8,
  md: 16,
  lg: 24,
  xl: 32,
  xxl: 48,
} as const;

// Radius
export const radius = {
  sm: 2,
  md: 4,
  lg: 8,
  round: 999,
} as const;

export const tokens = {
  colors,
  spacing,
  radius,
};
