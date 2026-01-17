import { defineConfig } from 'dumi';

export default defineConfig({
  themeConfig: {
    name: 'base UI',
    nav: [
      { title: 'Guide', link: '/guide' },
      { title: 'Button', link: '/components/button' },
      { title: 'Input', link: '/components/input' },
    ],
    socialLinks: {
      github: 'https://github.com/your-org/base-ui',
    },
    footer: 'Copyright © 2024 base UI Team | Powered by Dumi',
  },
  resolve: {
    atomDirs: [
      { type: 'component', dir: '../../packages' },
    ],
  },
  monorepoRedirect: {}, 
  favicons: ['https://gw.alipayobjects.com/zos/bmw-prod/d3e3eb39-1cd7-4aa5-827c-877deced6b7e/lalxt4g3_w256_h256.png'],
});
