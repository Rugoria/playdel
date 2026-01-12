'use client';

import { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import gsap from 'gsap';

export default function InteractiveSteps() {
    const [activeStep, setActiveStep] = useState(0);

    const sectionRef = useRef<HTMLDivElement>(null);
    const carouselRef = useRef<HTMLDivElement>(null);

    const phones = [
        { image: '/screen-match.png', alt: 'Find Match Interface' },
        { image: '/screen-booking.png', alt: 'Booking Interface' },
        { image: '/screen-stats.png', alt: 'Stats Interface' },
    ];

    const steps = [
        {
            title: 'Find Your Match',
            description:
                'Connect with players of your skill level and find the perfect partner.',
        },
        {
            title: 'Book & Play',
            description:
                'Reserve courts instantly and manage all bookings in one place.',
        },
        {
            title: 'Track & Grow',
            description:
                'Monitor progress, join tournaments, and grow your community.',
        },
    ];

    const total = phones.length;
    const radius = 420;

    /* ---------------- SCROLL → ACTIVE STEP ---------------- */
    useEffect(() => {
        const onScroll = () => {
            if (!sectionRef.current) return;

            const rect = sectionRef.current.getBoundingClientRect();
            const h = window.innerHeight;

            const progress = Math.min(
                Math.max((h * 0.6 - rect.top) / (h * 0.6), 0),
                1
            );

            const step = Math.floor(progress * total);
            setActiveStep(prev => (prev !== step ? step : prev));
        };

        window.addEventListener('scroll', onScroll, { passive: true });
        onScroll();

        return () => window.removeEventListener('scroll', onScroll);
    }, []);

    /* ---------------- INITIAL 3D SETUP ---------------- */
    useEffect(() => {
        const items = gsap.utils.toArray<HTMLElement>('.phone-mockup');

        gsap.set(items, {
            rotateY: i => (360 / total) * i,
            transformOrigin: `50% 50% ${-radius}px`,
            z: radius,
            backfaceVisibility: 'hidden',
        });
    }, []);

    /* ---------------- ROTATE CAROUSEL ---------------- */
    useEffect(() => {
        if (!carouselRef.current) return;

        gsap.to(carouselRef.current, {
            rotateY: -(360 / total) * activeStep,
            duration: 1,
            ease: 'power3.inOut',
        });
    }, [activeStep]);

    return (
        <section ref={sectionRef} className="interactive-steps-section">
            <div className="interactive-steps-container">

                {/* TEXT CONTENT */}
                <div className="steps-navigation">
                    <div className="steps-content">
                        {steps.map((step, i) => (
                            <div
                                key={i}
                                className={`step-content ${activeStep === i ? 'active' : ''}`}
                            >
                                <h3>{step.title}</h3>
                                <p>{step.description}</p>
                            </div>
                        ))}
                    </div>
                </div>

                {/* 3D CAROUSEL */}
                <div className="phone-carousel">
                    <div className="phones-container" ref={carouselRef}>
                        {phones.map((phone, i) => (
                            <div key={i} className="phone-mockup">
                                <div className="phone-frame">
                                    <Image
                                        src={phone.image}
                                        alt={phone.alt}
                                        fill
                                        quality={100}
                                        style={{ objectFit: 'cover' }}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>

            </div>
        </section>
    );
}
