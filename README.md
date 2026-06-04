# Eleventy Blog — Dark Mode Edition

Stunning Eleventy v3 blog με TypeScript, Tailwind CSS v3 και εντυπωσιακό dark mode UI.

## Stack

- **[Eleventy v3](https://www.11ty.dev/)** — Static Site Generator με TypeScript config
- **[Tailwind CSS v3](https://tailwindcss.com/)** — Utility-first CSS
- **[TypeScript](https://www.typescriptlang.org/)** — Type-safe JavaScript
- **Nunjucks** — Templating engine

## Χαρακτηριστικά

- 🌙 Εντυπωσιακό dark mode με aurora palette (blue/violet/teal)
- ✨ Glassmorphism cards με hover glow effects
- 📖 Reading progress bar σε post σελίδες
- 📑 Auto-generated Table of Contents
- 🏷️ Tag system με filtering
- 🔍 Filter posts by category/tag
- 📡 RSS feed
- 🎭 Cursor glow + scroll animations
- 📱 Fully responsive

## Δομή

```
src/
├── _data/
│   └── site.json          ← Global site config
├── _includes/
│   └── layouts/
│       ├── base.njk       ← Navbar + Footer wrapper
│       ├── home.njk       ← Homepage layout
│       └── post.njk       ← Post layout με TOC
├── assets/
│   └── css/
│       └── main.css       ← Tailwind + custom styles
├── ts/
│   └── main.ts            ← TypeScript (animations, cursor, etc)
├── posts/                 ← Τα άρθρα σου (Markdown)
├── index.njk              ← Homepage
├── blog.njk               ← Blog listing
├── tags.njk               ← Tags index
├── tag.njk                ← Individual tag pages
├── about.njk              ← About page
└── feed.njk               ← RSS feed
```

## Εγκατάσταση

```bash
# Clone / copy τα αρχεία
npm install

# Dev server
npm start

# Production build
npm run build
```

## Γράψε νέο άρθρο

Δημιούργησε `src/posts/my-post.md`:

```yaml
---
layout: layouts/post.njk
title: Τίτλος άρθρου
description: Σύντομη περιγραφή
date: 2025-10-01
author: Your Name
category: tech        # tech | design | code | thought | life
tags:
  - posts
  - typescript
  - web
---

## Περιεχόμενο

Γράψε εδώ σε Markdown...
```

## Κατηγορίες & χρώματα

| category  | Χρώμα  |
|-----------|--------|
| tech      | Blue   |
| design    | Violet |
| thought   | Teal   |
| life      | Rose   |
| code      | Amber  |

## Tailwind Typography plugin

```bash
npm install @tailwindcss/typography
```

(Ήδη στο config — χρειάζεται μόνο install)

---

## 🍴 Οδηγίες για Fork

Αν κάνεις fork αυτό το repo για να φτιάξεις το δικό σου blog, ακολούθησε αυτά τα βήματα:

### 1. Ενημέρωσε τα στοιχεία του site

Άνοιξε το `src/_data/site.json` και άλλαξε τα στοιχεία σου:

```json
{
  "title": "Το Blog Μου",
  "description": "Η περιγραφή του blog μου",
  "url": "https://USERNAME.github.io/REPO-NAME",
  "author": "Το Όνομά Μου",
  "lang": "el"
}
```

### 2. Άλλαξε το path prefix

Όλα τα internal links χρησιμοποιούν το `/notes/` prefix. Αντικατέστησέ το με το όνομα του δικού σου repo:

```bash
# Αντικατέστησε το YOUR-REPO με το όνομα του repo σου
find src -name "*.njk" -exec sed -i 's|/notes/|/YOUR-REPO/|g' {} \;
```

Αν το site θα τρέχει σε root domain (π.χ. `username.github.io` χωρίς subpath):

```bash
find src -name "*.njk" -exec sed -i 's|/notes/|/|g' {} \;
```

### 3. Σβήσε τα sample posts

```bash
rm src/posts/eleventy-2025.md
rm src/posts/dark-mode-design.md
rm src/posts/typescript-tips.md
```

### 4. Ενεργοποίησε το GitHub Pages

Στο GitHub repo σου:

1. **Settings → Actions → General → Workflow permissions** → επέλεξε **Read and write permissions**
2. Κάνε ένα push — το GitHub Actions θα τρέξει αυτόματα
3. **Settings → Pages → Source** → επέλεξε branch **`gh-pages`**

### 5. (Προαιρετικό) Πρόσθεσε Comments με Giscus

Το [Giscus](https://giscus.app) χρησιμοποιεί τα GitHub Discussions για comments — δωρεάν και χωρίς tracking.

1. Ενεργοποίησε τα **Discussions** στο repo σου (Settings → Features → Discussions)
2. Πήγαινε στο **https://giscus.app**, βάλε το repo σου και πάρε τα IDs
3. Πρόσθεσε το script στο `src/_includes/layouts/post.njk` πριν το `</article>`:

```html
<div class="max-w-5xl mx-auto px-6 pb-16">
  <div class="glass-card p-8">
    <p class="font-mono text-xs text-aurora-blue tracking-widest mb-6">— ΣΧΟΛΙΑ</p>
    <script src="https://giscus.app/client.js"
      data-repo="USERNAME/REPO-NAME"
      data-repo-id="ΤΟ_REPO_ID"
      data-category="Announcements"
      data-category-id="ΤΟ_CATEGORY_ID"
      data-mapping="pathname"
      data-strict="0"
      data-reactions-enabled="1"
      data-emit-metadata="0"
      data-input-position="top"
      data-theme="dark_dimmed"
      data-lang="el"
      crossorigin="anonymous"
      async>
    </script>
  </div>
</div>
```

### Σύνοψη αλλαγών για fork

| Αρχείο | Τι αλλάζει |
|--------|-----------|
| `src/_data/site.json` | Τίτλος, περιγραφή, URL, author |
| `src/_includes/layouts/base.njk` | `/notes/` → `/YOUR-REPO/` |
| `src/_includes/layouts/home.njk` | `/notes/` → `/YOUR-REPO/` |
| `src/_includes/layouts/post.njk` | `/notes/` → `/YOUR-REPO/` + Giscus script |
| `src/posts/*.md` | Σβήσε τα samples, γράψε τα δικά σου |
| `.github/workflows/deploy.yml` | Δεν χρειάζεται αλλαγή |
