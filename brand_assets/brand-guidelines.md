# Ironmark Capital — Brand Guidelines

## Positioning
**Tagline:** "Long-term partners, not private equity."
**Mission:** Partner with exceptional owners to preserve what works, improve what doesn't, and build companies meant to last.

## Core Messages
- Buy and hold — no exit mandate, no financial engineering
- Founder-friendly transitions — stay or step back, flexible structure
- Operator-led — improve what's broken, protect what works
- Simple, direct process — no committee layers, no deal fatigue
- Protect team and culture

## Tone of Voice
- Professional but not stiff
- Direct but not aggressive
- Confident but not arrogant
- Empathetic to the seller's emotional journey
- Speaks to business owners and brokers as peers, not targets
- Credible operator, not Wall Street banker
- Clean, credible, and human — not corporate or flashy

## Primary Audiences
1. Business brokers and intermediaries
2. Business owners considering a sale
3. CPAs, attorneys, and wealth managers (referral sources)
4. Potential investors / LPs (secondary)

---

## Color Palette

### Primary Accent
- **Teal-400:** `oklch(77.7% 0.152 181.912)` — lighter accent, hover states
- **Teal-500:** `oklch(70.4% 0.14 182.503)` — primary brand color, CTAs, links

### Neutrals
| Token | Value | Use |
|-------|-------|-----|
| Neutral-50 | `oklch(98.5% 0 0)` | Near-white backgrounds |
| Neutral-100 | `oklch(97% 0 0)` | Off-white, card backgrounds |
| Neutral-200 | `oklch(92.2% 0 0)` | Borders, dividers |
| Neutral-300 | `oklch(87% 0 0)` | Subtle borders |
| Neutral-400 | `oklch(70.8% 0 0)` | Placeholder text |
| Neutral-500 | `oklch(55.6% 0 0)` | Secondary text |
| Neutral-600 | `oklch(43.9% 0 0)` | Body text |
| Neutral-700 | `oklch(37.1% 0 0)` | Strong body text |
| Neutral-800 | `oklch(26.9% 0 0)` | Headings, dark sections |
| Neutral-900 | `oklch(20.5% 0 0)` | Near-black, darkest elements |

### Background & Text Defaults
- Page background: `#fff`
- Primary text: `#0a0a0a`

---

## Typography

- **Font Family:** Inter (with fallbacks: ui-sans-serif, system-ui, sans-serif)
- **Letter Spacing:** -0.02em globally
- **Font Smoothing:** Antialiased (webkit + moz)

---

## Visual Effects
- Grain texture overlay on dark sections (0.03 opacity, fractalNoise SVG)
- Smooth scroll behavior
- Animations: blink, grain, slow-scale (used sparingly)
- Framer Motion for scroll-triggered entrance animations (FadeInUp pattern)

---

## Logo & Images
- Logo and team photos are in `/public/`
- Do not use stock photos — use real team photos or clean placeholder blocks
- Image naming should be descriptive (rename hashed filenames when possible)

---

## Website Structure
- **Pages:** Home, About, Companies, Contact, Investment Criteria, Refer
- **Components:** Nav, Hero, About, Services, Work, Clients, Contact, Newsletter, Footer, TeamCard
- **Framework:** Next.js 16 + React 19 + Tailwind CSS v4 + Framer Motion + TypeScript
