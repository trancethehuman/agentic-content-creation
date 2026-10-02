# Design language: Palantir (Fictive Kin)

> Source: [Fictive Kin — Palantir](https://fictivekin.com/work/palantir), studied October 2026.
> Role in this repo: **accent vocabulary.** Borrow its HUD details to add precision to the Oregon Symphony style.

Palantir was hard to describe, so Fictive Kin chose not to describe it: *"Rather than defining the company, we decided to define the Palantir-shaped problems they solve."* The design follows that idea, Show. Don't tell. It looks like a calm, black-and-white **heads-up display**: an operating system for serious work.

## 1. Feeling
**Austere, instrumented, monochrome, cinematic.** It is "futurism without the cliché": no neon, no circuits, no glowing brains.

## 2. Colour
| Role | Value |
|---|---|
| Background | `#0D0D0D` to `#1A1A1A` charcoal panels |
| UI chrome | `#E6E6E6` light-grey panels (the "Use cases" explorer) |
| Type | White on dark; near-black on light |
| Photography | **Black-and-white only**, high contrast, often desaturated industrial scenes (aircraft, microscopes, factories) |
| The one accent | A single **flat orange tile** (`≈ #E8703A`) for a featured item (the "Swiss Re" card). One per screen, at most. |

## 3. Typography
- One neo-grotesk sans for everything, regular weight, at large sizes ("Operating system for the modern enterprise.").
- Tiny **uppercase mono-style micro-labels** above fields: `TRY OUR PLATFORMS`, `FOR MORE INFORMATION`, `01 — IMPACT`, `02 — TIMELINE`.
- Numbered metadata: `01 — IMPACT`, `02 — TIMELINE`, `03 — PROBLEM SPACE`, each followed by a short sentence.
- Small dates and tags sit right-aligned on the same baseline as the title ("Airbus ........ 2021").

## 4. HUD vocabulary (the part we borrow)
1. **`↳` return arrows** to introduce a line: "↳ at Palantir", "↳ organizations integrate their data…"
2. **⊕ crosshair markers** on the four sides of a focused image, like a camera viewfinder.
3. **Corner brackets** (L-shaped ticks) marking the corners of a selection.
4. **Hairline rules under every label/value pair**, with a `→` arrow aligned right ("Get Started →").
5. **Bordered icon buttons**: tiny square outlined buttons for the menu, search, and globe.
6. **A slider/scrubber line** with a dot (`•———`), used as a "VIEW" zoom control.
7. **Message framing**: "/ END MESSAGE" in small mono, as if the page were a transmission.
8. **A grid of tiles** you can zoom into, with a focused tile in the centre and the rest fogged.

## 5. Motion
The video moves slowly through black-and-white footage. The UI zooms smoothly into a tile and the crosshairs lock on. It feels like an instrument focusing, not like a website animating.

## 6. How we use it
- Use `.hud` corner ticks on the main illustration or data block.
- Use `↳` in kickers and `→` on "next step" rows.
- Use numbered mono labels (`01 —`) for steps and lists.
- Use crosshairs (⊕) to show "the model is looking at this", which is perfect for computer-use and bounding-box illustrations.
- **Do not** adopt the black-and-white photography or the orange accent alongside Oregon green. Pick one accent per piece.
