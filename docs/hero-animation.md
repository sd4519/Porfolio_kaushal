# Hero illustration animation assessment

Status: asset preparation required; animation is not implemented or verified.

## Inspected source

`homepage-wireframe/public/images/hero-writer.png` is a flattened 1536 × 1024 illustration. The workspace contains no layered PSD, SVG illustration, or individual character layers. The existing app is React 19 with Vite 6; its package manifest does not include Next.js, Tailwind, GSAP, or @gsap/react.

The current hero displays the original image centered with `object-fit: contain` inside a reserved full-viewport section. Preserve this static fallback until animated assets pass visual review.

## Why separate layers are required

| Movement | Required artwork | Limitation of the supplied PNG |
| --- | --- | --- |
| Crossed-leg swing | Independent lower leg, trouser cuff, foot, and sandal; overlapping knee joint; clean underlying scene | Moving a cutout exposes the original leg unless removed. Removal reveals missing background and parts of the supporting trousers. A rigid rotation without an overlapping joint creates a visible knee seam. |
| Blink | Precisely aligned open-eye and closed-eyelid patches for the visible eye; intermediate artwork if needed | The closed lid and corresponding skin shading are absent. Scaling the eye or drawing a line does not preserve the illustration's anatomy. |
| Drawing | Independent drawing hand and pencil, an overlapping wrist/sleeve seam, and clean underlying notebook/body | The hand occludes paper and joins the sleeve. Simple cropping or translation exposes duplicate outlines and missing paper/sleeve detail. |

AI reconstruction could approximate these missing pixels, but would require visual approval of newly painted details. It cannot guarantee unchanged anatomy, clothing folds, or fine linework. No generated replacement artwork or whole-image motion has been substituted.

## Asset handoff

Supply a layered source or professionally prepared transparent PNG exports:

- A static base containing the character, chair, can, and background, with moving parts removed and concealed areas reconstructed.
- A crossed lower-leg layer with original sandal detail and an overlap at the knee.
- A drawing-hand/pencil layer with sufficient overlap at the wrist.
- Matching open-eye and closed-eyelid patches.
- Foreground occlusion layers where the knee, sleeve, or notebook must cover the moving layers.
- Knee and wrist pivot coordinates, layer order, and export bounds in the original 1536 × 1024 coordinate space.

All assets must share one coordinate system, preserve original linework, and reconstruct the exact static pose when composited. Do not identify the illustrated person as a verified portrait of Kaushal.

## Implementation once assets are ready

Create a reusable `HeroIllustration` React component. Scale one shared 1536 × 1024 stage uniformly within the existing full-viewport hero; use the same scale for every layer and pivot. Reserve layout dimensions before image loading and retain the static image until all layers decode. For Next.js integration, place the component behind a client boundary; the current Vite app needs no framework migration for this animation.

Use GSAP and @gsap/react's scoped `useGSAP` hook, with GSAP context cleanup and `gsap.matchMedia` for reduced-motion changes. Reduced motion shows the exact static composition and schedules no animation. Keep leg and hand transforms local to their joints. Start with approximately ±1 degree of knee rotation and subpixel-to-one-pixel hand motion, then tune visually rather than treating those values as approved motion.

Schedule each blink with a new random 3–6 second delay after the previous blink completes; cancel delayed calls on unmount and preference changes. Pause animation when the hero is offscreen or the document is hidden. Remove observers and visibility listeners on cleanup. Avoid animating layout properties, the complete image, or a full-screen canvas. Apply compositing hints only to the small animated layers.

## Required verification

Compare the neutral composite to the original at native resolution before enabling motion. Inspect extreme leg and hand poses for gaps, doubled edges, exposed original pixels, and joint seams. Review repeated blinks and motion cycles on desktop and mobile. Verify reduced motion both before loading and after a live preference change, offscreen/hidden-tab suspension, and repeated mount/unmount with no surviving timelines, timers, or listeners. Confirm no layout shift while assets load.

Do not mark this animation complete until the prepared artwork and these runtime checks pass.
