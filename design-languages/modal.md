# Design language: Modal

> Source: [modal.com](https://modal.com/), studied October 2026.
> Role in this repo: **diagram vocabulary.** Borrow its dot grids and system diagrams for "how it works" illustrations.

Modal sells serverless GPUs to AI teams. The site is a **dark developer aesthetic with a living green pulse**: technical diagrams drawn as calm grids of small shapes, and a hero made of thousands of glowing green dots.

## 1. Feeling
**Technical, friendly, alive, orderly.** It is a lab notebook drawn by a careful engineer.

## 2. Colour (measured from the live page)
| Role | Value |
|---|---|
| Background | `#10120F` / `#131412`, a near-black with a faint green tint |
| Panel | `#1A1C19`, plus `rgba(255,255,255,.05)` borders |
| Text | `#E3E5E1` primary, `#A8ABA6` secondary, `#6C6E6A` tertiary |
| Brand green | `#7FEE64` (logo, highlighted words, active cells) |
| Deep green | `#124F11` (active cell fills) |
| Diagram accents | orange-brown diamonds (`≈ #C0633F`) for **trainer**, green hexagons for **inference**, violet squares (`≈ #8A7BD8`) for **sandboxes**, and yellow `#FDFD76` and amber `#EDB966` for code syntax |

## 3. Typography
- **ABC Diatype** (a neutral grotesk) for headings and body. Headline: "The platform for **production AI**", with the key phrase in brand green rather than bold.
- **DM Mono** for code, CLI snippets (`modal endpoint create`), and diagram box labels (`TRAINER`, `INFERENCE`, `SANDBOXES`).
- Small, numbered feature columns: `1`, `2`, `3` in tiny grey above each item.

## 4. Diagram vocabulary (the part we borrow)
1. **Dot-matrix hero**: a shape (a star or a world map) made of hundreds of small dots or hexagons, glowing brighter toward the centre. Use it for "lots of things at once" (parallelism, scale).
2. **Box-and-cell system diagrams**: rounded dark boxes with a mono label in the top-left, filled with a grid of small shapes. Lit cells show work happening, and dim cells show idle capacity.
3. **Shape = role**: each system part has its own glyph (diamond, hexagon, square) and colour, so the diagram reads without a legend.
4. **Thin connector lines** with right angles and small arrowheads link boxes.
5. **Isometric line icons** (cube, stacked plates, hexagon with an inner cube), thin strokes with tiny coloured dots at the vertices.
6. **Code chips**: a small dark rounded rectangle containing one line of syntax-coloured mono.

## 5. Motion
Cells light up in waves, the dot-star slowly pulses and rotates, and code types itself into the chip. The motion is steady and continuous, like machinery humming rather than reacting.

## 6. How we use it
- Show "parallel" with a grid of cells that all light up **at the same time** (Jev) next to one that lights up **one by one** (LLM tokens). This is the clearest way to explain the core idea of Jev.
- Use a dot-matrix texture as a quiet background behind a big number.
- Use box-and-cell diagrams for pipelines (agent → Jev → tools).
- Recolour into the Oregon palette: cells use `--forest` fills with `--green` outlines; other roles use `--butter`, `--peach`, and `--slate`.
