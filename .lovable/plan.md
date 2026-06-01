## Problem
The "Contact Us" button in CTA sections currently uses a translucent ghost/outline style (`bg-primary-foreground/15`, `backdrop-blur-sm`, thin border) while "Schedule a Tour" is a solid, high-contrast button with a shadow. This makes Contact Us visually disappear and all focus lands on Schedule a Tour.

## Solution
Give the "Contact Us" button real visual weight so the two CTAs feel balanced without competing. Keep Tour as the primary, but make Contact a clear secondary option.

## Changes

1. **CTABlock.tsx** — On the gradient hero background, switch Contact Us from ghost style to a solid card surface:
   - `bg-card text-foreground` (solid surface, readable on gradient)
   - Add `shadow-md` for lift
   - Keep rounded-full, bold text, and hover opacity transition
   - Remove backdrop-blur and low-opacity border

2. **CTASection.tsx** — Same change as CTABlock (identical button pair pattern on the same gradient background).

3. **Robotics.tsx** — The bottom CTA sits on a light surface, not a gradient. Here we’ll switch Contact Us from transparent outline to a solid primary button:
   - `bg-primary text-primary-foreground` with `shadow-md`
   - This matches the successful pattern already used on the Testimonials page (line 91), where both buttons carry solid color and feel equally tappable.

## Result
- Both buttons in every CTA pair will have solid backgrounds and shadows.
- Tour keeps its warm `bg-secondary` accent.
- Contact gets a clean solid fill so it no longer fades into the background.
- No layout, sizing, or text changes.