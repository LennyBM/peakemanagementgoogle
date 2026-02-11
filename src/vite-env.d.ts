/// <reference types="vite/client" />

declare module '*.mdx' {
    import type { ComponentType, ComponentProps } from 'react';
    const component: ComponentType<ComponentProps<'div'>>;
    export default component;
    export const frontmatter: Record<string, any>;
}
