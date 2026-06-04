---
layout: layouts/post.njk
title: Γιατί το Eleventy είναι το καλύτερο SSG το 2025
description: Μια βαθιά ματιά στο γιατί το Eleventy ξεχωρίζει από τα υπόλοιπα Static Site Generators και πώς μπορείς να το αξιοποιήσεις στο έπακρο.
date: 2025-10-15
author: Your Name
category: tech
tags:
  - posts
  - eleventy
  - jamstack
  - web
---

## Τι κάνει το Eleventy ξεχωριστό

Το Eleventy (ή 11ty) έχει κερδίσει σταθερά δημοτικότητα τα τελευταία χρόνια, και υπάρχει λόγος γι' αυτό. Σε αντίθεση με frameworks που επιβάλλουν αρχιτεκτονικές αποφάσεις, το Eleventy σε αφήνει ελεύθερο.

## Zero-JavaScript by Default

Ένα από τα πιο δυνατά χαρακτηριστικά: δεν στέλνει JavaScript στον browser εκτός αν το ζητήσεις εσύ. Αυτό σημαίνει:

- Γρηγορότατα sites
- Άριστο Core Web Vitals score
- Πλήρης έλεγχος του τελικού output

## TypeScript Support στην v3

Η έκδοση 3 έφερε native TypeScript support για το configuration file. Πλέον μπορείς να γράφεις το `eleventy.config.ts` με πλήρη type safety.

```typescript
import { EleventyConfig } from "@11ty/eleventy";

export default function(eleventyConfig: EleventyConfig) {
  eleventyConfig.addFilter("myFilter", (value: string) => {
    return value.toUpperCase();
  });
}
```

## Συμπέρασμα

Αν ψάχνεις για ένα SSG που σέβεται την ελευθερία σου ως developer, το Eleventy είναι η απάντηση.
