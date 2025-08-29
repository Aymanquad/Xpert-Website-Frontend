
XPERT GAMES — FRONTEND SPEC (Inspired by agenz.framer.ai)


GOAL
-----
Build a professional, clean, single‑page marketing site for Xpert Games (React + Vite). Style and interactions should take inspiration from https://agenz.framer.ai/ while using our own brand copy and assets.

TOP‑LEVEL TAKEAWAYS FROM INSPIRATION
------------------------------------
• Monochrome base (black/white/gray) with subtle soft‑glow circles and grainy textures. 
• Big, condensed, uppercase headlines with generous tracking; minimal body text.
• Spacious sections with strong vertical rhythm; most blocks are max‑width centered with large paddings.
• Scroll‑triggered reveals (fade/slide), gentle parallax on decorative circles, custom cursor, sticky/blurred nav.
• Carousels for Team and Testimonials; Stats/KPIs row; Awards list; FAQ accordion; bold CTA; simple footer.
• Subtle glassy cards and borders (1px, low‑contrast) to keep the minimal look.

PAGE MAP (SINGLE PAGE)
----------------------
0) Sticky Navbar
   - Left: Logotype (Xpert Games)
   - Center/Right: Home, Services, Projects, Awards, Team, Process, Testimonials, FAQ, Contact
   - Rightmost: Primary CTA “Contact Us” (rounded pill)
   - Behavior: becomes slightly opaque/blurred after scroll; active link highlight; custom cursor on hover.

1) Hero
   - Left/Center alignment: “CREATIVE / DIGITAL / AGENCY” style split headline -> replace with
     “A GAMING • PRODUCT • STUDIO” or “BUILD • SCALE • PLAY” (decide later).
   - Subcopy 1–2 lines (short, confident). Small “based in <city>” pill above or near logo.
   - Background: soft gradient blob(s) and thin outline circles that drift slowly; optional grain overlay.
   - CTA group: Primary “Work with us”, Secondary “See projects” (arrow).

2) Services (3–6 cards)
   - Title: “OUR SERVICES — What we do”
   - Cards (hover lift + subtle outline, icon, short blurb):
     • Game Design (UI/UX, Systems)
     • Art & Animation (2D/3D)
     • Engineering (Unity/Unreal/Custom)
     • LiveOps & Monetization (A/B, IAP/Ads)
     • Brand & Marketing
     • Publishing Support

3) Projects (grid)
   - Title: “PROJECTS — View our work”
   - 3‑wide grid desktop, 2‑wide tablet, 1‑wide mobile.
   - Each project tile: cover image/video, category pill, title, year, studio credit line.
   - Hover: image zoom + light overlay + “View Case Study →” micro CTA.
   - Optional filters: All / Art / Marketing / Branding / Gameplay.

4) KPIs / Stats row
   - 3 stats: “HAPPY CLIENTS 18+”, “REVENUE $50M”, “PROJECTS DONE 90%+” (replace with our real stats).
   - Animated count‑up on entering viewport.

5) About (image collage)
   - Title: “MORE ABOUT US”
   - Two‑column: left text (mission + highlights bullet list), right collage (2x2 grid with rounded images, subtle parallax on scroll).

6) Awards
   - Simple table/list with external links (e.g., Awwwards, CSSDA); three columns: Brand • Prize • Year.
   - Each row has an outbound icon; hover underline; opens in new tab.

7) Team (carousel)
   - 3–6 members with portrait, role, and quirky hashtag (#thedynamic / #thebeast / #thestatic flavor).
   - Prev/Next arrows (rounded, subtle shadow); dots/pills for position.
   - Hover tilt or parallax on avatar; name/role reveal.

8) Process (3 steps)
   - Step cards: Research • Implementation • Testing, each with small image, spaced headline with airy letter spacing (“R e s e a r c h” style), and brief description.
   - Ordered timeline variant on mobile.

9) Testimonials (carousel)
   - Card with avatar, name, role/company, short quote (1–2 lines).
   - Optional map backdrop watermark like the inspiration site.

10) FAQ (accordion)
    - 6–8 questions; single‑open mode, smooth height animation.

11) CTA Banner
    - “LET’S DISCUSS YOUR NEXT PROJECT” + Primary CTA. Floating subtle circle decorations.

12) Footer
    - Columns: Links (Home, Services, Projects), Legal (Pricing, Privacy), Contact/Newsletter input.
    - Copyright line: “© 2025 Xpert Games. All Rights Reserved.”

TYPOGRAPHY
-----------
• Visual vibe: modern geometric sans + either wide display/condensed uppercase for headlines.
• Recommended pairing (web‑safe + easy import): 
  - Headings: Space Grotesk (700/600) OR Clash Display (if licensing OK) OR Bebas Neue (condensed look).
  - Body: Inter (400/500/600).
• CSS examples:
  - Headline tracking: 0.06–0.12em; sizes: clamp(36px, 6vw, 80px) for H1; H2: clamp(28px, 4vw, 56px).
  - Body: 16–18px; line‑height 1.6; small caps/pills at 12–13px for meta labels.
• Fallback stack: system-ui, -apple-system, Segoe UI, Roboto, Helvetica, Arial, sans-serif.

COLOR & EFFECTS
----------------
• Palette (suggested):
  - Base: #0B0B0B (bg), #111111/#141414 (section alt), #FFFFFF (text), #EAEAEA (borders), #9CA3AF (muted).
  - Accent (choose one): Electric violet #7C3AED or Blue #2563EB or Lime #A3E635. Use sparingly for pills/links.
• Decorations: soft radial gradients, thin outline circles (SVG), 5–15% motion parallax.
• Borders: 1px translucent (e.g., rgba(255,255,255,0.08)).
• Shadows: very soft (0 10px 30px rgba(0,0,0,0.25)).
• Blur: backdrop-filter: blur(8–12px) for sticky nav / glass cards.

LAYOUT & SPACING
-----------------
• Container max‑width: 1200–1280px; gutters 24–32px.
• Section paddings: desktop 120–160px top/bottom; tablet 96px; mobile 64–80px.
• Grid: CSS grid + minmax; cards use aspect-ratio for consistent tiles.

INTERACTIONS & MOTION
----------------------
• Smooth scroll (Lenis) and reduced‑motion respect.
• Scroll‑reveal: fade‑in + 12–24px translateY; stagger children 60–120ms; once per section.
• Parallax circles: translateY on scroll; clamp to 10–30px shift; slightly rotate (2–5deg).
• Counters: when visible start 0→target in 1.2s with easeOut.
• Carousels: snap center, momentum disabled; arrows + dots.
• Custom cursor: 
  - Default small circle; Hover over links => expand to 28–36px with light invert; 
  - Over CTAs => shows “View” or arrow glyph inside.

ACCESSIBILITY
--------------
• Color contrast AA+ for text over backgrounds.
• Skip‑to‑content link; keyboard navigable carousels; focus states (2px outline).
• Reduce motion: prefers-reduced-motion => disable parallax and heavy animations.
• Alt text for images; aria-labels for arrows, accordions with aria-controls and aria-expanded.
• Form: label + description + error text; no placeholder‑only.

SEO & META
-----------
• Title/description; OpenGraph/Twitter; favicon; canonical.
• Structured data (JSON‑LD): Organization + WebSite + FAQPage.
• Lazy‑load media; compress images; preconnect to fonts.

TECH STACK (REACT + VITE)
--------------------------
• React 18 + Vite + TypeScript.
• Tailwind CSS (for speed & consistency) + class-variance-authority optional.
• Framer Motion (animation), Embla Carousel (team/testimonials), Lenis (smooth scroll).
• React Hook Form + Zod (newsletter/contacts validation).
• Lucide-react (icons).

DEPENDENCIES
-------------
npm i react react-dom
npm i -D vite typescript @types/react @types/react-dom
npm i framer-motion embla-carousel-react @studio-freight/lenis react-hook-form zod lucide-react
npm i -D tailwindcss postcss autoprefixer
npx tailwindcss init -p

PROJECT STRUCTURE
------------------
/src
  /assets
    /images (hero, services, projects, team, awards, process, testimonials, faq, footer)
    /decor (circles.svg, blobs.svg, grain.png)
    /logos (partners, social)
  /components
    Header.tsx
    Footer.tsx
    Section.tsx (wrapper with max-width + padding)
    Button.tsx (variants: primary/secondary/ghost)
    Cursor.tsx
    Reveal.tsx (in-view animation)
    Parallax.tsx
    Stat.tsx
    CardService.tsx
    CardProject.tsx
    AwardsTable.tsx
    TeamCarousel.tsx
    ProcessStep.tsx
    TestimonialCarousel.tsx
    FAQ.tsx
    NewsletterForm.tsx
  /sections
    Hero.tsx
    Services.tsx
    Projects.tsx
    Stats.tsx
    About.tsx
    Awards.tsx
    Team.tsx
    Process.tsx
    Testimonials.tsx
    FAQ.tsx
    Cta.tsx
  /hooks (useInViewOnce.ts, useLenis.ts)
  /styles (globals.css, typography.css)
  /data (services.ts, projects.ts, awards.ts, team.ts, process.ts, testimonials.ts, faq.ts)
  App.tsx
  main.tsx
index.html
tailwind.config.ts
vite.config.ts
tsconfig.json

ROUTING
--------
• Single page with anchored navigation (#services, #projects, etc.). Use scroll-margin-top for anchored offsets under sticky header.

COMPONENT NOTES (KEY ONES)
---------------------------
Header.tsx
  - Transparent → blurred background after scrollY > 32px (useEffect + framer-motion).
  - Active link detection based on intersection of sections.
  - CTA Button variant=primary.

Hero.tsx
  - Big split headline (stacked words). Provide prop to highlight words with different font-weight or gradient text.
  - Decorative circles absolute‑positioned; animated via Parallax component.
  - CTA group; small “based in Hyderabad / India” chip above logo if desired.

CardService.tsx
  - Props: icon, title, description.
  - Hover: translateY(-6px) + outline opacity up.

Projects.tsx
  - Grid of CardProject; optional tag filters; keyboard focus ring; skeleton while loading.

AwardsTable.tsx
  - Simple list with 3 columns on desktop, 2 on tablet, 1 on mobile.
  - External links with rel=noopener; small outbound icon; row hover background subtle.

TeamCarousel.tsx / TestimonialCarousel.tsx
  - Embla with autoplay pause on hover; prev/next buttons aria‑labels; snapping; dots.

FAQ.tsx
  - Headless accordion; allow only one open; smooth height animation; proper aria attributes.

Cursor.tsx
  - Canvas or div cursor; respects prefers-reduced-motion; toggles states via global cursor store (hoverable components set data-cursor="link|cta").

MOTION PRESETS
---------------
const fadeUp = { hidden: {opacity:0, y:16}, show:{opacity:1, y:0, transition:{duration:0.6, ease:[0.22,1,0.36,1]}}}
const stagger = { show:{ transition: { staggerChildren: 0.08 } } }
Parallax: clamp(-24px..24px) transform based on scroll progress.

TAILWIND TOKENS (SUGGESTED)
----------------------------
• Container: max-w-[1200px], px-6 md:px-8
• Headline sizes: text-5xl md:text-7xl font-semibold tracking-wider uppercase
• Body: text-base md:text-[17px] leading-relaxed text-zinc-300
• Border: border border-white/10 rounded-2xl
• Card padding: p-6 md:p-8
• Section spacing: py-24 md:py-32 lg:py-40

ASSETS (PLACEHOLDERS TO PREP)
------------------------------
• Hero: abstract 3D sphere or gradient shapes (PNG/WebP), grain overlay (transparent PNG).
• Services: 6 minimal line icons (SVG).
• Projects: 6–9 mock covers (16:9 and 4:5 variants).
• Team: portraits with transparent or soft gradient bg.
• Process: 3 small images (Research, Implementation, Testing).
• Testimonials: 6 avatars; optional world map watermark SVG.
• Awards: favicons/logos of award sites (optional).
• Footer: social icons (SVG).

COPY GUIDELINES
----------------
• Keep H1 ≤ 8 words; each section ≤ 2 short paragraphs max.
• Use confident verbs; avoid jargon; show impact metrics where possible.
• Replace filler (“Simple team uses aesthetic…”) with real outcomes (ship speed, retention, LTV, etc.).

PERFORMANCE
------------
• Use WebP/AVIF; import images via Vite for hashed filenames.
• Preload headline font weight; font-display: swap.
• Code-split carousels below the fold (dynamic import).
• Disable smooth‑scroll & heavy motion for reduced‑motion users.

FALLBACKS
----------
• If carousels disabled (no JS), show stacked content.
• If custom cursor disabled, keep standard cursor with clear hover states.

BRANDING FOR XPERT GAMES (INITIAL)
-----------------------------------
• Logo: simple wordmark (Space Grotesk bold), “XPERT” heavy, “GAMES” light.
• Tagline: “We design, build, and scale games people love.”
• Accent color: Electric violet (#7C3AED) (adjust later to taste).

DELIVERABLE
-----------
• Single-page React app (Vite + TS), Tailwind styles, data-driven content files, smooth‑scroll, reveals, two carousels, FAQ, contact CTA, footer with newsletter form.
• Ready for Cursor: structured components, clear sections, and TODOs for content.

TODO (FOR IMPLEMENTATION IN CURSOR)
------------------------------------
[ ] Scaffold Vite + TS + Tailwind.
[ ] Install deps: framer-motion, embla, lenis, hook-form, zod, lucide-react.
[ ] Set up globals.css (dark theme, base styles), typography.css (utility classes).
[ ] Implement Header with sticky/blur + active link.
[ ] Hero with split headline + parallax circles.
[ ] Services cards (grid).
[ ] Projects grid (with optional filters).
[ ] Stats row with count-up.
[ ] About with collage and scroll parallax.
[ ] Awards table.
[ ] Team carousel.
[ ] Process steps.
[ ] Testimonials carousel.
[ ] FAQ accordion.
[ ] CTA banner.
[ ] Footer + Newsletter form (hook-form + zod).
[ ] Custom cursor (optional flag).
[ ] SEO meta + OG tags + JSON-LD (FAQ).
[ ] Lighthouse pass (performance & a11y).
