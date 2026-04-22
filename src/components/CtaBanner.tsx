import Image from 'next/image';

export default function CtaBanner() {
  return (
    <section className="mx-5 mt-6 rounded-2xl overflow-hidden relative min-h-[200px] bg-black flex items-center">
      <div className="absolute inset-0 z-0">
        <Image src="/hero-bg.jpg" alt="Padel" fill className="object-cover opacity-40" />
      </div>
      <div className="relative z-10 p-8 md:p-12 flex flex-col md:flex-row items-start md:items-center justify-between gap-6 w-full">
        <div>
          <div className="text-primary text-xs font-bold uppercase tracking-widest mb-2">Limited Spots</div>
          <h2 className="text-white font-extrabold text-2xl md:text-3xl uppercase leading-tight">
            Padel League Grand Opening<br />
            <span className="text-primary">Hits New Season</span>
          </h2>
        </div>
        <a href="#get-started" className="bg-primary text-black font-bold px-6 py-3 rounded-full no-underline hover:brightness-105 transition-all text-sm shrink-0">
          Register Now
        </a>
      </div>
    </section>
  );
}
