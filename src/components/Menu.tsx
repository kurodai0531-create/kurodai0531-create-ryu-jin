import Image from "next/image";

const menuItems = [
  {
    id: 1,
    name: "龍神特製醤油ラーメン",
    nameEn: "Special Soy Sauce Ramen",
    description:
      "72時間炊き込んだ清湯スープに秘伝の醤油タレを合わせた看板メニュー。",
    price: "¥1,400",
    tag: "看板",
    image: "https://placehold.co/600x400/1a1410/c9a96e?text=Shoyu+Ramen",
  },
  {
    id: 2,
    name: "黄金塩ラーメン",
    nameEn: "Golden Salt Ramen",
    description:
      "厳選素材から引き出した黄金色の塩スープ。食材本来の旨みを堪能できます。",
    price: "¥1,350",
    tag: "おすすめ",
    image: "https://placehold.co/600x400/221e18/c9a96e?text=Shio+Ramen",
  },
  {
    id: 3,
    name: "濃厚味噌ラーメン",
    nameEn: "Rich Miso Ramen",
    description:
      "信州産味噌を独自にブレンド。コクと旨みが溶け合う重厚な一杯です。",
    price: "¥1,450",
    tag: "人気",
    image: "https://placehold.co/600x400/1a1410/c9a96e?text=Miso+Ramen",
  },
  {
    id: 4,
    name: "辛口つけ麺",
    nameEn: "Spicy Tsukemen",
    description:
      "濃厚な辛口つけだれと自家製太麺の組み合わせ。麺の旨みを存分に。",
    price: "¥1,500",
    tag: "限定",
    image: "https://placehold.co/600x400/221e18/c9a96e?text=Tsukemen",
  },
];

const tagStyle: Record<string, string> = {
  看板: "bg-[#c9a96e] text-[#0e0c09]",
  おすすめ: "border border-[#c9a96e] text-[#c9a96e]",
  人気: "border border-[#c9a96e] text-[#c9a96e]",
  限定: "bg-[#7a1f1f] text-[#ede8de]",
};

export default function Menu() {
  return (
    <section id="menu" className="py-28 md:py-40 bg-[#191510]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <p className="text-[#c9a96e] text-[10px] tracking-[0.6em] mb-5">MENU</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#ede8de] tracking-[0.15em] mb-6">
            メニュー
          </h2>
          <div className="w-10 h-px bg-[#c9a96e] mx-auto" />
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {menuItems.map((item) => (
            <div key={item.id} className="group">
              <div className="relative aspect-[3/2] overflow-hidden mb-5">
                <Image
                  src={item.image}
                  alt={item.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                  sizes="(max-width: 640px) 90vw, (max-width: 1024px) 45vw, 23vw"
                />
                <span
                  className={`absolute top-3 left-3 text-[10px] px-2 py-0.5 tracking-widest ${tagStyle[item.tag]}`}
                >
                  {item.tag}
                </span>
              </div>
              <p className="text-[#c9a96e]/50 text-[10px] tracking-widest mb-1">
                {item.nameEn}
              </p>
              <h3 className="text-[#ede8de] text-sm font-bold tracking-wide mb-2">
                {item.name}
              </h3>
              <p className="text-[#ede8de]/45 text-xs leading-6 mb-4">
                {item.description}
              </p>
              <p className="text-[#c9a96e] font-bold tracking-widest text-sm">
                {item.price}
              </p>
            </div>
          ))}
        </div>

        <p className="text-center text-[#ede8de]/35 text-xs tracking-wider mt-16">
          ※ 価格は税込表示です。季節限定メニューは店頭にてご確認ください。
        </p>
      </div>
    </section>
  );
}
