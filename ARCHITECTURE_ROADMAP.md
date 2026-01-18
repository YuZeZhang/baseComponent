# Enterprise UI Architecture Roadmap

Based on the "Six-Layer Architecture Model", this document outlines the transformation plan for the current component library.

## 1. Architecture Overview (六层架构模型)

| Layer | Directory | Responsibility | Current Status | Action Item |
|-------|-----------|----------------|----------------|-------------|
| **Infrastructure** | Root / Scripts | Monorepo, Build, Test, CI/CD | ✅ Turbo, Father, Vitest | Refine build scripts for nested packages |
| **Foundation** | `packages/foundation/*` | Design Tokens, Theme, i18n | ⚠️ `theme`, `config-provider` (Mixed) | **Extract `design-tokens`, Refactor `config-provider`** |
| **Primitives** | `packages/primitives/*` | Headless logic, Base components (No style/biz) | ❌ Mixed in components | **Extract `input-base`, `button-base`** |
| **Components** | `packages/components/*` | UI Components (Styled, Atomic) | ⚠️ `button`, `input` (Flat) | **Move to `components/`, consume Primitives** |
| **Patterns** | `packages/patterns/*` | Business patterns, Composite components | ❌ None | Future Phase |
| **Docs** | `apps/docs` | Documentation, Playground | ✅ Dumi (Basic) | Update to reflect new architecture |

## 2. Directory Structure Plan

We will migrate from a flat `packages/*` structure to a nested layered structure:

```text
packages/
├── foundation/           # [Layer 1] Core Design System
│   ├── design-tokens/    # 🎨 Single Source of Truth (Colors, Spacing, Typography)
│   ├── theme/            # 🌓 Theme System (Dark/Light/Modes)
│   └── i18n/             # 🌐 Internationalization Core
│
├── primitives/           # [Layer 2] Headless / Base
│   ├── button-base/      # Unstyled, logic-only button
│   └── input-base/       # Unstyled input logic
│
├── components/           # [Layer 3] Atomic UI Components
│   ├── button/           # Consumes button-base + tokens
│   └── input/            # Consumes input-base + tokens
│
└── utils/                # Shared Utilities
```

## 3. Implementation Phases

### Phase 1: Foundation (The Bedrock) 🏗️
> **Goal**: Establish the "Design System" core.
1.  **Initialize `foundation/design-tokens`**: Define semantic tokens (primary, error, warning, surface, text).
2.  **Refactor `foundation/theme`**: Consume tokens, manage CSS variables.
3.  **Refactor `config-provider`**: Move to `foundation`, ensure it provides Context for Theme + i18n + RTL.

### Phase 2: Primitives (The Logic) 🧠
> **Goal**: Decouple Logic from UI.
1.  **Create `primitives/button-base`**: Focus on accessibility (ARIA), loading states, focus management. No visual styles.
2.  **Create `primitives/input-base`**: Handle controlled/uncontrolled state, composition (prefix/suffix), ref forwarding.

### Phase 3: Components (The UI) 💅
> **Goal**: Assemble the visual components.
1.  **Refactor `components/button`**: Use `button-base`. Apply styles using `design-tokens`.
2.  **Refactor `components/input`**: Use `input-base`. Apply styles using `design-tokens`.
3.  **Migration**: Move existing flat packages into `components/` directory.

### Phase 4: Patterns & Docs 📘
> **Goal**: Advanced usage and documentation.
1.  **Pattern Components**: Create `Form` pattern (Context + Validation).
2.  **Docs Upgrade**: Update Dumi config to resolve nested packages. Add "Design Tokens" section.

## 4. Next Steps (Immediate Actions)

1.  **Restructure**: Create `packages/foundation` and `packages/components` folders.
2.  **Tokens**: Create `packages/foundation/design-tokens` with initial color palette.
3.  **Workspace**: Update `pnpm-workspace.yaml` to include `packages/*/*`.

---
*This document serves as the implementation guide. All changes should align with these layers.*
