# Kaushal Portfolio — Visual Design System

Version: 1.5
Established: 11 October 2026  
Status: Authoritative design specification. A local homepage typography, spacing, and color prototype exists; the production site has not been implemented or published.

## 1. Authority and design intent

This document is the single source of truth for this project's visual design. Future layouts, components, imagery, and motion must follow it. When a design decision changes, update this document before applying the change across the site. Do not introduce local stylistic exceptions without documenting their purpose here.

The reference is [Studio&more](https://nmore.co/). Its current inspection is recorded in [the reference analysis](../reference-analysis/nmore/analysis.md). Borrow its confident scale, clear hierarchy, large work previews, disciplined spacing, and deliberate interactions. The reference analysis is evidence, not a competing specification. This document defines Kaushal's original direction.

**Design thesis:** A precise personal portfolio with the confidence of an international design publication and the material clarity of an engineered object. Large typography, authentic work, disciplined alignment, and a restrained industrial palette establish the identity.

Kaushal's profession, project details, credentials, and achievements are not yet confirmed. The visual system is decided here; factual content must come from verified personal material. Industrial art direction must not imply experience, products, or clients he does not have.

## 2. Brand personality

| Attribute | Visual expression |
| --- | --- |
| Premium | Carefully edited content, strong imagery, consistent type, excellent spacing, and quiet framing. |
| Technical | Clear metadata, meaningful diagrams when needed, explicit roles and outcomes, aligned numeric information. |
| Industrial | Graphite, steel, warm paper, Portfolio blue, structural rules, restrained corners, honest material detail. |
| International | Concise language, legible typography, consistent units and dates, uncluttered presentation across devices. |
| Precise | Shared baselines, deliberate crops, a small token set, clear component states, no arbitrary decoration. |
| Modern | Responsive editorial layouts, direct interaction, efficient motion, contemporary geometric typography. |
| Confident | A clear introduction, prominent work, limited competing messages, direct calls to action. |
| Personal | Kaushal's voice, actual contributions, original photography, and specific project stories. |

The site must feel composed and individual. Avoid corporate-template patterns, vague agency claims, ornamental luxury cues, and dense futuristic dashboard styling. Technical detail should explain the work rather than decorate the interface.

Writing is concise, first-person where appropriate, and specific. Use plain action labels such as “View project” and “Contact Kaushal.” Never invent statistics, endorsements, client logos, awards, or availability claims.

## 3. Color system

Use solid colors. The default canvas is light; dark surfaces are deliberate section treatments, not an independently invented second theme.

| Token | Value | Role |
| --- | --- | --- |
| `color-primary` | `#003FFD` | Portfolio blue sampled from the supplied hero lettering. Main brand and interactive identity. |
| `color-secondary` | `#39464C` | Steel. Supporting emphasis, substantial secondary information. |
| `color-accent` | `#003FFD` | Portfolio blue. Primary conversion emphasis, selected indicators, meaningful highlights. |
| `color-accent-hover` | `#0033CC` | Darker blue for interactive hover and pressed feedback. |
| `color-background` | `#F2F1ED` | Warm off-white page canvas. |
| `color-surface` | `#FFFFFF` | White for inputs and occasional contained information. |
| `color-surface-subtle` | `#E8E9E4` | Quiet grouping, image fallback backgrounds, disabled surfaces. |
| `color-surface-dark` | `#22292D` | Dark section panels or project contexts. |
| `color-muted` | `#606B72` | Secondary readable text on light backgrounds. Never reduce its opacity. |
| `color-text` | `#171B1D` | Default text on light surfaces. |
| `color-text-inverse` | `#F5F4EF` | Text on graphite, dark steel, or accent buttons. |
| `color-muted-inverse` | `#B5BEC1` | Secondary text on graphite and dark steel. |
| `color-border` | `#CCD0CE` | Nonessential dividers and quiet container edges. |
| `color-border-strong` | `#7B8587` | Input boundaries and other essential control outlines. |
| `color-focus` | `#003FFD` | Focus ring on light surfaces; use inverse white on dark/accent surfaces. |
| `color-success` | `#226544` | Confirmed successful actions, accompanied by text. |
| `color-error` | `#B42318` | Validation errors, accompanied by text. |

### Color usage rules

- Neutral colors dominate interface surfaces. Blue occupies no more than approximately 10% of the non-image composition in a typical viewport.
- Use blue to establish priority, not as a background for every section. Primary and accent are different roles: Portfolio blue establishes the brand and identifies key actions; graphite provides neutral text and surfaces.
- Default prose and navigation use graphite. Secondary prose uses muted steel. Blue links on the light canvas include an underline or another non-color cue.
- Dark sections use inverse text and muted-inverse supporting text. Do not reuse light-theme muted text or subtle borders unchanged on a dark surface. Use `color-border-strong` for essential dark control boundaries.
- Do not set blue text on graphite or dark steel. Use inverse text with an blue marker instead.
- Image artwork may contain its own colors. The surrounding interface remains within this palette.
- `color-border` is decorative and is not sufficient as the only visible input boundary.
- Do not use opacity to make necessary text quieter. Do not communicate status or selection through color alone.

Calculated contrast ratios for solid token pairings: graphite/background **15.34:1**; secondary/background **8.62:1**; muted/background **4.83:1**; accent/background **5.94:1**; white/accent **6.71:1**; inverse/accent **6.09:1**; muted-inverse/dark-surface **7.80:1**. These do not establish compliance for photographic backgrounds or translucent states. Required body text must meet 4.5:1; large text and essential control boundaries must meet 3:1 in the actual composition.

## 4. Typography

### Font families

- **Hero heading:** Space Grotesk 500 throughout, including Precise and Purposeful. Use title case and no uppercase transformation.
- **Supporting display:** Space Grotesk, weights 500 and 600. Use for section headings, project titles, statistics, and the typographic name treatment.
- **Body:** IBM Plex Sans, weights 400, 500, and 600. Use for prose, navigation, labels, forms, captions, tags, and buttons.
- **Fallback:** Arial, then the platform sans-serif family. Preserve readable content while the chosen fonts load.
- Use only Space Grotesk and IBM Plex Sans in the active design. Technical numbers use tabular figures where available.
- Use approved font files with their license notices. Prefer self-hosted Latin subsets appropriate to the final content; do not synthesize missing weights. Expanded language support must be planned before adding translations.

The reference's alternating italic-serif identity is not adopted. The entire hero uses Space Grotesk for a consistent, precise typographic voice.

**Font asset status:** The linked Mocka download is a personal-use specimen. Its bundled readme disallows commercial use and conversion without written permission. [Typebae's license page](https://typebae.com/license/) identifies a separate webfont license for embedding. Preserve the original OTF; do not convert it. It is kept in the ignored `.local-assets/` directory and served only during local development. Production builds exclude the specimen and use the supporting display fallback. Before public/commercial website use, obtain an appropriate licensed webfont and replace the preview-only loader. This document does not claim commercial rights have been obtained.

### Type scale

Font sizes are CSS pixels. Ranges are fluid within each viewport band, not additional independent presets. Line-height values are multipliers; letter spacing is in em.

| Role | Mobile, 320–767px | Tablet, 768–1199px | Desktop, 1200px+ | Weight | Line height | Tracking |
| --- | --- | --- | --- | --- | --- | --- |
| Hero H1 / Space Grotesk | 40–48 | 56–72 | 80–104 | 500 | 1.08 | -0.035em |
| H2 / section | 32–36 | 40–48 | 48–64 | 500 | 1.10 | -0.025em |
| H3 / project | 24–28 | 28–32 | 32–36 | 500 | 1.18 | -0.02em |
| Lead paragraph | 18 | 20 | 22 | 400 | 1.45 | -0.01em |
| Body | 16 | 18 | 18 | 400 | 1.60 | 0 |
| Small / caption | 14 | 14 | 14 | 400 | 1.50 | 0 |
| Label / metadata | 12 | 12 | 12 | 500 | 1.40 | 0.08em |
| Compact navigation | 14 | 14 | 14 | 500 | 1.40 | 0 |
| Button | 16 | 16 | 16 | 600 | 1.25 | 0 |
| Statistic value | 40–48 | 56 | 64–72 | 500 | 1.05 | -0.03em |

### Typography rules

- Use one H1 per page. Visual size must not determine semantic heading order.
- Hero headings should occupy two or three lines and communicate one idea. Shorten copy before shrinking it below the scale.
- Display copy normally uses sentence case. Reserve uppercase for short labels; do not uppercase paragraphs or the entire hero.
- Body copy has a maximum width of 640px, approximately 60–70 characters per line depending on the final text. Introduction copy is shorter, ideally 40–55 characters per line.
- Labels are supplementary. Instructions, errors, contact information, and other essential information must be at least 14px.
- Keep headings tightly set, prose comfortably spaced. Do not globally apply negative letter spacing.
- Do not use italics, outline type, stretched fonts, or oversized moving text as recurring decoration.
- Allow browser text resizing and content growth. Never clip headings or hard-code line breaks that fail at narrower widths.

## 5. Layout system

### Containers, padding, and grid

| Property | Mobile | Tablet | Desktop |
| --- | --- | --- | --- |
| Page side padding | 20px | 32px | 64px |
| Main content maximum | 1320px, constrained by available width | Same | Same |
| Reading container maximum | 640px | 640px | 640px |
| Grid | 4 columns | 8 columns | 12 columns |
| Column gutter | 16px | 24px | 32px |
| Standard section separation | 64px | 88px | 120px |
| Large internal layout gap | 24px | 32px | 40px |
| Project card separation, stacked | 40px | 48px | 64px |
| Component content inset | 20px | 24px | 32px |

Use the smaller of the maximum content width and the viewport minus its side padding. Center that container. Full-width background colors may extend beyond it; text and controls retain the container alignment. Do not create a second arbitrary content width for each section.

Spacing tokens: **4, 8, 12, 16, 20, 24, 32, 40, 48, 64, 88, 120px**. Select the smallest token that preserves the intended grouping. Section separation is the total distance between adjacent content blocks; do not add 120px bottom padding to 120px top padding. Where sections need their own background padding, allocate half the standard separation to each adjacent edge.

### Composition

- Use asymmetric 7/5 or 8/4 desktop compositions for introductions and project stories. Align every column to the shared grid.
- Favor a large lead project followed by editorial project rows. Alternate emphasis when the content warrants it, not mechanically every other row.
- A project row may pair a 7-column media block with a 5-column summary. On mobile, show image, title, context, and action in that order.
- Use consistent metadata alignment and narrow dividers instead of enclosing every information group in a card.
- The hero is content-driven. No forced full-screen or multi-screen minimum height. At 1440 × 900, navigation, centered hero heading, and meaningful work imagery or the beginning of Selected Work should be visible without a long empty interval.
- Hero content padding: 48px above and 64px below on desktop; 32px above and 40px below on mobile. Count navigation separately.
- Keep the introduction, work, about, supporting evidence, and contact sequence easy to scan. Supporting evidence appears only when real material exists.
- Background changes establish major chapters. Do not alternate colors for every small content block.

### Responsive rules

- Design from 320px upward. Test 360px, 393px, 768px, 1024px, 1440px, and 1920px before declaring a future implementation complete.
- Collapse desktop splits into a single column below 768px. Tablet splits are permitted only when both content columns remain readable.
- Preserve all important project information on mobile. The main selected-work list is vertical; no required content hidden in a carousel.
- Avoid fixed-height text containers, horizontal document overflow, sticky mobile showcases, or long scroll pinning.
- Controls retain at least 44 × 44px hit areas; standalone buttons use 48px minimum height.

## 6. Component system

### Shared geometry and elevation

- Radius tokens: **0px** for rules, editorial blocks, and unboxed rows; **4px** for buttons, inputs, and tags; **8px** for image frames and occasional containers.
- Borders are 1px. Use a 2px rule only for an active indicator or an intentional structural emphasis.
- Cards and images have no shadow by default. A dialog may use one restrained shadow: 0px horizontal offset, 12px vertical offset, 32px blur, graphite at 12% opacity. Do not stack shadows.
- Functional icons use one consistent icon family, approximately 20px with 1.5–2px strokes. Icons accompany clear actions; they do not float independently.

### Navigation

- Centered navigation capsule: Kaushal's typographic name on the left; Selected Work, Background, and Approach in the middle; one contact action on the right. Add a resume link only when a real resume exists.
- Capsule: maximum width 760px, 64px tall on desktop, 24px from the page top, opaque white surface, 1px border, fully rounded outer shape. Center within the main container. Mobile uses a 24px corner radius and permits two rows to retain clear labels and 44px hit areas.
- Sticky navigation may use an opaque background and 1px divider after scrolling. No blur, glass, or animated hide/show behavior.
- Active navigation uses an underline or short rule, with color as supporting feedback. Use a normal system cursor.
- Phase 1 mobile navigation keeps all three section links visible in its second row, with the name and contact action above. No menu overlay is needed for this small destination set.
- If a later expansion requires an overlay, document that change and ensure accessible naming, focus management, Escape closing, focus restoration, and prevention of background interaction.

### Buttons and links

- Primary: accent background, inverse text; 4px radius; 48px minimum height; 20px horizontal padding. Limit to one primary action within a decision group.
- Secondary: transparent background, graphite text, strong border. On dark sections, use inverse text and a visible strong border.
- Tertiary: text link with an underline or directional arrow. Use for project exploration and secondary navigation.
- Default button-group gap is 12px. Stack full-width actions on narrow mobile screens when labels no longer fit comfortably.
- Focus ring: 2px with 3px offset, visible against its actual background. Dark or accent surfaces use an inverse ring.
- Disabled: subtle surface, muted text, no hover movement. Loading keeps the button's dimensions and communicates progress with text or an accessible indicator.
- The navigation contact action is the only pill-shaped button exception, following Reference 02's contained treatment. Other buttons retain the 4px radius. No oversized ornamental cursors or animated magnetic positioning.

### Cards and project rows

- Default project presentation is unboxed: large image, project title, short context, role/year metadata, and a clear action.
- Use one lead project and varied editorial rows rather than a repeated three-column feature grid.
- Image-to-title gap: 20px desktop, 16px mobile. Title-to-context gap: 8px. Metadata-to-action gap: 16px.
- If a whole card is a link, give it one coherent accessible name and avoid nested interactive controls. Otherwise use explicit, independently focusable links.
- Contained cards are reserved for information that benefits from grouping; use surface color or a border, an 8px radius, and the standard component inset.

### Forms

- Personal contact form: Name, Email, and Message. Additional fields require a confirmed content need. Do not require company details by default.
- Visible labels above fields; placeholders are examples, never the only labels. Required status appears in text.
- Inputs: 48px minimum height, 16px text, 4px radius, white surface, strong border, 12px vertical and 16px horizontal padding. Message area starts at 144px high and can grow.
- Label-to-field gap: 8px. Field-group gap: 24px. Errors appear directly below their fields in at least 14px type.
- Focus strengthens the outline. Invalid states include an error message; success includes a clear confirmation. Preserve entered content on a recoverable error.
- Use a single-column form, maximum width 640px. Avoid multi-step intake for this portfolio.

### Tags

- Small rectangular labels with 4px radius, subtle surface, secondary text, and 4px vertical/8px horizontal padding. Font: 12px IBM Plex Sans, weight 500.
- Gap: 8px. Prefer no more than three meaningful tags per project.
- Tags describe discipline or project context. They are noninteractive unless they actually filter content; interactive versions need 44px hit areas and selected-state cues.

### Statistics

- Display values in Space Grotesk with tabular figures. Use a 14–16px supporting label and a concise explanation where needed.
- Separate adjacent statistics with rules or alignment, not independent rounded cards.
- Use two to four substantiated values maximum. State the unit, timeframe, attribution, or source where needed; never substitute fictional numbers for missing evidence.
- Use a simple two-column mobile arrangement if labels fit; otherwise stack. Do not animate counting.

### Image blocks

- Primary project images use 16:10; cinematic video uses 16:9; portraits use 4:5. Choose one ratio per related series.
- Radius: 8px. No decorative shadow, floating frame, or mock browser chrome by default.
- Preserve product proportions. Crop environmental photography intentionally; contain interface screenshots when cropping would remove useful content.
- Every block has a planned aspect ratio and meaningful alternative text, or an empty alternative when purely decorative. Captions use 14px muted text, 12px below the image.
- Default captions and controls sit outside photography. If text must overlay an image, use a solid caption panel or a deliberately uniform image region that meets contrast requirements.

### Testimonials

- An editorial quote block, maximum reading width 640px, with a narrow rule or ample spacing rather than a speech-bubble card.
- Quote: 24–32px Space Grotesk, line height 1.3. Attribution: 14px IBM Plex Sans.
- Show the real person's name, role, and relationship where permission exists. Portraits are optional and authentic.
- Prefer one strong testimonial or two complementary accounts. Do not use an autoplay carousel or invented quotes.

### CTA

- One decisive closing section with a concise invitation, direct contact action, and optional verified availability/location.
- Prefer a graphite background, inverse heading, muted-inverse supporting copy, and an accent button. The button boundary remains visible on the dark surface.
- Layout: heading and action in an 8/4 desktop split; stacked on mobile. Use standard section spacing, not a full-screen panel.
- Keep email accessible independently of any form. No exaggerated promises, urgency badges, or decorative icon clusters.

### Footer

- A compact closing structure with name, email, useful social links, copyright, and optional resume link. Include only destinations that exist.
- Maximum three columns desktop; stacked mobile. Use a clear top divider, 48px vertical padding desktop and 32px mobile.
- Minimum 14px text with adequate contrast. No oversized marquee, repeated marketing slogan, or agency-style sitemap.

## 7. Image direction

### Photography style

Use authentic documentary and carefully composed editorial photography. Show actual work, process, artifacts, tools, materials, or environments relevant to Kaushal. Favor believable material texture and specific context over generic office scenes. Commission or select imagery as a coherent series.

### Lighting

- Soft directional light, controlled highlights, and readable shadow detail.
- Natural window light or a restrained studio setup. Avoid dramatic colored light, excessive bloom, washed-out high-key scenes, and crushed blacks.
- Metal, glass, screens, and textured surfaces should retain believable reflections and detail.

### Camera angle

- Use eye-level, a measured three-quarter view, or a purposeful top-down shot.
- Keep verticals controlled and product geometry believable. Avoid extreme wide-angle distortion and gratuitous Dutch angles.
- Portraits should feel direct and approachable, with a relaxed expression and an environment or background connected to the person.

### Background style

- Warm neutral, graphite, muted architectural settings, or authentic workspaces.
- Restrained texture such as paper, metal, stone, or concrete may appear when it belongs to the actual scene.
- Remove visual clutter through composition. Do not add artificial grids, random technical diagrams, or ornamental industrial props.

### Product placement and composition

- One main subject per image. Position it deliberately on the shared grid or within a clear balanced crop.
- Give products breathing room; retain readable scale and meaningful physical context. Avoid unexplained levitation or unrelated props.
- Interface projects use actual screens and intentional detail crops. Physical-product photography is used only for relevant work.
- Capture wide and portrait alternatives for important images. Plan desktop and mobile crops before selecting the final source.
- Never present generated material as a real completed project, client deliverable, or documentary portrait. Any later conceptual imagery must remain clearly distinguished from factual portfolio evidence.

### Color grading

- Neutral to slightly cool shadows, gently warm highlights, moderate saturation, and consistent white balance.
- Preserve skin tones, material colors, and project brand colors. Blue may occur naturally or in relevant branded objects; do not tint everything blue.
- Avoid heavy teal/blue grading, vintage filters, fake film grain, and generic futuristic treatments.
- Lighting gradients inside real photographs or project artwork are acceptable. Decorative interface gradients are not.

## 8. Motion system

Motion communicates state, hierarchy, or continuity. It must never delay access to work or contact information.

| Behavior | Specification |
| --- | --- |
| Hover | Color, underline, or border change over 160ms; no layout shift. |
| Scroll reveal | Optional opacity 0→1 and vertical translation 12px→0 over 320ms; trigger once, near entry into view. |
| Reveal sequence | At most three related items with 60ms staggering; do not stagger individual letters or every paragraph. |
| Parallax | Off by default. A later justified desktop image treatment may move at most 16px within its frame; disable on touch devices and reduced motion. |
| Page transitions | None by default. If future routing warrants them, use a 120ms content fade with no overlay wipe or deliberate loading delay. |
| Button interaction | Color changes over 160ms; optional arrow movement up to 3px. Pressed feedback returns within 100ms; the button itself does not move. |
| Card interaction | Optional image scale 1→1.015 over 220ms inside a fixed clipped frame; title underline or arrow supplies a separate link cue. |
| Menu/dialog | Opacity and translation of at most 8px over 200ms; opening and closing preserve focus behavior. |

Use a single standard easing curve: cubic-bezier(0.2, 0.7, 0.2, 1). Avoid spring, bounce, elastic, and continuous orbital motion.

### Motion constraints

- No scroll hijacking, forced horizontal scrolling, extended pinned scenes, cursor trails, marquee text, or compulsory intro animation.
- Initial content is visible if animation cannot run. Do not leave content hidden pending an observer or script.
- Hover effects are enhancements. Touch users receive a complete static state; keyboard users receive visible focus rather than a hover dependency.
- Respect reduced-motion preferences: remove reveals, translation, scale, parallax, smooth scrolling, and route/menu fades. State changes remain immediate and understandable.
- Project video is optional and used only when it explains the work. Supply a poster and usable pause/play controls. Do not autoplay audio. Reduced-motion users receive a poster until they choose to play.
- Do not animate geometry that changes text layout or the page's measured height.

## 9. Design restrictions

| Restriction | Required alternative |
| --- | --- |
| No generic gradients | Solid interface colors, authentic lighting, and project-specific artwork. |
| No random glassmorphism | Opaque surfaces with clear borders and readable contrast. |
| No excessive rounded cards | Unboxed editorial rows; 4px controls and 8px media frames. |
| No huge empty hero sections | Content-led height with work or its introduction visible early. |
| No excessive pill buttons | Rectangular 4px-radius controls; one capsule contact button permitted in navigation; text links for secondary actions. |
| No random floating icons | Functional icons anchored to an action, label, or actual project diagram. |
| No generic SaaS layouts | A personal introduction and distinct project stories, not repeated feature/benefit/pricing patterns. |
| No stock-photo-looking imagery | Authentic person, environment, process, and original work with coherent art direction. |
| No unnecessary decorative blobs | Structural rules, alignment, typography, and meaningful imagery. |
| No repetitive card grids | A lead project, varied editorial rows, and context-specific compositions. |

Also prohibited: copying the reference's logo, illustrations, client assets, game badge, copy, exact palette, or scroll choreography; fabricated metrics or endorsements; essential low-contrast text; tiny functional controls; text embedded in images as the only source of information; and decorative elements presented as factual technical evidence.

## 10. Review and change control

### Phase 1: homepage composition

The latest user-provided references have strictly limited roles:

- **Reference 01:** hero composition and typography scale only. Use a broad centered statement with tightly controlled large type. Do not borrow its corner navigation, blue palette, italic-serif identity, stickers, branding, or animation.
- **Reference 02:** navigation and button treatment only. Borrow the compact centered navigation capsule and contained contact button. Do not borrow its portrait, blue accent, surrounding page treatment, or personal branding.
- Translate both into this document's original graphite, warm paper, Portfolio-blue, Space Grotesk, and IBM Plex Sans system. The homepage hero is a centered exception to the asymmetric editorial layouts below it.
- Phase 1 is a static composition wireframe. Use neutral colors and labeled, solid media placeholders. The palette and imagery rules remain the later direction; do not introduce photography or illustration in this phase.
- Disable all animation, transitions, parallax, image zoom, animated cursors, and smooth scrolling. Basic links and focus states remain usable.
- Homepage sequence: introduction, selected work, background, approach, contact, footer. Omit statistics, testimonials, resume downloads, and factual claims until supplied.
- Project names, roles, contact details, and final positioning are unconfirmed. Use labeled content slots rather than fictional facts. Hero copy is provisional.
- Build this phase as an isolated local prototype in `homepage-wireframe/`. It is a composition review, not a published or production portfolio.

### Current pass: typography, spacing, and colors

This pass advances the neutral wireframe through the user's requested typography, spacing, and color refinement. It supersedes Phase 1's neutral-only palette restriction, while preserving the composition and ban on imagery and animation.

- Use Space Grotesk 500 for the entire hero heading, including Precise and Purposeful. Use 1.08 line height and -0.035em tracking. Keep title case, two desktop lines, and natural mobile wrapping.
- The hero contains only the centered heading. Omit its eyebrow label, supporting paragraph, and CTA links. The navigation retains its contact button. Set the heading margin to zero.
- Retain 48px/64px desktop hero top/bottom padding and 32px/40px mobile padding. Remove the phase-review note from the hero so the content has a clearer hierarchy; retain draft-content identification in the footer.
- Apply Portfolio blue to primary actions, warm paper to the canvas, graphite to text, and a graphite background with inverse text to the closing contact section. Keep media slots neutral.
- Supporting project titles remain 32–36px desktop; introductory background prose follows the 22px desktop lead size. Align project summaries directly to their grid track without an extra left inset.
- No photographs, illustrations, animated effects, new sections, or invented content are introduced. Final project and contact content remains pending.

Before approving a future visual implementation, verify:

1. The introduction identifies Kaushal and his actual contribution clearly.
2. Typography, colors, spacing, geometry, and component states match this document.
3. Images depict relevant, authentic work and have intentional desktop/mobile crops.
4. Work and Contact are immediately discoverable; the hero does not create an empty detour.
5. Mobile keeps all essential content visible without horizontal document overflow.
6. Keyboard focus, contrast, text resizing, reduced motion, form feedback, and media controls remain usable.
7. The page feels individual through content and composition, without prohibited template decoration.

Changes to the palette, type families, grid, core component geometry, or motion rules are system changes. Record the decision and update this document before applying them. Preserve the reference analysis as a historical inspection rather than editing it to justify new choices.

### Decision log

| Date | Decision | Reason |
| --- | --- | --- |
| 2026-10-11 | Establish graphite / warm off-white / Portfolio-blue identity | Original technical and industrial character, distinct from the reference's electric blue. |
| 2026-10-11 | Use Space Grotesk and IBM Plex Sans | Strong display hierarchy with readable, precise supporting typography. |
| 2026-10-11 | Use editorial work rows and a vertical mobile list | Present project substance clearly without repetitive grids or hidden primary content. |
| 2026-10-11 | Keep motion restrained and contact direct | Preserve a premium impression while keeping navigation and inquiry efficient. |
| 2026-10-11 | Scope Reference 01 to centered hero/type scale and Reference 02 to capsule navigation/contact button | User-directed reference separation; retain one original brand system. |
| 2026-10-11 | Create a neutral, static homepage wireframe with labeled content slots | Review composition before imagery, motion, or final content. |
| 2026-10-11 | Apply Mocka Regular to the hero only; refine spacing and activate the approved brand palette | User-requested typography, spacing, and color pass. Personal-use font remains local-preview-only pending webfont licensing. |

### Latest hero override
Use the user-supplied writer illustration as a full-width, full-viewport hero image with contain sizing and centered positioning on desktop and mobile. Preserve the complete image without cropping; the hero background fills the remaining viewport space. Overlay the navigation at the top. The prior headline remains accessible but visually hidden. No hero label, paragraph, or CTA links. This explicit request supersedes the earlier no-imagery and content-height restrictions for the hero only.

### Scroll progress gauge
Use the React Bits Slosh Gauge as a fixed bottom-right reading-progress meter (0�100%). Use Portfolio-blue liquid and a graphite tank, 52 x 104px on desktop and 42 x 84px on mobile, with 20px safe-area-aware offsets. This is an explicit motion exception for the gauge only; the hero illustration remains static. Disable inertia and tilt for reduced motion. Preserve React Bits attribution and license in src/components/.

Scroll gauge revision: use a cropped image of the original illustration's Red Bull can, with an empty grayscale base and blue-tinted full-color liquid reveal. Use a curved wave surface that responds to scroll speed and settles after scrolling stops. Keep the percentage readable, fixed bottom-right placement, and immediate flat fill for reduced motion.

### Current navigation and gauge revision
Use React Bits Gooey Nav inside the existing white navigation shell, with blue active liquid highlight and Work, Background, Approach, and Contact anchor links. On mobile the logo sits above the link row. Frame/glass effects are disabled. Gooey interaction is an explicit motion exception alongside the scroll gauge; the hero remains static. The gauge uses a crisp SVG can outline with lid, rim, understated red label, and blue liquid waves; do not use the cropped can photograph. Keep percentage display, responsive dimensions, and reduced-motion support.

### Latest layout revision
Restore the original rounded graphite scroll tank with Portfolio-blue liquid, tick marks, and percentage, retaining the curved wave animation. Remove the can treatment from the active interface. Header: separate the left-aligned Kaushal wordmark from a compact right-aligned white Gooey Nav capsule. Use the shared content width; keep both on one row on mobile with smaller navigation type and spacing.

### Hero heading placement
Display Precise thinking. and Purposeful execution. as two lines at the bottom-left of the static image hero, in Space Grotesk 500 and sentence case. Use the shared page gutter, 40px bottom offset on desktop and 28px on mobile; reserve space for the bottom-right scroll gauge.

### Hero split text banner
Replace the bottom-left two-line heading with two matching graphite Text Loop ribbons at the hero's lower corners: Precise thinking. on the left and Purposeful execution. on the right. Align both on one baseline, leaving a central gap and clearance for the fixed progress meter. Use sentence case and Space Grotesk. Keep the ribbons absolutely positioned within the hero only. Pause when offscreen, hidden, or hovered; show static complete phrases for reduced motion. Hero image and background remain static.

Latest override: Text Loop split banners were undone at the user's request. Restore the static two-line bottom-left heading: Precise thinking. / Purposeful execution. Navigation and liquid scroll gauge remain unchanged.

### Editorial hero enhancement
Add a large blue Portfolio word behind the illustrated character, using Space Grotesk 500 with tight tracking. Maintain the original base image and aligned SVG foreground window so the word overlaps behind the figure without generating replacement character artwork. Use a subtle descriptor block at the right with the user's example role labels (draft copy pending verification). Preserve the navigation, static background, and two-line bottom-left heading. Scale the word down on mobile. Change HERO_WORD in src/components/HeroEditorial.jsx to update the word.

Latest supplied poster reference: make Portfolio span nearly the full hero width in saturated illustration blue, positioned higher behind the torso rather than across the lower leg. Remove all designer descriptor labels. Preserve the original character asset, navigation, and bottom-left headline. Desktop type is 25vw capped at 420px; mobile uses 25vw with a lower offset to align with the contained illustration.

Latest hero asset: use the user-supplied hero-portfolio.png as the complete hero composition, centered with contain sizing. Its Portfolio typography is baked into the image; remove the separate editorial text and foreground mask from the rendered hero. Keep navigation, bottom-left headline, and scroll gauge.

### Current brand color override
Portfolio blue #003FFD is sampled from the dominant saturated pixels in the supplied hero typography. Use it as the primary brand/accent color throughout the interface, including Gooey Nav, buttons, focus indicators, text selection, and scroll liquid. Hover blue is #0033CC. Keep graphite text and neutral page surfaces for visual hierarchy. This replaces the previous orange palette.

### Bottom-left headline type and shine
Use IBM Plex Sans 500 for both bottom-left headline lines, matching the navigation font family. Apply React Bits Shiny Text with graphite base and a Portfolio-blue #003FFD highlight, a 2.5-second sweep and 1.5-second delay, without glow. Reduced motion uses static graphite text. Pause when hovered, offscreen, or the page is hidden.

Latest headline refinement: match navigation font family, weight, and responsive size exactly: IBM Plex Sans 500, 13px desktop, 11px mobile, 10px below 375px. Share --navigation-font-size between navigation and headline. Shine applies only to Precise and execution; thinking., Purposeful, and punctuation remain static.

Navigation refinement: add a restrained Portfolio-blue shine to the menu capsule border, with a 5-second cycle and masked 1px stroke. Inactive labels turn brand blue on hover and keyboard focus; active labels retain white for contrast against the blue pill. Reduced motion shows a static border.

Navigation border shine revision: one 28px blue SVG stroke segment travels around the entire capsule perimeter continuously, with linear four-second laps and no pause. Replace the prior parallel gradient sweep. Recompute the perimeter on resize; reduced motion freezes the stroke.

Latest navigation override: remove all navigation border shine. Use the original static border; retain Gooey Nav and brand-blue label hover/focus.

Latest homepage scope: only the hero is rendered for now, without placeholder work/background/approach/contact sections or footer. The compact navigation shows Home selected with a graphite (#171B1D) oval and white text; blue hover remains.

Latest revision: restore all homepage sections and footer, and navigation destinations Home, Work, Background, Approach, Contact. The selected oval uses Portfolio brand blue #003FFD with white text, replacing graphite. Use brand blue consistently for UI accents, hover, focus, progress fill and headline shine; neutral text and surfaces remain.

Responsive navigation update: below 1024px show a blue Menu/Close toggle and layered sliding neutral panel, with brand-blue first backdrop and selected link. Use existing typefaces, numbered links and fine dividers. Desktop retains Gooey Nav. No decorative hover shapes.

Kinetic menu closing: links exit in reverse stagger, followed by the layered panel sliding right and the scrim fading. Keep the overlay rendered until the exit completes; reduced motion closes immediately.

Responsive hero image: use the user-supplied portrait hero-portfolio-mobile.png below 1024px (mobile and tablet); retain hero-portfolio.png for desktop. Use picture/source selection and centered contain sizing so the entire illustration remains visible.

Post-hero scene: a warm cardboard parcel with blue Kaushal branding drops once when the section enters view, lands near the section bottom, settles with a subtle bounce and releases short-lived ground dust. Use physical Three.js materials, fiber grain, tape seam, soft lighting and shadows. Lazy-load the scene; pause when hidden and stop rendering once settled. Reduced motion renders a resting box; unsupported WebGL uses a static parcel.

Parcel color update: the box uses brand blue #003FFD across its faces, with white printing and a translucent blue tape seam. Preserve cardboard grain, physical lighting, shadows and impact dust.

Resume-based unpacking: after the parcel lands, further scroll opens four hinged flaps. Core services from Kausha_Resume.pdf emerge on the left: Brand Identity, Packaging Design, Website Design, Social Media Design, Marketing Design, Print Media, UI/UX Design, AI Development. On the right, actual Three.js objects with thickness, beveled edges and lighting represent the resume's software icons: Photoshop, Illustrator, Premiere Pro, Wix, WordPress, HTML5, CSS3. Preserve tool identity colors within a brand-blue and neutral composition. The section holds in view while unpacking; reduced motion displays its completed state.

Unpacking heading is centered at the top of the scene. The prompt uses React Bits Fold Text on first scroll entry, with brand-blue Shiny Text highlights limited to my skills and tools. Keep restrained sizing and static text for reduced motion.

Unpacking prompt revision: remove What I bring. Keep centered Inside the box in muted gray and Scroll to unpack my skills & tools. in brand blue. Preserve fold reveal and shine on my skills/tools, now blue with muted highlights.

Prompt now uses all caps. Skills use React Bits Branched Menu with two expandable categories, Brand & communication and Digital & experiences, preserving all eight resume services. Blue branch tracing highlights selections; neutral branch lines and readable muted text.

Unpacking choreography: reveal skills first. A decorative brand-blue cursor emerges from the box, moves to the skills label and clicks; 01 / SKILLS types in, branch lines draw, then category and skill labels appear in sequence. After completion, software objects emerge independently. Keep controls inert during their reveal; reduced motion shows the completed state.

All unpacking motion is now directly scrubbed by scroll position: drop/dust, flaps, cursor/click, typing, branches, staggered skills and tools. Pausing scroll pauses the scene; reverse scroll rewinds it. Reduced motion remains static.

Latest choreography: reaching the skills stage via scroll triggers automatic cursor movement/click, typing, branch drawing and label reveal once. Software tools remain driven by subsequent scrolling and wait for the skills sequence to complete.

Tools now automatically follow skills completion. Use the same cursor click, typed heading, branch drawing and staggered labels on both sides. Group tools into Creative software and Web tools, with 3D software tiles beside their branch labels.
