import Image from 'next/image';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import { FULL_STORY_TEXT } from './content';

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

const themePillars = [
  {
    title: 'Community',
    icon: '🤝',
    description: 'We believe padel is better together. Playdel connects players, clubs, and organizers into one thriving network.',
  },
  {
    title: 'Connection',
    icon: '🎾',
    description: 'Finding your next partner or game should be effortless. We make meaningful connections happen on and off the court.',
  },
  {
    title: 'Frictionless Experience',
    icon: '⚡',
    description: 'From booking to playing, every step should feel smooth. We remove the barriers so you can focus on the game.',
  },
];

export default function AboutPage() {
  return (
    <div className="bg-[#E7E7E7] min-h-screen">
      <Header />

      {/* Hero — full-width court image with overlay */}
      <div className="relative h-[480px] md:h-[560px] overflow-hidden">
        <Image
          src="/padel-court-bg.jpg"
          alt="Padel court"
          fill
          className="object-cover object-center"
          priority
        />
        <div className="absolute inset-0 bg-black/60" />
        <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-6">
          <span className="bg-primary text-black text-xs font-bold px-4 py-1.5 rounded-full uppercase tracking-widest mb-6">
            Our Story
          </span>
          <h1 className="text-5xl md:text-7xl font-extrabold text-white uppercase leading-tight mb-4">
            Built From<br />the Court Up
          </h1>
          <p className="text-white/70 text-lg max-w-xl">
            Where padel players connect — and where it all began.
          </p>
        </div>
      </div>

      <main className="max-w-[1200px] mx-auto px-6 py-16">

        {/* Full Story — two-column: text + image */}
        <section className="mb-16">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div>
              <h2 className="text-3xl font-extrabold text-black uppercase mb-6">Our Story</h2>
              {FULL_STORY_TEXT.split('\n\n').map((paragraph, i) => (
                <p key={i} className="text-black/70 text-base leading-relaxed mb-4 last:mb-0">
                  {paragraph}
                </p>
              ))}
            </div>
            <div className="relative h-[380px] rounded-2xl overflow-hidden">
              <Image
                src="/paddles-balls-ready-playing-tennis-inside.jpg"
                alt="Padel equipment"
                fill
                className="object-cover object-center"
              />
              <div className="absolute inset-0 bg-linear-to-t from-black/40 to-transparent" />
              <div className="absolute bottom-6 left-6">
                <div className="bg-primary px-4 py-3 rounded-xl inline-block">
                  <div className="text-black font-extrabold text-2xl leading-none">2K+</div>
                  <div className="text-black/70 text-xs font-medium mt-0.5">Active Players</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Theme Pillars — dark banner with bg image */}
        <section className="mb-16">
          <div className="relative rounded-2xl overflow-hidden">
            <Image
              src="/hero-bg.jpg"
              alt="Padel court background"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/75" />
            <div className="relative z-10 p-8 md:p-12">
              <h2 className="text-3xl font-extrabold text-white uppercase mb-8 text-center">
                What Drives Us
              </h2>
              <div className="grid md:grid-cols-3 gap-6">
                {themePillars.map((pillar) => (
                  <div
                    key={pillar.title}
                    className="bg-white/10 border border-white/20 rounded-xl p-6 backdrop-blur-sm hover:bg-white/20 transition-colors"
                  >
                    <span className="text-3xl mb-4 block">{pillar.icon}</span>
                    <span className="inline-block bg-primary text-black text-xs font-bold px-3 py-1 rounded-full mb-3">
                      {pillar.title}
                    </span>
                    <p className="text-white/70 text-sm leading-relaxed">{pillar.description}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Founders */}
        <section className="mb-16">
          <h2 className="text-3xl font-extrabold text-black uppercase mb-8">Meet the Founders</h2>
          <div className="grid md:grid-cols-2 gap-6">
            <FounderCard name="Sheis" background="Computer Science" role="Technical Co-Founder" />
            <FounderCard name="Shumail" background="Law" role="Operations Co-Founder" />
          </div>
        </section>

        {/* Closing — image banner */}
        <section>
          <div className="relative rounded-2xl overflow-hidden min-h-[220px]">
            <Image
              src="/hero-image.jpg"
              alt="Padel players"
              fill
              className="object-cover object-center"
            />
            <div className="absolute inset-0 bg-black/65" />
            <div className="relative z-10 flex items-center justify-center min-h-[220px] px-8 py-12 text-center">
              <p className="text-white text-xl md:text-2xl leading-relaxed font-medium max-w-2xl">
                The future of Playdel is about more than technology — it&apos;s about{' '}
                <span className="text-primary font-bold">community</span>,{' '}
                <span className="text-primary font-bold">connection</span>, and removing every
                barrier between you and your next game.{' '}
                <span className="font-bold">We&apos;re just getting started.</span>
              </p>
            </div>
          </div>
        </section>

      </main>

      <Footer />
    </div>
  );
}
