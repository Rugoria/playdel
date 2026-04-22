import Link from "next/link";
import Image from "next/image";

const pillars = [
  {
    label: "Community",
    icon: "🤝",
    desc: "A growing network of players, clubs, and organizers.",
  },
  {
    label: "Connection",
    icon: "🎾",
    desc: "Find partners, join games, and stay in sync.",
  },
  {
    label: "Frictionless Experience",
    icon: "⚡",
    desc: "Book courts and manage games without the hassle.",
  },
];

export default function About() {
  return (
    <section id="about" className="mx-5 mt-6">
      <div className="bg-white  overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-2 min-h-[520px]">

          {/* Left: Image panel */}
          <div className="relative min-h-[300px] lg:min-h-full">
            <Image
              src="/padel-court-bg.jpg"
              alt="Padel court"
              fill
              className="object-cover object-center"
            />
            {/* Dark gradient overlay */}
            <div className="absolute inset-0 bg-linear-to-r from-black/60 via-black/20 to-transparent" />

            {/* Floating stat cards */}
            <div className="absolute bottom-6 left-6 flex flex-col gap-3">
              <div
                className="bg-primary px-4 py-3"
                style={{ clipPath: "polygon(0 0, 90% 0, 100% 20%, 100% 100%, 10% 100%, 0 80%)" }}
              >
                <div className="text-black font-extrabold text-2xl leading-none">2K+</div>
                <div className="text-black/70 text-xs font-medium mt-0.5">Active Players</div>
              </div>
              <div
                className="bg-white/90 backdrop-blur-sm px-4 py-3"
                style={{ clipPath: "polygon(0 0, 90% 0, 100% 20%, 100% 100%, 10% 100%, 0 80%)" }}
              >
                <div className="text-black font-extrabold text-2xl leading-none">50+</div>
                <div className="text-black/60 text-xs font-medium mt-0.5">Partner Clubs</div>
              </div>
            </div>

            {/* Origin badge */}
            <div className="absolute top-6 left-6">
              <span className="bg-primary text-black text-xs font-bold px-3 py-1.5 rounded-full uppercase tracking-wide">
                Built From the Court Up
              </span>
            </div>
          </div>

          {/* Right: Content panel */}
          <div className="flex flex-col justify-between p-8 md:p-10">
            {/* Header */}
            <div>
              <p className="text-primary text-xs font-bold uppercase tracking-widest mb-3">
                Our Story
              </p>
              <h2 className="text-black font-extrabold text-4xl md:text-5xl leading-tight uppercase mb-6">
                WHERE IT ALL<br />BEGAN
              </h2>
              <p className="text-black/60 text-sm leading-relaxed mb-8 max-w-md">
                Playdel started on court. Co-founders{" "}
                <span className="text-black font-semibold">Sheis</span> (Computer Science) and{" "}
                <span className="text-black font-semibold">Shumail</span> (Law) played padel
                regularly and kept hitting the same wall — finding partners, booking courts, and
                staying in sync with local clubs was harder than it should be. So they built the
                platform they wished existed.
              </p>

              {/* Pillar cards */}
              <div className="flex flex-col gap-3 mb-8">
                {pillars.map((p) => (
                  <div
                    key={p.label}
                    className="flex items-center gap-4 bg-black/5 border border-black/10 rounded-xl px-4 py-3 hover:bg-black/10 transition-colors"
                  >
                    <span className="text-xl">{p.icon}</span>
                    <div>
                      <div className="text-black font-semibold text-sm">{p.label}</div>
                      <div className="text-black/50 text-xs mt-0.5">{p.desc}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* CTA */}
            <Link
              href="/about"
              className="inline-flex items-center gap-2 bg-primary text-black font-bold text-sm px-6 py-3 rounded-full hover:brightness-105 transition-all self-start"
            >
              Read Our Full Story
              <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                <path d="M5 12h14M12 5l7 7-7 7" />
              </svg>
            </Link>
          </div>

        </div>
      </div>
    </section>
  );
}
