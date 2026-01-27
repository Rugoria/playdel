export default function Mission() {
    return (
        <section id="mission" className="py-16">
            <div className="max-w-[1200px] mx-auto px-6">
                <h2 className="text-3xl font-bold mb-8">Mission, Vision & Values</h2>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    <div className="bg-slate-900/40 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
                        <strong className="block text-lg text-white mb-2">Our Mission</strong>
                        <p className="text-muted text-sm leading-relaxed">
                            Make padel more accessible and social by connecting players, clubs, and communities — so everyone can play more often,
                            improve, and feel part of something bigger.
                        </p>
                    </div>

                    <div className="bg-slate-900/40 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
                        <strong className="block text-lg text-white mb-2">Our Vision</strong>
                        <p className="text-muted text-sm leading-relaxed">
                            A thriving, connected padel ecosystem in every city: effortless discovery of matches and courts, active local leagues,
                            and inclusive communities that welcome every player.
                        </p>
                    </div>

                    <div className="bg-slate-900/40 p-6 rounded-2xl border border-white/5 backdrop-blur-sm">
                        <strong className="block text-lg text-white mb-2">Our Values</strong>
                        <ul className="list-disc pl-5 mt-2 space-y-2 text-text-main text-sm">
                            <li><em className="not-italic font-semibold text-primary">Community first</em>: We design for people and local groups.</li>
                            <li><em className="not-italic font-semibold text-primary">Fair play</em>: Safety, respect, and inclusivity on and off the court.</li>
                            <li><em className="not-italic font-semibold text-primary">Simplicity</em>: Plan, book, and play with minimal steps.</li>
                            <li><em className="not-italic font-semibold text-primary">Growth</em>: Help players, clubs, and communities develop together.</li>
                        </ul>
                    </div>
                </div>
            </div>
        </section>
    );
}
