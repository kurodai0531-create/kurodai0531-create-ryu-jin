import Image from "next/image";

export default function Hero() {
  return (
    <section
      id="hero"
      className="relative h-screen min-h-[600px] flex items-center justify-center overflow-hidden"
    >
      {/* Background */}
      <div className="absolute inset-0">
        <Image
          src="https://placehold.co/1920x1080/1a1410/c9a96e?text=FV"
          alt="麺匠龍神 ファーストビュー"
          fill
          priority
          className="object-cover"
          sizes="100vw"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-[#0e0c09]/60 via-[#0e0c09]/30 to-[#0e0c09]/85" />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6">
        <div className="flex items-center justify-center gap-5 mb-10">
          <div className="w-20 h-px bg-[#c9a96e]" />
          <span className="text-[#c9a96e] text-xs tracking-[0.5em]">MENSHO RYUJIN</span>
          <div className="w-20 h-px bg-[#c9a96e]" />
        </div>

        <h1 className="text-6xl md:text-8xl lg:text-9xl font-bold text-[#ede8de] tracking-[0.2em] mb-6">
          麺匠 龍神
        </h1>

        <p className="text-lg md:text-2xl text-[#c9a96e] tracking-[0.3em] mb-3">
          一杯に込めた、龍神の魂
        </p>
        <p className="text-xs md:text-sm text-[#ede8de]/50 tracking-widest mb-14">
          厳選素材と秘伝のスープが織りなす、唯一無二の一杯
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <a
            href="#contact"
            className="w-56 py-4 bg-[#c9a96e] text-[#0e0c09] font-bold tracking-[0.2em] text-sm hover:bg-[#e8d5a3] transition-colors duration-300 text-center"
          >
            ご予約はこちら
          </a>
          <a
            href="#menu"
            className="w-56 py-4 border border-[#ede8de]/40 text-[#ede8de] hover:border-[#c9a96e] hover:text-[#c9a96e] transition-colors duration-300 text-sm tracking-[0.2em] text-center"
          >
            メニューを見る
          </a>
        </div>
      </div>

      {/* Scroll indicator */}
      <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-3">
        <span className="text-[#c9a96e]/50 text-[10px] tracking-[0.4em]">SCROLL</span>
        <div className="w-px h-14 bg-gradient-to-b from-[#c9a96e]/50 to-transparent" />
      </div>
    </section>
  );
}
