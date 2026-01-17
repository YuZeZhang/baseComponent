import React, { useState } from 'react';
import { ConfigProvider } from '@base-ui/config-provider';

export default function ContextWrapper(props: { children: React.ReactNode }) {
  const [locale, setLocale] = useState<'zh-CN' | 'en-US'>('zh-CN');
  const [darkMode, setDarkMode] = useState(false);
  const [mourning, setMourning] = useState(false);
  const [direction, setDirection] = useState<'ltr' | 'rtl'>('ltr');

  return (
    <ConfigProvider
      locale={locale}
      darkMode={darkMode}
      mourning={mourning}
      direction={direction}
    >
      {props.children}
    </ConfigProvider>
  );
}
