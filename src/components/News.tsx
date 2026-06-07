const newsItems = [
  {
    date: "2026.06.01",
    category: "新メニュー",
    title: "夏季限定「冷やし龍神ラーメン」登場",
    color: "border-[#c9a96e] text-[#c9a96e]",
  },
  {
    date: "2026.05.20",
    category: "イベント",
    title: "開業5周年記念フェア開催（6月15日〜30日）",
    color: "border-[#7a9e7e] text-[#7a9e7e]",
  },
  {
    date: "2026.05.10",
    category: "営業情報",
    title: "6月の臨時休業日のご案内",
    color: "border-[#9a9080] text-[#9a9080]",
  },
  {
    date: "2026.04.15",
    category: "新メニュー",
    title: "「龍神特製チャーシュー丼」をサイドメニューに追加",
    color: "border-[#c9a96e] text-[#c9a96e]",
  },
  {
    date: "2026.03.01",
    category: "お知らせ",
    title: "テイクアウトスープセットの販売を開始しました",
    color: "border-[#9a9080] text-[#9a9080]",
  },
];

export default function News() {
  return (
    <section id="news" className="py-28 md:py-40 bg-[#0e0c09]">
      <div className="max-w-3xl mx-auto px-6">
        <div className="text-center mb-24">
          <p className="text-[#c9a96e] text-[10px] tracking-[0.6em] mb-5">NEWS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#ede8de] tracking-[0.15em] mb-6">
            お知らせ
          </h2>
          <div className="w-10 h-px bg-[#c9a96e] mx-auto" />
        </div>

        <div className="divide-y divide-[#2e2820]">
          {newsItems.map((item, i) => (
            <div
              key={i}
              className="py-6 flex flex-col sm:flex-row sm:items-center gap-3 sm:gap-6 group cursor-pointer"
            >
              <time className="text-[#9a9080] text-xs tracking-widest shrink-0">
                {item.date}
              </time>
              <span
                className={`text-[10px] border px-2 py-0.5 tracking-widest shrink-0 ${item.color}`}
              >
                {item.category}
              </span>
              <span className="text-[#ede8de]/70 group-hover:text-[#c9a96e] transition-colors text-sm tracking-wide">
                {item.title}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
