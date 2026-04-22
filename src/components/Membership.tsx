import Image from 'next/image';

export default function Membership() {
  return (
    <section className="mx-5 mt-6 grid grid-cols-1 lg:grid-cols-2 gap-4">
      {/* Left: Pricing card */}
      <div className="bg-black rounded-2xl p-6 flex flex-col gap-4">
        <div className="flex items-center gap-2">
          <span className="bg-primary text-black text-xs font-bold px-3 py-1 rounded-full">PRO</span>
          <span className="text-white font-bold text-lg">Pro Membership</span>
        </div>

        <div className="flex flex-col gap-3">
          {/* Basic Plan */}
          <div className="bg-white/10 rounded-xl p-4 flex items-center justify-between">
            <div>
              <div className="text-white font-semibold text-sm">Basic Plan</div>
              <div className="text-white/50 text-xs mt-0.5">Access to all courts</div>
            </div>
            <div className="text-right">
              <div className="text-primary font-extrabold text-xl">Free</div>
            </div>
          </div>

          {/* Elite Plan */}
          <div className="bg-primary rounded-xl p-4 flex items-center justify-between">
            <div>
              <div className="text-black font-semibold text-sm">Elite Plan</div>
              <div className="text-black/60 text-xs mt-0.5">Priority booking + coaching</div>
            </div>
            <div className="text-right">
              <div className="text-black font-extrabold text-xl">120$</div>
              <div className="text-black/60 text-xs">/month</div>
            </div>
          </div>
        </div>

        <a href="#pricing" className="bg-primary text-black font-bold text-sm px-5 py-2.5 rounded-full no-underline hover:brightness-105 transition-all text-center">
          View All Plans
        </a>
      </div>

      {/* Right: Court image with overlay */}
      <div className="relative rounded-2xl overflow-hidden min-h-[240px]">
        <Image src="/hero-image.jpg" alt="Padel court" fill className="object-cover" />
        <div className="absolute inset-0 bg-black/30" />
        <div className="absolute bottom-4 left-4 right-4">
          <div className="bg-white/90 backdrop-blur-sm rounded-xl p-4">
            <div className="text-black font-bold text-sm mb-1">Book a Court</div>
            <div className="text-black/60 text-xs">Find available slots near you</div>
          </div>
        </div>
      </div>
    </section>
  );
}
