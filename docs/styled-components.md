# Styled Components

This document describes how [styled-components](https://styled-components.com/) is used in this project.

---

## 1 - Setup: ThemeProvider

The entire app is wrapped in `ThemeProvider` inside `App.tsx`, which makes the theme available to every styled component via the `theme` prop:

```tsx
// src/App.tsx
import { ThemeProvider } from 'styled-components';
import { defaultTheme } from './theme';

function App() {
  return (
    <Provider store={store}>
      <ThemeProvider theme={defaultTheme}>
        <AppContainerStyled>...</AppContainerStyled>
      </ThemeProvider>
    </Provider>
  );
}
```

---

## 2 - Theme definition

The theme object lives in `src/theme/default.ts` and is exported from `src/theme/index.ts`. It contains design tokens organized into categories:

```ts
// src/theme/default.ts
const defaultTheme = {
  colors: {
    primaryDark: '#CB3720',
    primaryDefault: '#E3472F',
    white: '#fff',
    gray2: '#ECECEC'
    // ...
  },
  fontSizes: {
    smallest: 0.75,
    small: 0.875,
    default: 1,
    large: 1.125
    // ...
  }
  // fontWeights, lineHeights, ...
};
```

Token categories: `colors`, `fontSizes`, `fontWeights`, `lineHeights`.

---

## 3 - TypeScript augmentation (styled.d.ts)

`src/styled.d.ts` augments the `DefaultTheme` interface from styled-components so that `theme` is fully typed everywhere:

```ts
// src/styled.d.ts
import type { CSSProp } from 'styled-components';
import { defaultTheme } from './theme';

export type AppDefaultTheme = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends AppDefaultTheme {}
}

// Enables the `css` prop on any JSX element
declare module 'react' {
  interface DOMAttributes<T> {
    css?: CSSProp;
  }
}
```

This means `theme.colors.primaryDefault`, `theme.fontSizes.large`, etc. are autocompleted and type-checked automatically.

---

## 4 - Creating a styled component

All styled components follow this pattern:

1. Use `styled.<element>.withConfig({ shouldForwardProp })` to prevent custom props from leaking to the DOM.
2. Pass a typed props interface as the generic parameter.
3. Return a `CSSObject` from the callback.

```ts
// Example: src/shared/components/BoxStyled/BoxStyled.ts
import isPropValid from '@emotion/is-prop-valid';
import styled, { CSSObject } from 'styled-components';
import { BoxStyledProps } from 'src/shared/models';

const BoxStyled = styled.div.withConfig({
  shouldForwardProp: prop => isPropValid(prop)
})<BoxStyledProps>(
  ({ theme, flex, paddingTop, borderRadius, ... }): CSSObject => {
    return {
      flex,
      paddingTop,
      borderRadius,
      color: theme.colors.primaryDefault,
      // ...
    };
  }
);
```

`@emotion/is-prop-valid` is used as the `shouldForwardProp` guard across all styled components to avoid React warning about unknown DOM attributes.

---

## 5 - File naming conventions

| File type                   | Naming pattern                                 | Example                                         |
| --------------------------- | ---------------------------------------------- | ----------------------------------------------- |
| Standalone styled component | `ComponentName.ts` or `ComponentNameStyled.ts` | `BoxStyled.ts`, `ShimmerStyled.ts`              |
| Styled file for a component | `ComponentName.styled.ts`                      | `SvgContainer.styled.ts`, `TextInput.styled.ts` |

Styled component files are plain `.ts` files (not `.tsx`) because they contain no JSX.

---

## 6 - Accessing theme tokens from props

Use named prop keys for semantic tokens instead of inline hex values. The `theme` is destructured from props:

```ts
// src/shared/components/AnchorStyled/AnchorStyled.ts
const AnchorStyled = styled.a.withConfig({
  shouldForwardProp: prop => isPropValid(prop)
})<TextElementProps>(
  ({ theme, hasUnderline, isInUpperCase, marginTop = 0, ... }): CSSObject => ({
    marginTop,
    textDecoration: hasUnderline ? 'underline' : 'none',
    textTransform: isInUpperCase ? 'uppercase' : 'none',
    color: theme.colors.primaryDefault,
    fontSize: `${theme.fontSizes.small}rem`,
    // ...
  })
);
```

---

## 7 - Global styles

Global styles (resets, typography, variables) are defined as SCSS files under `src/global-styles/` and imported once in `App.tsx`:

```ts
import './global-styles/index.scss';
```

`src/global-styles/index.scss` re-exports `_reset.scss`, `_typography.scss`, and `_variables.scss`.
