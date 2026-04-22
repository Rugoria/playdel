'use client'
import { gsap } from 'gsap';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import { useEffect, useRef, useState } from 'react';
import type { ReactElement } from 'react';

gsap.registerPlugin(ScrollTrigger);

type BlockType = 'booking' | 'matchmaking' | 'ranking' | 'networking';

interface StepContent {
    title: string;
    description: string;
    image?: string;
}

interface BlockData {
    title: string;
    subtitle: string;
    icon: ReactElement;
    steps: StepContent[];
}

type ViewMode = 'blocks' | 'steps';

const blockData: Record<BlockType, BlockData> = {
    // Single source of truth for each feature card and its step-by-step content.
    booking: {
        title: 'Booking',
        subtitle: 'Reserve courts instantly at your favorite padel clubs.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <rect x="3" y="4" width="18" height="18" rx="2" ry="2"></rect>
                <line x1="16" y1="2" x2="16" y2="6"></line>
                <line x1="8" y1="2" x2="8" y2="6"></line>
                <line x1="3" y1="10" x2="21" y2="10"></line>
            </svg>
        ),
        steps: [
            {
                title: 'Browse Available Courts',
                description: 'Explore padel courts near you with real-time availability. Filter by location, amenities, and time slots to find the perfect court.',
                image: '/browse_courts.jpeg'
            },
            {
                title: 'Select Date & Time',
                description: 'Choose your preferred date and time slot. View court availability at a glance with our intuitive calendar interface.',
                image: '/Date_Time.jpeg'
            },
            {
                title: 'Confirm Your Booking',
                description: 'Complete your reservation instantly with secure payment. Receive confirmation and add the booking to your calendar.',
                image: '/confirm_booking.jpeg'
            }
        ]
    },
    matchmaking: {
        title: 'Matchmaking',
        subtitle: 'Find and connect with players based on skill level and availability.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="11" cy="11" r="8"></circle>
                <line x1="21" y1="21" x2="16.65" y2="16.65"></line>
            </svg>
        ),
        steps: [
            {
                title: 'Join an Open Match',
                description: 'Join open matches tailored to your skill level, compete with new players, and discover different playing styles on court.',
                image: '/matchmaking_screen.jpeg'
            },
            {
                title: 'Create an Open Match',
                description: 'Choose a date and time, go public, and compete to push your ranking higher.',
                image: '/matchmaking_form.jpeg'
            }
        ]
    },
    ranking: {
        title: 'Ranking',
        subtitle: 'Track your performance and climb the leaderboards with each game.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <circle cx="12" cy="12" r="10"></circle>
                <line x1="2" y1="12" x2="22" y2="12"></line>
                <path d="M12 2a15.3 15.3 0 0 1 4 10 15.3 15.3 0 0 1-4 10 15.3 15.3 0 0 1-4-10 15.3 15.3 0 0 1 4-10z"></path>
            </svg>
        ),
        steps: [
            {
                title: 'Record Match Results',
                description: 'Log your game scores after each match. Track wins, losses, and performance metrics automatically.'
            },
            {
                title: 'Climb the Leaderboard',
                description: 'Watch your ranking improve as you win more games. Compare your performance with players in your region.'
            },
            {
                title: 'Earn Achievements',
                description: 'Unlock badges and milestones as you progress. Showcase your accomplishments and skill improvements.'
            }
        ]
    },
    networking: {
        title: 'Networking',
        subtitle: 'Build connections and grow your local padel community.',
        icon: (
            <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                <polyline points="22 12 18 12 15 21 9 3 6 12 2 12"></polyline>
            </svg>
        ),
        steps: [
            {
                title: 'Join Communities',
                description: 'Discover and join local padel groups and clubs. Participate in community events and tournaments.'
            },
            {
                title: 'Expand Your Circle',
                description: 'Connect with players, coaches, and organizers. Build meaningful relationships within the padel community.'
            },
            {
                title: 'Stay Updated',
                description: 'Receive updates about local events, tournaments, and training sessions. Never miss an opportunity to play.'
            }
        ]
    }
};

const IPhoneMockup = ({ imageUrl }: { imageUrl?: string }) => {
    return (
        <div className="relative w-[180px] h-[360px] mx-auto">
            {/* iPhone Frame */}
            <div className="absolute inset-0 rounded-[32px] bg-gradient-to-b from-gray-800 to-gray-900 p-1.5 shadow-2xl">
                {/* Screen */}
                <div className="relative w-full h-full bg-white rounded-[26px] overflow-hidden">
                    {/* Notch */}
                    <div className="absolute top-0 left-1/2 -translate-x-1/2 w-24 h-4 bg-gray-900 rounded-b-3xl z-10"></div>
                    
                    {/* Screen Content */}
                    <div className="w-full h-full bg-gradient-to-br from-slate-100 to-slate-200">
                        {imageUrl && (
                            <img src={imageUrl} alt="Screen content" className="w-full h-full object-cover" />
                        )}
                    </div>
                </div>
                
                {/* Side Buttons */}
                <div className="absolute -left-0.5 top-14 w-0.5 h-7 bg-gray-700 rounded-l"></div>
                <div className="absolute -left-0.5 top-24 w-0.5 h-10 bg-gray-700 rounded-l"></div>
                <div className="absolute -right-0.5 top-20 w-0.5 h-12 bg-gray-700 rounded-r"></div>
            </div>
        </div>
    );
};

export default function HowItWorks() {
    const sectionRef = useRef<HTMLElement>(null);
    const stickyContainerRef = useRef<HTMLDivElement>(null);
    const scrollSpaceRef = useRef<HTMLDivElement>(null);
    const [selectedBlock, setSelectedBlock] = useState<BlockType>('booking');
    const [currentStep, setCurrentStep] = useState<number>(0);
    const [viewMode, setViewMode] = useState<ViewMode>('blocks');
    const scrollTriggersRef = useRef<ScrollTrigger[]>([]);

    // Constants
    const SCROLL_HEIGHT = 600; // Reduced for smoother transitions
    const BLOCKS_ORDER: BlockType[] = ['booking', 'matchmaking', 'ranking', 'networking'];

    useEffect(() => {
        if (!scrollSpaceRef.current || !stickyContainerRef.current) return;

        const ctx = gsap.context(() => {
            // Clear existing scroll triggers
            scrollTriggersRef.current.forEach(st => st.kill());
            scrollTriggersRef.current = [];

            // We build one long virtual timeline; each segment is SCROLL_HEIGHT tall.
            let currentScrollPosition = 0;

            // Initial blocks view animation (only once on mount)
            gsap.utils.toArray<HTMLElement>(".feature-block").forEach((block, index) => {
                gsap.from(block, {
                    scrollTrigger: {
                        trigger: sectionRef.current,
                        start: "top 80%",
                        once: true,
                    },
                    opacity: 0,
                    y: 40,
                    duration: 0.8,
                    ease: "power2.out",
                    delay: index * 0.1,
                });
            });

            // Create ScrollTriggers for each block and its steps
            BLOCKS_ORDER.forEach((blockType, blockIdx) => {
                const blockSteps = blockData[blockType].steps;
                
                // Blocks view trigger for this block
                const blocksViewTrigger = ScrollTrigger.create({
                    trigger: scrollSpaceRef.current,
                    start: () => `top+=${currentScrollPosition} top`,
                    end: () => `top+=${currentScrollPosition + SCROLL_HEIGHT} top`,
                    onEnter: () => {
                        setSelectedBlock(blockType);
                        setViewMode('blocks');
                        setCurrentStep(0);
                    },
                    onEnterBack: () => {
                        setSelectedBlock(blockType);
                        setViewMode('blocks');
                        setCurrentStep(blockSteps.length - 1);
                    },
                });
                scrollTriggersRef.current.push(blocksViewTrigger);
                currentScrollPosition += SCROLL_HEIGHT;

                // Step triggers for each step in this block
                blockSteps.forEach((_, stepIdx) => {
                    const stepTrigger = ScrollTrigger.create({
                        trigger: scrollSpaceRef.current,
                        start: () => `top+=${currentScrollPosition} top`,
                        end: () => `top+=${currentScrollPosition + SCROLL_HEIGHT} top`,
                        onEnter: () => {
                            setSelectedBlock(blockType);
                            setViewMode('steps');
                            setCurrentStep(stepIdx);
                        },
                        onEnterBack: () => {
                            setSelectedBlock(blockType);
                            setViewMode('steps');
                            setCurrentStep(stepIdx);
                        },
                    });
                    scrollTriggersRef.current.push(stepTrigger);
                    // Move timeline forward so the next trigger starts after this step segment.
                    currentScrollPosition += SCROLL_HEIGHT;
                });
            });

            // Final trigger to return to blocks view
            const finalTrigger = ScrollTrigger.create({
                trigger: scrollSpaceRef.current,
                start: () => `top+=${currentScrollPosition} top`,
                end: () => `top+=${currentScrollPosition + SCROLL_HEIGHT} top`,
                onEnter: () => {
                    setViewMode('blocks');
                    setSelectedBlock('booking');
                },
                onEnterBack: () => {
                    setViewMode('steps');
                    const lastBlock = BLOCKS_ORDER[BLOCKS_ORDER.length - 1];
                    setSelectedBlock(lastBlock);
                    setCurrentStep(blockData[lastBlock].steps.length - 1);
                },
            });
            scrollTriggersRef.current.push(finalTrigger);

        }, sectionRef);

        return () => {
            // Revert GSAP context + kill any orphaned triggers to avoid duplicate listeners.
            ctx.revert();
            scrollTriggersRef.current.forEach(st => st.kill());
            scrollTriggersRef.current = [];
        };
    }, []);

    // Total scroll space = one "blocks" segment + all per-block segments + one final segment.
    const totalScrollHeight = BLOCKS_ORDER.reduce((acc, blockType) => {
        return acc + SCROLL_HEIGHT + (blockData[blockType].steps.length * SCROLL_HEIGHT);
    }, SCROLL_HEIGHT); // Initial blocks view + final blocks view


    return (
        <section id="how" className="py-20 bg-[radial-gradient(circle_at_center,rgba(11,18,32,0)_0%,rgba(11,18,32,0.8)_100%)]" ref={sectionRef}>
            <div className="max-w-[1200px] mx-auto px-6">
                <h2 className="text-3xl font-bold mb-4">How It Works — Step by Step</h2>
                <p className="text-muted mb-12 max-w-[720px] text-base leading-relaxed">
                    Playdel connects the padel community by bringing players, clubs, and organizers together on one platform.
                    Book courts, find matches, track rankings, and expand your network — all in just a few simple steps.
                </p>

                {/* Scroll Container */}
                <div ref={scrollSpaceRef} style={{ height: `${totalScrollHeight}px` }}>
                    {/* Sticky stage keeps the UI pinned while scroll position drives content state. */}
                    <div className="sticky top-16 py-4 will-change-contents" ref={stickyContainerRef}>
                        {/* Feature Blocks - Show in "blocks" mode */}
                        <div 
                            className={`transition-all duration-500 ease-out ${
                                viewMode === 'blocks' 
                                    ? 'opacity-100 scale-100 pointer-events-auto' 
                                    : 'opacity-0 scale-95 pointer-events-none absolute'
                            }`}
                        >
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                                {(Object.keys(blockData) as BlockType[]).map((blockKey) => {
                                    const block = blockData[blockKey];
                                    const isSelected = selectedBlock === blockKey;
                                    
                                    return (
                                        <div
                                            key={blockKey}
                                            className={`feature-block p-8 rounded-[20px] border min-h-[240px] flex flex-col items-center text-center relative transition-all duration-300 backdrop-blur-md overflow-hidden group ${
                                                isSelected
                                                    ? 'bg-gradient-to-br from-slate-900/80 to-slate-900/90 border-primary/30 shadow-2xl -translate-y-2 scale-105'
                                                    : 'bg-gradient-to-br from-slate-900/60 to-slate-950/80 border-slate-600/10'
                                            }`}
                                        >
                                            <div className={`w-16 h-16 bg-gradient-to-br rounded-2xl flex items-center justify-center mb-6 border transition-all duration-300 ${
                                                isSelected
                                                    ? 'bg-primary text-[#0a0a0a] scale-110 -rotate-3 shadow-[0_10px_20px_rgba(163,230,53,0.3)] from-primary to-primary border-primary'
                                                    : 'from-primary/10 to-primary/2 text-primary border-primary/10'
                                            }`}>
                                                {block.icon}
                                            </div>
                                            <div className="step-content-box">
                                                <strong className="block text-lg font-bold mb-2 text-white">{block.title}</strong>
                                                <p className="text-sm text-muted m-0 leading-relaxed">{block.subtitle}</p>
                                            </div>
                                            
                                            {/* Progress Indicator */}
                                            {isSelected && (
                                                <div className="absolute bottom-4 left-1/2 -translate-x-1/2 flex gap-1">
                                                    {blockData[blockKey].steps.map((_, idx) => (
                                                        <div 
                                                            key={idx}
                                                            className={`w-2 h-2 rounded-full transition-all duration-300 ${
                                                                viewMode === 'steps' && idx <= currentStep 
                                                                    ? 'bg-primary scale-125' 
                                                                    : 'bg-primary/30'
                                                            }`}
                                                        />
                                                    ))}
                                                </div>
                                            )}
                                        </div>
                                    );
                                })}
                            </div>
                        </div>

                        {/* Steps View - Show in "steps" mode */}
                        <div 
                            className={`transition-all duration-500 ease-out ${
                                viewMode === 'steps' 
                                    ? 'opacity-100 scale-100' 
                                    : 'opacity-0 scale-95 absolute pointer-events-none'
                            }`}
                        >
                            <div className="grid lg:grid-cols-2 gap-8 items-start">
                                {/* Steps Section - Left Side */}
                                <div className="flex items-start py-1">
                                    <div className="w-full">
                                        {/* Block Title */}
                                        <div className="mb-3">
                                            <div className="flex items-center gap-3 mb-2">
                                                <div className="w-10 h-10 bg-primary text-[#0a0a0a] rounded-xl flex items-center justify-center">
                                                    <div className="scale-90">{blockData[selectedBlock].icon}</div>
                                                </div>
                                                <h3 className="text-xl font-bold text-white">{blockData[selectedBlock].title}</h3>
                                            </div>
                                            <p className="text-muted text-xs">{blockData[selectedBlock].subtitle}</p>
                                        </div>

                                        {/* Steps */}
                                        <div className="space-y-2.5">
                                            {blockData[selectedBlock].steps.map((step, index) => (
                                                <div 
                                                    key={`${selectedBlock}-step-${index}`}
                                                    className={`transition-all duration-300 ease-out ${
                                                        currentStep === index
                                                            ? 'opacity-100 translate-x-0 scale-100'
                                                            : currentStep > index
                                                            ? 'opacity-40 -translate-x-2 scale-98'
                                                            : 'opacity-20 translate-x-2 scale-98'
                                                    }`}
                                                >
                                                    <div className="flex items-start gap-3 p-3.5 rounded-xl bg-slate-900/50 border border-slate-700/30 backdrop-blur-sm">
                                                        <div className={`flex-shrink-0 w-10 h-10 rounded-full flex items-center justify-center text-base font-bold transition-all duration-300 ease-out ${
                                                            currentStep === index
                                                                ? 'bg-primary text-[#0a0a0a] scale-110 shadow-[0_0_20px_rgba(163,230,53,0.4)]'
                                                                : currentStep > index
                                                                ? 'bg-primary/50 text-[#0a0a0a]'
                                                                : 'bg-slate-800 text-slate-500'
                                                        }`}>
                                                            {index + 1}
                                                        </div>
                                                        <div className="flex-1">
                                                            <h4 className="text-base font-bold text-white mb-1.5">{step.title}</h4>
                                                            <p className="text-muted leading-relaxed text-xs">{step.description}</p>
                                                        </div>
                                                    </div>
                                                </div>
                                            ))}
                                        </div>

                                        {/* Progress Bar */}
                                        <div className="mt-3.5 flex items-center gap-3">
                                            <div className="flex-1 h-2 bg-slate-800 rounded-full overflow-hidden">
                                                <div 
                                                    className="h-full bg-gradient-to-r from-primary to-primary/80 transition-all duration-500 ease-out"
                                                    style={{ width: `${((currentStep + 1) / blockData[selectedBlock].steps.length) * 100}%` }}
                                                />
                                            </div>
                                            <span className="text-sm text-muted font-medium transition-all duration-300">
                                                {currentStep + 1} / {blockData[selectedBlock].steps.length}
                                            </span>
                                        </div>
                                    </div>
                                </div>

                                {/* iPhone Mockup - Right Side */}
                                <div className="flex items-start justify-center py-1">
                                    <div className="transition-all duration-500 ease-out transform-gpu">
                                        <IPhoneMockup imageUrl={blockData[selectedBlock].steps[currentStep]?.image} />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
