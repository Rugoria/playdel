import Image from 'next/image';

export default function Coaches() {
  return (
    <section className="mx-5 mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Left: Text */}
      <div className="flex flex-col justify-center gap-4">
        <p className="text-black/70 text-sm leading-relaxed max-w-[420px]">
          Are you ready to stand beside players and communities, where to take padel to the next level —
          building stronger skills, creating unforgettable experiences.
        </p>
        <div className="flex items-center gap-3">
          <div className="flex -space-x-2">
            {[1, 2, 3].map((i) => (
              <div key={i} className="w-9 h-9 rounded-full bg-primary border-2 border-white flex items-center justify-center text-black font-bold text-xs">
                {i}
              </div>
            ))}
          </div>
          <div>
            <div className="text-black font-bold text-sm">Ms. Trainer</div>
            <div className="flex gap-0.5 mt-0.5">
              {[1,2,3,4,5].map(i => (
                <svg key={i} width="12" height="12" viewBox="0 0 24 24" fill="#a3e635"><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"/></svg>
              ))}
            </div>
          </div>
        </div>
        <div className="flex gap-2">
          <button className="w-9 h-9 rounded-full border border-black/20 flex items-center justify-center hover:bg-black hover:text-white transition-all">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M15 18l-6-6 6-6"/></svg>
          </button>
          <button className="w-9 h-9 rounded-full bg-black text-white flex items-center justify-center hover:bg-primary hover:text-black transition-all">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M9 18l6-6-6-6"/></svg>
          </button>
        </div>
      </div>

      {/* Right: Coach image */}
      <div className="relative rounded-2xl overflow-hidden min-h-[280px]">
        <Image src="/hero-image.jpg" alt="Coach" fill className="object-cover object-top" />
      </div>
    </section>
  );
}
