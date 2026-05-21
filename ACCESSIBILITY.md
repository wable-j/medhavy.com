# Medhavy Accessibility Standards

> **Version:** 1.0  
> **Last updated:** 2026-05-21  
> **Applies to:** All pages under medhavy.com

---

## 1. Legal Basis

This site must comply with web accessibility requirements under:

| Jurisdiction | Law / Standard | Scope |
|---|---|---|
| **United States** | ADA Title III | Websites of public accommodations (DOJ enforcement actions) |
| **European Union** | EN 301 549 / Web Accessibility Directive | Legally binding for public sector; increasingly applied commercially |
| **United Kingdom** | Equality Act 2010 | All service providers including digital |

The **practical compliance threshold** is **WCAG 2.1 Level AA**.

---

## 2. WCAG 2.1 AA — Contrast Requirements

| Context | Minimum ratio | Definition |
|---|---|---|
| **Body text** (< 18px regular, < 14px bold) | **4.5 : 1** | Text against its immediate background |
| **Large text** (≥ 18px regular or ≥ 14px bold) | **3 : 1** | Headings, large labels |
| **UI components & graphical objects** | **3 : 1** | Borders, icons, form controls that convey meaning |
| **Decorative / aria-hidden elements** | No requirement | Elements hidden from assistive technology |

---

## 3. Medhavy Guardian Palette — Contrast Matrix

### 3.1 Palette Definition

All colors are defined in three synchronized files:
- `app/globals.css` (CSS custom properties `--bb-1` through `--bb-8`)
- `lib/theme.ts` (TypeScript source of truth)
- `public/theme.json` (machine-readable for external generators)

| Var | Hex | Role |
|---|---|---|
| `bb1` | `#121212` | Iron Black — primary text |
| `bb2` | `#1F3D1A` | Deep Forest — primary accent |
| `bb3` | `#8C3422` | Brick — danger / emphasis |
| `bb4` | `#C8860E` | Warm Ochre — highlight / callout |
| `bb5` | `#5C5A4E` | Warm Taupe — secondary accent |
| `bb6` | `#8C8878` | Warm Stone — muted accent |
| `bb7` | `#999387` | Warm Pebble — borders |
| `bb8` | `#FFFFFF` | White — page background |

### 3.2 Contrast Ratios on Light Background (`#FFFFFF`)

| Color | Hex | Ratio vs `#FFFFFF` | WCAG Level | Safe for |
|---|---|---|---|---|
| `bb1` Iron Black | `#121212` | **18.0 : 1** | AAA | All text |
| `bb2` Deep Forest | `#1F3D1A` | **12.6 : 1** | AAA | All text |
| `bb3` Brick | `#8C3422` | **8.0 : 1** | AAA | All text |
| `bb4` Warm Ochre | `#C8860E` | **3.1 : 1** | AA large | Large text, UI components only |
| `bb5` Warm Taupe | `#5C5A4E` | **7.0 : 1** | AAA | All text |
| `bb6` Warm Stone | `#8C8878` | **3.7 : 1** | AA large | Large text, UI components only |
| `bb7` Warm Pebble | `#999387` | **3.05 : 1** | AA large | Borders, large text only |

### 3.3 Contrast Ratios on Dark Background (`#121212`)

| Color | Hex | Ratio vs `#121212` | WCAG Level | Safe for |
|---|---|---|---|---|
| `bb8` White | `#FFFFFF` | **18.0 : 1** | AAA | All text |
| `bb7` Warm Pebble | `#999387` | **5.9 : 1** | AAA | All text |
| `bb6` Warm Stone | `#8C8878` | **4.9 : 1** | AA | Body text |
| `bb5` Warm Taupe | `#5C5A4E` | **2.6 : 1** | Fail | Not for body text |
| `bb4` Warm Ochre | `#C8860E` | **5.8 : 1** | AAA | All text |
| `bb3` Brick | `#8C3422` | **2.3 : 1** | Fail | Not for body text |
| `bb2` Deep Forest | `#1F3D1A` | **1.4 : 1** | Fail | Not for any text |

> **Dark mode overrides in `globals.css`** use lightened variants of `bb2`, `bb3`, and `bb4` (higher HSL lightness) to maintain AA compliance against the dark background.

---

## 4. Forbidden Patterns

### 4.1 Raw Tailwind Color Classes

**Never use** Tailwind's built-in color palette classes directly in component files:

```
❌  text-teal-800, bg-teal-500/10, border-teal-700/40
❌  text-blue-600, bg-red-500, text-emerald-400
❌  text-cyan-*, text-indigo-*, text-violet-*, text-fuchsia-*
❌  text-sky-*, text-rose-*, text-lime-*, text-amber-*
❌  Any color class not derived from the design system
```

These bypass the palette, cannot be verified against WCAG thresholds, and break when the site is rebranded.

### 4.2 Same-Hue-Family Pairings Without Verification

Two colors from the same hue family at similar lightness typically produce ratios of **1.5:1–2:1**. This fails WCAG by a wide margin.

```
❌  Dark teal text on light teal background
❌  Dark green text on light green background  
❌  Dark blue text on light blue card
```

### 4.3 Opacity-Reduced Text Below Threshold

Using `text-foreground/60` or similar opacity reductions can drop contrast below AA. Verify the effective contrast before using any opacity below `/80` on body text.

---

## 5. Required Patterns

### 5.1 Always Use Semantic CSS Variables

```
✅  text-foreground          → bb1 on light, bb8 on dark
✅  text-primary             → deep forest (bb2)
✅  text-destructive         → brick (bb3)
✅  text-muted-foreground    → warm taupe (bb5)
✅  bg-primary               → deep forest, white text = 12.6:1
✅  bg-destructive           → brick, white text = 8.0:1
✅  border-border            → warm pebble (bb7)
✅  bg-background            → white (bb8)
```

### 5.2 Decorative Elements

Decorative gradients, glows, and overlays **must** have `aria-hidden="true"` and should use palette colors at low opacity.

### 5.3 Interactive Elements

All buttons, links, and form controls must:
- Meet 3:1 contrast for their boundaries/affordances
- Have visible `:focus-visible` states
- Use `focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2`

---

## 6. Testing Checklist

Before merging any color change:

- [ ] Verify contrast ratios using browser DevTools or [WebAIM Contrast Checker](https://webaim.org/resources/contrastchecker/)
- [ ] Test in both light and dark modes
- [ ] Check with browser zoom at 200%
- [ ] Verify keyboard navigation (Tab, Enter, Space) on all interactive elements
- [ ] Confirm all `aria-hidden="true"` on decorative elements
- [ ] Run `grep -rn` for raw Tailwind color classes in the changed files

---

## 7. Enforcement

This document is the authoritative reference for color and accessibility decisions on medhavy.com. Any deviation requires:

1. A documented contrast ratio calculation
2. Identification of the WCAG level achieved
3. An explicit rationale for why the deviation is acceptable
4. Update to this document
