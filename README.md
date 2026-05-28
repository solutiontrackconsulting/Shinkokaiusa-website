# Shinkokai USA — Website

Bilingual (English + Japanese) marketing website for Shinkokai USA, a senior care return-to-Japan coordination service.

**Domain:** shinkokaiusa.org  
**Stack:** Plain HTML, CSS, JavaScript — no build step required  
**Deploy target:** GitHub Pages

---

## File Structure

```
/
├── index.html          Home
├── about.html          About Us
├── services.html       Our Services
├── contact.html        Contact / Schedule a Consultation
├── css/
│   └── style.css       Shared stylesheet
├── js/
│   └── main.js         Nav, scroll reveal, form handling
├── PRODUCT.md          Strategic brand context (for impeccable skill)
├── DESIGN.md           Visual system documentation
└── README.md
```

---

## Deploying to GitHub Pages

### 1. Create a GitHub repository

1. Go to [github.com](https://github.com) and create a new repository named `shinkokaiusa-website` (or any name you prefer).
2. Set it to **Public** (required for free GitHub Pages).

### 2. Push the site files

```bash
git init
git add .
git commit -m "Initial site build"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/shinkokaiusa-website.git
git push -u origin main
```

### 3. Enable GitHub Pages

1. In the repository on GitHub, go to **Settings > Pages**.
2. Under **Source**, select **Deploy from a branch**.
3. Set branch to `main`, folder to `/ (root)`.
4. Click **Save**.

GitHub will publish the site at `https://YOUR-USERNAME.github.io/shinkokaiusa-website/`.

### 4. Add a custom domain (shinkokaiusa.org)

1. In **Settings > Pages > Custom domain**, enter `shinkokaiusa.org` and click Save.
2. GitHub will create a `CNAME` file in your repository automatically. Do not delete it.

---

## Connecting Namecheap DNS to GitHub Pages

Log into your Namecheap account and navigate to **Domain List > Manage > Advanced DNS** for `shinkokaiusa.org`.

### Remove any existing A records for `@`, then add these four:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| A Record | @ | 185.199.108.153 | Automatic |
| A Record | @ | 185.199.109.153 | Automatic |
| A Record | @ | 185.199.110.153 | Automatic |
| A Record | @ | 185.199.111.153 | Automatic |

### Add a CNAME record for www:

| Type | Host | Value | TTL |
|------|------|-------|-----|
| CNAME Record | www | YOUR-USERNAME.github.io | Automatic |

DNS propagation typically takes 15–60 minutes. Once propagated, GitHub Pages will automatically provision an SSL certificate via Let's Encrypt.

### Verify HTTPS

After propagation, return to **Settings > Pages** and check **Enforce HTTPS** to ensure all traffic is redirected to the secure version.

---

## Swapping in Real Photos

All images currently use `https://placehold.co/` placeholder URLs. To replace them:

1. Add your photo files to an `images/` directory in the project root.
2. Find each `<img src="https://placehold.co/...">` tag in the HTML files.
3. Replace the `src` with the relative path, e.g. `src="images/hero-family.jpg"`.
4. Update the `alt` attribute with a description of the actual photo.

Recommended image sizes:
- Hero (index.html): 900×700px minimum
- About section image: 800×380px minimum
- Services intro image: 600×400px minimum

---

## Adding Calendly Scheduling

When ready, replace the placeholder note in `contact.html` with the Calendly embed widget:

```html
<!-- Replace the .contact-info__note div with: -->
<div class="calendly-inline-widget" data-url="https://calendly.com/YOUR-LINK" style="min-width:280px;height:400px;"></div>
<script type="text/javascript" src="https://assets.calendly.com/assets/external/widget.js" async></script>
```

---

## Local Development

No build step required. Open any HTML file directly in a browser, or run a simple local server:

```bash
# Python 3
python -m http.server 8000

# Node.js (npx)
npx serve .
```

Then visit `http://localhost:8000`.
