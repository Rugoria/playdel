'use client';
import Header from '@/components/Header';
import Footer from '@/components/Footer';
import ClubsHero from '@/components/clubs/ClubsHero';

export default function ClubsPage() {
  return (
    <div className="min-h-screen bg-[#E7E7E7]">
      <Header />
      <main className="pb-4">
        <ClubsHero />
      </main>
      <Footer />
    </div>
  );
}
