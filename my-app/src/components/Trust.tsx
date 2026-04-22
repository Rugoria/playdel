export default function Trust() {
    return (
        <section className="py-20 bg-slate-950/30">
            <div className="max-w-[1200px] mx-auto px-6 text-center">
                <h2 className="text-3xl font-bold mb-4">Built on Trust. Growing with the Community.</h2>

                <p className="text-muted text-lg max-w-2xl mx-auto mb-12">
                    Playdel is built by players, shaped by clubs,
                    and growing with the padel community.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2">Early-Stage Startup</h3>
                        <p className="text-muted">Actively onboarding clubs</p>
                    </div>
                    <div className="p-6 border-y md:border-y-0 md:border-x border-white/5">
                        <h3 className="text-xl font-bold text-white mb-2">Community-First</h3>
                        <p className="text-muted">Designed with real player feedback</p>
                    </div>
                    <div className="p-6">
                        <h3 className="text-xl font-bold text-white mb-2">Scalable Platform</h3>
                        <p className="text-muted">Built for local and global growth</p>
                    </div>
                </div>
            </div>
        </section>
    );
}
