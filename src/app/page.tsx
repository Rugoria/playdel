'use client';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import HowToJoin from '@/components/HowToJoin';
import Stats from '@/components/Stats';
import Membership from '@/components/Membership';
import Coaches from '@/components/Coaches';
import Training from '@/components/Training';
import Events from '@/components/Events';
import CtaBanner from '@/components/CtaBanner';
import FAQ from '@/components/FAQ';
import ReadyToJoin from '@/components/ReadyToJoin';
import About from '@/components/About';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="min-h-screen bg-[#E7E7E7]">
      <Header />
      <main className="pb-4">
        <Hero />
        <HowToJoin />
         <About />
        {/* <Stats /> */}
        {/* <Membership /> */}
        {/* <Coaches /> */}
        {/* <Training /> */}
        <Events />
        <CtaBanner />
        <FAQ />
        <ReadyToJoin />
      </main>
      <Footer />
    </div>
  );
}
