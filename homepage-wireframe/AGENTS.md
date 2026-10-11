# Prototype Instructions

## User-approved scope

Phase 1 is a local homepage composition wireframe. Follow `../docs/design.md`. Reference 01 informs hero composition/type scale only; Reference 02 informs navigation/button treatment only. Do not combine branding. No photography, illustration, animation, transitions, parallax, or smooth scrolling. Labeled neutral placeholders are explicitly requested. Do not fabricate projects, credentials, metrics, testimonials, resume files, or contact details. Do not deploy without a later user request.

Latest pass: use Space Grotesk 500 throughout the hero, including Precise and Purposeful, in title case. Mocka is no longer part of the active design. Keep the documented palette, media placeholders, and no animation.

Run the local server yourself and open the preview in the browser available to this environment. Do not give the user server-start instructions when you can run it.

Before making substantial visual changes, use the Product Design plugin's `get-context` skill when the visual source is unclear or no longer matches the current goal. When the user gives durable prototype-specific design feedback, preferences, or decisions, record them in `AGENTS.md`.

When implementing from a selected generated mock, treat that image as the source of truth for layout, component anatomy, density, spacing, color, typography, visible content, and hierarchy.

Build app UI in `src/`. Keep `.openai/hosting.json`, `worker/index.js`, `scripts/prepare-sites-build.mjs`, and `tests/sites-worker.test.mjs` intact so the same local prototype can be handed to Sites. Before a Sites handoff, run `npm run build` and `npm run test:sites`; the build must leave `dist/client/index.html`, `dist/server/index.js`, and `dist/.openai/hosting.json`.
Hero composition override: user supplied hero-writer.png for an edge-to-edge, full-viewport image hero. Navigation overlays the image. Keep the heading accessible but visually hidden, without labels, supporting copy, or hero CTA links. This image is explicitly authorized; other media remain placeholders.

Hero image sizing: keep the full-viewport hero, but use object-fit: contain and object-position: center at every breakpoint so the complete illustration remains visible without cropping.

Latest user decision: undo character animation. Keep the original static hero image centered with contain sizing. Do not add GSAP, canvas motion, blinking, or animation controls.

User-authorized motion exception: React Bits Slosh Gauge is a fixed bottom-right scroll-progress indicator. Keep the hero static. Respect reduced motion and clean up scroll, resize, and animation-frame callbacks.

Scroll gauge now uses the original Red Bull can crop with a curved liquid surface, replacing the orange rectangular tank.

Latest approved direction: outline SVG can replaces cropped Red Bull image in the scroll meter. React Bits Gooey Nav replaces the header link row and separate contact button, retaining site anchor destinations. Hero remains static.

Latest user revision: original rounded scroll gauge with liquid waves, no can. Separate header logo at left from a smaller Gooey Nav capsule at right, including mobile.

Hero heading is now visible at the bottom left: Precise thinking. / Purposeful execution., two lines in Space Grotesk. Background remains static.

Latest hero text: use React Bits Text Loop in two disconnected but aligned ribbon pieces, left Precise thinking. and right Purposeful execution., confined to hero. Reduced motion uses static phrases. Keep progress gauge clear.

Text Loop was undone. Use the static two-line bottom-left hero heading; preserve Gooey Nav and the liquid scroll gauge.

Latest hero enhancement: large blue Portfolio behind the character and small right-side descriptor block. Preserve the bottom-left headline, navigation, image, and static background. HERO_WORD is the editable word constant; descriptor examples are draft user-provided copy.

Latest reference override: wide blue Portfolio behind the upper character; no small designer/role text.

Hero now uses hero-portfolio.png supplied by the user. Do not render HeroEditorial or duplicate Portfolio lettering over this asset.

Current brand color: Portfolio blue #003FFD sampled from hero lettering, replacing orange across the interface. Hover #0033CC. Preserve neutral surfaces and graphite text.

Latest headline update: IBM Plex Sans matches navigation; Shiny Text uses #003FFD highlight over graphite. Respect reduced motion; hero image remains static.

Headline matches navigation family and size via --navigation-font-size. Shine only Precise and execution; preserve two intact lines.

Navigation border uses subtle blue shine; inactive label hover/focus uses brand blue. Active labels stay white. Disable border animation for reduced motion.

Navigation border shine removed at user request. Static border only; retain blue hover text and Gooey Nav interaction.

Current scope: show only the homepage hero; remove placeholder sections and footer from the rendered page. Navigation contains Home with a dark graphite oval and white active text. Preserve blue hover and headline shine.

Latest scope overrides homepage-only: restore Work, Background, Approach, Contact and footer, with Home retained in navigation. Selected navigation oval uses brand blue #003FFD, white active text. All accent interactions use brand blue; preserve neutral backgrounds and readable graphite text.

Mobile/tablet navigation below 1024px uses the Sterling Gate kinetic layered menu adapted to brand blue and existing links. Desktop Gooey Nav stays unchanged. No decorative multicolor blobs; respect reduced motion and keyboard navigation. UI components live in src/components/ui; Tailwind utilities omit Preflight to preserve current layouts.

Kinetic menu must animate on close as well as open: reverse-stagger links and slide layers right before hiding the overlay.

Mobile/tablet hero below 1024px uses hero-portfolio-mobile.png, supplied as Portfolio Sketcher in Blue and Graphite.png. Desktop keeps hero-portfolio.png. Preserve centered contain sizing and static artwork.

User-approved 3D exception: a realistic cardboard box drop and impact dust directly below hero. Play once per mount; preserve existing portfolio sections. Respect reduced motion, lazy load Three.js, dispose scene resources, pause offscreen and stop after settling.

The 3D parcel is brand blue #003FFD with white branding, including its WebGL fallback. Preserve the drop and dust animation.

Resume verified visually: tool icons are Photoshop, Illustrator, Premiere Pro, Wix, WordPress, HTML5 and CSS3. Use portfolioContent.js as the editable source for the eight core services and tools. Box opens with scroll; skills left, actual 3D software tiles right. Do not invent additional proficiencies.

Center the unpacking heading and prompt. Use Fold Text reveal on the prompt and blue shine only on my skills and tools.

Remove What I bring heading. Inside the box is muted gray; unpacking prompt is brand blue, retaining fold and selective shine.

Use all caps for the unpack prompt. Skills use expandable React Bits Branched Menu categories with brand-blue branch traces. Preserve the right-side 3D tools.

Skills and software emerge separately. Skills use a cursor click, heading typing, branch drawing and staggered labels; tools wait for the skills-revealed event.

Unpacking must follow scroll position, with no timed autoplay. Pausing scroll pauses box, cursor, typing, lines, skills and tools; reverse scrolling rewinds.

Skills click/typing sequence now autoplays once triggered by scrolling to the skills stage. Tool emergence remains scroll-controlled and gated on skills completion.
