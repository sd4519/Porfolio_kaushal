# Component integration

This project uses Vite and React. TypeScript, GSAP, Tailwind 4 and tw-animate-css are now installed. Existing JSX can coexist with new typed TSX components.

Reusable UI components live in `homepage-wireframe/src/components/ui`, exposed as `@/components/ui`. The UI folder separates reusable components from page composition and gives the shadcn CLI a consistent destination. Global styles remain in `homepage-wireframe/src/styles.css`; the kinetic navigation has scoped styles alongside its TSX file.

`components.json`, `tsconfig.json` and the Vite alias configure the shadcn-compatible structure. To initialize additional shadcn tooling, run `npx shadcn@latest init` from `homepage-wireframe`, reviewing any proposed global CSS changes before accepting them. To add a component later, use `npx shadcn@latest add button`. This menu itself does not require shadcn runtime components.

Tailwind uses its Vite plugin and imports theme/utilities without Preflight, preserving the existing desktop styling. See https://tailwindcss.com/docs/installation/using-vite.

The kinetic navigation replaces Gooey Nav only below 1024px. It preserves the portfolio destinations, uses blue #003FFD, supports Escape, focus containment, scroll locking and reduced motion. Decorative multicolor shapes from the supplied example are omitted to follow the project's minimal design restrictions. GSAP effects are scoped and reverted on cleanup; global animation defaults are not changed.

Validation: `npx tsc --noEmit` and `npm run build` from `homepage-wireframe`.
