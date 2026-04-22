'use client';

import { useState } from 'react';

const faqs = [
  {
    question: 'What is padel?',
    answer: 'Padel is a fun and fast-paced racket sport that\'s a mix between tennis and squash. It\'s played on a smaller court surrounded by walls, making it perfect for all ages and skill levels.'
  },
  {
    question: 'Do I need experience to join Playdel?',
    answer: 'No, Playdel welcomes players of all skill levels. Whether you\'re a beginner or an experienced player, we have matches and sessions tailored to your level.'
  },
  {
    question: 'What equipment do I need?',
    answer: 'You\'ll need a padel racket and comfortable athletic shoes. We recommend wearing breathable clothing. Some clubs provide balls, but it\'s good to check in advance.'
  },
  {
    question: 'Where are matches and training sessions held?',
    answer: 'Matches and training sessions are held at partner clubs in your area. You can find available courts and sessions through the Playdel app.'
  },
  {
    question: 'How do I book a match or session?',
    answer: 'Simply open the Playdel app, browse available matches or training sessions, and book your spot. You can also create your own match and invite other players.'
  }
];

export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(0);

  return (
    <section className="mx-5 mt-6 bg-[#F3F3F3] p-8 md:p-12">
      <div className="grid grid-cols-1 lg:grid-cols-[300px_1fr] gap-12">
        {/* Left: Title */}
        <div>
          <div className="flex items-center gap-2 mb-6">
            <div className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white text-sm font-bold">?</div>
            <span className="text-black/60 text-sm font-semibold">FAQ</span>
          </div>
          <h2 className="text-black font-extrabold text-3xl md:text-4xl leading-tight">
            Frequently Asked<br />Question
          </h2>
        </div>

        {/* Right: Accordion */}
        <div className="flex flex-col gap-3">
          {faqs.map((faq, index) => (
            <div
              key={index}
              className="bg-white rounded-xl overflow-hidden border border-black/5 transition-all"
            >
              <button
                onClick={() => setOpenIndex(openIndex === index ? -1 : index)}
                className="w-full flex items-center justify-between p-5 text-left hover:bg-black/2 transition-colors"
              >
                <span className="text-black font-medium text-sm md:text-base">{faq.question}</span>
                <div
                  className="w-8 h-8 rounded-full bg-black flex items-center justify-center text-white shrink-0 transition-transform"
                  style={{
                    transform: openIndex === index ? 'rotate(180deg)' : 'rotate(0deg)'
                  }}
                >
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2.5">
                    <path d="M19 14l-7-7-7 7" />
                  </svg>
                </div>
              </button>

              {/* Expanded answer */}
              {openIndex === index && (
                <div className="px-5 pb-5 border-t border-black/5">
                  <p className="text-black/60 text-sm leading-relaxed mt-3">{faq.answer}</p>
                </div>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
