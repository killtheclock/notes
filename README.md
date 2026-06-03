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
