import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'Enterprise UI',
    nav: [
      { title: 'Guide', link: '/guide' },
      { title: 'Components', link: '/components/button' },
      { title: 'Patterns', link: '/patterns/form' },
    ],
    socialLinks: {
      github: 'https://github.com/your-org/enterprise-ui',
    },
    footer: 'Copyright © 2026 Enterprise UI Team | Powered by Dumi',
  },
  resolve: {
    atomDirs: [
      { type: 'component', dir: '../../packages/components' },
      { type: 'pattern', dir: '../../packages/patterns' },
      // Primitives are usually low-level, maybe we don't want to show them in main docs or put them in a separate section
      // If we want to show them:
      // { type: 'primitive', dir: '../../packages/primitives' }, 
    ],
  },
  monorepoRedirect: {}, 
  favicons: ['https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png'],
});
// Trigger restart
