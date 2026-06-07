const hours = [
  { day: "平日", time: "11:30 〜 14:30 / 18:00 〜 22:00" },
  { day: "土日祝", time: "11:00 〜 15:00 / 17:30 〜 22:00" },
];

export default function Access() {
  return (
    <section id="access" className="py-28 md:py-40 bg-[#191510]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <p className="text-[#c9a96e] text-[10px] tracking-[0.6em] mb-5">ACCESS</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#ede8de] tracking-[0.15em] mb-6">
            店舗情報・アクセス
          </h2>
          <div className="w-10 h-px bg-[#c9a96e] mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-16">
          {/* Store info */}
          <div className="space-y-10">
            <div>
              <p className="text-[#c9a96e] text-[10px] tracking-[0.5em] mb-3">ADDRESS</p>
              <p className="text-[#ede8de]/70 text-sm leading-8">
                〒000-0000
                <br />
                東京都○○区○○町1-2-3 RYUJINビル 1F
                <br />
                ○○駅 徒歩3分
              </p>
            </div>

            <div className="h-px bg-[#2e2820]" />

            <div>
              <p className="text-[#c9a96e] text-[10px] tracking-[0.5em] mb-3">HOURS</p>
              <div className="space-y-3">
                {hours.map((h) => (
                  <div key={h.day} className="flex gap-6 text-sm">
                    <span className="text-[#9a9080] w-12 shrink-0">{h.day}</span>
                    <span className="text-[#ede8de]/70">{h.time}</span>
                  </div>
                ))}
              </div>
            </div>

            <div className="h-px bg-[#2e2820]" />

            <div>
              <p className="text-[#c9a96e] text-[10px] tracking-[0.5em] mb-3">CLOSED</p>
              <p className="text-[#ede8de]/70 text-sm">
                毎週火曜日（祝日の場合は翌水曜日）
              </p>
            </div>

            <div className="h-px bg-[#2e2820]" />

            <div className="flex gap-16">
              <div>
                <p className="text-[#c9a96e] text-[10px] tracking-[0.5em] mb-3">TEL</p>
                <a
                  href="tel:03-0000-0000"
                  className="text-[#ede8de]/70 text-sm hover:text-[#c9a96e] transition-colors"
                >
                  03-0000-0000
                </a>
              </div>
              <div>
                <p className="text-[#c9a96e] text-[10px] tracking-[0.5em] mb-3">SEATS</p>
                <p className="text-[#ede8de]/70 text-sm">
                  12席（カウンター8・テーブル4）
                </p>
              </div>
            </div>
          </div>

          {/* Map */}
          <div className="w-full min-h-[360px] bg-[#221e18] border border-[#2e2820] flex items-center justify-center">
            <div className="text-center">
              <div className="w-10 h-10 border-2 border-[#c9a96e] rounded-full flex items-center justify-center mx-auto mb-5">
                <div className="w-2.5 h-2.5 bg-[#c9a96e] rounded-full" />
              </div>
              <p className="text-[#9a9080] text-sm tracking-widest mb-2">
                Google Maps
              </p>
              <p className="text-[#9a9080]/50 text-xs leading-6">
                実際の住所が確定したら
                <br />
                Google Maps の埋め込みを設置します
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
