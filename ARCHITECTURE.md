# base UI Component Library Architecture

## 1. 整体架构设计

本组件库采用 **Monorepo** 架构，基于 **pnpm workspace** 管理依赖，使用 **Turborepo** 进行构建任务编排。每个组件作为独立的 package 进行开发、测试、构建和发布。

### 核心技术栈

-   **包管理**: [pnpm](https://pnpm.io/) (依赖管理, workspace)
-   **构建系统**: [Turborepo](https://turbo.build/) (任务编排, 缓存加速)
-   **组件构建**: [Father](https://github.com/umijs/father) (基于 Rollup/Esbuild，产出 ESM/CJS)
-   **文档站点**: [Dumi 2.0](https://d.umijs.org/) (基于 Umi，专为组件库设计)
-   **测试框架**: [Vitest](https://vitest.dev/) (高性能，兼容 Jest API) + React Testing Library
-   **样式方案**: Tailwind CSS + CSS Variables (灵活性高，支持 Design Tokens，原生性能好)
-   **代码规范**: ESLint + Prettier + Commitlint
-   **发布管理**: Changesets (自动化版本管理与 Changelog 生成)

## 2. Monorepo 目录结构

```
.
├── apps/
│   └── docs/                # 文档站点 (Dumi)
├── packages/
│   ├── button/              # 示例组件包
│   │   ├── src/             # 源码
│   │   ├── package.json     # 独立依赖与发布配置
│   │   └── .fatherrc.ts     # 构建配置
│   ├── theme/               # 主题系统 (Design Tokens)
│   ├── utils/               # 通用工具函数
│   └── config-provider/     # 全局配置组件 (待实现)
├── package.json             # 根目录配置
├── pnpm-workspace.yaml      # Workspace 定义
├── turbo.json               # 构建管道配置
└── vitest.config.ts         # 测试配置
```

## 3. 组件 Package 规范

每个组件包都应包含以下要素：

-   **package.json**: 定义 `name` (如 `@base-ui/button`), `peerDependencies` (React), `sideEffects` (样式文件)。
-   **src/index.tsx**: 组件入口。
-   **src/index.test.tsx**: 单元测试。
-   **README.md**: 组件文档（会被 Dumi 自动读取）。
-   **dist/**: 构建产物 (ESM/CJS)。

### 构建产物

使用 Father 构建，输出：
-   `dist/esm`: ES Module 格式，支持 Tree Shaking。
-   `dist/cjs`: CommonJS 格式，兼容 Node.js 环境。

## 4. 核心能力实现方案

### 4.1 主题系统 & 暗黑模式

采用 **CSS Variables (Custom Properties)** + **Tailwind CSS** 的方案。

-   **定义**: 在 `packages/theme/src/styles.css` 中定义全局变量。
    ```css
    :root {
      --primary: 210 100% 50%;
      --background: 0 0% 100%;
    }
    .dark {
      --background: 222.2 84% 4.9%;
    }
    ```
-   **使用**: 在组件中通过 Tailwind 或 CSS 使用变量。
    ```tsx
    // packages/button/src/index.tsx
    <button className="bg-[hsl(var(--primary))] text-white" />
    ```
-   **切换**: 通过在 `<html>` 或 `<body>` 标签上添加/移除 `dark` 类名即可切换模式。

### 4.2 国际化 (i18n)

建议实现一个 `ConfigProvider` 组件（在 `packages/config-provider`），通过 React Context 向下传递 `locale` 配置。组件内部消费该 Context 获取对应的文案。

### 4.3 多平台适配

-   **PC/H5**: 推荐使用响应式设计（Tailwind 的 `sm:`, `md:`, `lg:` 前缀）来适配不同屏幕。
-   **逻辑复用**: 核心逻辑（Hooks）可以复用，UI 层如果差异过大，可以在包内拆分 `Desktop.tsx` 和 `Mobile.tsx`，或者通过 `ConfigProvider` 注入平台标识。

## 5. 构建与发布流程

1.  **开发**: `pnpm dev` 启动 Turborepo，同时监听所有包和文档站的变更。
2.  **构建**: `pnpm build` 并行构建所有包。
3.  **测试**: `pnpm test` 运行 Vitest。
4.  **版本管理**: 
    -   运行 `pnpm changeset` 选择要发布的包和版本变更类型，生成 markdown 文件。
    -   提交代码。
5.  **发布**: 
    -   运行 `pnpm version-packages` (即 `changeset version`) 消耗 markdown 文件，更新 `package.json` 版本号并生成 CHANGELOG.md。
    -   运行 `pnpm release` (构建 + `changeset publish`) 发布到 npm。

## 6. 与竞品对比分析

| 特性 | 本方案 | Ant Design | MUI | shadcn/ui |
| --- | --- | --- | --- | --- |
| **样式技术** | Tailwind + CSS Vars | CSS-in-JS (Antd Style) | CSS-in-JS (Emotion) | Tailwind + CSS Vars |
| **架构** | Monorepo (pnpm) | Monorepo | Monorepo | Monorepo |
| **构建工具** | Father (Rollup) | Father | Rollup/Webpack | 无 (Copy Paste) |
| **定制难度** | 低 (修改 Token 即可) | 中 (需了解 Token 系统) | 中 | 极低 (源码级控制) |
| **性能** | 高 (原生 CSS) | 中 (运行时开销) | 中 | 高 |

本方案融合了 **shadcn/ui** 的现代化样式架构（Tailwind + CSS Vars）和 **Ant Design** 的工程化体系（Father + Dumi），旨在提供既高性能又易于维护的企业级组件库基础。
