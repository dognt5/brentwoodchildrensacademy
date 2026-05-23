## Goal
On the Preschool program page, the second gallery image (the smiling boy in front of the handprint board) is cropped too low, hiding his face.

## Change
In `src/pages/ProgramDetail.tsx`, the gallery images render with `className="w-full h-full object-cover"`. The default `object-position` is center, which clips the top of a tall portrait photo.

Add `object-top` to the gallery `img` so portrait photos anchor to the top and the child's face stays visible. This affects only the gallery grid on program detail pages (all 3 slots), keeping the framing consistent across programs.

No new assets, no other pages affected.