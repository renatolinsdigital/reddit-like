import type { CSSProp } from 'styled-components';
import { defaultTheme } from './theme';

export type AppDefaultTheme = typeof defaultTheme;

declare module 'styled-components' {
  export interface DefaultTheme extends AppDefaultTheme {}
}

declare module 'react' {
  interface DOMAttributes<T> {
    css?: CSSProp;
  }
}
