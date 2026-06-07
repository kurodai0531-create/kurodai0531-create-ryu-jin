import Image from "next/image";

export default function Staff() {
  return (
    <section id="staff" className="py-28 md:py-40 bg-[#191510]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <p className="text-[#c9a96e] text-[10px] tracking-[0.6em] mb-5">STAFF</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#ede8de] tracking-[0.15em] mb-6">
            スタッフ紹介
          </h2>
          <div className="w-10 h-px bg-[#c9a96e] mx-auto" />
        </div>

        <div className="max-w-4xl mx-auto grid md:grid-cols-2 gap-20 items-center">
          {/* Photo */}
          <div className="relative aspect-[3/4] max-w-xs mx-auto w-full">
            <Image
              src="https://placehold.co/600x800/1a1410/c9a96e?text=Owner"
              alt="店主 山田 龍之介"
              fill
              className="object-cover"
              sizes="(max-width: 768px) 80vw, 40vw"
            />
            <div className="absolute -bottom-5 -left-5 w-full h-full border border-[#c9a96e]/25 pointer-events-none" />
          </div>

          {/* Profile */}
          <div>
            <p className="text-[#c9a96e] text-[10px] tracking-[0.5em] mb-3">
              OWNER &amp; CHEF
            </p>
            <h3 className="text-3xl font-bold text-[#ede8de] tracking-[0.2em] mb-2">
              山田 龍之介
            </h3>
            <p className="text-[#ede8de]/30 text-sm tracking-widest mb-10">
              Ryunosuke Yamada
            </p>

            <div className="w-8 h-px bg-[#c9a96e] mb-10" />

            <p className="text-[#ede8de]/60 leading-9 text-sm mb-5">
              東京の名店で10年の修行を経て、故郷にて「麺匠 龍神」を開業。
              ラーメンの可能性を追求し続け、シンプルの中に深みを宿す一杯を目指しています。
            </p>
            <p className="text-[#ede8de]/60 leading-9 text-sm mb-12">
              素材の声に耳を傾け、スープと麺が語り合う瞬間を大切にする。
              お客様の「また来たい」の一言が、私の原動力です。
            </p>

            <blockquote className="border-l-2 border-[#c9a96e] pl-6">
              <p className="text-[#c9a96e] text-base leading-9">
                「ラーメンは、作り手の魂と<br />
                食べ手の感動が出会う場所」
              </p>
            </blockquote>
          </div>
        </div>
      </div>
    </section>
  );
}
