import Image from 'next/image';

export default function ReadyToJoin() {
  return (
    <section className="mx-5 mt-6 overflow-hidden relative min-h-[500px] flex items-center">
      {/* Background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/paddles-balls-ready-playing-tennis-inside.jpg"
          alt="Padel court"
          fill
          className="object-cover object-center"
        />
        {/* Dark overlay */}
        <div className="absolute inset-0 bg-black/35" />
      </div>

      {/* Content - Left aligned with padding */}
      <div className="relative z-10 px-8 md:px-12 py-12 max-w-[600px]">
        <h2 className="text-white font-extrabold text-3xl md:text-4xl lg:text-5xl leading-tight mb-4">
          Ready to play<br />with us?
        </h2>
        <p className="text-white/90 text-sm md:text-base mb-6 leading-relaxed max-w-[420px]">
          Experience padel like never before — friendly matches, skill-building sessions, and a community that feels like family.
        </p>
        
        {/* Buttons */}
        <div className="flex flex-wrap items-center gap-3">
          <a
            href="#get-started"
            className="inline-flex items-center gap-2 bg-primary text-black font-bold px-6 py-2.5 rounded-full no-underline hover:brightness-105 transition-all text-sm"
          >
            Join the Group
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
              <path d="M5 12h14M12 5l7 7-7 7" />
            </svg>
          </a>
          <a
            href="#learn-more"
            className="inline-flex items-center gap-2 border-2 border-white text-white font-semibold px-6 py-2 rounded-full no-underline hover:bg-white/10 transition-all text-sm"
          >
            Learn more
          </a>
        </div>
      </div>
    </section>
  );
}
