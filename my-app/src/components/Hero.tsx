import Image from 'next/image';

export default function Hero() {
    return (
        <section className="relative max-w-[1200px] mx-auto px-6 my-6">
            <div className="relative w-full min-h-[560px] md:min-h-[600px] rounded-[20px] md:rounded-[32px] overflow-hidden flex items-end shadow-2xl">
                {/* Background Image */}
                <div className="absolute top-0 left-0 w-full h-full z-[1]">
                    <Image
                        src="/hero-bg.jpg"
                        alt="Padel players on court"
                        fill
                        className="object-cover object-center"
                        priority
                    />
                </div>

                {/* Overlay */}
                <div className="absolute top-0 left-0 w-full h-full z-[2] bg-gradient-to-b from-transparent via-[rgba(11,18,32,0.4)] to-[rgba(11,18,32,0.9)]"></div>

                {/* Social Icons (Top Right) */}
                <div className="absolute top-5 right-5 md:top-8 md:right-8 z-10 flex flex-col items-end gap-3">
                    <span className="text-base font-bold text-primary drop-shadow-sm">Follow us</span>
                    <div className="flex gap-2.5">
                        {[1, 2, 3, 4].map((_, i) => (
                            <a key={i} href="#" className="w-10 h-10 rounded-full bg-white/90 flex items-center justify-center text-black transition-all hover:-translate-y-1 hover:bg-primary hover:shadow-lg backdrop-blur-sm">
                                {i === 0 && (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                )}
                                {i === 1 && (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M24 4.557c-.883.392-1.832.656-2.828.775 1.017-.609 1.798-1.574 2.165-2.724-.951.564-2.005.974-3.127 1.195-.897-.957-2.178-1.555-3.594-1.555-3.179 0-5.515 2.966-4.797 6.045-4.091-.205-7.719-2.165-10.148-5.144-1.29 2.213-.669 5.108 1.523 6.574-.806-.026-1.566-.247-2.229-.616-.054 2.281 1.581 4.415 3.949 4.89-.693.188-1.452.232-2.224.084.626 1.956 2.444 3.379 4.6 3.419-2.07 1.623-4.678 2.348-7.29 2.04 2.179 1.397 4.768 2.212 7.548 2.212 9.142 0 14.307-7.721 13.995-14.646.962-.695 1.797-1.562 2.457-2.549z" />
                                    </svg>
                                )}
                                {i === 2 && (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
                                    </svg>
                                )}
                                {i === 3 && (
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-5.2 1.74 2.89 2.89 0 0 1 2.31-4.64 2.93 2.93 0 0 1 .88.13V9.4a6.84 6.84 0 0 0-1-.05A6.33 6.33 0 0 0 5 20.1a6.34 6.34 0 0 0 10.86-4.43v-7a8.16 8.16 0 0 0 4.77 1.52v-3.4a4.85 4.85 0 0 1-1-.1z" />
                                    </svg>
                                )}
                            </a>
                        ))}
                    </div>
                </div>

                {/* Hero Content */}
                <div className="relative z-10 w-full p-6 md:p-12 lg:p-16 flex flex-col lg:flex-row justify-between items-start lg:items-end gap-10">
                    <div className="max-w-[600px]">
                        <h1 className="text-[42px] md:text-[64px] leading-[1.1] font-extrabold text-white mb-4 tracking-tight">
                            Play Smarter.<br />
                            <span className="text-primary">Improve Faster.</span>
                        </h1>
                        <p className="text-xs md:text-sm leading-relaxed text-white/90 mb-0 max-w-[480px]">
                            Playdel is not just an app — it&apos;s a startup built around the padel community.
                            A platform designed to connect players, clubs, and local padel communities in one place.
                            From discovering clubs and booking courts to meeting players and growing local padel networks,
                            Playdel aims to make the sport more accessible, social, and connected.
                        </p>
                    </div>

                    <div className="flex flex-col lg:flex-row gap-4 items-start lg:items-end w-full lg:w-auto">
                        <div className="flex flex-col md:flex-row gap-3 w-full lg:w-auto">
                            <a href="#coach" className="flex items-center gap-2 bg-black px-4 py-2.5 rounded-lg border border-white/20 cursor-pointer transition-all hover:border-primary hover:-translate-y-0.5 hover:shadow-lg w-fit no-underline">
                                <Image
                                    src="/google-play.png"
                                    alt="Google Play Store"
                                    width={32}
                                    height={32}
                                    className="w-8 h-8 object-contain"
                                />
                                <div className="flex flex-col items-start leading-none">
                                    <span className="text-[10px] text-gray-300 uppercase mb-0.5">GET IT ON</span>
                                    <span className="text-[15px] font-bold text-white">Play Store</span>
                                </div>
                            </a>
                            <a href="#coach" className="flex items-center gap-2 bg-black px-4 py-2.5 rounded-lg border border-white/20 cursor-pointer transition-all hover:border-primary hover:-translate-y-0.5 hover:shadow-lg w-fit no-underline">
                                <svg width="40" height="40" viewBox="0 0 24 24" className="w-10 h-10 fill-white" aria-hidden="true" focusable="false">
                                    <path d="M17.05 20.28c-.98.95-2.05.8-3.08.35-1.09-.46-2.09-.48-3.24 0-1.44.62-2.2.44-3.06-.35C2.79 15.2 3.5 7.46 8.96 7.18c1.33.07 2.26.72 3.04.78 1.17-.24 2.3-.92 3.54-.83 1.49.12 2.61.7 3.35 1.76-3.08 1.88-2.35 6.03.48 7.17-.57 1.45-1.31 2.89-2.32 4.22zM11.9 7.05c-.15-2.15 1.6-3.92 3.63-4.05.28 2.36-2.12 4.28-3.63 4.05z" />
                                </svg>
                                <div className="flex flex-col items-start leading-none">
                                    <span className="text-[10px] text-gray-300 uppercase mb-0.5">Download on the</span>
                                    <span className="text-[15px] font-bold text-white">App Store</span>
                                </div>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}
