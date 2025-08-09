import { MD3LightTheme } from 'react-native-paper';

const theme = {
  ...MD3LightTheme,
  colors: {
    ...MD3LightTheme.colors,
    primary: '#2196F3',
    primaryContainer: '#E3F2FD',
    secondary: '#4CAF50',
    secondaryContainer: '#E8F5E8',
    tertiary: '#FF9800',
    tertiaryContainer: '#FFF3E0',
    surface: '#FFFFFF',
    surfaceVariant: '#F5F5F5',
    background: '#F5F5F5',
    error: '#F44336',
    errorContainer: '#FFEBEE',
    onPrimary: '#FFFFFF',
    onSecondary: '#FFFFFF',
    onTertiary: '#FFFFFF',
    onSurface: '#000000',
    onSurfaceVariant: '#666666',
    onBackground: '#000000',
    onError: '#FFFFFF',
    onErrorContainer: '#C62828',
  },
  spacing: {
    xs: 4,
    sm: 8,
    md: 16,
    lg: 24,
    xl: 32,
    xxl: 48,
  },
  borderRadius: {
    small: 4,
    medium: 8,
    large: 16,
    extraLarge: 24,
  },
  elevation: {
    level0: 0,
    level1: 1,
    level2: 3,
    level3: 6,
    level4: 8,
    level5: 12,
  },
};

export default theme;