import React from 'react';

export type Locale = 'en-US' | 'zh-CN';

export interface ConfigContextValue {
  locale: Locale;
  direction: 'ltr' | 'rtl';
  darkMode: boolean;
  mourning: boolean;
  setLocale: (l: Locale) => void;
  setDirection: (d: 'ltr' | 'rtl') => void;
  setDarkMode: (v: boolean) => void;
  setMourning: (v: boolean) => void;
}

export const ConfigContext = React.createContext<ConfigContextValue | null>(null);

export const messages: Record<Locale, Record<string, string>> = {
  'en-US': {
    loading: 'Loading...'
  },
  'zh-CN': {
    loading: '加载中...'
  }
};
