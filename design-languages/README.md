# Design languages

Written style guides that agents follow, each studied from a real reference site (screenshots, scrolling the full page, and reading the computed CSS). Each guide covers colour, type, layout, motifs, motion, voice, and a do/don't list.

| Guide | Source | Use it for |
|---|---|---|
| ★ [Oregon Symphony](oregon-symphony.md) | fictivekin.com/work/oregon-symphony | **The default house style.** Dark, calm, a light serif, one electric green |
| [Palantir](palantir.md) | fictivekin.com/work/palantir | Austere "show, don't tell" restraint (its HUD marks are banned by the house rules) |
| [Modal](modal.md) | modal.com | Diagram vocabulary: dot grids, box-and-cell system diagrams |

## Animation languages
| Guide | Source | Use it for |
|---|---|---|
| ★ [Ordinary Folk](animations/ordinary-folk.md) | ordinaryfolk.co + their YouTube work | **The default for video.** Transform-don't-cut motion, gradient spheres, dots on paths, breathing holds. Blend it with Oregon Symphony's palette and type |

**House rules first.** Every guide here is subordinate to the house rules in [`AGENTS.md`](../AGENTS.md): less is more, with no metadata, numbering, dividers, slashes, or decorative marks on any graphic or video.

`kits/` holds CSS that implements a language as tokens and primitives. `kits/symphony.css` covers Oregon Symphony (palette, type, surfaces), and `kits/folk-motion.css` covers Ordinary Folk (easing, keyframes, gradient spheres, aura, grain).

To add a language, study the reference the same way, write `<name>.md` with the same sections, and (optionally) add a `kits/<name>.css`.
