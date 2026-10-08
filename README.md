# Shinkokai USA website

Bilingual (English and Japanese) website for Shinkokai USA, the US subsidiary of
Shinkoufukushikai (伸こう福祉会), a Japanese social welfare organization. Shinkoufukushikai
is the parent company, not a partner.

Shinkokai USA is an **advisory and consultation service**. It helps seniors and their
families navigate care, medical access, and life transitions between the United States and
Japan. It does not deliver medical care, place people in facilities, provide job placement,
or guarantee outcomes.

- **Domain:** shinkokaiusa.org (never the .com, which belongs to an unrelated organization)
- **Stack:** plain HTML, CSS, and JavaScript. No framework, build step, or libraries.
- **Hosting:** GitHub Pages, from `main`, root folder

## What's on the site

| Page | Content | Fee (USD) |
|---|---|---|
| `return-to-japan.html` | Return to Japan Advisory | $2,500 to $5,000 |
| `medical-tourism.html` | Medical Tourism Japan (10 days) | $5,500 to $15,000 |
| `trial-stay.html` | Senior Trial Stay Program (10 days) | $5,500 to $10,000 |
| `senior-living.html` | Senior Living in Japan | $1,500 to $4,000 |

`services.html` is the hub. It links the four programs and holds the additional services:
International Senior Concierge ($150/hr), Japan Caregiver Certification Program
($3,000 to $5,000), English Support for Foreign Residents in Japan ($150/hr), and
Webinars ($49 to $99 per session).

Other pages: `index.html`, `about.html`, `pricing.html`, `contact.html`, `404.html`.
Shared code lives in `css/style.css` and `js/main.js`.

## Project docs

- `CLAUDE.md`: standing rules (copy, pricing, structure). Read before any change.
- `PRODUCT.md` and `DESIGN.md`: audience, brand, and visual system.
- `REVIEW_NEEDED.md`: Japanese strings awaiting native-speaker review.
- `images/README.md`: icon and social image files still to be added.

## Before launch

- Replace `YOUR_FORM_ID` in the contact form's Formspree URL (`contact.html`).
- Add the pending images listed in `images/README.md`, and switch `og:image` to an
  absolute URL once the custom domain is connected.
- Replace the `placehold.co` photos with real images in `images/`.
- Swap in the final motto verse on `index.html` if the family chooses a different one
  (see the comment above the `site-motto` block).

## Custom domain

In the repo's **Settings > Pages**, set the custom domain to `shinkokaiusa.org` and enable
HTTPS. At the registrar, point `@` to GitHub Pages' four A records (185.199.108.153,
185.199.109.153, 185.199.110.153, 185.199.111.153) and add a `www` CNAME to
`solutiontrackconsulting.github.io`.

## Local preview

```bash
python -m http.server 8000
```

Then open `http://localhost:8000`.
