import React, { useEffect, useMemo, useState } from 'react';
import { ConfigContext, type Locale } from './context';
import '@base-ui/theme';
import './styles.css';

export interface ConfigProviderProps {
  locale?: Locale;
  direction?: 'ltr' | 'rtl';
  darkMode?: boolean;
  mourning?: boolean;
  children?: React.ReactNode;
}

export function ConfigProvider({
  locale = 'zh-CN',
  direction = 'ltr',
  darkMode = false,
  mourning = false,
  children,
}: ConfigProviderProps) {
  const [l, setLocale] = useState<Locale>(locale);
  const [d, setDirection] = useState<'ltr' | 'rtl'>(direction);
  const [dark, setDarkMode] = useState<boolean>(darkMode);
  const [m, setMourning] = useState<boolean>(mourning);

  useEffect(() => {
    const root = document.documentElement;
    root.classList.toggle('dark', dark);
    root.classList.toggle('mourning', m);
    root.setAttribute('dir', d);
  }, [dark, m, d]);

  const value = useMemo(
    () => ({
      locale: l,
      direction: d,
      darkMode: dark,
      mourning: m,
      setLocale,
      setDirection,
      setDarkMode,
      setMourning,
    }),
    [l, d, dark, m]
  );

  return <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>;
}
