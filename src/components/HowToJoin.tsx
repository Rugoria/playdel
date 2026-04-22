'use client';

import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

export default function HowToJoin() {
  const sectionRef = useRef<HTMLElement>(null);
  const [progress, setProgress] = useState(0);

  const steps = [
    {
      title: 'Fill in the registration form',
      description: 'Weekly or monthly friendly matches...',
      image: '/step1.jpg',
    },
    {
      title: 'Join our Discord group',
      description: 'Weekly or monthly friendly matches...',
      image: '/step2.jpg',
    },
    {
      title: 'Book your first match or session',
      description: 'Weekly or monthly friendly matches...',
      image: '/step3.jpg',
    },
    {
      title: 'Start playing!',
      description: 'Weekly or monthly friendly matches...',
      image: '/step4.jpg',
    },
  ];

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;

    let ticking = false;

    const updateScroll = () => {
      const rect = section.getBoundingClientRect();
      const windowHeight = window.innerHeight;

      if (rect.top > 0) {
        setProgress(0);
        return;
      }

      if (rect.bottom < windowHeight) {
        setProgress(1);
        return;
      }

      const scrollableHeight = rect.height - windowHeight;
      const scrolled = Math.abs(rect.top);

      let percent = scrolled / scrollableHeight;
      percent = Math.max(0, Math.min(1, percent));

      setProgress(percent);
    };

    const handleScroll = () => {
      if (!ticking) {
        requestAnimationFrame(() => {
          updateScroll();
          ticking = false;
        });
        ticking = true;
      }
    };

    window.addEventListener('scroll', handleScroll);
    updateScroll();

    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const stepFloat = progress * (steps.length - 1);

  return (
    <section ref={sectionRef} className="relative h-[400vh]">

      {/* STICKY */}
      <div className="sticky top-0 h-screen flex items-center bg-white mx-5 mt-4">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 w-full px-8">

          {/* LEFT */}
          <div className="relative">

            {/* Badge */}
            <div className="flex items-center gap-0 mb-2 w-fit">
              <div className="border border-black/30 rounded-full pl-5 pr-4 py-1.5">
                <span className="text-black/70 text-sm font-medium">How to Join</span>
              </div>
            </div>

            <h2 className="text-4xl font-extrabold mb-12">
              How to Join Our <br/> Communities
            </h2>

            <div className="relative">

              {/* Background line */}
              <div className="absolute left-2 top-0 w-[2px] h-full bg-black/10" />

              {/* ✅ CLEAN LINE */}
              <div
                className="absolute left-2 top-0 w-[2px] bg-black"
                style={{
                  height: `${(stepFloat / (steps.length - 1)) * 100}%`,
                }}
              />

              <div className="flex flex-col gap-12">
               {steps.map((step, index) => {
                const isPast = stepFloat > index;
                const isCurrent = Math.floor(stepFloat) === index;
                const isFuture = stepFloat < index;

                const opacity = isFuture ? 0.1 : 1;

                return (
                  <div key={index} className="flex items-start gap-6">

                    {/* DOT */}
                    <div className="relative w-5 h-5">
                      <div className="absolute inset-0 rounded-full border-2 border-black/30" />
                      <div
                        className="absolute inset-0 rounded-full bg-black transition-transform duration-300"
                        style={{
                          transform: `scale(${isPast || isCurrent ? 1 : 0})`,
                        }}
                      />
                    </div>

                    {/* TEXT */}
                    <div
                      style={{
                        opacity,
                        transition: 'opacity 0.3s ease',
                      }}
                    >
                      <h3
                        className={`text-lg ${
                          isCurrent ? 'font-bold text-black' : 'text-black/70'
                        }`}
                      >
                        {step.title}
                      </h3>

                      <p className="text-sm text-black/60 mt-1">
                        {step.description}
                      </p>
                    </div>
                  </div>
                );
              })}
              </div>
            </div>
          </div>

          {/* RIGHT */}
          <div className="relative h-full rounded-2xl overflow-hidden">

            {steps.map((step, index) => {
              const distance = Math.abs(stepFloat - index);
              const opacity = Math.max(0, 1 - distance);

              return (
                <Image
                  key={index}
                  src={step.image}
                  alt=""
                  fill
                  className="object-cover absolute inset-0"
                  style={{ opacity }}
                />
              );
            })}

          </div>

        </div>
      </div>
    </section>
  );
}