#!/usr/bin/env node
// Render an HTML animation to MP4, frame by frame, deterministically.
//
//   node skills/animated-video/render.mjs <scene.html> [--out file.mp4] [--fps 30]
//                                         [--duration seconds] [--still seconds]
//
// Author the animation with plain CSS @keyframes / transitions (or the Web
// Animations API). The renderer pauses every animation in the document and
// seeks it to each frame's timestamp, so the output never stutters regardless
// of how slow the screenshot is.
//
// Duration: --duration, else <meta name="duration" content="32">, else the
// end time of the longest animation in the page.
// --still <s> writes a single PNG at that timestamp instead (for checking frames).

import { chromium } from "playwright";
import { spawn } from "node:child_process";
import { resolve, dirname, basename, join } from "node:path";
import { pathToFileURL } from "node:url";
import { fitCheck, report } from "../lib/fit-check.mjs";

const args = process.argv.slice(2);
const opt = (name, fallback) => {
  const i = args.indexOf(name);
  if (i === -1) return fallback;
  const v = args[i + 1];
  args.splice(i, 2);
  return v;
};
const fps = Number(opt("--fps", "30"));
const still = opt("--still", null);
let duration = opt("--duration", null);
const file = resolve(args[0] ?? "");
const out = resolve(opt("--out", null) ?? join(dirname(file), basename(file, ".html") + (still ? `@${still}s.png` : ".mp4")));

const browser = await chromium.launch({ channel: "chrome" }).catch(() => chromium.launch());
const page = await browser.newPage({ viewport: { width: 1200, height: 1600 } });
await page.goto(pathToFileURL(file).href, { waitUntil: "networkidle" });
await page.evaluate(() => document.fonts.ready);

const canvas = page.locator(".canvas").first();
const box = await canvas.boundingBox();
const clip = { x: box.x, y: box.y, width: Math.round(box.width), height: Math.round(box.height) };

// Pause everything and expose a seek function.
const longest = await page.evaluate(() => {
  window.__seek = (ms) => {
    for (const a of document.getAnimations()) { a.pause(); a.currentTime = ms; }
  };
  window.__seek(0);
  // Infinite animations (orbits, spins) don't define a length; set <meta name="duration"> when using them.
  return Math.max(0, ...document.getAnimations().map((a) => a.effect.getComputedTiming().endTime).filter(Number.isFinite));
});
duration = Number(duration ?? (await page.evaluate(() => document.querySelector('meta[name="duration"]')?.content)) ?? longest / 1000);

if (still) {
  await page.evaluate((ms) => window.__seek(ms), Number(still) * 1000);
  await page.screenshot({ path: out, clip });
  // Fit check on this frame: nothing may sit outside the 1080×1440 borders.
  const ok = report(await page.evaluate(fitCheck), out);
  await browser.close();
  process.exit(ok ? 0 : 1);
}

// Fit check across the timeline (every 0.5s) before spending time on encoding.
const issues = new Map();
for (let t = 0; t <= duration; t += 0.5) {
  await page.evaluate((ms) => window.__seek(ms), t * 1000);
  for (const p of await page.evaluate(fitCheck)) if (p.kind !== "MARGIN") issues.set(p.kind + p.what, { ...p, what: `${p.what} @ ${t}s` });
}
if (issues.size) {
  report([...issues.values()], `${basename(file)} (content leaves the frame; fix before rendering, or pass --force)`);
  if (!args.includes("--force")) { await browser.close(); process.exit(1); }
}

const frames = Math.round(duration * fps);
const ff = spawn("ffmpeg", [
  "-y", "-loglevel", "error",
  "-f", "image2pipe", "-framerate", String(fps), "-i", "-",
  "-c:v", "libx264", "-pix_fmt", "yuv420p", "-crf", "16", "-preset", "slow",
  "-movflags", "+faststart", out,
], { stdio: ["pipe", "inherit", "inherit"] });

for (let f = 0; f < frames; f++) {
  await page.evaluate((ms) => window.__seek(ms), (f / fps) * 1000);
  const buf = await page.screenshot({ clip, type: "png" });
  if (!ff.stdin.write(buf)) await new Promise((r) => ff.stdin.once("drain", r));
  if (f % (fps * 5) === 0) process.stdout.write(`\r${basename(file)}  ${Math.round((f / frames) * 100)}%`);
}
ff.stdin.end();
await new Promise((r) => ff.on("close", r));
await browser.close();
console.log(`\r✓ ${out}  (${duration}s @ ${fps}fps, ${clip.width}x${clip.height})`);
