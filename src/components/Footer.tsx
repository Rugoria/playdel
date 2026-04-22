'use client';

export default function Footer() {
  return (
    <footer
      className="mx-5 mt-6 mb-5 bg-primary overflow-hidden"
      style={{ clipPath: 'polygon(0 0, 96% 0, 100% 10%, 100% 100%, 0 100%)' }}
    >
      {/* Top 3-column links */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-8 pt-8 pb-6 border-b border-black/20">
        {/* Official */}
        <div>
          <h4 className="text-black font-bold text-sm mb-3">Official</h4>
          <ul className="flex flex-col gap-2 list-none p-0 m-0">
            <li><a href="#" className="text-black/80 text-sm no-underline hover:text-black transition-colors">IG : Playdel_Official</a></li>
            <li><a href="#" className="text-black/80 text-sm no-underline hover:text-black transition-colors">Facebook : Playdel.</a></li>
            <li><a href="#" className="text-black/80 text-sm no-underline hover:text-black transition-colors">Tiktok : Sport_Playdel</a></li>
          </ul>
        </div>

        {/* About Us */}
        <div>
          <h4 className="text-black font-bold text-sm mb-3">About Us</h4>
          <ul className="flex flex-col gap-2 list-none p-0 m-0">
            <li><a href="#" className="text-black/80 text-sm no-underline hover:text-black transition-colors">Company</a></li>
            <li><a href="#" className="text-black/80 text-sm no-underline hover:text-black transition-colors">Product</a></li>
            <li><a href="#" className="text-black/80 text-sm no-underline hover:text-black transition-colors">Career</a></li>
          </ul>
        </div>

        {/* Stay Connected */}
        <div>
          <h4 className="text-black font-bold text-sm mb-3">Stay Connected</h4>
          <ul className="flex flex-col gap-2 list-none p-0 m-0 mb-4">
            <li>
              <a href="mailto:team@playdel.net" className="text-black/80 text-sm no-underline hover:text-black transition-colors flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"></path>
                  <polyline points="22,6 12,13 2,6"></polyline>
                </svg>
                team@playdel.net
              </a>
            </li>
            <li>
              <a href="tel:+923040811115" className="text-black/80 text-sm no-underline hover:text-black transition-colors flex items-center gap-2">
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                </svg>
                +92-304-0811115
              </a>
            </li>
          </ul>

          {/* App Store Buttons */}
          <div className="flex flex-col gap-2">
            <a href="#" className="flex items-center gap-2 bg-black text-white rounded-xl px-3 py-2 no-underline hover:bg-black/80 transition-all w-fit">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M18.71 19.5c-.83 1.24-1.71 2.45-3.05 2.47-1.34.03-1.77-.79-3.29-.79-1.53 0-2 .77-3.27.82-1.31.05-2.3-1.32-3.14-2.53C4.25 17 2.94 12.45 4.7 9.39c.87-1.52 2.43-2.48 4.12-2.51 1.28-.02 2.5.87 3.29.87.78 0 2.26-1.07 3.8-.91.65.03 2.47.26 3.64 1.98-.09.06-2.17 1.28-2.15 3.81.03 3.02 2.65 4.03 2.68 4.04-.03.07-.42 1.44-1.38 2.83M13 3.5c.73-.83 1.94-1.46 2.94-1.5.13 1.17-.34 2.35-1.04 3.19-.69.85-1.83 1.51-2.95 1.42-.15-1.15.41-2.35 1.05-3.11z"/>
              </svg>
              <div className="flex flex-col leading-none">
                <span className="text-[9px] text-white/70">Download on the</span>
                <span className="text-xs font-bold">App Store</span>
              </div>
            </a>
            <a href="#" className="flex items-center gap-2 bg-black text-white rounded-xl px-3 py-2 no-underline hover:bg-black/80 transition-all w-fit">
              <svg width="18" height="18" viewBox="0 0 24 24" fill="white">
                <path d="M3.18 23.76c.3.17.64.24.99.2l12.6-7.27-2.7-2.7-10.89 9.77zM.54 1.96C.2 2.3 0 2.84 0 3.54v16.92c0 .7.2 1.24.54 1.58l.08.08 9.48-9.48v-.22L.62 1.88l-.08.08zM20.12 10.5l-2.7-1.56-3.02 3.02 3.02 3.02 2.72-1.57c.78-.45.78-1.46-.02-1.91zM4.17.24L16.77 7.5l-2.7 2.7L3.18.43c.35-.4.69-.37.99-.19z"/>
              </svg>
              <div className="flex flex-col leading-none">
                <span className="text-[9px] text-white/70">GET IT ON</span>
                <span className="text-xs font-bold">Google Play</span>
              </div>
            </a>
          </div>
        </div>
      </div>

      {/* Giant PLAYDEL text */}
      <div className="px-4 py-2 border-b border-black/20">
        <h2
          className="text-black font-extrabold leading-none tracking-tighter select-none text-center"
          style={{ fontSize: 'clamp(60px, 15vw, 180px)' }}
        >
          PLAYDEL
        </h2>
      </div>

      {/* Bottom bar */}
      <div className="px-8 py-4 flex flex-col md:flex-row items-center justify-between gap-2">
        <p className="text-black/70 text-xs m-0">© 2024 Playdel All Rights Reserved</p>
        <div className="flex gap-6">
          <a href="/terms-of-service" className="text-black/70 text-xs no-underline hover:text-black transition-colors">Terms and conditions</a>
          <a href="/privacy-policy" className="text-black/70 text-xs no-underline hover:text-black transition-colors">Privacy policy</a>
        </div>
      </div>
    </footer>
  );
}
