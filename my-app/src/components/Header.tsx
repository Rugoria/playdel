'use client';

import { useState } from 'react';

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!mobileMenuOpen);
  };

  return (
    <header className="sticky top-0 z-50 w-full bg-slate-900/85 backdrop-blur-xl border-b border-border-dim transition-all duration-300">
      <div className="max-w-[1200px] mx-auto px-6 h-[72px] flex items-center justify-between">
        {/* Logo */}
        <a href="/" className="flex items-center gap-3 no-underline text-text-main font-extrabold tracking-wide text-xl">
          <div className="flex items-center justify-center">
            <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
              <rect width="32" height="32" rx="8" className="fill-primary" />
              <path d="M16 8L24 12V20L16 24L8 20V12L16 8Z" fill="#0a0a0a" />
            </svg>
          </div>
          PLAYDEL
        </a>

        {/* Desktop Navigation */}
        <nav className="hidden md:flex items-center gap-8">
          <a href="#how" className="text-text-main text-sm font-medium opacity-80 transition-all duration-200 hover:text-primary hover:opacity-100 no-underline">How it Works</a>
          <a href="#players" className="text-text-main text-sm font-medium opacity-80 transition-all duration-200 hover:text-primary hover:opacity-100 no-underline">For Players</a>
          <a href="#clubs" className="text-text-main text-sm font-medium opacity-80 transition-all duration-200 hover:text-primary hover:opacity-100 no-underline">For Clubs</a>
          <a href="#pricing" className="text-text-main text-sm font-medium opacity-80 transition-all duration-200 hover:text-primary hover:opacity-100 no-underline">Pricing</a>
        </nav>

        {/* Right Side Buttons */}
        <div className="flex items-center gap-4">
          <a href="#get-started" className="hidden md:inline-flex bg-primary text-[#0a0a0a] px-4 py-2.5 rounded-full font-semibold no-underline hover:brightness-105 transition-all">Get Started</a>

          <button
            className="md:hidden block bg-none border-none text-text-main cursor-pointer p-1"
            aria-label="Toggle Menu"
            onClick={toggleMobileMenu}
          >
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <line x1="3" y1="12" x2="21" y2="12"></line>
              <line x1="3" y1="6" x2="21" y2="6"></line>
              <line x1="3" y1="18" x2="21" y2="18"></line>
            </svg>
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      <div className={`fixed top-[73px] left-0 w-full bg-bg-elev overflow-hidden transition-[height] duration-300 ease-[cubic-bezier(0.16,1,0.3,1)] border-b border-border-dim z-[99] ${mobileMenuOpen ? 'h-auto border-b' : 'h-0 border-none'}`}>
        <nav className="flex flex-col p-6 gap-4">
          <a href="#how" onClick={toggleMobileMenu} className="text-base py-3 border-b border-white/5 text-text-main no-underline">How it Works</a>
          <a href="#players" onClick={toggleMobileMenu} className="text-base py-3 border-b border-white/5 text-text-main no-underline">For Players</a>
          <a href="#clubs" onClick={toggleMobileMenu} className="text-base py-3 border-b border-white/5 text-text-main no-underline">For Clubs</a>
          <a href="#pricing" onClick={toggleMobileMenu} className="text-base py-3 border-b border-white/5 text-text-main no-underline">Pricing</a>
          <a href="#get-started" onClick={toggleMobileMenu} className="text-base py-3 border-b-0 text-primary font-semibold no-underline">
            Get Started
          </a>
        </nav>
      </div>
    </header>
  );
}
