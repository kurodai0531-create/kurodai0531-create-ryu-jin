import Image from "next/image";

const items = [
  {
    src: "https://placehold.co/800x800/1a1410/c9a96e?text=料理+1",
    alt: "特製醤油ラーメン",
    className: "col-span-2 row-span-2",
  },
  {
    src: "https://placehold.co/600x400/221e18/c9a96e?text=料理+2",
    alt: "黄金塩ラーメン",
    className: "",
  },
  {
    src: "https://placehold.co/600x400/1a1410/c9a96e?text=店内+1",
    alt: "店内カウンター",
    className: "",
  },
  {
    src: "https://placehold.co/600x400/221e18/c9a96e?text=調理+1",
    alt: "調理シーン",
    className: "",
  },
  {
    src: "https://placehold.co/600x400/1a1410/c9a96e?text=食材",
    alt: "厳選食材",
    className: "",
  },
  {
    src: "https://placehold.co/1200x600/221e18/c9a96e?text=店内+2",
    alt: "店内全景",
    className: "col-span-2",
  },
];

export default function Gallery() {
  return (
    <section id="gallery" className="py-28 md:py-40 bg-[#0e0c09]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <p className="text-[#c9a96e] text-[10px] tracking-[0.6em] mb-5">GALLERY</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#ede8de] tracking-[0.15em] mb-6">
            ギャラリー
          </h2>
          <div className="w-10 h-px bg-[#c9a96e] mx-auto" />
        </div>

        <div className="grid grid-cols-2 md:grid-cols-4 gap-2 auto-rows-[180px] md:auto-rows-[220px]">
          {items.map((item, i) => (
            <div
              key={i}
              className={`relative overflow-hidden group ${item.className}`}
            >
              <Image
                src={item.src}
                alt={item.alt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-700"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute inset-0 bg-[#0e0c09]/0 group-hover:bg-[#0e0c09]/40 transition-colors duration-500" />
              <div className="absolute inset-0 flex items-end p-4 translate-y-2 opacity-0 group-hover:translate-y-0 group-hover:opacity-100 transition-all duration-400">
                <span className="text-[#ede8de] text-xs tracking-widest">
                  {item.alt}
                </span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
