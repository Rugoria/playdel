'use client';
import Hero from '@/components/Hero';
import Mission from '@/components/Mission';
import HowItWorks from '@/components/HowItWorks';
import InteractiveSteps from '@/components/InteractiveSteps';
import Clubs from '@/components/Clubs';
import ForPlayers from '@/components/ForPlayers';
import Trust from '@/components/Trust';
import About from '@/components/About';
import Header from '@/components/Header';
import Footer from '@/components/Footer';

export default function Home() {
  return (
    <div className="flex min-h-screen flex-col bg-bg">
      <Header />
      <Hero />
      <HowItWorks />
      <Mission />
      {/* <InteractiveSteps /> */}
      <ForPlayers />
      <Clubs />
      <Trust />
      <About />
      <Footer />
    </div>
  );
}
