import Image from 'next/image';

export default function ForPlayers() {
    return (
        <section id="players" className="py-16">
            <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 lg:grid-cols-[1.1fr_0.9fr] gap-8 items-start">
                <div>
                    <h2 className="text-3xl font-bold mb-4">What will you get with Spintip as a Player</h2>
                    <ul className="list-none p-0 mt-4 grid gap-3">
                        <li className="flex items-center gap-2 text-muted text-lg"><span className="text-primary">•</span> Smart video highlights with key moments</li>
                        <li className="flex items-center gap-2 text-muted text-lg"><span className="text-primary">•</span> Coach or AI feedback on your technique</li>
                        <li className="flex items-center gap-2 text-muted text-lg"><span className="text-primary">•</span> Personalized improvement plan</li>
                        <li className="flex items-center gap-2 text-muted text-lg"><span className="text-primary">•</span> Social and motivational features</li>
                        <li className="flex items-center gap-2 text-muted text-lg"><span className="text-primary">•</span> Flexible and accessible from anywhere</li>
                    </ul>
                </div>
                <div className="relative w-full rounded-2xl overflow-hidden shadow-2xl">
                    <Image
                        src="/hero-image.jpg"
                        alt="Player action"
                        width={400}
                        height={500}
                        className="w-full h-auto object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
