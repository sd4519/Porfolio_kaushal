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

After skills complete, tools autoplay with matching cursor/type/branch choreography. Preserve the 3D tiles beside tool names.

Use straight smaller software icons, neutral initial branch labels, symmetric columns, clearer ground dust, blue Inside the box title and secondary-gray prompt with selective blue shine.

Mirror tools branches to face the center, with lines at right. On reverse scrolling, pack skills and tools back into the box and close flaps.

User workflow restriction: keep all work local. Do not git push or deploy to Vercel unless the user explicitly requests it.

Local first-session introduction uses type/delete resume phrases in PortfolioIntro. Skip/Escape dismisses, reduced motion bypasses, and sessionStorage prevents replay on refresh within a session. Keep local; no push/deploy without request.

Latest preloader is Thought Line, replacing the typing intro. Wait for real hero-image and font readiness; neutral background, blue indicator, status shimmer and trace. Keep local only.

Preloader disabled at user request. Render the homepage immediately; keep changes local.

Inside the box exit packs contents, closes parcel, loads a 3D truck, drives left to right and advances to Selected Work. Trigger near section end only after tools completion. Respect reduced motion and cancellation; do not push or deploy.

Delivery truck is now a responsive 2D SVG in brand blue at the bottom of the section, with rotating wheels and a muted architectural skyline/road backdrop. Preserve the 3D parcel, packing/loading choreography and automatic advance. Keep all changes local.

Truck delivery removed at user request. Restore the original box drop/unpacking section with skills and tools, reverse-scroll packing, and normal scrolling to the next section. No truck, road backdrop, scroll lock or automatic section advance. Keep local only.

Latest hero replacement: remove the old image hero and corner headline. Use a pure white full-viewport section with real blue Portfolio typography in Space Grotesk, layered behind the user-supplied sitting-person GLB. Keep model static, frame responsively without clipping, dispose WebGL resources, retain navigation and lower sections. Keep work local.

Latest box behavior: automatically play the box drop, bounce and impact dust once when the section enters view, independently of further scrolling. Pause the drop while offscreen or the tab is hidden; reduced motion shows a resting box. Preserve scroll-controlled unpacking and reverse-scroll packing.

Latest user refinement: restore the bottom-left Precise thinking. / Purposeful execution. headline and selective blue shine. Animate the supplied unrigged GLB with subtle whole-model sway, pause when offscreen or hidden, and disable for reduced motion. Center tool headings and labels, increase label/icon gaps, and project 3D icons to match their reserved DOM dimensions.

Latest approved services pass: compact centered tool name/icon pairs; eight static split-layout service cards after the box, before Selected Work. Follow supplied reference using existing brand palette/fonts, 24px card radius and original illustrative typography/layout studies. Write service copy from the eight verified skills without invented client claims. Await user scroll reference before adding card effects. Keep local.

User approved Filter service-card scroll reference: on spacious desktop viewports, cards pin and recede with scroll-driven backward tilt, upward/depth translation, slight scaling and fading while the next card rises over them. Reverse scroll restores the cards. Last card exits with normal scrolling. Use static cards on narrow/short viewports where content cannot fit, and for reduced motion. Preserve content and brand design; local only.

Latest services heading: centered two-line editorial heading with small blue label, spacious graphite introduction and restrained vertical grid rules based on the supplied image. Use existing Space Grotesk / IBM Plex Sans and approved brand palette; preserve the service-card stack. Keep local.

Services heading correction: user rejects black/dark background. Use light brand canvas, graphite centered heading, plain blue eyebrow without badge, and reference-matched scale/spacing. Preserve service cards.

Latest approved heading composition: match the screenshot with a full-viewport services introduction, substantial empty upper area, plain centered blue label near 51% of viewport height and a restrained two-line graphite heading below it. Maintain light canvas and subtle grid. Mobile uses shorter responsive spacing with natural height for wrapping; preserve card stack.

User approved service polish: shine Brand/execution, closer eyebrow, incoming blur clears at 20% visibility, minimal AI-generated service imagery replaces current studies. Preserve reduced-motion static rendering and brand styling.

Service artwork now comes from the user's two portfolio PDFs: NorthForge branding, Archive Cafe packaging, Feltrom website/interface, Yash Realty social, Noventix campaign, Gawarvala stationery. Preserve source artwork and readable contain sizing. AI remains explicitly conceptual because the supplied PDFs contain no matching project. Keep local.

Latest user-approved pass: service artwork fills its right panel, with no caption/text on image side. Preserve left descriptions. Replace Selected Work placeholders with Filter-inspired scroll-scrubbed Discover showcase using actual PDF projects. Light background, blue active names, vertical thumbnails, diagonal framing; responsive static fallback and reduced motion. Local only.

Latest Discover refinement: active PDF project image fills the background with a light readability veil and scroll-driven crossfade; active title sharp blue, next subdued, remaining titles blur into bottom. Desktop previews removed; retain static responsive/reduced-motion project images. Services introductory large heading uses IBM Plex Sans, Arial, sans-serif. Local only.

Approved name introduction: full-screen blue KAUSHAL PRAJAPATI before Discover. Two clipped warm-light halves split vertically and fade with reversible scroll, revealing first project underneath before project scrolling starts. Responsive and reduced-motion use a static full-screen name. Local only.

Latest split intro correction: single-line smaller RECENT PROJECTS replaces name, white text on brand-blue halves. Discover project titles rise from below as halves split and fade, reversible with scroll.

Discover background stays completely hidden throughout split-screen opening. Only after halves fully clear does background fade in over 30vh of scroll; project advancement waits until this fade finishes. Reverse scroll restores sequence.

Discover grid overlay removed. Recent Projects desktop entrance uses upstream MIT React Bits PixelSwap with bottom-to-top tiles and subtle randomized ordering, triggered on section entry. Retain split reveal after entrance and static reduced-motion/mobile presentation.

Approved section navigation: preserve hero navigation; fixed blue Menu button appears past hero, links expand left from button on desktop and below it on mobile. Close on selection, outside click, Escape or returning to hero. Keyboard accessible and reduced-motion safe.

After Discover add white full-viewport gallery invitation, centered See more of my work heading and upstream React Bits Slide Commit pill, without surrounding images. Slider opens native accessible dialog with actual PDF project artwork, Escape/Close dismisses. Retain upstream license; icons use inline SVG.

Latest gallery invitation supersedes no-images preference: six actual portfolio artworks frame centered copy using Filter screenshot placements; masked upward headline reveal, button scale entrance and staggered artwork rise on section visibility. Preserve blue Slide Commit and gallery dialog. Responsive four-artwork mobile composition and reduced-motion fallback.

User authorizes Git push and Vercel production deployment after responsive verification. New white closing contact section after gallery matches supplied screenshot: muted large headline, That's Kaushal, lower-left conversation copy, right-side invitation and brand-blue pill CTAs. Contact destinations must come from user, not be invented.
