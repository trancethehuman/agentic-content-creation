---
name: animated-video
description: Make short, calm, minimalist animated explainer videos (LinkedIn / Reels) by authoring CSS-animated HTML scenes and rendering them frame-by-frame to MP4.
---

# Animated video skill

Author a video as one HTML page that uses plain CSS `@keyframes`. The renderer pauses every animation and **seeks** it to each frame's timestamp, then pipes the screenshots to ffmpeg. Output is frame-perfect no matter how slow the machine is, and you can preview the page live in any browser.

## 1. Set up
- Read the brief (`output/<project>/brief.md`) and the design language (default `design-languages/oregon-symphony.md`, §6 Motion).
- Source: `output/<project>/videos/src/<slug>.html`. Link the kit and use `<div class="canvas video">` (1080×1440, 3:4).
- Optional: `<meta name="duration" content="34">`. Otherwise the duration is the end of the last animation.

## 2. Authoring rules
- Use only CSS animations (or the Web Animations API), with `animation-fill-mode: both`. **No** `setTimeout` or `requestAnimationFrame`, because the renderer cannot seek them.
- Give each scene an absolutely positioned layer with its own fade-in, hold, and fade-out timeline, driven by `animation-delay`.
- Draw strokes with `stroke-dasharray`/`stroke-dashoffset` keyframes.
- Calm pacing: entrances last 0.9–1.4s (`cubic-bezier(.22,1,.36,1)`), staggered 0.3s. **Hold ≥3s** (about 1s per 3 words + 2s). Exits fade over 0.7s.
- Use 4–6 scenes and 25–40s total, with one idea per scene. Headlines are 80–96px and sentences ≥34px.

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
