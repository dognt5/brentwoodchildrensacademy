
The user finds the new graphic-driven hero too plain. I need to add visual richness while keeping it photo-free and graphic/icon-based, staying within the existing brand (soft greens, warm corals, cream bg, Playfair/Nunito).

## What I'll change in `src/components/HeroSection.tsx`

**1. Richer background**
- Layer a subtle SVG pattern (squiggles, stars, dots, hand-drawn shapes) in brand colors instead of just blurred circles + dots
- Add floating animated shapes (circles, triangles, squiggles, stars) that gently bob/rotate using framer-motion — gives the "high-energy" feel
- Keep the cream→sky gradient but punch it up with a few colored gradient blobs

**2. Center heading upgrade**
- Add a colorful underline swoosh / hand-drawn stroke under "Brentwood" (SVG)
- Apply the existing `.text-gradient-primary` utility to "Brentwood" so it pops
- Add small decorative icons (sparkles, stars) flanking the title
- Slightly larger, more confident "Children's Academy" subtitle styling

**3. Feature badges – more visual weight**
- Replace the plain white card pills with **fully colored badges** (each badge takes its category color as background instead of just the icon tile)
- Add a subtle continuous floating animation (using existing `float` keyframe in tailwind config) staggered per badge so the layout feels alive
- Slight rotation tilt on alternating badges for playful energy
- Add small accent shapes (dots/sparkles) near badges

**4. Layout polish**
- Tighter, more deliberate grouping around the title
- Add a thin decorative divider/garland element between the title block and the bottom row of badges
- Keep mobile 2-col grid but apply the same colorful badge treatment

**5. Bottom wave**
- Replace single-color wave with a layered 2-tone wave (coral + background) for more depth

## Files touched
- `src/components/HeroSection.tsx` — only file changed; reuses existing tailwind tokens (`coral`, `green-dark`, `accent`, `secondary`, `primary`, `sky`, `cream`), existing `float`/`fade-up` animations, and lucide icons. No new dependencies.

## Out of scope
- No photos added (user explicitly wants graphic-driven)
- No changes to other sections, routing, or copy
- No new colors introduced — strictly reuse brand palette
