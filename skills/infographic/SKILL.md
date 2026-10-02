---
name: infographic
description: Design and render static social graphics (LinkedIn/Instagram infographics, posts, posters, cheat sheets) as HTML+SVG, exported to PNG with headless Chrome.
---

# Infographic skill

Build each graphic as a single HTML file and render it to PNG. Using HTML gives us real typography, a grid, and inline SVG illustrations, and keeps everything editable and diffable.

## 1. Set up
- Read the project brief: `output/<project>/brief.md`.
- Read the design language (default `design-languages/oregon-symphony.md`) and link its kit:
  ```html
  <link rel="stylesheet" href="<relative path>/design-languages/kits/symphony.css">
  ```
- Put the source at `output/<project>/infographics/src/NN-slug.html`.

## 2. Structure
```html
<div class="canvas">                       <!-- 1080×1350 (4:5) -->
  <div class="topbar"><span><b>Series</b> name</span><span>NN / TT · Topic</span></div>
  … kicker → serif display headline → lede …
  … ONE hero illustration (inline SVG) …
  … the grounded example (real-looking data) …
  <div class="footbar"><span>takeaway</span><span>source</span></div>
</div>
```
Kit classes include `.display`, `.title`, `.lede`, `.body`, `.kicker`, `.label`, `.pill`, `.panel` (forest green), `.card`, `.hud` (corner ticks), `.bar > i` (probability bar), `.cells/.cell.on`, and `.row/.col`. Keep per-piece CSS in a `<style>` block, and do not edit the shared kit for a one-off.

## 3. Illustrations
Draw hand-built inline SVG as **line art**: `stroke-width 2.5`, round caps and joins, green on forest or grey on ink, with exactly one green "answer" element. Add one construction detail (corner ticks, a dashed box, or a mono caption with a leader line). The illustration should be the visual centrepiece, not a tiny icon.

## 4. Render
```bash
node skills/infographic/render.mjs output/<project>/infographics/src/NN-slug.html --out output/<project>/infographics
node skills/infographic/render.mjs output/<project>/infographics/src --out output/<project>/infographics   # whole folder
# --scale 2 for a 2160px-wide, extra-crisp export
```
The renderer prints `✓` or `⚠ OVERFLOW` (content spills past the canvas).

## 5. Review loop (required)
Open every PNG and critique it:
- Overflow, or anything cramped against the edges
- A single dominant hero, with a clear hierarchy
- Line breaks: no orphans, and the headline is at most 2–3 lines
- Copy is short, grade 5, and ≥24px body text
- Green covers ≤10% of the frame and is used only for "the answer"

Iterate until it would stop a thumb mid-scroll.
