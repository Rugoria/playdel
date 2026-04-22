import Image from 'next/image';

export default function Training() {
  return (
    <section className="mx-5 mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Left: Images grid */}
      <div className="grid grid-cols-2 gap-3">
        <div className="relative rounded-2xl overflow-hidden min-h-[180px]">
          <Image src="/hero-bg.jpg" alt="Training" fill className="object-cover" />
        </div>
        <div className="relative rounded-2xl overflow-hidden min-h-[180px]">
          <Image src="/hero-image.jpg" alt="Training" fill className="object-cover" />
        </div>
        <div className="col-span-2 relative rounded-2xl overflow-hidden min-h-[120px]">
          <Image src="/screen-match.png" alt="Training" fill className="object-cover" />
          <div className="absolute inset-0 bg-black/40 flex items-center justify-center">
            <div className="text-center">
              <div className="text-white font-extrabold text-2xl">4.8k+</div>
              <div className="text-white/70 text-xs">How We Train</div>
            </div>
          </div>
        </div>
      </div>

      {/* Right: Text */}
      <div className="bg-primary rounded-2xl p-8 flex flex-col justify-center gap-4">
        <h2 className="text-black font-extrabold text-3xl leading-tight">
          We One Our Best<br />In Every Training
        </h2>
        <p className="text-black/70 text-sm leading-relaxed">
          Our platform connects you with the best coaches, clubs, and players.
          Train smarter, play better, and grow your padel network.
        </p>
        <div className="flex gap-4 flex-wrap">
          {['Sessions', 'Winners', 'Qualifiers', 'Coaches'].map((item) => (
            <div key={item} className="flex flex-col items-center gap-1">
              <div className="w-8 h-8 bg-black/10 rounded-full flex items-center justify-center">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2"><circle cx="12" cy="12" r="10"/></svg>
              </div>
              <span className="text-black text-xs font-medium">{item}</span>
            </div>
          ))}
        </div>
        <a href="#get-started" className="inline-flex items-center gap-2 bg-black text-white font-bold px-5 py-2.5 rounded-full no-underline hover:bg-black/80 transition-all text-sm w-fit">
          Join Now
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
        </a>
      </div>
    </section>
  );
}
