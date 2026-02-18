# Code Style

This document lists coding best practices and conventions used in this project to maintain a consistent, high-quality codebase regardless of a developer's background.

---

## 1 - Prettier as default formatter + format on save

Open VS Code settings via **File > Preferences > Settings** or **Ctrl+,**. Search for "format on save" and enable **Editor: Format On Save**, then add the following to your `settings.json`:

```json
"editor.formatOnSave": true,
"editor.defaultFormatter": "esbenp.prettier-vscode",
"editor.codeActionsOnSave": {
  "source.fixAll": true
}
```

To disable formatting for a specific file type:

```json
"[javascript]": {
  "editor.formatOnSave": false
}
```

Once the whole team agrees on Prettier as the default formatter, these settings can be shared by placing a `settings.json` file inside the `.vscode` folder. That folder is part of the project configuration and should **never** be added to `.gitignore`.

---

## 2 - TypeScript

The project uses TypeScript with `strict` mode enabled (`tsconfig.json`). Key rules:

- Always type function parameters and return values explicitly when they are non-obvious.
- Prefer `interface` for object shapes that describe component props or state.
- Prefer `type` for unions, aliases, and computed types.
- Use `enum` only for stable, named sets of numeric/string constants (e.g., `KeyboardKeys.enum.ts`).
- Do not use `any`. Use `unknown` when the type is genuinely dynamic, or narrow with a type guard.

---

## 3 - File naming conventions

| Content                   | Naming pattern                                        | Example                                    |
| ------------------------- | ----------------------------------------------------- | ------------------------------------------ |
| React component           | `PascalCase.tsx`                                      | `PostEntry.tsx`                            |
| Component props interface | `ComponentName.model.ts`                              | `PostEntry.model.ts`                       |
| Styled component file     | `ComponentName.styled.ts` or `ComponentNameStyled.ts` | `TextInput.styled.ts`, `BoxStyled.ts`      |
| Plain type / interface    | `TypeName.model.ts`                                   | `AlignItems.model.ts`, `BoxProps.model.ts` |
| Enum                      | `EnumName.enum.ts`                                    | `KeyboardKeys.enum.ts`                     |
| Helper / utility          | `camelCase.ts`                                        | `colorConverter.ts`, `dateAndTime.ts`      |
| Test file                 | `FileName.test.ts` / `FileName.test.tsx`              | `colorConverter.test.ts`                   |
| Barrel export             | `index.ts`                                            | `src/shared/components/index.ts`           |

---

## 4 - Folder structure and barrel exports

Each feature or shared area exposes a public API through an `index.ts` barrel file. Always import from the barrel, not directly from the implementation file, unless you are inside the same folder.

```ts
// ✅ Correct — import from the barrel
import { BoxStyled, Button, TextStyled } from 'src/shared/components';
import { PostEntry, AppHeader } from 'src/domain/components';
import { AppDispatch, RootState, fetchPostEntries } from 'src/store';

// ❌ Avoid — bypasses the public API
import BoxStyled from 'src/shared/components/BoxStyled/BoxStyled';
```

---

## 5 - Absolute imports

The project is configured with `baseUrl: "."` in `tsconfig.json`, which enables absolute imports starting from the workspace root. Always use absolute imports for cross-folder references and relative imports only for files in the same folder.

```ts
// ✅ Absolute import (cross-folder)
import { IconProps } from 'src/shared/models';
import { defaultTheme } from 'src/theme';

// ✅ Relative import (same folder)
import PostEntryProps from './PostEntry.model';
import { postCategoryToLabel } from './utils';

// ❌ Avoid relative paths that go up multiple levels
import { IconProps } from '../../../shared/models';
```

---

## 6 - Import order

Group imports in this order, with a blank line between each group:

1. External libraries (React, Redux, styled-components, etc.)
2. Absolute `src/` imports
3. Relative imports (`./ ` or `../`)

```ts
// 1. External
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// 2. Absolute
import { Badge, BoxStyled, Link } from 'src/shared/components';
import { AppDispatch, RootState } from 'src/store';

// 3. Relative
import PostEntryProps from './PostEntry.model';
import { postCategoryToLabel } from './utils';
```

---

## 7 - Component structure

- Prefer **function declarations** or **named function expressions** for components — not arrow functions assigned to a `const` at the top level.
- Export the component as the **default export** at the bottom of the file.
- Keep component files focused: one primary component per file.
- Extract sub-components into a `sub-components/` folder when a component grows large.

```tsx
// ✅ Preferred
function PostEntry({ postEntryInfo }: PostEntryProps) {
  // ...
}

export default PostEntry;
```

---

## 8 - Testing

Tests live alongside their source files and follow the `*.test.ts` / `*.test.tsx` naming convention. The project uses **Vitest** with `@testing-library/react`.

- Use `describe` blocks to group related tests.
- Use `it` (or `it` alias) for individual test cases with descriptive names.
- Mock side effects (e.g., `console.error`, network calls) with `vi.fn()` and restore them in `afterEach`.
- Wrap components that depend on the theme in `<ThemeProvider theme={defaultTheme}>` when rendering in tests.

```ts
describe('rgbToHex', () => {
  it('converts valid RGB to hex', () => {
    expect(rgbToHex('rgb(255, 0, 128)')).toBe('#ff0080');
  });

  it('returns the original input for invalid RGB', () => {
    expect(rgbToHex('invalidRgb')).toBe('invalidRgb');
  });
});
```

---

## 9 - Related documentation

- [styled-components.md](./styled-components.md) — how theming and styled components are structured.
- [redux.md](./redux.md) — how the Redux store, slices, and hooks are used.
