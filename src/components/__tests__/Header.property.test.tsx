import React from 'react';
import { render } from '@testing-library/react';
import * as fc from 'fast-check';
import Header from '../Header';

const mockUsePathname = jest.fn(() => '/');

jest.mock('next/navigation', () => ({
  usePathname: () => mockUsePathname(),
}));

jest.mock('next/image', () => ({
  __esModule: true,
  default: (props: React.ImgHTMLAttributes<HTMLImageElement>) => <img {...props} />,
}));

describe('Header — Unit Tests', () => {
  beforeEach(() => {
    mockUsePathname.mockReturnValue('/');
  });

  it('About link href is /about (not #about)', () => {
    const { getAllByRole } = render(<Header />);
    const aboutLinks = getAllByRole('link', { name: /about/i });
    expect(aboutLinks.length).toBeGreaterThan(0);
    aboutLinks.forEach((link) => {
      expect(link.getAttribute('href')).toBe('/about');
      expect(link.getAttribute('href')).not.toBe('#about');
    });
  });

  it('About link does not have active class when pathname is /', () => {
    mockUsePathname.mockReturnValue('/');
    const { getAllByRole } = render(<Header />);
    const aboutLinks = getAllByRole('link', { name: /about/i });
    aboutLinks.forEach((link) => {
      expect(link.classList.contains('bg-black')).toBe(false);
    });
  });
});

// Feature: brand-story-about-page, Property 2: Header About link always points to /about
describe('Header — Property Tests', () => {
  it('Header About link always has href /about in all nav contexts', () => {
    fc.assert(
      fc.property(fc.boolean(), () => {
        const { getAllByRole } = render(<Header />);
        const aboutLinks = getAllByRole('link', { name: /about/i });
        return aboutLinks.every((l) => l.getAttribute('href') === '/about');
      }),
      { numRuns: 100 }
    );
  });

  // Feature: brand-story-about-page, Property 3: Header About link is active when pathname is /about
  it('Header About link has bg-black class when pathname is /about, and no other nav link does', () => {
    fc.assert(
      fc.property(fc.constant('/about'), (pathname) => {
        mockUsePathname.mockReturnValue(pathname);
        const { getAllByRole } = render(<Header />);
        const navLinks = getAllByRole('link', { name: /^(home|clubs|about)$/i });
        const aboutLink = navLinks.find((l) => /about/i.test(l.textContent ?? ''));
        const otherLinks = navLinks.filter((l) => !/about/i.test(l.textContent ?? ''));
        return (
          aboutLink?.classList.contains('bg-black') === true &&
          otherLinks.every((l) => !l.classList.contains('bg-black'))
        );
      }),
      { numRuns: 100 }
    );
  });
});
