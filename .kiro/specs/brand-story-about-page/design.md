# Design Document: Brand Story & About Page

## Overview

The Brand Story & About Page feature introduces Playdel's origin story and founding team through two complementary surfaces:

1. **Homepage About Teaser** (`src/components/About.tsx`): A concise 3-4 line brand story with visual theme pillar badges and a CTA linking to the full About page
2. **Dedicated About Page** (`src/app/about/page.tsx`): A comprehensive standalone page featuring the full 150-200 word brand narrative, founder profiles, theme pillar highlights, and a forward-looking closing statement

The design maintains visual consistency with Playdel's existing design system: `#E7E7E7` background, white cards with subtle borders, `text-black/70` body text, and `--color-primary` (#a3e635) accents. The feature leverages Next.js App Router for server-side rendering and client-side navigation, ensuring fast initial loads and seamless transitions.

## Architecture

### Component Structure

```
src/
├── components/
│   ├── About.tsx (updated)           # Homepage teaser with short story + CTA
│   ├── Header.tsx (updated)          # Navigation with /about link + active state
│   └── Footer.tsx (reused as-is)     # Existing footer component
├── app/
│   ├── about/
│   │   └── page.tsx (new)            # Full About page with story + founders
│   └── page.tsx (updated)            # Homepage imports updated About component
```

### Navigation Flow

```
Homepage → About Teaser (Short Story)
              ↓ (CTA Link)
         /about Page (Full Story + Founders)
```

The Header component's "About" link will be updated from `#about` anchor to `/about` route, with active state styling when on the About page.

## Components and Interfaces

### 1. About Component (Homepage Teaser)

**File:** `src/components/About.tsx`

**Purpose:** Display short brand story with theme pillar badges and CTA to full About page

**Props:** None (static content)

**Structure:**
```tsx
<section id="about" className="py-16">
  <div className="max-w-[1200px] mx-auto px-6">
    <h2>Our Story — Built From the Court Up</h2>
    
    {/* Short Story (3-4 lines) */}
    <p className="text-muted text-lg mb-6">
      {/* Padel court origin, co-founders, core problem */}
    </p>
    
    {/* Theme Pillar Badges */}
    <div className="flex flex-wrap gap-3 mb-6">
      <span className="badge">Community</span>
      <span className="badge">Connection</span>
      <span className="badge">Frictionless Experience</span>
    </div>
    
    {/* CTA Link */}
    <Link href="/about" className="cta-button">
      Read Our Full Story →
    </Link>
  </div>
</section>
```

**Styling:**
- Background: `#E7E7E7` (matches homepage)
- Text: `text-black/70` for body, `text-white` for emphasized names
- Badges: `bg-primary` with `text-black`, rounded-full, px-4 py-1.5
- CTA: `bg-white` with `border border-black/10`, hover state with `bg-primary` transition

### 2. About Page

**File:** `src/app/about/page.tsx`

**Purpose:** Server-rendered standalone page with full brand story, founder profiles, and theme pillars

**Structure:**
```tsx
export default function AboutPage() {
  return (
    <div className="min-h-screen bg-[#E7E7E7]">
      <Header />
      
      <main className="max-w-[1200px] mx-auto px-6 py-16">
        {/* Hero Section */}
        <h1>About Playdel</h1>
        <p className="lead">Where padel players connect</p>
        
        {/* Full Story (150-200 words) */}
        <section className="full-story">
          {/* Origin, frustration, decision, evolution */}
        </section>
        
        {/* Theme Pillars Highlight */}
        <section className="theme-pillars">
          <div className="pillar-card">Community</div>
          <div className="pillar-card">Connection</div>
          <div className="pillar-card">Frictionless Experience</div>
        </section>
        
        {/* Founder Cards */}
        <section className="founders">
          <h2>Meet the Founders</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <FounderCard name="Sheis" background="Computer Science" />
            <FounderCard name="Shumail" background="Law" />
          </div>
        </section>
        
        {/* Closing Statement */}
        <section className="closing">
          {/* Future vision reinforcing theme pillars */}
        </section>
      </main>
      
      <Footer />
    </div>
  );
}
```

**Founder Card Component:**
```tsx
interface FounderCardProps {
  name: string;
  background: string;
  role?: string;
}

function FounderCard({ name, background, role }: FounderCardProps) {
  return (
    <div className="bg-white rounded-[20px] border border-black/10 p-8">
      <h3 className="text-2xl font-bold mb-2">{name}</h3>
      <p className="text-primary font-semibold mb-3">{background}</p>
      {role && <p className="text-black/70">{role}</p>}
    </div>
  );
}
```

### 3. Header Component Updates

**File:** `src/components/Header.tsx`

**Changes Required:**
1. Update "About" link from `#about` to `/about`
2. Add active state detection using `usePathname()` hook
3. Apply active styling when pathname is `/about`

**Implementation:**
```tsx
'use client';
import { usePathname } from 'next/navigation';
import Link from 'next/link';

export default function Header() {
  const pathname = usePathname();
  
  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Clubs', href: '/clubs' },
    { label: 'About', href: '/about' }, // Updated from #about
  ];
  
  return (
    <header>
      <nav>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={`nav-link ${pathname === link.href ? 'active' : ''}`}
          >
            {link.label}
          </Link>
        ))}
      </nav>
    </header>
  );
}
```

**Active State Styling:**
- Background: `bg-black` (instead of hover state)
- Text: `text-white`
- Applied when `pathname === link.href`

## Data Models

### Content Data Structure

While the content is static (hardcoded in components), it follows this conceptual structure:

```typescript
interface BrandStory {
  short: string;        // 3-4 lines for homepage teaser
  full: string;         // 150-200 words for About page
}

interface Founder {
  name: string;         // "Sheis" | "Shumail"
  background: string;   // "Computer Science" | "Law"
  role?: string;        // Optional role description
}

interface ThemePillar {
  title: string;        // "Community" | "Connection" | "Frictionless Experience"
  description?: string; // Optional expanded description
}

interface AboutContent {
  story: BrandStory;
  founders: Founder[];
  themePillars: ThemePillar[];
  closingStatement: string;
}
```

### Content Copy

**Short Story (Homepage):**
```
Playdel started on court. Co-founders Sheis (Computer Science) and Shumail (Law) 
played padel regularly and kept hitting the same wall: finding partners, booking 
courts at the right times, and staying in sync with local clubs was harder than 
it should be. They decided to build the platform they wished existed.
```

**Full Story (About Page):**
```
Playdel was born from frustration on the padel court. Co-founders Sheis, a Computer 
Science graduate, and Shumail, with a background in Law, were passionate players who 
repeatedly faced the same challenges: finding reliable partners, booking courts at 
convenient times, and connecting with the local padel community.

After countless missed games and scheduling headaches, they realized the problem 
wasn't just theirs—it was systemic. The padel community lacked a central hub to 
bring players, clubs, and organizers together. So they built one.

What started as a simple booking tool has evolved into a thriving community platform. 
Playdel now connects thousands of players, streamlines club operations, and makes 
organizing games effortless. We're not just building software—we're building the 
infrastructure for padel to grow.

Today, Playdel is a startup driven by the same passion that brought us to the court 
in the first place: making padel accessible, social, and friction-free for everyone.
```

**Founder Details:**
- **Sheis**: Computer Science background, technical co-founder
- **Shumail**: Law background, operations co-founder

**Closing Statement:**
```
The future of Playdel is about more than technology—it's about community, connection, 
and removing every barrier between you and your next game. We're just getting started.
```


## Correctness Properties

*A property is a characteristic or behavior that should hold true across all valid executions of a system — essentially, a formal statement about what the system should do. Properties serve as the bridge between human-readable specifications and machine-verifiable correctness guarantees.*

### Property 1: Full Story Word Count

*For any* rendering of the About page, the word count of the Full_Story narrative text SHALL be between 150 and 200 words (inclusive).

**Validates: Requirements 2.2, 3.2**

### Property 2: Header About Link Points to /about

*For any* rendering of the Header component, the "About" navigation link SHALL have an `href` value of `/about` — not `#about` or any other value — in both the desktop nav and the mobile menu (which share the same `navLinks` array).

**Validates: Requirements 4.1, 4.3**

### Property 3: Header Active State on About Page

*For any* rendering of the Header component when the current pathname is `/about`, the "About" navigation link SHALL have the active styling class applied (e.g., `bg-black text-white`), and no other nav link SHALL have that active class.

**Validates: Requirements 4.2**

## Error Handling

### Navigation Errors

- If the `/about` route is not found (e.g., missing `page.tsx`), Next.js will render its default 404 page. No custom error handling is needed beyond ensuring the file exists.
- The Header's `usePathname()` hook is safe to call in a client component and will never throw; it returns `null` during static rendering, so the active state comparison should guard against null: `pathname === link.href`.

### Content Rendering

- The About page is fully static (no data fetching), so there are no async error states to handle.
- The `FounderCard` component receives all required props as hardcoded values, so there are no missing-prop scenarios at runtime.

### Responsive Layout

- Tailwind's responsive utilities (`md:grid-cols-2`) handle layout shifts declaratively. No JavaScript error handling is needed for responsive behavior.
- The `overflow-x: hidden` pattern (or `max-w-[1200px] mx-auto` container) prevents horizontal overflow without requiring runtime checks.

## Testing Strategy

### Dual Testing Approach

Both unit tests and property-based tests are used together for comprehensive coverage.

**Unit tests** cover:
- Specific content presence (founder names, backgrounds, theme pillars, CTA link)
- Component composition (Header and Footer rendered on About page)
- Structural checks (server component, no `use client` directive on About page)
- Responsive class presence (Tailwind breakpoint classes on layout elements)

**Property-based tests** cover:
- Universal properties that must hold across all valid inputs/states

### Property-Based Testing

Library: **fast-check** (TypeScript-native, works with React Testing Library)

Each property test runs a minimum of **100 iterations**.

Each test is tagged with a comment referencing the design property:
`// Feature: brand-story-about-page, Property {N}: {property_text}`

#### Property Test 1: Full Story Word Count

```typescript
// Feature: brand-story-about-page, Property 1: Full Story word count is between 150 and 200 words
it('Full_Story word count is always between 150 and 200 words', () => {
  fc.assert(
    fc.property(fc.constant(FULL_STORY_TEXT), (text) => {
      const wordCount = text.trim().split(/\s+/).length;
      return wordCount >= 150 && wordCount <= 200;
    }),
    { numRuns: 100 }
  );
});
```

#### Property Test 2: Header About Link Href

```typescript
// Feature: brand-story-about-page, Property 2: Header About link always points to /about
it('Header About link always has href /about in all nav contexts', () => {
  fc.assert(
    fc.property(fc.boolean(), (mobileMenuOpen) => {
      const { getAllByRole } = render(<Header />);
      const aboutLinks = getAllByRole('link', { name: /about/i });
      return aboutLinks.every(link => link.getAttribute('href') === '/about');
    }),
    { numRuns: 100 }
  );
});
```

#### Property Test 3: Header Active State

```typescript
// Feature: brand-story-about-page, Property 3: Header About link is active when pathname is /about
it('Header About link has active class when pathname is /about', () => {
  fc.assert(
    fc.property(fc.constant('/about'), (pathname) => {
      mockUsePathname.mockReturnValue(pathname);
      const { getByRole } = render(<Header />);
      const aboutLink = getByRole('link', { name: /about/i });
      return aboutLink.classList.contains('bg-black');
    }),
    { numRuns: 100 }
  );
});
```

### Unit Tests

Key unit test cases:

1. **About component renders Short_Story with founder names** — render `<About />`, assert "Sheis" and "Shumail" appear in the output
2. **About component renders CTA link to /about** — render `<About />`, assert a link with `href="/about"` exists
3. **About component renders all three Theme_Pillar badges** — assert "Community", "Connection", and "Frictionless Experience" appear
4. **About page renders Header and Footer** — render `<AboutPage />`, assert Header and Footer are present
5. **About page renders both Founder_Cards** — assert cards for Sheis (Computer Science) and Shumail (Law) are present
6. **About page renders Theme_Pillars as distinct elements** — assert three pillar elements exist
7. **About page has no `use client` directive** — read the file and assert it does not start with `'use client'`
8. **About page Founder_Cards use md:grid-cols-2** — assert the founders grid container has the `md:grid-cols-2` class
