/// <reference types="vite/client" />
declare module '*.js';
declare module '*.scss' {
  const styles: string;
  export default styles;
}
declare module '*.svg' {
  const src: string;
  export default src;
}
declare module '*.png' {
  const src: string;
  export default src;
}
