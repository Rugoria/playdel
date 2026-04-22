import Image from 'next/image';

const events = [
  { num: '01', title: 'Padel Masters 2025', date: 'Jun 12 – Jun 15, 2025', image: '/hero-bg.jpg' },
  { num: '02', title: 'Smash & Rally 2025', date: 'Jul 3 – Jul 6, 2025', image: '/hero-image.jpg' },
  { num: '03', title: 'Playdel Open 2025', date: 'Aug 20 – Aug 24, 2025', image: '/screen-match.png' },
];

export default function Events() {
  return (
    <section className="mx-5 mt-6">
      <div className="flex items-center justify-between mb-4">
        <h2 className="text-black font-extrabold text-2xl">Upcoming Events</h2>
        <a href="#events" className="text-black/50 text-sm no-underline hover:text-primary transition-colors">View all →</a>
      </div>

      <div className="flex flex-col gap-3">
        {events.map((event) => (
          <div key={event.num} className="bg-white rounded-2xl p-4 flex items-center gap-4 shadow-sm hover:shadow-md transition-shadow">
            <span className="text-black/20 font-extrabold text-2xl w-10 shrink-0">{event.num}</span>
            <div className="relative w-16 h-16 rounded-xl overflow-hidden shrink-0">
              <Image src={event.image} alt={event.title} fill className="object-cover" />
            </div>
            <div className="flex-1">
              <div className="text-black font-bold text-sm">{event.title}</div>
              <div className="text-black/50 text-xs mt-0.5">{event.date}</div>
            </div>
            <button className="w-8 h-8 rounded-full bg-primary flex items-center justify-center shrink-0 hover:brightness-105 transition-all">
              <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="black" strokeWidth="2.5"><path d="M5 12h14M12 5l7 7-7 7"/></svg>
            </button>
          </div>
        ))}
      </div>
    </section>
  );
}
