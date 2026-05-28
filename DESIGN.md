# Design

## Color Strategy

**Committed.** Deep crimson is the brand signature — load-bearing in CTAs, section labels, rules, and step numbers across every page. Warm neutral grounds (near-white, soft warm gray) provide breathing room. The crimson is meaningful, not decorative: it echoes Japanese visual culture (red as a symbol of vitality and care) while matching the Shinkoufukushikai brand identity.

Reference: Japanese welfare organization brand — warm neutrals with one committed structural accent.

## Color Palette

| Role | OKLCH | Approx hex | Usage |
|---|---|---|---|
| Crimson | `oklch(42% 0.18 29)` | #C0392B | CTAs, section labels, rules, step numbers |
| Crimson dark | `oklch(36% 0.17 29)` | #a52f22 | Hover states |
| Crimson tint | `oklch(96% 0.025 29)` | #f9eded | Success message bg |
| Warm white | `oklch(99% 0.004 80)` | #FAFAF8 | Primary surface |
| Warm gray | `oklch(96% 0.007 80)` | #F2F0ED | Alt section backgrounds |
| Border | `oklch(90% 0.007 80)` | #e8e4e0 | Dividers, form inputs |
| Text dark | `oklch(12% 0.008 80)` | #1A1A1A | Headlines, primary body |
| Text mid | `oklch(46% 0.006 80)` | #666 | Secondary body, nav links |
| Text muted | `oklch(60% 0.005 80)` | #888 | Japanese parallel text, captions |
| Footer bg | `oklch(14% 0.008 80)` | #1e1c1b | Footer background |

## Typography

**Headline:** Noto Serif JP (Google Fonts) — supports Latin and CJK scripts in one family. Serif warmth suits the care/family brand without clinical coldness. **Not** chosen by reflex — chosen specifically for bilingual CJK+Latin support and the warmth of the brand.

**Body:** Noto Sans JP (Google Fonts) — clean, bilingual-ready, readable at small sizes in both scripts.

**Scale (fluid):**
- Hero H1: `clamp(2.4rem, 4.8vw, 3.8rem)`
- H2: `clamp(1.5rem, 2.8vw, 2rem)`
- H3: `clamp(1.05rem, 2vw, 1.3rem)`
- Body: 1rem (16px base), line-height 1.75
- Japanese body: 0.92em, line-height 2
- Section labels: 0.68rem, tracked 0.14em, uppercase, crimson

**Weight:**
- English headlines: 700
- Japanese headlines: 500 (bold CJK glyphs read heavier visually)
- Body: 400
- Labels, nav: 500

## Layout

- Max content width: 1200px, centered, padding via `clamp(20px, 4vw, 48px)`
- Section vertical padding: `clamp(60px, 8vw, 96px)`
- Sections alternate warm white / warm gray
- Hero (home only): split grid — text left, photo right. Asymmetric, avoids centered-stack template.
- Services (home): numbered 3-column grid with thin separator lines from background technique — no card borders or shadows
- Service steps (services page): numbered vertical list with large step numbers as visual rhythm
- About sections: 2-column label + body grid

## Section Label Pattern

A thin crimson horizontal rule (1px, 36px wide), 10px below it the label text in crimson tracked uppercase. This references the Shinkoufukushikai structural device.

## Motion

Minimal and purposeful. Fade-up entrance on scroll (300ms, ease-out-quart). Nav background transition (200ms). Button hover (150ms). All suppressed with `prefers-reduced-motion: reduce`.

## Components

**Button — primary:** Crimson background, warm white text, no radius. `padding: 12px 28px`.  
**Button — outline:** Transparent bg, crimson border and text. Fills on hover.  
**Button — light:** White bg, crimson text. Used inside crimson CTA banners.  
**Form inputs:** 1px border, square corners, crimson border on focus. Full-width, label above.  
**Nav:** Transparent over hero (home only), white + border on scroll or on inner pages. Logo left, links right, CTA button rightmost. Hamburger at < 768px.
