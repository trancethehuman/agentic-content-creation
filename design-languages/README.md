# Design languages

Written style guides that agents follow, each studied from a real reference site (screenshots, scrolling the full page, and reading the computed CSS). Each guide covers colour, type, layout, motifs, motion, voice, and a do/don't list.

| Guide | Source | Use it for |
|---|---|---|
| ★ [Oregon Symphony](oregon-symphony.md) | fictivekin.com/work/oregon-symphony | **The default house style.** Dark, calm, a light serif, one electric green |
| [Palantir](palantir.md) | fictivekin.com/work/palantir | HUD details: `↳` arrows, ⊕ crosshairs, corner ticks, numbered mono labels |
| [Modal](modal.md) | modal.com | Diagram vocabulary: dot grids, box-and-cell system diagrams |

`kits/` holds CSS that implements a language as tokens and primitives. `kits/symphony.css` covers Oregon Symphony, with the Palantir and Modal accents mixed in.

To add a language, study the reference the same way, write `<name>.md` with the same sections, and (optionally) add a `kits/<name>.css`.
