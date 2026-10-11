# Kaushal — Homepage typography and composition prototype

Local composition prototype. The visual source of truth is [docs/design.md](../docs/design.md).

Reference 01 contributes only hero composition and typography scale. Reference 02 contributes only navigation and button treatment. Their branding is not reused.

This phase contains a centered introduction, selected-work media slots, background, approach, contact placement, and footer. All imagery and unverified personal content remain labeled placeholders. No animation, transitions, smooth scrolling, or parallax are included.

The local preview is served at http://127.0.0.1:4173/. Development command: `npm run dev -- --host 127.0.0.1 --port 4173 --strictPort`. Build command: `npm run build`.

See [design-qa.md](design-qa.md) for browser checks, captures, and review scope. This prototype has not been deployed.

## Current typography, spacing, and color pass

The entire hero heading uses Space Grotesk 500, including Precise and Purposeful in title case. Body and UI text use IBM Plex Sans. Primary actions use Portfolio blue (#003FFD) with a warm-paper canvas and graphite contact section.

The Mocka download is a personal-use specimen, retained with its original readme in ignored `.local-assets/mocka/`. Its source is https://www.1001fonts.com/mocka-font.html. Typebae's webfont license information is https://typebae.com/license/. No font conversion was performed. The development middleware and FontFace loader are local-preview-only; distributable builds exclude this specimen and use the supporting display fallback. Before public use, supply an appropriately licensed webfont.

Latest captures: [desktop](qa-type-desktop.png), [mobile](qa-type-mobile.png), and [full page](qa-type-full.png).
