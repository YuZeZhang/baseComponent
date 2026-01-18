import React, { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { injectThemeVariables } from './utils';
import './styles.css';

export interface ThemeContextType {
  theme: 'light' | 'dark';
  setTheme: (theme: 'light' | 'dark') => void;
  direction: 'ltr' | 'rtl';
  setDirection: (dir: 'ltr' | 'rtl') => void;
  mourning: boolean;
  setMourning: (mourning: boolean) => void;
  locale: string;
  setLocale: (locale: string) => void;
}

const ThemeContext = createContext<ThemeContextType | undefined>(undefined);

export interface ThemeProviderProps {
  children: React.ReactNode;
  defaultTheme?: 'light' | 'dark';
  defaultDirection?: 'ltr' | 'rtl';
  defaultMourning?: boolean;
  defaultLocale?: string;
}

export function ThemeProvider({
  children,
  defaultTheme = 'light',
  defaultDirection = 'ltr',
  defaultMourning = false,
  defaultLocale = 'zh-CN',
}: ThemeProviderProps) {
  const [theme, setTheme] = useState(defaultTheme);
  const [direction, setDirection] = useState(defaultDirection);
  const [mourning, setMourning] = useState(defaultMourning);
  const [locale, setLocale] = useState(defaultLocale);

  useEffect(() => {
    injectThemeVariables();
  }, []);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', theme === 'dark');
    root.classList.toggle('mourning', mourning);
    root.setAttribute('dir', direction);
    root.setAttribute('lang', locale);
    root.setAttribute('data-theme', theme);
  }, [theme, mourning, direction, locale]);

  const value = useMemo(
    () => ({
      theme,
      setTheme,
      direction,
      setDirection,
      mourning,
      setMourning,
      locale,
      setLocale,
    }),
    [theme, direction, mourning, locale]
  );

  return <ThemeContext.Provider value={value}>{children}</ThemeContext.Provider>;
}

export const useTheme = () => {
  const context = useContext(ThemeContext);
  if (!context) {
    throw new Error('useTheme must be used within a ThemeProvider');
  }
  return context;
};
