---
title: TypeScript Tips που δεν διδάσκουν στα tutorials
description: Πρακτικές τεχνικές TypeScript που έμαθα την δύσκολη οδό — από real-world projects και production code που πρέπει να λειτουργεί.
date: 2025-08-05
author: Your Name
category: code
tags:
  - posts
  - typescript
  - javascript
  - code
---

## Branded Types για type safety

Το TypeScript δεν ξεχωρίζει `UserId` από `PostId` αν είναι και τα δύο `string`. Η λύση:

```typescript
type Brand<T, B> = T & { readonly _brand: B };
type UserId = Brand<string, 'UserId'>;
type PostId = Brand<string, 'PostId'>;

// Τώρα αυτό δίνει error:
function getUser(id: UserId) { ... }
getUser("abc" as PostId); // ❌ Error!
```

## Satisfies operator (TS 4.9+)

```typescript
const config = {
  port: 3000,
  host: "localhost",
} satisfies Record<string, string | number>;

// config.port είναι number, όχι string | number
```

## Template Literal Types

```typescript
type EventName = `on${Capitalize<string>}`;
// "onClick", "onSubmit", "onChange" ✓
// "click", "submit" ✗
```

Αυτές οι τεχνικές αλλάζουν τον τρόπο που γράφεις TypeScript — από defensive σε expressive.
