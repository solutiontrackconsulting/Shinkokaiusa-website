# Shinkokai USA website: standing context for Claude Code

Read this before every task. Also consult PRODUCT.md and DESIGN.md before any copy or visual work.

## What this site is
Shinkokai USA is a U.S. subsidiary of Shinkoufukushikai (伸こう福祉会), a Japanese social welfare organization. It helps seniors and their families navigate care, medical access, and life transitions between the United States and Japan.

## Non-negotiable copy rules
- **Advisory and consultation only.** Shinkokai USA does not deliver medical care, place people in facilities, provide job placement, or guarantee outcomes. Use language like guidance, options, research, referrals, and coordination with medical institutions and facilities in Japan. Never "facility matching," "placement," or "we provide care." Do not describe any relationship as a partnership unless it is confirmed.
- **Parent company, not partner.** Shinkoufukushikai is always the parent company (subsidiary relationship). Never call it a partner.
- **Bilingual pairs.** Every English paragraph has a paired Japanese paragraph marked `lang="ja"`. When English changes, update its Japanese pair to match. Flag any Japanese you are unsure about for native review instead of guessing.
- **No em dashes** in any visible copy, English or Japanese. Vary punctuation instead (periods, colons, commas, parentheses).
- **Domain is shinkokaiusa.org.** Never reference the .com (owned by an unrelated organization).
- Prices are in USD and must match the figures below exactly.

## Services and pricing
Flagship programs (each has its own page with a numbered step process):

| Page | Program | Fee |
|---|---|---|
| return-to-japan.html | Return to Japan Advisory | $2,500 to $5,000 |
| medical-tourism.html | Medical Tourism Japan (10 days) | $5,500 to $15,000 |
| trial-stay.html | Senior Trial Stay Program (10 days) | $5,500 to $10,000 |
| senior-living.html | Senior Living in Japan | $1,500 to $4,000 |

Additional services (cards on services.html, anchors in parentheses):
- International Senior Concierge, $150/hr (#concierge)
- Japan Caregiver Certification Program, $3,000 to $5,000 (#caregiver-certification)
- English Support for Foreign Residents in Japan, $150/hr (#english-support)
- Webinars, $49 to $99 per session (#webinars)

## Site structure
- Pages: index, about, services (hub), contact, pricing, plus the four program pages above.
- Nav: Home / About / Services / Programs (dropdown with the four programs) / Pricing / Contact.
- The footer "Pages" list must match the nav on every page.

## Technical conventions
- Plain HTML, CSS, and JS. No framework, no build step, no libraries.
- Shared files: css/style.css and js/main.js.
- Fonts: Noto Serif JP and Noto Sans JP. Palette: crimson and warm white (use the existing CSS variables).
- Animations: Intersection Observer plus CSS transitions only. Respect prefers-reduced-motion.
- Breakpoints in use: 960px, 768px (hamburger nav), 640px (pricing cards), 480px.
- Hosted on GitHub Pages. Use relative paths.
- The Psalm 23:4 motto block on index.html is a placeholder. Keep its comment and the site-motto__en / site-motto__ja / site-motto__ref classes intact so the verse can be swapped later.

## Before finishing any task
- Confirm every internal link and services.html anchor still resolves.
- Confirm nav and footer are identical across all pages.
- Confirm bilingual pairs are intact and no em dashes were introduced in visible copy.
- List what you changed, and anything that needs human or native-speaker review.
