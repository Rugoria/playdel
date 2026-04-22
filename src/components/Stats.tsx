export default function Stats() {
  const stats = [
    { value: '12K+', label: 'Active Players' },
    { value: '89%', label: 'Satisfaction Rate' },
    { value: '1.2K+', label: 'Bookings' },
    { value: '125+', label: 'Partner Clubs' },
  ];

  return (
    <section className="mx-5 mt-6 grid grid-cols-2 md:grid-cols-4 gap-4">
      {stats.map((stat) => (
        <div key={stat.label} className="bg-white rounded-2xl p-5 flex flex-col gap-1 shadow-sm">
          <span className="text-2xl font-extrabold text-black">{stat.value}</span>
          <span className="text-black/50 text-xs font-medium">{stat.label}</span>
        </div>
      ))}
    </section>
  );
}
