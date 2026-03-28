# CLAUDE.md — Ironmark Capital Website

## OBJECTIVE
Refine and elevate the Ironmark Capital website (ironmark.capital). The inspiration clone phase is complete — the foundation is built. Now focus on polish, brand consistency, professional-grade components, and a site that feels credible, clean, and human. Every change should make this look like a real firm's website, not an AI-generated template.

---

## SKILL — MANDATORY
Always invoke the frontend-design skill (`/frontend-design`) before writing any frontend code. Every session, no exceptions. This ensures modern, professional design patterns — not generic AI output.

---

## BRAND ASSETS
Reference `brand_assets/brand-guidelines.md` for all design decisions:
- **Colors:** Teal-400/500 accent, neutral grayscale, white background, near-black text
- **Font:** Inter, -0.02em letter spacing, antialiased
- **Tone:** Credible operator, not Wall Street banker. Clean, credible, human — not corporate or flashy.
- **Logo & photos:** In `/public/` — use real assets, never stock photos

All design work must align with these guidelines. When in doubt, check brand-guidelines.md.

---

## SCREENSHOT WORKFLOW
After making any visual changes, use Puppeteer to verify the result:

1. Start the dev server if not running (`npm run dev`)
2. Use Puppeteer to screenshot the page at `http://localhost:3000`
3. Save screenshots to `temporary_screenshots/` with descriptive names:
   - `hero-v1.png`, `nav-sticky-fix.png`, `footer-update.png`
   - Include version numbers when iterating on the same section
4. Compare against the current design — check spacing, alignment, colors, typography
5. Do at least **2 rounds** of screenshot → review → polish before marking a section done
6. After finishing, delete screenshots from `temporary_screenshots/` to keep it clean

**Exception:** For animated or dynamic elements (Framer Motion transitions, hover effects, background animations), skip the screenshot loop — these don't capture well in static screenshots. Let the user review these manually in the browser.

### Puppeteer Setup
Puppeteer is installed (`npm install puppeteer`). To take a screenshot:
```javascript
const puppeteer = require('puppeteer');
const browser = await puppeteer.launch();
const page = await browser.newPage();
await page.setViewport({ width: 1440, height: 900 });
await page.goto('http://localhost:3000', { waitUntil: 'networkidle0' });
await page.screenshot({ path: 'temporary_screenshots/full-page.png', fullPage: true });
await browser.close();
```

---

## DESIGN RULES

**Current phase: Refinement & elevation**
- The inspiration site's layout DNA is the foundation — maintain the overall structure and proportions
- Elevate individual components with better typography, spacing, animations, and brand consistency
- When adding new components (e.g., from 21st.dev or other inspiration), adapt them to match the existing color palette, font, and spacing system
- Keep the design cohesive — every component should feel like it belongs to the same site

**Standards:**
- Color palette — use only colors from brand-guidelines.md
- Typography — Inter with proper weight hierarchy, -0.02em tracking
- Spacing — maintain consistent padding/margin scale across sections
- Animations — subtle and purposeful (Framer Motion), never distracting
- Mobile — responsive at all breakpoints, mobile-first approach
- Grain texture on dark sections (existing pattern in globals.css)

**Do not:**
- Add stock photos or placeholder images that look generic
- Use colors outside the brand palette without explicit approval
- Over-animate — subtle entrance animations are fine, constant motion is not
- Break the existing responsive behavior when adding new components

---

## CONTENT
All copy and content will be provided separately. Do not write, invent, or assume any text. Use placeholder text only where content has not yet been provided.

---

## TECHNICAL
- Next.js 16 + React 19 + TypeScript
- Tailwind CSS v4 for styling
- Framer Motion for animations
- Mobile-first responsive
- Fast load — no unnecessary dependencies
- Component-based structure — one component per section

---

## DEPLOYMENT
- **Test locally first.** All changes go through localhost before anything else.
- **Never push to GitHub without explicit approval.** The site auto-deploys from GitHub → Vercel, so a push = live change.
- When told to push: commit with a clear message describing the change, then push to main.
- Live site: ironmark.capital / tripellpartners.com (both point to the same Vercel deployment)
