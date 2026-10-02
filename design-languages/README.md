# Design languages

**Build with [`house-style.md`](house-style.md)**: Monochrome Editorial (white, greyscale, a light grotesk, Lucide icons, lots of air). The guides below are the detailed studies it was distilled from.

Written style guides that agents follow, each studied from a real reference site (screenshots, scrolling the full page, and reading the computed CSS). Each guide covers colour, type, layout, motifs, motion, voice, and a do/don't list.

| Guide | Source | Use it for |
|---|---|---|
| ★ [Palantir](palantir.md) | fictivekin.com/work/palantir | **Primary influence.** Monochrome, white "whitepaper" sections, a light grotesk, show-don't-tell, operable UI |
| [Oregon Symphony](oregon-symphony.md) | fictivekin.com/work/oregon-symphony | The user's favourite. Calm, space, Neulis Neue, gesture lines (its dark and green look is retired) |
| [Modal](modal.md) | modal.com | Diagram vocabulary: dot grids, box-and-cell system diagrams |

## Animation languages
| Guide | Source | Use it for |
|---|---|---|
| ★ [Ordinary Folk](animations/ordinary-folk.md) | ordinaryfolk.co + their YouTube work | **The default for video.** Transform-don't-cut motion, gradient spheres, dots on paths, breathing holds. Blend it with Oregon Symphony's palette and type |

**House rules first.** Every guide here is subordinate to the house rules in [`AGENTS.md`](../AGENTS.md): less is more, with no metadata, numbering, dividers, slashes, or decorative marks on any graphic or video.

`kits/` holds CSS that implements a language as tokens and primitives. `kits/mono.css` implements the house style (palette, type, surfaces, Lucide sizing), and `kits/folk-motion.css` covers Ordinary Folk (easing, keyframes, monochrome spheres, grain).

To add a language, study the reference the same way, write `<name>.md` with the same sections, and (optionally) add a `kits/<name>.css`.
