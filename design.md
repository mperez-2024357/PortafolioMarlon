# Design System - Marlon Portfolio

## Philosophy

Minimal, immersive, premium. Inspired by creative developer portfolios like guillaumegouessan.com — bold typography, dark cinematic backgrounds, and interactive Three.js experiences that feel alive. Every section should breathe and reward curiosity.

---

## Color Palette

| Token              | Value     | Usage                              |
| ------------------- | --------- | ---------------------------------- |
| `brand-dark`        | `#07111F` | Primary dark backgrounds           |
| `space-graphite`    | `#0B1626` | Deep dark sections, hero bg        |
| `brand-primary`     | `#2563EB` | CTAs, links, interactive accents   |
| `brand-cyan`        | `#00D2FF` | Glow effects, particles, highlight |
| `brand-accent`      | `#F97316` | Warm accent, hover states          |
| `brand-surface`     | `#F8FAFC` | Light section backgrounds          |
| `brand-muted`       | `#EEF4FA` | Muted/alternate light sections     |
| `brand-ink`         | `#0F172A` | Primary text on light bg           |
| `brand-secondary`   | `#64748B` | Secondary text, captions           |
| `violet-deep`       | `#172554` | Deep accent for gradients          |

### Gradients

- **Hero**: `radial-gradient(circle at 78% 18%, rgba(37,99,235,0.32)...)` + dark linear
- **Glass**: `rgba(7,17,31,0.72)` with `blur(18px) saturate(150%)`
- **Accent shimmer**: `linear-gradient(100deg, currentColor, #00D2FF, #F97316, currentColor)`

---

## Typography

| Role      | Font Stack                                       | Weight  |
| --------- | ------------------------------------------------ | ------- |
| Display   | Outfit, Manrope, sans-serif                      | 700-900 |
| Body      | Manrope, Inter, Plus Jakarta Sans, sans-serif    | 300-600 |
| Mono/Code | Geist Variable, monospace                        | 400     |

### Scale

- Hero name: `clamp(3.25rem, 8vw, 7rem)`, weight 900, letter-spacing `-0.06em`
- Section title: display font, `-0.045em` tracking, underline gradient accent
- Section kicker: `0.78rem`, weight 800, uppercase, `0.14em` tracking
- Body: `1rem`, line-height `1.75`

---

## Spacing & Layout

- Container: centered, `1rem` padding (mobile), `2rem` (lg)
- Section padding: `py-24` standard
- Grid: `md:grid-cols-2` for hero, single-column cards
- Border radius: `8px` for cards/buttons, `999px` for pills

---

## Components

### Buttons

| Variant    | Bg                 | Border          | Hover                          |
| ---------- | ------------------ | --------------- | ------------------------------ |
| Primary    | `brand-primary`    | none            | darken + lift `-2px`           |
| Ghost      | transparent        | `white/24`      | orange glow + border change    |
| Social     | `white/8`          | `white/18`      | white bg, primary text, lift   |

### Cards

- `.surface-card`: white bg `0.92` opacity, subtle blue border, shadow, hover lift
- `.glass-panel`: dark glassmorphism, blur backdrop, thin white border
- `.cyber-card`: surface-card + left blue border, hover glows

### Section Styles

- `.section-dark`: dark gradient bg, white text
- `.section-light`: white bg `#F8FAFC`
- `.section-muted`: light blue `#EEF4FA`

---

## Animations

| Name            | Purpose                    | Duration | Easing               |
| --------------- | -------------------------- | -------- | -------------------- |
| `typeReveal`    | Fade-up with blur          | 780ms    | `cyber-fluid`        |
| `headlineLift`  | 3D perspective text entry  | 880ms    | `cyber-fluid`        |
| `typeFloat`     | Gentle vertical bob        | 5.8s     | `ease-in-out`        |
| `accentShimmer` | Gradient text sweep        | 4.8s     | `ease-in-out`        |
| `underlineGrow` | Section title underline    | 900ms    | `cyber-fluid`        |
| `glitch`        | Hover micro-shake          | 300ms    | spring               |
| `scanline`      | CRT-style overlay          | 6s       | linear               |

Easing: `cubic-bezier(0.25, 1, 0.5, 1)` (cyber-fluid) for everything interactive.

---

## Three.js Experiences

Three interactive WebGL scenes using `@react-three/fiber` + `@react-three/drei`:

### 1. Particle Morph Field (About hero)
Thousands of particles form organic shapes, morphing between configurations. Mouse interaction displaces particles creating a ripple effect. Dark background, cyan/blue palette.

### 2. Noise Sphere (About section)
Perlin-noise-deformed sphere with iridescent material. Slowly rotates and breathes. Reacts to scroll position, expanding and contracting.

### 3. Wave Grid (About section)
A grid of points connected by thin lines, animated as a sine wave field. Mouse proximity creates local disturbances. Gradient coloring from blue to cyan.

---

## Feature-Sliced Architecture

```
src/
  features/
    about/          <- NEW: immersive about page
      components/   <- Three.js scenes + UI
      pages/        <- AboutPage
    home/
    projects/
    experience/
    contact/
    education/
    portfolio/
    skills/
    Stack/
  shared/
    api/
    components/
    utils/
  app/
    router/
    layouts/
  styles/
```

---

## Accessibility

- `prefers-reduced-motion: reduce` disables all animations
- Semantic HTML: sections, headings, labels
- ARIA labels on icon-only links
- Focus-visible styles on interactive elements
