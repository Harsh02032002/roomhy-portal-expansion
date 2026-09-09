# Restore and complete the Roomhy homepage

## Goal
Rebuild the homepage from the supplied GitHub repository and screenshots without redesigning it. Preserve the existing Roomhy header, hero, search, trust strip, and “What We Offer” section; remove the incorrect “Featured Properties” treatment; then add the screenshot-matched “How Roomhy Works” and “Trending Stays This Week” sections.

## Implementation
1. Restore the current Roomhy homepage source and five housing images from the supplied `pixel-perfect-portal` repository into this workspace, which currently contains only the blank starter page.
2. Keep the existing header, hero, search controls, trust strip, offer cards, and decorative leaves intact, with only small proportion adjustments required by the references.
3. Remove the current `Featured` section and all purple/lavender styling associated with it. Confirm no separate or duplicate “Features” section remains.
4. Add “How Roomhy Works” directly after “What We Offer”:
   - Screenshot-matched eyebrow, two-line heading, subtitle, three compact step cards, video-guide image panel, play control, duration, handwritten note, leaves, and lower trust strip.
5. Add “Trending Stays This Week” immediately afterward:
   - Four compact horizontal desktop cards using the existing property photography, verified badges, save controls, locations, monthly pricing, navigation arrows, and pagination dots.
6. Keep the green, cream, white, sage, and subtle gold Roomhy palette. Use existing semantic design tokens and existing button controls.
7. Add responsive layouts that preserve the compact desktop geometry while remaining usable on tablet and mobile.

## Verification
- Compare the rendered desktop page at the reference viewport against all four screenshots.
- Check header and section heights, typography, card/image proportions, spacing, leaf placement, button sizing, and image crops.
- Verify mobile rendering, existing links/search controls, carousel arrows, and save controls remain usable.
- Confirm the page has no “Features” or “Featured Properties” section and no purple/lavender styling.
