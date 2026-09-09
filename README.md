# Pixel Perfect Portal

IMPORTANT: Work directly on the existing repository:

https://github.com/Harsh02032002/pixel-perfect-portal.git

I need you to FIX/REVERT the current implementation and rebuild the homepage sections according to the provided reference screenshots.

THIS IS A PIXEL-PERFECT IMPLEMENTATION TASK.

Do NOT redesign, reinterpret, simplify, modernize, or invent your own UI.

REFERENCE SCREENSHOTS:

- Screenshot 1, 2 and 3 show the intended Roomhy visual language, proportions, spacing, typography, colors, cards, imagery and overall compact/thin layout.

- Screenshot 4 shows the NEXT sections that need to be implemented after the existing "What We Offer" section.

IMPORTANT:

The screenshots are the source of truth. Match them as closely as possible.

==================================================

1. REMOVE THE WRONG SECTIONS

==================================================

Completely REMOVE the incorrectly created:

- Features section

- Properties / Featured Properties section

Do not keep duplicate versions of these sections.

Do not replace them with another interpretation.

The homepage flow should be:

Header

→ Hero

→ Trust/benefit strip

→ What We Offer

→ How Roomhy Works

→ Trending Stays This Week

→ remaining existing homepage sections

Do NOT insert the wrong Features or Featured Properties sections between these sections.

==================================================

2. KEEP THE EXISTING CORRECT DESIGN

==================================================

Do not unnecessarily rewrite the parts that are already visually matching the reference.

Preserve:

- Header/navigation

- Roomhy logo

- Hero section

- Hero background image

- Search box

- PG / Hostels / Co-living / Apartments tabs

- Trust/benefit strip

- What We Offer section

- Existing working interactions/navigation

Only modify what is necessary to make the page match the screenshots.

==================================================

3. VERY IMPORTANT — THIN / COMPACT PROPORTIONS

==================================================

The current implementation looks too bulky compared with the reference.

Make the sections visually THIN, COMPACT and WELL-PROPORTIONED.

Match the screenshots for:

- section height

- vertical spacing

- card height

- card width

- heading size

- paragraph size

- padding

- margins

- whitespace

- image proportions

- border radius

- button dimensions

Do NOT make sections unnecessarily tall.

The page should look like the reference screenshots when viewed at desktop width.

==================================================

4. WHAT WE OFFER

==================================================

Keep the "What We Offer" section matching the reference.

It contains 4 cards:

1. PG

2. Hostels

3. Co-living

4. Apartments

Keep:

- large image on each card

- white card body

- rounded corners

- pill label over image

- small arrow button

- short description

- green/cream Roomhy visual language

- decorative leaves around the section

The decorative leaves are IMPORTANT.

Do NOT remove them.

They should appear naturally around the edges like the reference screenshot.

==================================================

5. ADD NEXT SECTION — HOW ROOMHY WORKS

==================================================

After "What We Offer", implement the section shown in Screenshot 4.

Heading area:

Small eyebrow:

"HOW ROOMHY WORKS"

Main heading:

"Find, Compare & Book

in Just a Few Steps"

Use the same typography hierarchy and line breaks/proportions shown in the reference.

Subtitle:

"A smarter, simpler and safer way to find your next home."

Then create the 3 step cards:

1. Search & Filter

"Verified PGs, Hostels & Flats with real photos."

2. Smart Bidding

"Bid directly to lock lower prices with owners."

3. Instant Move-in

"Token booking & 100% broker-free transparency."

On the right side create the large video/image card shown in Screenshot 4:

- rounded rectangular image

- bedroom/interior image

- play button in center

- "Official Video Guide" pill

- duration indicator

- same proportions as screenshot

Below/around this section maintain the decorative handwritten text and leaves exactly in the visual style of the reference.

Also retain the benefit/trust strip shown beneath this section if it belongs to this reference composition.

==================================================

6. ADD NEXT SECTION — TRENDING STAYS THIS WEEK

==================================================

Immediately after "How Roomhy Works", implement:

Eyebrow:

"TRENDING STAYS"

Heading:

"Trending Stays This Week"

Subtitle:

"Most popular properties among students"

Add the "View all properties" button on the right.

Create the horizontal property cards exactly like Screenshot 4.

Cards should contain:

- property image

- green Verified pill

- heart/favourite icon

- property name

- location

- monthly price

- "/mo"

- correct card spacing

- rounded corners

- subtle shadow/border

- desktop horizontal layout

Use the same visual proportions as Screenshot 4.

Include the left/right carousel arrows shown in the reference.

Do NOT create the old/wrong "Featured Properties" section.

This Trending Stays section replaces that incorrect implementation.

==================================================

7. COLORS

==================================================

Follow the existing Roomhy palette visible in the screenshots:

- warm/off-white background

- deep dark green

- soft sage/green

- muted cream

- white cards

- subtle gold/beige accents

- GREEN decorative leaves

Do not introduce random purple/lavender/pink/blue colors.

Keep the palette cohesive and premium.

==================================================

8. IMAGES

==================================================

Use the existing project assets wherever appropriate.

If an image asset already exists for a reference image, reuse it.

Do NOT replace the reference imagery with unrelated generic images.

Maintain:

- bedroom imagery

- hostel imagery

- co-living imagery

- apartment imagery

- lifestyle/property imagery

The image crop, aspect ratio and positioning should visually match the screenshots.

==================================================

9. RESPONSIVE BEHAVIOUR

==================================================

Desktop is the primary target because the supplied references are desktop screenshots.

After matching desktop:

- maintain clean tablet layout

- maintain usable mobile layout

- do not destroy the desktop pixel-perfect proportions while making it responsive.

==================================================

10. CODE QUALITY

==================================================

Before changing anything:

1. Inspect the existing repository.

2. Identify the current homepage structure.

3. Identify which components correspond to Features and Featured Properties.

4. Remove those incorrect components cleanly.

5. Reuse existing components/assets where possible.

6. Do not create duplicate components.

7. Do not break existing routes or functionality.

Do not rewrite the entire project unnecessarily.

==================================================

11. FINAL VISUAL CHECK

==================================================

After implementation, compare the rendered homepage against all provided screenshots.

Check specifically:

- header height

- hero height

- section heights

- heading sizes

- font weights

- card dimensions

- image crops

- spacing

- alignment

- button sizes

- border radii

- decorative leaves

- green/cream palette

- horizontal positioning

- overall "thin/compact" appearance

The final result should feel like the SAME WEBSITE shown in the screenshots, not a new design inspired by them.

MOST IMPORTANT:

REMOVE THE WRONG FEATURES + FEATURED PROPERTIES SECTIONS.

KEEP THE CORRECT EXISTING SECTIONS.

ADD "HOW ROOMHY WORKS" AND "TRENDING STAYS THIS WEEK" EXACTLY ACCORDING TO SCREENSHOT 4.

MATCH THE SCREENSHOTS AS CLOSELY AS POSSIBLE.

This project was built with [Lovable](https://lovable.dev).

## Build with Lovable

Continue developing this project in the [Lovable editor](https://lovable.dev/projects/b70e5c87-9256-4fbd-9934-53bfc5576e8d).

- **Ship faster**: describe what you want to build and Lovable handles the code.
- **Stay in sync**: every change made in Lovable is committed straight to this repository.
- **Full ownership**: this code is yours. Push to `main` on GitHub and your changes sync back into Lovable, ready for your next prompt.

## Development

Prefer working locally? You need Node.js and npm — [install with nvm](https://github.com/nvm-sh/nvm#installing-and-updating).

```sh
git clone <this-repository-url>
cd <repository-name>
npm i
npm run dev
```
