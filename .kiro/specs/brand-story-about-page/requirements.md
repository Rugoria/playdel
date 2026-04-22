# Requirements Document

## Introduction

The Brand Story & About Page feature introduces Playdel's origin story and founding team to visitors. It consists of two surfaces: a teaser section on the homepage (short version) and a dedicated `/about` page (full version). The content must feel authentic, human, and startup-driven — emphasizing community, connection, and a frictionless padel experience. The feature is built on an existing Next.js project with Tailwind CSS and must match the current visual language.

## Glossary

- **About_Section**: The teaser component rendered on the homepage (`src/components/About.tsx`), showing a short brand story with a link to the full About page.
- **About_Page**: The standalone page at `/about` (`src/app/about/page.tsx`) showing the complete brand story, founder profiles, mission, and values.
- **Short_Story**: A 3–4 line brand narrative for the homepage teaser.
- **Full_Story**: A 150–200 word brand narrative for the About page.
- **Founder_Card**: A UI card displaying a co-founder's name, background, and role.
- **Theme_Pillars**: The three core themes — community, connection, and frictionless experience — that must be visually or textually highlighted.
- **Header**: The existing sticky navigation component (`src/components/Header.tsx`).
- **Footer**: The existing footer component (`src/components/Footer.tsx`).

---

## Requirements

### Requirement 1: Homepage About Teaser (Short Story)

**User Story:** As a site visitor, I want to read a brief, compelling brand story on the homepage, so that I can quickly understand what Playdel is and feel invited to learn more.

#### Acceptance Criteria

1. THE About_Section SHALL display the Short_Story (3–4 lines) that references the padel court origin, the two co-founders, and the core problem.
2. THE About_Section SHALL display a clearly labelled call-to-action link that navigates the user to the About_Page.
3. WHEN the user clicks the call-to-action link, THE About_Section SHALL navigate to `/about` without a full page reload (Next.js `<Link>`).
4. THE About_Section SHALL highlight the Theme_Pillars (community, connection, frictionless experience) within the visible copy or as visual badges/tags.
5. THE About_Section SHALL match the existing homepage visual language: background `#E7E7E7`, white cards, `text-black/70` body text, and `--color-primary` (`#a3e635`) accents.

---

### Requirement 2: Dedicated About Page (Full Story)

**User Story:** As a site visitor, I want to read the complete Playdel brand story on a dedicated page, so that I can understand the founders' journey, the problem they solved, and the vision for the platform.

#### Acceptance Criteria

1. THE About_Page SHALL exist at the route `/about` and be server-renderable as a Next.js App Router page.
2. THE About_Page SHALL include the Full_Story (150–200 words) covering: the padel court origin, the repeated frustration of finding partners and booking courts, the decision to build a solution, and the evolution into a community hub.
3. THE About_Page SHALL display a Founder_Card for each co-founder: Sheis (Computer Science background) and Shumail (Law background).
4. THE About_Page SHALL include a closing statement about the future of Playdel that reinforces the Theme_Pillars.
5. THE About_Page SHALL render the existing Header and Footer components so navigation remains consistent.
6. THE About_Page SHALL visually highlight the three Theme_Pillars — community, connection, and frictionless experience — as distinct, scannable elements (e.g., cards, badges, or callout blocks).
7. IF the user navigates to `/about` directly, THE About_Page SHALL render correctly without requiring prior homepage visit (no client-only data dependencies).

---

### Requirement 3: Content Quality & Tone

**User Story:** As a brand stakeholder, I want the brand story copy to feel authentic, human, and startup-focused, so that it resonates with padel players and builds trust in the platform.

#### Acceptance Criteria

1. THE About_Section Short_Story SHALL use friendly, modern, and slightly storytelling-driven language — not corporate or formal.
2. THE About_Page Full_Story SHALL be between 150 and 200 words.
3. THE About_Page Full_Story SHALL explicitly mention both co-founders by name (Sheis and Shumail) and their respective backgrounds (Computer Science and Law).
4. THE About_Page Full_Story SHALL describe the emotional frustration of the repeated struggle before the idea emerged.
5. THE About_Page Full_Story SHALL describe the evolution from a simple idea into a growing startup and community hub.
6. THE About_Page SHALL include a strong closing line about the future of Playdel.

---

### Requirement 4: Navigation Integration

**User Story:** As a site visitor, I want the About page to be reachable from the main navigation, so that I can find it without hunting.

#### Acceptance Criteria

1. THE Header SHALL include an "About" navigation link that points to `/about` (the About_Page) rather than the `#about` anchor.
2. WHEN the user is on the About_Page, THE Header "About" link SHALL remain visually active or highlighted to indicate the current page.
3. THE Header mobile menu SHALL also update the "About" link to point to `/about`.

---

### Requirement 5: Responsive Layout

**User Story:** As a mobile user, I want the About section and About page to be fully readable on small screens, so that I have the same quality experience as on desktop.

#### Acceptance Criteria

1. THE About_Section SHALL use a single-column layout on screens narrower than `md` (768px) and may use a multi-column layout on `md` and above.
2. THE About_Page SHALL use a single-column layout on screens narrower than `md` and a multi-column layout for Founder_Cards on `md` and above.
3. THE About_Page SHALL not overflow horizontally on any viewport width.
