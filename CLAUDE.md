# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev        # Start dev server with HMR at localhost:5173
npm run build      # Production build → dist/
npm run preview    # Serve the dist/ build locally
npm run lint       # Run ESLint
npm run deploy     # Build + publish to GitHub Pages via gh-pages
```

## Architecture

This is a single-page portfolio site built with React 19 + Vite. All meaningful code lives in one file:

**`src/RheshaVinodPortfolio.jsx`** — the entire portfolio. It contains:
- A top-level `data` object (lines 3–117) that holds all portfolio content: bio, education, experience, projects, skills, publications, honors, and contact links. **This is the only place content lives** — all sections render directly from it.
- Two custom hooks: `useTypewriter` (animates the hero tagline character-by-character) and `useInView` (wraps `IntersectionObserver` for scroll-triggered fade-ins).
- A `FadeIn` wrapper component that uses `useInView` to animate children on scroll.
- Section components rendered in order: `Nav`, `Hero`, `Experience`, `Projects`, `Skills`, `Publications`, `Contact`.
- A `globalStyles` string (injected via `useEffect` into `<head>`) that imports Google Fonts and defines all keyframe animations (`blink`, `pulse`, `gridShift`). There is no external CSS framework — all styling is inline.

**`src/main.jsx`** — mounts `<Portfolio />` (the default export of `RheshaVinodPortfolio.jsx`) into `#root`. `App.jsx` is the default Vite scaffold and is unused.

**Scroll spy**: The root `Portfolio` component tracks which section is visible using `IntersectionObserver` and passes `activeSection` down to `Nav` for highlighting the active link. Section refs are stored in a `sectionRefs` object keyed by lowercase section name.

## Deployment

The site deploys to GitHub Pages via `npm run deploy`, which runs `gh-pages -d dist`. The Vite config sets `base: '/'`.
