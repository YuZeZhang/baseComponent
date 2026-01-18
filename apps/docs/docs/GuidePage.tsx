import React from 'react';
import { ThemeProvider, useTheme } from '@enterprise-ui/theme';

const en = {
  title: 'Guide',
  welcome: 'Welcome to the Enterprise UI documentation!',
  features: {
    title: 'Features',
    list: [
      '🚀 **Monorepo**: Managed by pnpm workspace & turborepo',
      '🎨 **Theming**: Native CSS Variables + Tailwind CSS',
      '🌍 **Internationalization**: Built-in ThemeProvider',
      '🌓 **Dark Mode**: First-class support',
      '📦 **Tree Shaking**: ESM output by default',
    ],
  },
  gettingStarted: {
    title: 'Getting Started',
    installation: 'Installation',
    usage: 'Usage',
  },
  customization: {
    title: 'Customization',
    desc: 'You can customize the theme by overriding CSS variables in your root css file:',
  },
};

const zh = {
  title: '指南',
  welcome: '欢迎查阅 Enterprise UI 文档！',
  features: {
    title: '特性',
    list: [
      '🚀 **Monorepo**: 基于 pnpm workspace 与 turborepo 管理',
      '🎨 **主题系统**: 原生 CSS 变量 + Tailwind CSS',
      '🌍 **国际化**: 内置 ThemeProvider 支持',
      '🌓 **暗黑模式**: 一等公民支持',
      '📦 **按需加载**: 默认输出 ESM',
    ],
  },
  gettingStarted: {
    title: '快速开始',
    installation: '安装',
    usage: '使用',
  },
  customization: {
    title: '定制主题',
    desc: '您可以通过覆盖 CSS 变量来定制主题：',
  },
};

function GuideContent() {
  const { locale } = useTheme();
  const t = locale === 'zh-CN' ? zh : en;

  return (
    <div className="markdown-body">
      <h1>{t.title}</h1>
      <p>{t.welcome}</p>

      <h2>{t.features.title}</h2>
      <ul>
        {t.features.list.map((item, i) => (
          <li key={i} dangerouslySetInnerHTML={{ __html: item.replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>') }} />
        ))}
      </ul>

      <h2>{t.gettingStarted.title}</h2>
      <h3>{t.gettingStarted.installation}</h3>
      <pre><code>npm install @enterprise-ui/button @enterprise-ui/theme</code></pre>

      <h3>{t.gettingStarted.usage}</h3>
      <pre><code>{`import { Button } from '@enterprise-ui/button';
import '@enterprise-ui/theme'; // Import global styles once

function App() {
  return <Button>Hello World</Button>;
}`}</code></pre>

      <h2>{t.customization.title}</h2>
      <p>{t.customization.desc}</p>
      <pre><code>{`:root {
  --primary: 250 100% 50%; /* Change primary color to purple */
}`}</code></pre>
    </div>
  );
}

export default function Guide() {
  return (
    <ThemeProvider>
      <GuideContent />
    </ThemeProvider>
  );
}
