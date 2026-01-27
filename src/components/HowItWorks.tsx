'use client'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef } from 'react';
gsap.registerPlugin(ScrollTrigger);
export default function HowItWorks() {
    const sectionRef = useRef<HTMLElement>(null);

    useEffect(() => {
        console.log("SectionRef", sectionRef.current);
        const ctx = gsap.context(() => {
            gsap.utils.toArray<HTMLElement>(".step").forEach((step, index) => {
                gsap.from(step, {
                    scrollTrigger: {
                        trigger: step,
                        start: "top 80%",
                        once: true,
                        scrub: true,
                    },
                    opacity: 0,
                    y: 40,
                    duration: 1,
                    ease: "power2.out",
                    delay: index * 0.1,
                });
            });
        }, sectionRef);

        return () => ctx.revert(); // cleanup on unmount
    }, []);

    return (
        <section id="how" className="py-20 bg-[radial-gradient(circle_at_center,rgba(11,18,32,0)_0%,rgba(11,18,32,0.8)_100%)]" ref={sectionRef}>
            <div className="max-w-[1200px] mx-auto px-6">
                <h2 className="text-3xl font-bold mb-4">How It Works — Step by Step</h2>
                <p className="text-muted mb-6 max-w-[720px] text-base leading-relaxed">
                    Playdel connects the padel community by bringing players, clubs, and organizers together on one platform.
                    Find partners, book courts, join local games, and grow your padel network — all in just a few simple steps.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-6 relative">
                    <div className="step bg-gradient-to-br from-slate-900/60 to-slate-950/80 p-8 rounded-[20px] border border-slate-600/10 min-h-[240px] flex flex-col items-center text-center relative transition-all duration-300 backdrop-blur-md overflow-hidden hover:-translate-y-2 hover:border-primary/30 hover:bg-gradient-to-br hover:from-slate-900/80 hover:to-slate-900/90 hover:shadow-2xl group">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/2 rounded-2xl flex items-center justify-center mb-6 text-primary border border-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:text-[#0a0a0a] group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-[0_10px_20px_rgba(163,230,53,0.2)]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path>
                                <circle cx="12" cy="7" r="4"></circle>
                            </svg>
                        </div>
                        <div className="step-content-box">
                            <strong className="block text-lg font-bold mb-2 text-white">Create Profile</strong>
                            <p className="text-sm text-muted m-0 leading-relaxed">Set up your player profile, skill level, and preferences.</p>
                        </div>
                    </div>

                    <div className="step bg-gradient-to-br from-slate-900/60 to-slate-950/80 p-8 rounded-[20px] border border-slate-600/10 min-h-[240px] flex flex-col items-center text-center relative transition-all duration-300 backdrop-blur-md overflow-hidden hover:-translate-y-2 hover:border-primary/30 hover:bg-gradient-to-br hover:from-slate-900/80 hover:to-slate-900/90 hover:shadow-2xl group">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/2 rounded-2xl flex items-center justify-center mb-6 text-primary border border-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:text-[#0a0a0a] group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-[0_10px_20px_rgba(163,230,53,0.2)]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="11" cy="11" r="8"></circle>
                                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
                            </svg>
                        </div>
                        <div className="step-content-box">
                            <strong className="block text-lg font-bold mb-2 text-white">Find Partners</strong>
                            <p className="text-sm text-muted m-0 leading-relaxed">Browse players and clubs in your local area to play with.</p>
                        </div>
                    </div>

                    <div className="step bg-gradient-to-br from-slate-900/60 to-slate-950/80 p-8 rounded-[20px] border border-slate-600/10 min-h-[240px] flex flex-col items-center text-center relative transition-all duration-300 backdrop-blur-md overflow-hidden hover:-translate-y-2 hover:border-primary/30 hover:bg-gradient-to-br hover:from-slate-900/80 hover:to-slate-900/90 hover:shadow-2xl group">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/2 rounded-2xl flex items-center justify-center mb-6 text-primary border border-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:text-[#0a0a0a] group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-[0_10px_20px_rgba(163,230,53,0.2)]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                                <line x1="16" y1="2" x2="16" y2="6"></line>
                                <line x1="8" y1="2" x2="8" y2="6"></line>
                                <line x1="3" y1="10" x2="21" y2="10"></line>
                            </svg>
                        </div>
                        <div className="step-content-box">
                            <strong className="block text-lg font-bold mb-2 text-white">Book Courts</strong>
                            <p className="text-sm text-muted m-0 leading-relaxed">Reserve courts instantly at your favorite padel clubs.</p>
                        </div>
                    </div>

                    <div className="step bg-gradient-to-br from-slate-900/60 to-slate-950/80 p-8 rounded-[20px] border border-slate-600/10 min-h-[240px] flex flex-col items-center text-center relative transition-all duration-300 backdrop-blur-md overflow-hidden hover:-translate-y-2 hover:border-primary/30 hover:bg-gradient-to-br hover:from-slate-900/80 hover:to-slate-900/90 hover:shadow-2xl group">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/2 rounded-2xl flex items-center justify-center mb-6 text-primary border border-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:text-[#0a0a0a] group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-[0_10px_20px_rgba(163,230,53,0.2)]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <circle cx="12" cy="12" r="10"></circle>
                                <line x1="2" y1="12" x2="22" y2="12"></line>
                                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
                            </svg>
                        </div>
                        <div className="step-content-box">
                            <strong className="block text-lg font-bold mb-2 text-white">Join Games</strong>
                            <p className="text-sm text-muted m-0 leading-relaxed">Join existing matches or create your own games.</p>
                        </div>
                    </div>

                    <div className="step bg-gradient-to-br from-slate-900/60 to-slate-950/80 p-8 rounded-[20px] border border-slate-600/10 min-h-[240px] flex flex-col items-center text-center relative transition-all duration-300 backdrop-blur-md overflow-hidden hover:-translate-y-2 hover:border-primary/30 hover:bg-gradient-to-br hover:from-slate-900/80 hover:to-slate-900/90 hover:shadow-2xl group">
                        <div className="w-16 h-16 bg-gradient-to-br from-primary/10 to-primary/2 rounded-2xl flex items-center justify-center mb-6 text-primary border border-primary/10 transition-all duration-300 group-hover:bg-primary group-hover:text-[#0a0a0a] group-hover:scale-110 group-hover:-rotate-3 group-hover:shadow-[0_10px_20px_rgba(163,230,53,0.2)]">
                            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
                            </svg>
                        </div>
                        <div className="step-content-box">
                            <strong className="block text-lg font-bold mb-2 text-white">Grow Network</strong>
                            <p className="text-sm text-muted m-0 leading-relaxed">Track progress and build your local padel community.</p>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
