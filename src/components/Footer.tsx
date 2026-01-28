'use client';

export default function Footer() {
    return (
        <footer className="relative mt-20 bg-gradient-to-b from-slate-900 to-[#0a0f1a] border-t border-slate-700/20 overflow-hidden">
            {/* Wave decoration */}
            <div className="absolute -top-[1px] left-0 w-full h-[120px] text-bg opacity-60 pointer-events-none">
                <svg viewBox="0 0 1200 120" preserveAspectRatio="none" className="w-full h-full block">
                    <path d="M0,0V46.29c47.79,22.2,103.59,32.17,158,28,70.36-5.37,136.33-33.31,206.8-37.5C438.64,32.43,512.34,53.67,583,72.05c69.27,18,138.3,24.88,209.4,13.08,36.15-6,69.85-17.84,104.45-29.34C989.49,25,1113-14.29,1200,52.47V0Z" opacity=".25" fill="currentColor"></path>
                    <path d="M0,0V15.81C13,36.92,27.64,56.86,47.69,72.05,99.41,111.27,165,111,224.58,91.58c31.15-10.15,60.09-26.07,89.67-39.8,40.92-19,84.73-46,130.83-49.67,36.26-2.85,70.9,9.42,98.6,31.56,31.77,25.39,62.32,62,103.63,73,40.44,10.79,81.35-6.69,119.13-24.28s75.16-39,116.92-43.05c59.73-5.85,113.28,22.88,168.9,38.84,30.2,8.66,59,6.17,87.09-7.5,22.43-10.89,48-26.93,60.65-49.24V0Z" opacity=".5" fill="currentColor"></path>
                    <path d="M0,0V5.63C149.93,59,314.09,71.32,475.83,42.57c43-7.64,84.23-20.12,127.61-26.46,59-8.63,112.48,12.24,165.56,35.4C827.93,77.22,886,95.24,951.2,90c86.53-7,172.46-45.71,248.8-84.81V0Z" fill="currentColor"></path>
                </svg>
            </div>

            <div className="relative py-20 pb-10">
                <div className="max-w-[1200px] mx-auto px-6 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-[1.5fr_1fr_1fr_1fr_1.3fr] gap-12">
                    {/* Brand Section */}
                    <div className="flex flex-col gap-4">
                        <div className="flex items-center gap-3 mb-1">
                            <div className="flex-shrink-0">
                                <svg width="24" height="24" viewBox="0 0 32 32" fill="none">
                                    <rect width="32" height="32" rx="8" className="fill-primary" />
                                    <path d="M16 8L24 12V20L16 24L8 20V12L16 8Z" fill="#0a0a0a" />
                                </svg>
                            </div>
                            <h3 className="m-0 text-2xl font-extrabold tracking-wider text-text-main">PLAYDEL</h3>
                        </div>
                        <p className="text-muted text-sm leading-relaxed m-0">
                            Connecting players, clubs, and communities. Built by players, for the game we love.
                        </p>
                        <div className="flex gap-3 mt-2">
                            {[1, 2, 3].map((_, i) => (
                                <a key={i} href="#" className="flex items-center justify-center w-10 h-10 bg-primary/10 border border-primary/20 rounded-[10px] text-primary transition-all hover:bg-primary hover:text-[#0a0a0a] hover:-translate-y-1 hover:shadow-[0_8px_20px_rgba(163,230,53,0.25)]">
                                    <svg width="20" height="20" viewBox="0 0 24 24" fill="currentColor">
                                        <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zm0-2.163c-3.259 0-3.667.014-4.947.072-4.358.2-6.78 2.618-6.98 6.98-.059 1.281-.073 1.689-.073 4.948 0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98 1.281.058 1.689.072 4.948.072 3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.949-.073zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.163 6.162 6.163 6.162-2.759 6.162-6.163c0-3.403-2.759-6.162-6.162-6.162zm0 10.162c-2.209 0-4-1.79-4-4 0-2.209 1.791-4 4-4s4 1.791 4 4c0 2.21-1.791 4-4 4zm6.406-11.845c-.796 0-1.441.645-1.441 1.44s.645 1.44 1.441 1.44c.795 0 1.439-.645 1.439-1.44s-.644-1.44-1.439-1.44z" />
                                    </svg>
                                </a>
                            ))}
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-base font-bold text-text-main mb-2 tracking-wide">Quick Links</h4>
                        <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                            <li><a href="#players" className="text-muted no-underline text-sm transition-all hover:text-primary hover:translate-x-1 inline-block">For Players</a></li>
                            <li><a href="#clubs" className="text-muted no-underline text-sm transition-all hover:text-primary hover:translate-x-1 inline-block">For Clubs</a></li>
                            <li><a href="#about" className="text-muted no-underline text-sm transition-all hover:text-primary hover:translate-x-1 inline-block">About Us</a></li>
                        </ul>
                    </div>

                    {/* Company */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-base font-bold text-text-main mb-2 tracking-wide">Company</h4>
                        <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                            <li><a href="#about" className="text-muted no-underline text-sm transition-all hover:text-primary hover:translate-x-1 inline-block">About</a></li>
                            <li><a href="#" className="text-muted no-underline text-sm transition-all hover:text-primary hover:translate-x-1 inline-block">Careers</a></li>
                            <li><a href="#" className="text-muted no-underline text-sm transition-all hover:text-primary hover:translate-x-1 inline-block">Blog</a></li>
                        </ul>
                    </div>

                    {/* Support */}
                    <div className="flex flex-col gap-4">
                        <h4 className="text-base font-bold text-text-main mb-2 tracking-wide">Support</h4>
                        <ul className="list-none p-0 m-0 flex flex-col gap-2.5">
                            <li><a href="#" className="text-muted no-underline text-sm transition-all hover:text-primary hover:translate-x-1 inline-block">FAQ</a></li>
                            <li><a href="/privacy-policy" className="text-muted no-underline text-sm transition-all hover:text-primary hover:translate-x-1 inline-block">Privacy Policy</a></li>
                            <li><a href="/terms-of-service" className="text-muted no-underline text-sm transition-all hover:text-primary hover:translate-x-1 inline-block">Terms of Service</a></li>
                        </ul>
                    </div>

                    {/* Contact & Newsletter */}
                    <div className="flex flex-col gap-5">
                        <h4 className="text-base font-bold text-text-main mb-2 tracking-wide">Stay Connected</h4>
                        <div className="flex flex-col gap-3">
                            <a href="mailto:hello@playdel.com" className="flex items-center gap-2.5 text-muted no-underline text-sm transition-all py-2 hover:text-primary group">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all">
                                    <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                                    <polyline points="22,6 12,13 2,6"></polyline>
                                </svg>
                                team@playdel.net
                            </a>
                            <a href="tel:+923040811115" className="flex items-center gap-2.5 text-muted no-underline text-sm transition-all py-2 hover:text-primary group">
                                <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" className="opacity-70 group-hover:opacity-100 group-hover:scale-110 transition-all">
                                    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                                </svg>
                                +92-304-0811115
                            </a>
                        </div>
                    </div>
                </div>
            </div>

            {/* Footer Bottom */}
            <div className="py-6 border-t border-white/5 bg-slate-950/50">
                <div className="max-w-[1200px] mx-auto px-6 flex flex-col md:flex-row justify-between items-center gap-4">
                    <p className="text-muted text-sm m-0">© 2026 Playdel. All rights reserved.</p>
                    <div className="flex items-center gap-4">
                        <a href="/privacy-policy" className="text-muted text-sm no-underline hover:text-primary transition-colors">Privacy</a>
                        <span className="text-slate-700">•</span>
                        <a href="/terms-of-service" className="text-muted text-sm no-underline hover:text-primary transition-colors">Terms & Conditions</a>
                    </div>
                </div>
            </div>
        </footer>
    );
}
