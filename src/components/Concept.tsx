import Image from "next/image";

const concepts = [
  {
    num: "01",
    title: "スープへのこだわり",
    text: "72時間以上かけて炊き上げた清湯スープは、豚骨・鶏ガラ・昆布・鰹節の黄金比から生まれます。雑味のない純粋な旨みだけを丁寧に引き出した、龍神の魂そのものです。",
  },
  {
    num: "02",
    title: "厳選された食材",
    text: "国産小麦を使用した自家製麺は、毎朝丁寧に手打ちします。スープとの絶妙な絡みを追求した加水率と麺の太さは、10年の研究の結晶です。",
  },
  {
    num: "03",
    title: "店主の想い",
    text: "「一杯のラーメンで、日常に非日常を」。お客様が口にした瞬間、全ての疲れが溶けるような体験を届けることが、麺匠 龍神の存在意義です。",
  },
];

export default function Concept() {
  return (
    <section id="concept" className="py-28 md:py-40 bg-[#0e0c09]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <p className="text-[#c9a96e] text-[10px] tracking-[0.6em] mb-5">CONCEPT</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#ede8de] tracking-[0.15em] mb-6">
            こだわり
          </h2>
          <div className="w-10 h-px bg-[#c9a96e] mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-20 items-center">
          {/* Image */}
          <div className="relative aspect-[4/5]">
            <Image
              src="https://placehold.co/800x1000/1a1410/c9a96e?text=Concept"
              alt="店主のこだわり"
              fill
              className="object-cover"
              sizes="(max-width: 1024px) 90vw, 45vw"
            />
            <div className="absolute -bottom-5 -right-5 w-full h-full border border-[#c9a96e]/25 pointer-events-none" />
          </div>

          {/* Text */}
          <div className="space-y-14">
            {concepts.map((c) => (
              <div key={c.num} className="flex gap-7">
                <span className="text-[#c9a96e]/25 text-5xl font-bold leading-none shrink-0 select-none">
                  {c.num}
                </span>
                <div>
                  <h3 className="text-base font-bold text-[#ede8de] tracking-widest mb-3">
                    {c.title}
                  </h3>
                  <p className="text-[#ede8de]/55 leading-8 text-sm">{c.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
