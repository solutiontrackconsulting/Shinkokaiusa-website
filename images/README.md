# images/

Every page's `<head>` already references the files below. Until they are added,
browsers fall back to no icon and link previews show no image.

| File | Size | Used for |
|---|---|---|
| `favicon.svg` | square SVG, simple mark that reads at 16px | Browser tab icon (`<link rel="icon">`) |
| `apple-touch-icon.png` | 180 x 180 PNG, no transparency | iOS home screen icon (`<link rel="apple-touch-icon">`) |
| `og-image.png` | 1200 x 630 PNG | Social link previews (`og:image`) |

Notes:
- Use the crimson and warm white palette from DESIGN.md.
- `og:image` is currently a relative path. Most social platforms require an absolute
  URL, so update the tag on every page to `https://shinkokaiusa.org/images/og-image.png`
  once the custom domain is connected.
- Site photos (replacing the placehold.co images) can also live in this folder. See
  the main README for recommended sizes.
