const links = [
  { label: "コンセプト", href: "#concept" },
  { label: "メニュー", href: "#menu" },
  { label: "ギャラリー", href: "#gallery" },
  { label: "スタッフ", href: "#staff" },
  { label: "お知らせ", href: "#news" },
  { label: "アクセス", href: "#access" },
  { label: "予約・お問い合わせ", href: "#contact" },
];

export default function Footer() {
  return (
    <footer className="bg-[#0a0806] border-t border-[#2e2820] py-16">
      <div className="max-w-7xl mx-auto px-6">
        <div className="flex flex-col md:flex-row justify-between items-start gap-10 mb-12">
          <div>
            <p className="text-[#c9a96e]/40 text-[10px] tracking-[0.5em] mb-2">
              MENSHO RYUJIN
            </p>
            <p className="text-2xl font-bold text-[#ede8de] tracking-[0.2em]">
              麺匠 龍神
            </p>
          </div>

          <nav className="flex flex-wrap gap-x-8 gap-y-3">
            {links.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-[#9a9080] text-xs tracking-widest hover:text-[#c9a96e] transition-colors"
              >
                {link.label}
              </a>
            ))}
          </nav>
        </div>

        <div className="h-px bg-[#2e2820] mb-8" />

        <div className="flex flex-col sm:flex-row justify-between items-center gap-4 text-[#9a9080] text-[11px] tracking-widest">
          <p>〒000-0000 東京都○○区○○町1-2-3</p>
          <p>© 2026 麺匠 龍神. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
