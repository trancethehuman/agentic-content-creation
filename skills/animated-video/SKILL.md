---
name: animated-video
description: Make short, calm, minimalist animated explainer videos (LinkedIn / Reels) by authoring CSS-animated HTML scenes and rendering them frame-by-frame to MP4.
---

# Animated video skill

Author a video as one HTML page that uses plain CSS `@keyframes`. The renderer pauses every animation and **seeks** it to each frame's timestamp, then pipes the screenshots to ffmpeg. Output is frame-perfect no matter how slow the machine is, and you can preview the page live in any browser.

**Formats:** authored as **HTML** (the editable source), exported as **MP4** (the file you post).

**Follow the House rules in `AGENTS.md`:** less is more, with no metadata, numbering ("1 of 5", scene counters), progress lines, dividers, slashes, or decorative marks on screen.

## 1. Set up
- Read the brief (`output/<project>/brief.md`), the **animation** language (default `design-languages/animations/ordinary-folk.md`), and the visual language it borrows from (default `design-languages/oregon-symphony.md`).
- Source: `output/<project>/videos/src/<slug>.html`. Link **both kits** (`symphony.css` for palette and type, `folk-motion.css` for motion) and use `<div class="canvas video">` (1080×1440, 3:4). End the canvas with `<div class="grain"></div>`.
- Optional: `<meta name="duration" content="34">`. Otherwise the duration is the end of the last finite animation. **Required** if you use infinite animations (orbits, spins).

## 2. Authoring rules
- Use only CSS animations (or the Web Animations API), with `animation-fill-mode: both`. **No** `setTimeout` or `requestAnimationFrame`, because the renderer cannot seek them.
- Give each scene an absolutely positioned layer with its own fade-in, hold, and fade-out timeline, driven by `animation-delay`.
- Draw strokes with `stroke-dasharray`/`stroke-dashoffset` keyframes.
- **Transform, don't cut**: each scene grows out of the previous scene's shape (see `ordinary-folk.md` §5).
- Calm pacing: transforms take 1.0–1.6s, then the headline fades in (0.8s), then **hold ≥3.5s** with breathing motion (about 1s per 3 words + 2s), then the text fades out while the next transform starts.
- Use 4–6 scenes and 28–40s total, with one idea per scene. Use one headline (84–96px) per scene and at most one short sentence.

## 3. Check frames, then render
```bash
# single frame at t = 7.5s (do this for every scene's hold and a transition or two)
node skills/animated-video/render.mjs output/<project>/videos/src/<slug>.html --still 7.5 --out output/<project>/videos/stills/<slug>@7.5.png

# full video (30fps H.264, yuv420p, faststart; plays everywhere)
node skills/animated-video/render.mjs output/<project>/videos/src/<slug>.html --out output/<project>/videos/<slug>.mp4
ffprobe -v error -show_entries stream=width,height:format=duration output/<project>/videos/<slug>.mp4
```

## 4. Review loop (required)
Look at the stills. Check that the previous scene is fully gone before the next one appears, that nothing goes off-canvas, that every hold is readable on a phone, and that the motion stays calm (no bounces, spins, or glows).
