# Homepage typography, spacing, and color pass — design QA

**final result: passed**

## Latest review — Mocka hero and brand colors

Authority: [docs/design.md](../docs/design.md), version 1.2, and the user's request to use [Mocka](https://www.1001fonts.com/mocka-font.html) for the hero heading. The rest of this document preserves the earlier composition review as historical evidence.

Source for this pass: the selected Mocka Regular specimen, the approved prior composition [qa-desktop.png](qa-desktop.png), the scoped reference images from the previous review, and the updated design specification. The prior and current desktop captures were inspected together in a single image-tool output. They are both 1440 × 900 at device scale factor 1. No density normalization was needed. Font/color changes are deliberate user-requested changes, not fidelity errors.

Latest browser evidence:

- [Desktop hero](qa-type-desktop.png): 1440 × 900 CSS viewport and pixels.
- [Full desktop page](qa-type-full.png): 1440px CSS viewport width, 1440 × 3428 image pixels.
- [Mobile hero](qa-type-mobile.png): 393 × 852 CSS viewport and pixels.
- [Mobile contact](qa-type-contact.png): 393 × 852 CSS viewport and pixels.

### Required fidelity surfaces

| Surface | Latest result |
| --- | --- |
| Fonts and typography | Actual Mocka Regular loaded and used for the H1 only, weight 400. Desktop 104px / 112.32px; mobile approximately 40px / 43.2px. Tracking -0.015em. The wider line and expressive glyphs remain unclipped. Space Grotesk and IBM Plex Sans remain the supporting type. |
| Spacing and layout | Centered composition preserved. Hero review-note removed; paragraph capped at 520px; project summary aligns to its grid track; background lead is 22px. Selected Work and the lead frame appear within the initial desktop viewport. |
| Colors and tokens | Warm paper canvas, graphite text, oxide-orange primary actions and hero label, graphite contact section with inverse/secondary-inverse text. Token pairings retain the documented contrast. No gradients, glass effects, or added shadows. |
| Images and assets | No images added. Media slots remain labeled. Original Mocka OTF is used without conversion in local development; no specimen font or preview font loader occurs in distributable build output. |
| Copy and content | No factual claims or fake projects introduced. Hero wording remains provisional; review labeling lives in the footer. |

Focused hero and contact captures were reviewed at readable viewport scale, in addition to the full-page capture. Mocka is more expressive than the industrial supporting typography; that is an intentional user-selected hero exception rather than a change to every heading.

No actionable P0/P1/P2 findings remain for this pass. The initial rendered font/color treatment passed visual inspection; subsequent changes separated the font loader from distributable builds and aligned the specification. Final screenshots were taken after that loader change, with Mocka's loaded status reconfirmed.

Latest checks: widths 320, 360, 393, 768, 1024, 1440, and 1920px all have matching document widths and no overflowing elements. Mocka reports loaded at all tested widths. Zero animations, no photographs, and no browser errors. Contact navigation works; the existing content remains a wireframe rather than an inquiry backend. Production build passed, and both the restricted font binary and preview font endpoint were verified absent from its client output.

Licensing scope: the free specimen is personal-use only; [Typebae](https://typebae.com/license/) distinguishes a webfont license for embedding. The local review does not establish commercial rights. Public use requires a suitable licensed font asset; production currently uses a display fallback. Nothing was published.

## Historical review — Phase 1 composition

## Source visual truth and scope

- Authority: [docs/design.md](../docs/design.md), version 1.1, including the user's latest scoped-reference instructions.
- Reference 01: user-supplied hero screenshot. A matching live-source composition was previously captured at [01-desktop-hero.png](../reference-analysis/nmore/01-desktop-hero.png). Use only hero composition and typography scale.
- Reference 02: the navigation crop attached in the user's Phase 1 message, viewed directly in the conversation. It has no provided local file path. Use only the centered capsule navigation and contained contact-button treatment; no full-page composition is inferred from that crop.
- This is an original composition wireframe, not a pixel clone. Branding, palette, wording, artwork, exact coordinates, and animation from the references are intentionally excluded.
- Labeled image/content blocks are explicitly required phase scaffolding, not a replacement for final project assets. No generated or stock imagery is included.

## Rendered implementation and evidence

Local preview: http://127.0.0.1:4173/

| Evidence | CSS viewport / image dimensions | State |
| --- | --- | --- |
| [Desktop](qa-desktop.png) | 1440 × 900 / 1440 × 900 pixels | Homepage top |
| [Desktop full page](qa-desktop-full.png) | 1440 × 900 viewport / 1440 × 3471 pixels | Complete content sequence |
| [Tablet](qa-tablet.png) | 768 × 900 / 768 × 900 pixels | Homepage top |
| [Mobile](qa-mobile.png) | 393 × 852 / 393 × 852 pixels | Homepage top |
| [Mobile work](qa-mobile-work.png) | 393 × 852 / 393 × 852 pixels | Work anchor |
| [Mobile contact](qa-mobile-contact.png) | 393 × 852 / 393 × 852 pixels | Contact anchor |

Screenshots use browser viewport pixels at device scale factor 1. The stored Reference 01 capture is 1440 × 1000. Source and implementation were viewed together in one image-tool output. Their height difference is recorded rather than treated as drift: the new brief requires a compact, content-led homepage rather than the reference's full-height illustrated opening. The reference's attached hero also uses a different screenshot frame, so no exact coordinate match is claimed.

Full-view comparison checks the centered, broad hero emphasis, large tightly set display type, and restrained navigation hierarchy. Focused navigation review uses the user-supplied Reference 02 crop and the readable 1440px desktop implementation; the compact rounded bar and contained contact action remain recognizable without the source portrait or blue branding. Mobile work/contact images verify the single-column composition below the hero. The full-page screenshot is supplemented by readable viewport captures, not used alone to approve small type.

## Findings and comparison history

### First review

- [P2, resolved] Supporting desktop project and approach headings were 28px, below the documented 32–36px H3 range. Updated them to 32px, with 28px tablet and 24px mobile variants. The final full-page and tablet captures show the resulting hierarchy.
- [P2, resolved] Desktop navigation initially measured 68px high because of internal padding. Reduced vertical padding to 6px; the final browser measurement is 64px. Final desktop/tablet captures confirm the compact anatomy.
- The original document prohibited all pill buttons and described an incompatible mobile menu. Updated the authoritative design document to reflect the user's Reference 02 instruction: one capsule contact action and a two-row mobile navigation treatment.

### Final review: required fidelity surfaces

| Surface | Result |
| --- | --- |
| Fonts and typography | Space Grotesk and IBM Plex Sans loaded locally at their intended weights. Desktop H1 is 104px; mobile approximately 40px. Two desktop headline lines become three readable mobile lines without clipping. Supporting heading sizes now follow the document. |
| Spacing and layout | Centered 760px navigation, 1320px maximum content width, 64px desktop and 20px mobile gutters. Large lead project followed by two supporting slots, then asymmetric editorial sections. Work heading and initial project frame appear within the first 900px desktop viewport. |
| Colors and tokens | Neutral wireframe uses graphite, warm paper, white, and subtle gray surfaces from the brand system. Neither reference's blue branding is imported. No gradients, translucency, or decorative shadows. |
| Images and assets | Zero image elements; three clearly labeled flat media slots. No portrait, stickers, generated graphics, or borrowed artwork. This is an intentional user-directed phase exception to finished-asset requirements. |
| Copy and content | Positioning is marked provisional. Projects, discipline, location, and contact details are labeled as pending. No invented results, roles, resume downloads, endorsements, or email address. |

No actionable P0/P1/P2 findings remain within the composition-wireframe scope.

## Browser and build checks

- Inspected viewport widths 320, 360, 393, 768, 1024, 1440, and 1920px. Document width matched viewport width at each; no elements exceeded horizontal viewport boundaries.
- Primary Work link reached `#work`; Background and Approach links reached their respective sections. Contact navigation reached `#contact`; back-to-top returned to the opening.
- Mobile navigation links have at least 44px height. Keyboard Tab exposes the visible focus outline.
- All local anchor targets exist. Contact is a clearly labeled content slot, not a nonfunctional submission form.
- Browser reports zero running animations and automatic, unsmoothed scroll behavior. No images, video, parallax, reveal effects, or transitions.
- Browser error output is empty. Console contains development-server and React development messages only.
- Production build passed after the final changes. No deployment was requested or performed.

## Limits and follow-up

- Actual biography, project material, contact channels, and final positioning are not supplied. Populate them in a later content phase.
- References are deliberately applied at the principle level; this report does not certify a pixel clone or the unshown parts of Reference 02.
- Mobile checks use Chromium viewports, not physical-device testing. This is not a full accessibility audit.
- Imagery, production contact behavior, final accent-color application, and any later motion require separate review after composition approval.

## Implementation checklist

- [x] Scoped references applied without combining branding.
- [x] Static homepage structure and responsive composition complete.
- [x] Navigation and in-page actions verified.
- [x] No fancy images or animation.
- [x] Authoritative design document updated.
- [x] Browser captures inspected and build verified.
