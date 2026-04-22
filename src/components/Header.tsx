'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { usePathname } from 'next/navigation';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 10);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const pathname = usePathname();

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Clubs', href: '/clubs' },
    { label: 'About', href: '/about' },
  ];

  return (
    <header
      className={`sticky top-0 z-50 w-full transition-all duration-300 ${
        scrolled
          ? 'bg-[#F6F6F6]/95 backdrop-blur-md shadow-[0_2px_20px_rgba(0,0,0,0.08)]'
          : 'bg-[#F6F6F6]'
      }`}
    >
      <div className="mx-5 h-[64px] flex items-center justify-between">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2 no-underline shrink-0">
          <Image
            src="/playdel-removebg-preview.png"
            alt="Playdel"
            width={110}
            height={36}
            className="h-8 w-auto object-contain"
          />
        </Link>

        {/* Desktop Nav — centered pill */}
        <nav className="hidden md:flex items-center bg-white border border-black/10 rounded-full px-2 py-1 gap-1 shadow-sm">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={`text-sm font-medium px-4 py-1.5 rounded-full no-underline transition-all duration-200 ${
                pathname === link.href
                  ? 'bg-black text-white'
                  : 'text-black/70 hover:bg-black hover:text-white'
              }`}
            >
              {link.label}
            </Link>
          ))}
        </nav>

        {/* Right: Login + CTA */}
        <div className="flex items-center gap-3">
          <a
            href="#get-started"
            className="bg-primary text-black px-5 py-2 text-sm font-semibold no-underline"
            style={{ clipPath: 'polygon(0 0, 85% 0, 100% 20%, 100% 100%, 15% 100%, 0 80%)' }}
          >
            Get Started
          </a>

          {/* Mobile hamburger */}
          <button
            className="md:hidden text-black p-1"
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            aria-label="Toggle Menu"
          >
            {mobileMenuOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" />
              </svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="18" x2="21" y2="18" />
              </svg>
            )}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden bg-[#F6F6F6] border-t border-black/10 px-5 py-4 flex flex-col gap-1">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              onClick={() => setMobileMenuOpen(false)}
              className={`text-sm py-2.5 px-3 rounded-xl no-underline transition-colors ${
                pathname === link.href
                  ? 'bg-black text-white'
                  : 'text-black/70 hover:bg-black/5'
              }`}
            >
              {link.label}
            </Link>
          ))}
          <a
            href="#get-started"
            onClick={() => setMobileMenuOpen(false)}
            className="mt-2 bg-primary text-black text-sm font-semibold px-4 py-2.5 rounded-full no-underline text-cente transition-all"
          >
            Get Started
          </a>
        </div>
      )}
    </header>
  );
}
