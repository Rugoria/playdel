# Implementation Plan: Brand Story & About Page

## Overview

Implement the brand story feature across three files: update `About.tsx` with a homepage teaser, create `src/app/about/page.tsx` as a full standalone page, and update `Header.tsx` to point to `/about` with active state detection.

## Tasks

- [x] 1. Update About.tsx — homepage teaser section
  - Replace the existing `About.tsx` content with a section containing the Short_Story (3–4 lines referencing Sheis, Shumail, and the padel court origin), three Theme_Pillar badges (Community, Connection, Frictionless Experience), and a `<Link href="/about">` CTA
  - Apply background `#E7E7E7`, `text-black/70` body text, `bg-primary` badge styling, and white CTA card with hover transition
  - Keep `id="about"` on the section for any existing anchor references
  - _Requirements: 1.1, 1.2, 1.3, 1.4, 1.5, 3.1, 5.1_

  - [x] 1.1 Write unit tests for About component
    - Assert Short_Story contains "Sheis" and "Shumail"
    - Assert CTA link has `href="/about"`
    - Assert all three Theme_Pillar badge labels render ("Community", "Connection", "Frictionless Experience")
    - _Requirements: 1.1, 1.2, 1.4_

- [x] 2. Create src/app/about/page.tsx — full About page
  - [x] 2.1 Scaffold the server component with Header and Footer
    - Create `src/app/about/page.tsx` as a server component (no `'use client'` directive)
    - Import and render the existing `Header` and `Footer` components
    - Set page background to `bg-[#E7E7E7] min-h-screen`
    - _Requirements: 2.1, 2.5, 2.7_

  - [x] 2.2 Add Full_Story narrative and closing statement
    - Write the Full_Story copy (150–200 words) covering: padel court origin, repeated frustration, decision to build, evolution into community hub
    - Explicitly name Sheis (Computer Science) and Shumail (Law) in the narrative
    - Add closing statement reinforcing the three Theme_Pillars
    - _Requirements: 2.2, 2.4, 3.2, 3.3, 3.4, 3.5, 3.6_

  - [x] 2.3 Write property test for Full_Story word count
    - **Property 1: Full Story word count is between 150 and 200 words**
    - **Validates: Requirements 2.2, 3.2**
    - Use `fast-check`: `fc.property(fc.constant(FULL_STORY_TEXT), text => wordCount >= 150 && wordCount <= 200)`
    - Tag with `// Feature: brand-story-about-page, Property 1`

  - [x] 2.4 Implement FounderCard component and founders grid
    - Define `FounderCard` (name, background, optional role) as a local component in `page.tsx`
    - Render two cards: Sheis (Computer Science) and Shumail (Law) in a `grid md:grid-cols-2 gap-6` container
    - Style cards: `bg-white rounded-[20px] border border-black/10 p-8`, name in bold, background in `text-primary`
    - _Requirements: 2.3, 5.2, 5.3_

  - [x] 2.5 Add Theme_Pillars callout blocks
    - Render three distinct pillar blocks (Community, Connection, Frictionless Experience) as scannable card/callout elements
    - _Requirements: 2.6_

  - [x] 2.6 Write unit tests for About page
    - Assert Header and Footer are present in the rendered output
    - Assert both FounderCards render (Sheis + Computer Science, Shumail + Law)
    - Assert three Theme_Pillar elements exist
    - Assert the founders grid container has class `md:grid-cols-2`
    - Assert the file does not contain `'use client'` directive
    - _Requirements: 2.1, 2.3, 2.5, 2.6, 2.7_

- [x] 3. Checkpoint — Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

- [x] 4. Update Header.tsx — /about link and active state
  - [x] 4.1 Update navLinks and add usePathname active state
    - Confirm `'use client'` directive is present (Header is already a client component)
    - Import `usePathname` from `next/navigation`
    - Change the "About" entry in `navLinks` from `href: '#about'` to `href: '/about'`
    - Apply `bg-black text-white` classes to the active link when `pathname === link.href`
    - Guard against `null` pathname: `pathname === link.href` is safe since `usePathname` returns `null` during static render
    - Update both desktop nav and mobile menu (they share the same `navLinks` array)
    - _Requirements: 4.1, 4.2, 4.3_

  - [x] 4.2 Write property test for Header About link href
    - **Property 2: Header About link always has href /about**
    - **Validates: Requirements 4.1, 4.3**
    - Use `fast-check`: `fc.property(fc.boolean(), () => getAllByRole('link', { name: /about/i }).every(l => l.getAttribute('href') === '/about'))`
    - Tag with `// Feature: brand-story-about-page, Property 2`

  - [x] 4.3 Write property test for Header active state
    - **Property 3: Header About link has active class when pathname is /about**
    - **Validates: Requirements 4.2**
    - Mock `usePathname` to return `/about`, assert the About link has `bg-black` class; assert no other nav link has it
    - Tag with `// Feature: brand-story-about-page, Property 3`

  - [x] 4.4 Write unit tests for Header navigation
    - Assert About link `href` is `/about` (not `#about`)
    - Assert active class is absent when pathname is `/`
    - _Requirements: 4.1, 4.2_

- [x] 5. Final checkpoint — Ensure all tests pass
  - Ensure all tests pass, ask the user if questions arise.

## Notes

- Tasks marked with `*` are optional and can be skipped for a faster MVP
- Property tests use `fast-check` with a minimum of 100 iterations each
- Unit tests use React Testing Library
- Each property test must be tagged with `// Feature: brand-story-about-page, Property {N}`
- `about/page.tsx` must remain a server component — do not add `'use client'`
