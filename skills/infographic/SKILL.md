---
name: infographic
description: Design and render static social graphics (LinkedIn/Instagram infographics, posts, posters, cheat sheets) as HTML+SVG, exported to PNG with headless Chrome.
---

# Infographic skill

Build each graphic as a single HTML file and render it to PNG. Using HTML gives us real typography, a grid, and inline SVG illustrations, and keeps everything editable and diffable.

## 1. Set up
- Read the project brief: `output/<project>/brief.md`.
- Read the house style `design-languages/house-style.md` and link its kit, plus Lucide for icons:
  ```html
  <link rel="stylesheet" href="<root>/design-languages/kits/mono.css">
  <script src="<root>/node_modules/lucide/dist/umd/lucide.min.js"></script>
  …  <i data-lucide="receipt"></i>  …
  <script>lucide.createIcons({ attrs: { 'stroke-width': 1.5 } })</script>   <!-- end of body -->
  ```
- Put the source at `output/<project>/infographics/src/NN-slug.html`.

**Formats:** the design is authored as **HTML** (the editable source) and exported as **PNG** (the file you post).

**Follow the House rules in `AGENTS.md`:** less is more, with no metadata, numbering, dividers, slashes, or decorative marks.

## 2. Structure
```html
<div class="canvas">                       <!-- 1080×1350 (4:5); class="canvas poster" = 2160×2700 dense cheat sheet -->
  … serif display headline (+ one short lede) …
  … ONE hero illustration (inline SVG), big …
  … the grounded example (real-looking data, or a nicely designed flowchart) …
</div>
```
No header bar, no footer bar, no series name or numbering. Kit classes include `.display`, `.title`, `.lede`, `.body`, `.strong`, `.label`, `.chip`/`.chip.on` (the answer), `.card`, `.frame`, `.solid`, `.bar > i`, `.cells/.cell.on`, and `.row/.col`. Keep per-piece CSS in a `<style>` block, and do not edit the shared kit for a one-off.

## 3. Illustrations
Use monochrome diagrams and interface-as-illustration (see `house-style.md` §6): ink for the answer and taken path, mist for context. Use **Lucide icons** for nouns (stroke 1.5); hand-draw only what Lucide lacks. Labels only where they name something. No corner ticks, crosshairs, or decorative marks. The diagram is the centrepiece, with air on all sides.

## 4. Render
```bash
node skills/infographic/render.mjs output/<project>/infographics/src/NN-slug.html --out output/<project>/infographics
node skills/infographic/render.mjs output/<project>/infographics/src --out output/<project>/infographics   # whole folder
# --scale 2 for a 2160px-wide, extra-crisp export
```
The renderer runs a **fit check** and prints `✓`, or `⚠ OVERFLOW` / `⚠ CLIPPED` / `⚠ MARGIN` with the offending elements, then exits with an error. A piece is not done until it prints `✓` **and** you've looked at the bottom edge yourself (see the Quality gate in `AGENTS.md`).

**Dark mode:** `node skills/lib/make-dark.mjs output/<project>/infographics/src`, then render `src-dark/` into `infographics/dark/` (see `house-style.md` §2b).

## 5. Review loop (required)
Open every PNG and critique it:
- Overflow, or anything cramped against the edges
- A single dominant hero, with a clear hierarchy
- Line breaks: no orphans, and the headline is at most 2–3 lines
- Copy is short, grade 5, and ≥24px body text
- White page, greyscale only; ink is used for "the answer" only; no italic or coloured words
- **House rules:** no metadata, numbering, dividers, slashes, or decorative marks

Iterate until it would stop a thumb mid-scroll.
