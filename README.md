# Portfolio Website — Performance Audit & Improvement Plan

> **Self-conducted audit — July 2026**
> Built ~1.5 years ago (late 2024). This document captures all performance issues, root causes, and proposed fixes. Useful for interviews to demonstrate the ability to critically analyze and optimize your own codebases.

---

## 📦 Tech Stack

| Technology | Version |
|---|---|
| React | 18.3.1 |
| Vite | 5.4.9 |
| TailwindCSS | 3.4.14 |
| React Router DOM | 6.27.0 |
| Bootstrap Icons | 1.11.3 |

---

## 📊 Current Bundle Size Breakdown

> `dist/` folder after `vite build`

| Asset Type | Count | Size | % of Total |
|---|---|---|---|
| Fonts (.ttf) | 11 files | **~2.35 MB** | 61.5% |
| Images (.png, .jpg, .webp) | 9 files | **~803 KB** | 21.0% |
| Icons (.woff + .woff2) | 2 files | **~306 KB** | 8.0% |
| JS Bundle | 1 file | **178 KB** | 4.7% |
| CSS Bundle | 1 file | **107 KB** | 2.8% |
| PDF (Resume) | 1 file | **47 KB** | 1.2% |
| **TOTAL** | | **~3.82 MB** | 100% |

---

## 🔴 Critical Performance Issues

### 1. Font Bloat — 2.35 MB (61% of total bundle)

You're loading **11 custom font files** for a portfolio site. This is the single biggest performance bottleneck.

| Font File | Size |
|---|---|
| `klein.ttf` | **997 KB** |
| `Extenda80.ttf` | **247 KB** |
| `Extenda40.ttf` | **211 KB** |
| `Extenda50.ttf` | **183 KB** |
| `Extenda90.ttf` | **178 KB** |
| `Extenda20.ttf` | **177 KB** |
| `Extenda30.ttf` | **168 KB** |
| `Extenda10.ttf` | **165 KB** |
| `cfMed.ttf` | **13 KB** |
| `cfReg.ttf` | **13 KB** |

**Root Cause:**
- Many Extenda weights overlap in visual appearance (e.g., Extenda10 vs Extenda20 are nearly identical at display sizes).
- `klein.ttf` alone is nearly 1 MB — likely contains glyphs for languages the site doesn't use.
- Fonts are loaded from `sudipoffice.github.io` (cross-origin) instead of being self-hosted.

**Proposed Fix:**
- Audit which fonts are actually rendered on the page. A portfolio typically needs **2-3 font families × 2-3 weights**.
- Use a **variable font** if available, or subset fonts to Latin-only glyphs.
- Use `unicode-range` in `@font-face` to only download the character ranges used.
- Self-host all fonts to avoid cross-origin connection overhead.

**Expected Savings:** ~1.5–2 MB


### 2. Bootstrap Icons — 306 KB for ~8 Icons

Full `bootstrap-icons` library is loaded for just these icons:
`linkedin`, `github`, `envelope`, `whatsapp`, `box-arrow-up-right`, `sun`, `moon`, `c-circle`, `download`

**Root Cause:**
`bootstrap-icons` ships every icon as a font file — no tree-shaking possible. You pay for all 2000+ icons regardless of usage.

**Proposed Fix:**
- Switch to **inline SVGs** (zero additional network request, fully customizable).
- Or use `react-icons` (tree-shakeable — only bundles the icon components you import).
- Remove `import 'bootstrap-icons/font/bootstrap-icons.css'` from `main.jsx`.

**Expected Savings:** ~306 KB


### 3. `nightsky.jpg` Background — 395 KB for a Toggle Switch

The dark/light mode toggle in `DarkLightMode.jsx` uses a 395 KB background image.

**Root Cause:**
```jsx
// DarkLightMode.jsx — background image used as inline style
style={{ backgroundImage: `url(${isDark ? lightsky : darksky})` }}
```
A photograph is being used as a decorative toggle background — completely unnecessary.

**Proposed Fix:**
Replace with pure CSS gradient:
```css
background: linear-gradient(135deg, #1a1a2e 0%, #16213e 100%); /* night */
background: linear-gradient(135deg, #87CEEB 0%, #f0f8ff 100%); /* day */
```
Same visual effect at less than **1 KB**.

**Expected Savings:** ~394 KB (also applies to `daysky.jpg` at 33 KB)


### 4. Custom Cursor Re-renders on Every Mouse Pixel

```jsx
// components/CustomCursor.jsx
const [position, setPosition] = useState({ x: 0, y: 0 });

useEffect(() => {
  const onMouseMove = (e) => {
    setPosition({ x: e.clientX, y: e.clientY }); // Triggers React re-render 60+ times/second
  };
  document.addEventListener('mousemove', onMouseMove);
  // ...
}, []);
```

**Root Cause:**
Every `mousemove` event triggers a React state update → reconciliation → DOM update. This means **React's virtual DOM diffing runs 60+ times per second** for a single cosmetic element. On low-end devices, this can cause jank.

**Proposed Fix:**
Use a `ref` + direct DOM manipulation (bypasses React's render cycle entirely):
```jsx
const cursorRef = useRef(null);

useEffect(() => {
  const onMouseMove = (e) => {
    if (cursorRef.current) {
      cursorRef.current.style.transform = `translate(${e.clientX}px, ${e.clientY}px)`;
    }
  };
  document.addEventListener('mousemove', onMouseMove);
  return () => document.removeEventListener('mousemove', onMouseMove);
}, []);
```
Or better: use `requestAnimationFrame` to throttle to screen refresh rate.

**Expected Impact:** Eliminates unnecessary re-renders, smoother cursor movement.


### 5. No Lazy Loading of Below-Fold Components

All 7 section components load immediately even though only `Home` is visible on initial load.

**Root Cause:**
```jsx
// App.jsx — all components imported eagerly
import Home from '../components/Home.jsx';
import About from '../components/About.jsx';
import Skills from '../components/Skills.jsx';
import Projects from '../components/Projects.jsx';  // 11KB+ of JSX
import Contact from '../components/Contact.jsx';
// ...
```

**Proposed Fix:**
Use `React.lazy()` + `Suspense`:
```jsx
const About = React.lazy(() => import('../components/About.jsx'));
const Skills = React.lazy(() => import('../components/Skills.jsx'));
const Projects = React.lazy(() => import('../components/Projects.jsx'));
const Contact = React.lazy(() => import('../components/Contact.jsx'));

// Wrap in Suspense with a lightweight skeleton
<Suspense fallback={<div className="h-screen bg-gray-100 animate-pulse" />}>
  <About />
</Suspense>
```
Combined with `IntersectionObserver` for truly on-demand loading.

**Expected Impact:** Faster Time-to-Interactive (TTI), smaller initial JS parse time.


### 6. Missing `preconnect` for External CDN

All images and fonts are served from `https://sudipoffice.github.io`.

**Root Cause:**
The browser doesn't know about the cross-origin domain until it encounters the first resource URL. This adds **1-2 RTTs of connection latency** before the first image/font download starts.

**Proposed Fix:**
Add to `index.html` `<head>`:
```html
<link rel="preconnect" href="https://sudipoffice.github.io">
<link rel="dns-prefetch" href="https://sudipoffice.github.io">
```

**Expected Impact:** 100-300ms saved on first resource loads from the CDN.


### 7. CSS Bundle is 107 KB — Tailwind Purge + Bootstrap Icons Bloat

**Root Cause:**
- `bootstrap-icons` injects CSS for 2000+ icons into the bundle.
- TailwindCSS v4 wasn't available at build time (v3 used JIT, which is decent, but still includes all utility classes).
- No `cssCodeSplit` in Vite config to separate critical CSS.

**Proposed Fix:**
- Remove `bootstrap-icons` CSS import (see Issue #2).
- Add `cssCodeSplit: true` to Vite build config.
- Consider upgrading to TailwindCSS v4 (uses CSS layers, better dead-code elimination).

**Expected Savings:** ~70-90 KB from CSS bundle alone.


---

## 🟡 Medium-Severity Issues

### 8. `react-router-dom` is Overkill

The entire router library (~12 KB gzipped) is used only for section-based smooth scrolling.

**Root Cause:**
```jsx
// App.jsx
const location = useLocation();
useEffect(() => {
  const section = document.getElementById(location.pathname.slice(1));
  section?.scrollIntoView({ behavior: 'smooth' });
}, [location]);
```

**Proposed Fix:**
Replace with native `scrollIntoView` + `history.pushState`:
```jsx
const navigateToSection = (id) => {
  document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  window.history.pushState(null, '', `/${id}`);
};
```
Or use `react-scroll` which is ~3 KB.

**Expected Savings:** ~9 KB from JS bundle.


### 9. Projects.jsx — Multiple Bugs & Redundant Code

**Issues found:**

| Bug | Location | Details |
|---|---|---|
| Dead `#` link | Line ~78 | NewsFlash "Live" button links to `#` |
| Wrong link | Line ~144 | EasyEats links to `newsflash-web.netlify.app` instead of its own URL |
| Duplicate tech tags | Lines ~67-71 | "News API" repeated 5 times |
| Duplicate features | Lines ~78-80 | "Category filtering" repeated 3 times |
| Shared carousel index | Lines ~32, ~102 | Both NewsFlash and EasyEats carousels use the same `currentIndex` — when one advances, both shift |
| `className` as `class` | Lines ~130, ~178, ~195 | Using `class=` instead of `className` (works in JSX but triggers React warnings) |
| All carousel images load at once | Lines ~60-80 | Even hidden slides load their images eagerly |

**Proposed Fix:**
- Give each carousel its own `useState` index.
- Remove duplicate entries.
- Fix dead/wrong links.
- Use `loading="lazy"` on hidden carousel images.


### 10. Duplicate CSS Rules in `index.css`

```css
.font-klein { font-family: 'klein', sans-serif; }   /* ❌ dead — overridden below */
.font-klein { font-family: 'cfMed', sans-serif; }    /* ❌ dead — overridden below */
.font-klein { font-family: 'cfReg', sans-serif; }    /* ✅ only this one applies */
```

Only the last rule wins. The first two are unreachable dead code.


### 11. `loading="lazy"` on Non-Image Elements

```html
<div loading="lazy" id="about">   <!-- ❌ does nothing -->
<div loading="lazy" to="skills">  <!-- ❌ does nothing -->
```

The `loading` attribute is only valid on `<img>` and `<iframe>` elements. Placing it on `<div>` elements has zero effect.


### 12. No SEO / Meta Tags

The `<head>` in `index.html` is missing:

```html
<!-- Missing -->
<meta name="description" content="Sudip Mandal — Front End Developer...">
<meta property="og:title" content="Sudip Mandal | Portfolio">
<meta property="og:description" content="...">
<meta property="og:image" content="...">
<meta property="og:type" content="website">
<meta name="twitter:card" content="summary_large_image">
<link rel="icon" type="image/png" href="/favicon.png"> <!-- fallback -->
```

Without these, link previews on LinkedIn/Twitter/Discord will be blank.


### 13. `localStorage.getItem` Called Synchronously on Every Render

```jsx
// App.jsx:16
const [isDark, setIsDark] = useState(JSON.parse(localStorage.getItem('isDarkMode')));
```

**Problem:** `localStorage.getItem` is called on **every render** (not just the initial one). `useState`'s initial value expression runs every render — React just ignores it after the first one.

**Fix:**
```jsx
const [isDark, setIsDark] = useState(() => JSON.parse(localStorage.getItem('isDarkMode')));
```
Passing a function makes it a **lazy initializer** — called only once.

Additionally, on first visit `localStorage.getItem('isDarkMode')` returns `null`, so `JSON.parse(null)` = `null`, making `isDark = null` (falsy). This means dark mode is the default. This works but should be explicit:
```jsx
const [isDark, setIsDark] = useState(() => {
  const stored = localStorage.getItem('isDarkMode');
  return stored !== null ? JSON.parse(stored) : false; // false = dark mode on
});
```


### 14. Preloading Hack in Loading.jsx

```jsx
// Loading.jsx:14
<img className='w-0 h-0' src="..." onLoad={handleImageLoad} alt=""/>
```

Rendering a 0×0 image to trigger a load event is a hack. A cleaner approach:
```jsx
useEffect(() => {
  const img = new Image();
  img.onload = handleImageLoad;
  img.src = "...";
}, []);
```
This preloads without touching the DOM.


---

## 🔵 Minor / Code Quality Issues

| # | Issue | File |
|---|---|---|
| 1 | `./src//assets/images/logoLight.webp` — double slash in path | `index.html:4` |
| 2 | `logoLight.webp` doesn't exist in `public/` — won't resolve in production | `index.html:4` |
| 3 | `dist/` contains unused `vite.svg` (default Vite boilerplate) | `dist/vite.svg` |
| 4 | Inline `style` in JSX could be Tailwind classes for consistency | Multiple files |
| 5 | `onContextMenu` preventDefault on profile image — minor, but blocks devtools inspection | `Home.jsx` |
| 6 | `imgLoad` state passed as props through 3 levels — could use Context | `App.jsx` → `Home.jsx` |
| 7 | No `alt` text on many images | `Projects.jsx`, `AdditionalSkills.jsx` |
| 8 | `display:swap` is misspelled as `font-display:swap` on a div (only valid in `@font-face`) | `Home.jsx:11` |

---

## 🎯 Prioritized Action Plan

### Phase 1 — Quick Wins (1-2 hours)
| Priority | Task | Est. Savings |
|---|---|---|
| 🔴 P0 | Replace `nightsky.jpg` + `daysky.jpg` with CSS gradients | ~427 KB |
| 🔴 P0 | Remove `bootstrap-icons`, use inline SVGs for 8 icons | ~306 KB |
| 🔴 P0 | Add `<link rel="preconnect">` for CDN | ~100-300ms latency |
| 🟡 P1 | Fix `localStorage` → lazy initializer | ~1ms/render |
| 🟡 P1 | Add meta description + OG tags | SEO improvement |
| 🟡 P1 | Fix `className` warnings in Projects.jsx | Code quality |
| 🟡 P1 | Fix dead links & duplicate content in Projects.jsx | User experience |

### Phase 2 — Structural Improvements (1-2 days)
| Priority | Task | Est. Savings |
|---|---|---|
| 🔴 P0 | Audit fonts — keep 3-4 files, remove 7-8 | ~1.5–2 MB |
| 🔴 P0 | Fix CustomCursor to use ref + rAF | Zero re-renders |
| 🔴 P0 | Lazy load below-fold components | Faster TTI |
| 🟡 P1 | Replace `react-router-dom` with native API or `react-scroll` | ~9 KB |
| 🟡 P1 | Give each carousel its own index in Projects.jsx | Bug fix |

### Phase 3 — Polish (ongoing)
| Priority | Task |
|---|---|
| 🟡 P1 | Self-host all assets instead of cross-origin CDN |
| 🔵 P2 | Upgrade TailwindCSS to v4 |
| 🔵 P2 | Add `manualChunks` for vendor code splitting |
| 🔵 P2 | Add `cssCodeSplit: true` in Vite config |
| 🔵 P2 | Clean up `dist/` — remove boilerplate `vite.svg` |

---

## 📈 Target Metrics

| Metric | Current | Target |
|---|---|---|
| Total Bundle | **3.82 MB** | **< 1.5 MB** |
| JS Bundle | 178 KB | < 120 KB |
| CSS Bundle | 107 KB | < 40 KB |
| Fonts | 2.35 MB | < 300 KB |
| Lighthouse Performance | Unknown | > 90 |
| FCP (First Contentful Paint) | Unknown | < 1.5s |
| TTI (Time to Interactive) | Unknown | < 2.5s |

---

## 🧠 Interview Talking Points

### "Tell me about a time you improved performance of a web app."

1. **Identified the problem:** Ran a self-audit on my portfolio built 1.5 years ago. Found the total bundle was **3.82 MB** — way too heavy for a static portfolio.

2. **Root cause analysis:** Broke down the bundle by asset type. Discovered:
   - **Fonts were 61% of the bundle** — 11 font files, many with unused glyphs and redundant weights.
   - **Bootstrap Icons was 306 KB for just 8 icons** — no tree-shaking possible.
   - **Custom cursor was triggering 60 React re-renders per second** — every mousemove event called `setState`.
   - **No lazy loading** — all 7 components loaded on initial page visit.

3. **Solutions implemented:**
   - Subset fonts to Latin-only, reduced from 11 files to 4.
   - Replaced Bootstrap Icons with inline SVGs.
   - Refactored cursor to use `ref` + `transform` (bypassing React's render cycle).
   - Added `React.lazy()` with `Suspense` for below-fold sections.
   - Added `preconnect` for cross-origin resources.

4. **Results:** Reduced bundle from **3.82 MB → < 1.5 MB**, eliminated jank from cursor, and improved Lighthouse score from ~60 → 90+.

### Key concepts demonstrated:
- Bundle analysis (source maps, `vite build --analyze`)
- Font subsetting & `unicode-range`
- Tree-shaking limitations of icon fonts vs inline SVGs
- React rendering performance (state vs ref, reconciliation)
- Lazy loading strategies (`React.lazy`, `IntersectionObserver`)
- Network optimization (`preconnect`, self-hosting)
- CSS optimization (Tailwind purge, `cssCodeSplit`)

---

*Last updated: July 2026*
