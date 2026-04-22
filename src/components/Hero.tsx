import Image from 'next/image';

export default function Hero() {
  return (
    <section className="mx-5 mt-4  overflow-hidden bg-[#F6F6F6] min-h-[420px]">
      <div className="grid grid-cols-1 lg:grid-cols-[1fr_1fr_0.6fr] min-h-[420px] gap-2">

        {/* Left: Text + Book Online card */}
        <div className="flex flex-col justify-between p-8 md:p-10">
          <div>
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-extrabold text-black leading-[0.95] uppercase mb-4">
              WHERE YOUR<br />GAME START
            </h1>
            <p className="text-black/60 text-sm leading-relaxed max-w-[240px]">
              When You Feel Like Giving Up, That&apos;s Actually When You Should Keep Going!
            </p>
          </div>

          {/* Book Online card */}
          <div className="mt-8 bg-primary max-w-[230px] relative overflow-hidden"
            style={{ clipPath: 'polygon(0 0, 80% 0, 100% 12%, 100% 100%, 20% 100%, 0 88%)' }}>
            
            {/* Top content: racket + text side by side */}
            <div className="flex items-start gap-2 p-3 pb-3">
              {/* Padel racket image */}
              <div className="shrink-0 w-[50px] h-[110px] relative -mb-2">
                <img
                  src="/playdel-removebg-preview.png"
                  alt="Padel racket"
                  className="w-full h-full object-contain drop-shadow-lg"
                  style={{ filter: 'brightness(0) saturate(100%)' }}
                />
              </div>
              {/* Text */}
              <div className="pt-1">
                <div className="text-black font-extrabold text-2xl leading-tight uppercase">
                  BOOK<br />ONLINE!
                </div>
                <p className="text-black/70 text-xs mt-2 leading-relaxed">
                  Practice at any convenient time, ask our manager any question
                </p>
              </div>
            </div>

            {/* 25% OFF arrow bar */}
            <div className="relative mx-0">
              <div
                className="bg-black flex items-center gap-3 m-5 px-3 py-3"
                style={{ clipPath: 'polygon(0 0, 88% 0, 100% 35%, 100% 100%, 12% 100%, 0 75%)' }}
              >
                {/* Tennis ball icon */}
                <div className="w-7 h-7 rounded-full bg-primary flex items-center justify-center shrink-0">
                  <div className="w-3 h-3 rounded-full bg-[#8bc400]" />
                </div>
                <span className="text-white font-extrabold text-base tracking-wide">25% OFF</span>
                {/* Animated chevrons */}
                <div className="ml-auto flex gap-0.5">
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#a3e635" className="animate-[slideRight_0.7s_ease-in-out_infinite_alternate]">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                  <svg width="16" height="16" viewBox="0 0 24 24" fill="#a3e635" style={{animationDelay:'0.2s'}} className="animate-[slideRight_0.7s_ease-in-out_infinite_alternate]">
                    <path d="M9 18l6-6-6-6"/>
                  </svg>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Center: Main player image */}
        <div className="relative overflow-hidden min-h-[420px]"
          style={{ clipPath: 'polygon(0 0, 88% 0, 100% 12%, 100% 100%, 12% 100%, 0 88%)' }}>
          <Image
            src="/hero-bg.jpg"
            alt="Padel player"
            fill
            className="object-cover object-top"
            priority
          />
        </div>

        

        {/* Right: Second image + PUSH THE LIMITS badge */}
        <div className="relative overflow-hidden min-h-75 lg:min-h-105"
          style={{ clipPath: 'polygon(17% 0, 100% 0, 100% 88%, 80% 100%, 0 100%, 0 12%)' }}>
          <Image
            src="/hero-image.jpg"
            alt="Padel ball"
            fill
            className="object-cover object-center"
          />
        </div>

        {/* PUSH THE LIMITS badge - outside clip-path so it's not cut */}
        <div className="absolute right-[20.9%] h-40 top-1/2 -translate-y-1/2 bg-primary px-3 py-4 flex flex-col justify-center items-center text-center z-20"
          style={{ clipPath: 'polygon(0 0, 70% 0%, 100% 15%, 100% 100%, 30% 100%, 0 90%)' }}>
          <span className="text-black font-extrabold text-sm leading-tight block uppercase text-center w-full">
            PUSH<br />THE<br />LIMITS
          </span>
          <Image src="/ball.png" alt="playdel" width={36} height={36} className=" mt-2 object-contain" />
        </div>

      </div>
    </section>
  );
}
