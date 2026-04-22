import Image from 'next/image';

export default function ClubsHero() {
  return (
    <section className="mx-5 mt-4 rounded-2xl overflow-hidden relative min-h-[520px] flex items-end bg-black">
      {/* Full background image */}
      <div className="absolute inset-0 z-0">
        <Image
          src="/paddles-balls-ready-playing-tennis-inside.jpg"
          alt="Padel court"
          fill
          className="object-cover object-center"
          priority
        />
        {/* Dark gradient overlay — stronger at bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/30 to-black/10" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full p-8 md:p-12 grid grid-cols-1 lg:grid-cols-2 gap-8 items-end">

        {/* Left: Members + Headline */}
        <div>
          {/* Active members avatars */}
          <div className="flex items-center gap-3 mb-5">
            <div className="flex -space-x-3">
              {[1, 2, 3, 4].map((i) => (
                <div
                  key={i}
                  className="w-9 h-9 rounded-full border-2 border-white bg-primary overflow-hidden"
                  style={{ zIndex: 4 - i }}
                >
                  <div className="w-full h-full bg-gradient-to-br from-primary to-green-600 flex items-center justify-center text-black text-xs font-bold">
                    {i}
                  </div>
                </div>
              ))}
            </div>
            <div>
              <div className="text-white font-bold text-sm">1.200+</div>
              <div className="text-white/60 text-xs">Active members</div>
            </div>
          </div>

          {/* Headline */}
          <h1 className="text-white font-extrabold text-4xl md:text-5xl lg:text-6xl leading-[1.05]">
            Rackets,<br />
            Laughs, and<br />
            Good Times.
          </h1>
        </div>

        {/* Right: Description + Buttons */}
        <div className="flex flex-col gap-5 lg:items-start lg:justify-end">
          <p className="text-white/80 text-sm leading-relaxed max-w-[320px]">
            Experience padel like never before — friendly matches, skill-building sessions, and a community that feels like family.
          </p>

          <div className="flex flex-wrap items-center gap-3">
            {/* Join the Group */}
            <a
              href="#join"
              className="inline-flex items-center gap-2 bg-primary text-black font-bold px-5 py-2.5 rounded-full no-underline hover:brightness-105 transition-all text-sm"
            >
              Join the Group
              <span className="w-6 h-6 rounded-full bg-black flex items-center justify-center shrink-0">
                <svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="white" strokeWidth="2.5">
                  <path d="M5 12h14M12 5l7 7-7 7" />
                </svg>
              </span>
            </a>

            {/* Learn more */}
            <a
              href="#learn"
              className="inline-flex items-center gap-2 border border-white/50 text-white font-medium px-5 py-2.5 rounded-full no-underline hover:bg-white/10 transition-all text-sm"
            >
              Learn more
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
