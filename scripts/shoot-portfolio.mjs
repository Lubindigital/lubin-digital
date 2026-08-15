/**
 * Re-capture every portfolio thumbnail from the live client sites.
 *
 *   node scripts/shoot-portfolio.mjs            # all sites
 *   node scripts/shoot-portfolio.mjs reformnv   # just one, by image slug
 *
 * Reads the URLs straight out of src/data/portfolio.ts, so adding a client
 * there is enough — this script picks it up with no edit. Entries without a
 * `url` are skipped on purpose: the featured Tahoe Teas card uses a product
 * photo, not a screenshot of a site.
 *
 * Captures at 1440x900, which is exactly the 16/10 the cards render at, so the
 * shot fills the card with no crop.
 *
 * Why the hero-copy assertion exists: reformnv.org fades its hero in after
 * load. A shot taken too early is a valid PNG of an empty blue rectangle, and
 * that shipped unnoticed for months. A screenshot that "worked" is not the
 * same as a screenshot with the page in it, so this fails loudly instead.
 *
 * Why the filenames carry a content hash (reformnv.4f3527c2.png): the Next
 * image optimizer caches by source URL, and on Vercel that cache outlives a
 * deployment. Same filename with new bytes therefore keeps serving the OLD
 * card — which is exactly how a stale ReForm thumbnail survived unnoticed. A
 * hashed name changes whenever the pixels do, so a refresh shows up at once.
 * (A ?v= query would do the same job but Next rejects query strings on local
 * images unless every exact value is listed in images.localPatterns, which
 * rotating hashes cannot satisfy.)
 *
 * This script rewrites the filenames in portfolio.ts and deletes the
 * superseded files — do not hand-edit either.
 *
 * Puppeteer resolves from ~/node_modules (shared across Westan's site
 * projects); it is deliberately not a dependency of this app.
 */
import { createRequire } from "module";
import { readFileSync, writeFileSync, renameSync, readdirSync, unlinkSync } from "fs";
import { createHash } from "crypto";
import { fileURLToPath } from "url";
import { dirname, join } from "path";

const require = createRequire("/Users/westanlubin/");
let puppeteer;
try {
  puppeteer = require("puppeteer");
} catch {
  console.error("puppeteer not found. Install it once with: npm i -g puppeteer");
  process.exit(1);
}

const root = join(dirname(fileURLToPath(import.meta.url)), "..");
const outDir = join(root, "public", "portfolio");

/* Pull { image, url } out of the portfolio data. Regex rather than a TS
   import so this stays a zero-build plain node script. */
const dataPath = join(root, "src", "data", "portfolio.ts");
const source = readFileSync(dataPath, "utf8");
const sites = [...source.matchAll(/\{[^{}]*?\}/gs)]
  .map((m) => m[0])
  .map((block) => ({
    image: block.match(/image:\s*"\/portfolio\/([^"]+)"/)?.[1],
    url: block.match(/\burl:\s*"([^"]+)"/)?.[1],
  }))
  .filter((s) => s.image && s.url)
  // "reformnv.4f3527c2.png" -> base "reformnv". Also tolerates an unhashed
  // name and any stray query string left by an earlier scheme.
  .map((s) => ({
    ...s,
    base: s.image
      .replace(/\?.*$/, "")
      .replace(/(\.[a-f0-9]{8})?\.(png|jpg)$/i, ""),
  }));

const only = process.argv[2];
const targets = only ? sites.filter((s) => s.base === only) : sites;

if (!targets.length) {
  console.error(only ? `No portfolio entry matching "${only}"` : "No entries with a url found");
  process.exit(1);
}

let failures = 0;

for (const site of targets) {
  // Fresh browser per site: a reused one warms the HTTP cache and can serve a
  // stale render of the next site.
  const browser = await puppeteer.launch({ headless: "new" });
  const page = await browser.newPage();
  await page.setViewport({ width: 1440, height: 900, deviceScaleFactor: 1 });

  try {
    await page.goto(site.url, { waitUntil: "networkidle2", timeout: 60000 });

    // Nudge scroll-triggered hero animations, then return to the very top.
    await page.evaluate(async () => {
      const delay = (ms) => new Promise((r) => setTimeout(r, ms));
      window.scrollTo(0, 600);
      await delay(600);
      window.scrollTo(0, 0);
      await delay(600);
    });
    await new Promise((r) => setTimeout(r, 5000));

    // The guard: is there actually visible hero copy in the viewport?
    const hero = await page.evaluate(() => {
      for (const el of document.querySelectorAll("h1, h2, [class*='hero'] p")) {
        const text = (el.textContent || "").trim();
        if (text.length < 8) continue;
        const r = el.getBoundingClientRect();
        const cs = getComputedStyle(el);
        const visible =
          r.top < 900 && r.bottom > 0 && r.width > 0 &&
          cs.visibility !== "hidden" && parseFloat(cs.opacity) > 0.1;
        if (visible) return text.slice(0, 70);
      }
      return null;
    });

    if (!hero) {
      failures++;
      console.error(`✗ ${site.image}  NO VISIBLE HERO COPY — not saved. Raise the settle delay and retry.`);
      await browser.close();
      continue;
    }

    // Shoot to a temp name, hash the bytes, then move it into its final
    // content-addressed filename.
    const tmp = join(outDir, `.${site.base}.tmp.png`);
    await page.screenshot({ path: tmp, fullPage: false });
    const hash = createHash("md5").update(readFileSync(tmp)).digest("hex").slice(0, 8);
    site.next = `${site.base}.${hash}.png`;
    renameSync(tmp, join(outDir, site.next));

    // Drop any superseded generation of this thumbnail.
    for (const f of readdirSync(outDir)) {
      const supersedes = new RegExp(`^${site.base}(\\.[a-f0-9]{8})?\\.(png|jpg)$`);
      if (supersedes.test(f) && f !== site.next) unlinkSync(join(outDir, f));
    }

    const changed = site.next !== site.image;
    console.log(`✓ ${site.next.padEnd(32)} ${changed ? "CHANGED" : "same   "}  hero: "${hero}"`);
  } catch (e) {
    failures++;
    console.error(`✗ ${site.image}  ${e.message.slice(0, 100)}`);
  } finally {
    await browser.close();
  }
}

/* Point portfolio.ts at the new content-addressed filenames, so the optimizer
   cache key changes exactly when the pixels do. */
let updated = source;
let rewrites = 0;
for (const site of targets) {
  if (!site.next || site.next === site.image) continue;
  updated = updated.replace(
    `image: "/portfolio/${site.image}"`,
    `image: "/portfolio/${site.next}"`,
  );
  rewrites++;
}
if (updated !== source) {
  writeFileSync(dataPath, updated);
  console.log(`\nRepointed ${rewrites} image path(s) in src/data/portfolio.ts`);
}

/* Renaming a thumbnail 404s anything that hardcoded the old path. Hero.tsx did
   exactly that once. Anything outside portfolio.ts should read the path from
   the data instead of spelling it out. */
const srcDir = join(root, "src");
const walk = (dir) =>
  readdirSync(dir, { withFileTypes: true }).flatMap((e) =>
    e.isDirectory() ? walk(join(dir, e.name)) : [join(dir, e.name)],
  );
const strays = [];
for (const file of walk(srcDir)) {
  if (file === dataPath || !/\.(ts|tsx)$/.test(file)) continue;
  const text = readFileSync(file, "utf8");
  for (const site of targets) {
    if (text.includes(`/portfolio/${site.base}.png`)) {
      strays.push(`${file.replace(root + "/", "")} hardcodes /portfolio/${site.base}.png`);
    }
  }
}
if (strays.length) {
  console.error("\nBroken references — these point at names that no longer exist:");
  for (const s of strays) console.error(`  ${s}`);
  console.error("Read the path from portfolioItems instead.");
  process.exit(1);
}

if (failures) {
  console.error(`\n${failures} site(s) failed. Existing thumbnails left untouched.`);
  process.exit(1);
}
console.log(`${targets.length} thumbnail(s) refreshed in public/portfolio/`);
