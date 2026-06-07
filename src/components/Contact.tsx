"use client";

import { useState } from "react";

const inputBase =
  "w-full bg-[#221e18] border border-[#2e2820] text-[#ede8de] px-4 py-3 text-sm tracking-wide placeholder-[#9a9080]/40 focus:outline-none focus:border-[#c9a96e] transition-colors duration-200";

const snsLinks = [
  { label: "Instagram", short: "IG" },
  { label: "X", short: "X" },
  { label: "LINE", short: "LINE" },
];

export default function Contact() {
  const [form, setForm] = useState({
    name: "",
    email: "",
    tel: "",
    date: "",
    guests: "",
    message: "",
  });

  const handleChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ) => {
    setForm((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert("送信機能は実装予定です。");
  };

  return (
    <section id="contact" className="py-28 md:py-40 bg-[#0e0c09]">
      <div className="max-w-7xl mx-auto px-6">
        <div className="text-center mb-24">
          <p className="text-[#c9a96e] text-[10px] tracking-[0.6em] mb-5">
            RESERVATION &amp; CONTACT
          </p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#ede8de] tracking-[0.15em] mb-6">
            予約・お問い合わせ
          </h2>
          <div className="w-10 h-px bg-[#c9a96e] mx-auto" />
        </div>

        <div className="grid lg:grid-cols-2 gap-20">
          {/* Form */}
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="grid sm:grid-cols-2 gap-6">
              <div>
                <label className="block text-[#c9a96e] text-[10px] tracking-[0.4em] mb-2">
                  お名前 <span className="text-[#7a1f1f]">*</span>
                </label>
                <input
                  type="text"
                  name="name"
                  required
                  value={form.name}
                  onChange={handleChange}
                  placeholder="山田 花子"
                  className={inputBase}
                />
              </div>
              <div>
                <label className="block text-[#c9a96e] text-[10px] tracking-[0.4em] mb-2">
                  人数 <span className="text-[#7a1f1f]">*</span>
                </label>
                <select
                  name="guests"
                  required
                  value={form.guests}
                  onChange={handleChange}
                  className={inputBase}
                >
                  <option value="" disabled>
                    選択してください
                  </option>
                  {[1, 2, 3, 4, 5, 6].map((n) => (
                    <option key={n} value={n}>
                      {n}名
                    </option>
                  ))}
                </select>
              </div>
            </div>

            <div>
              <label className="block text-[#c9a96e] text-[10px] tracking-[0.4em] mb-2">
                メールアドレス <span className="text-[#7a1f1f]">*</span>
              </label>
              <input
                type="email"
                name="email"
                required
                value={form.email}
                onChange={handleChange}
                placeholder="example@mail.com"
                className={inputBase}
              />
            </div>

            <div>
              <label className="block text-[#c9a96e] text-[10px] tracking-[0.4em] mb-2">
                電話番号
              </label>
              <input
                type="tel"
                name="tel"
                value={form.tel}
                onChange={handleChange}
                placeholder="03-0000-0000"
                className={inputBase}
              />
            </div>

            <div>
              <label className="block text-[#c9a96e] text-[10px] tracking-[0.4em] mb-2">
                ご希望日時
              </label>
              <input
                type="datetime-local"
                name="date"
                value={form.date}
                onChange={handleChange}
                className={inputBase}
              />
            </div>

            <div>
              <label className="block text-[#c9a96e] text-[10px] tracking-[0.4em] mb-2">
                ご要望・ご質問
              </label>
              <textarea
                name="message"
                value={form.message}
                onChange={handleChange}
                rows={5}
                placeholder="アレルギーや席のご要望などがあればご記入ください"
                className={`${inputBase} resize-none`}
              />
            </div>

            <button
              type="submit"
              className="w-full py-4 bg-[#c9a96e] text-[#0e0c09] font-bold tracking-[0.25em] text-sm hover:bg-[#e8d5a3] transition-colors duration-300"
            >
              送信する
            </button>
          </form>

          {/* Contact info */}
          <div className="space-y-12">
            <div>
              <p className="text-[#c9a96e] text-[10px] tracking-[0.5em] mb-5">
                PHONE RESERVATION
              </p>
              <a
                href="tel:03-0000-0000"
                className="block text-4xl font-bold text-[#ede8de] tracking-widest hover:text-[#c9a96e] transition-colors"
              >
                03-0000-0000
              </a>
              <p className="text-[#9a9080] text-xs mt-3 tracking-widest">
                受付時間：11:00 〜 21:00（定休日を除く）
              </p>
            </div>

            <div className="h-px bg-[#2e2820]" />

            <div>
              <p className="text-[#c9a96e] text-[10px] tracking-[0.5em] mb-6">
                FOLLOW US
              </p>
              <div className="flex gap-4">
                {snsLinks.map((sns) => (
                  <a
                    key={sns.label}
                    href="#"
                    aria-label={sns.label}
                    className="flex flex-col items-center gap-2 group"
                  >
                    <div className="w-12 h-12 border border-[#2e2820] flex items-center justify-center text-[#9a9080] text-xs group-hover:border-[#c9a96e] group-hover:text-[#c9a96e] transition-colors">
                      {sns.short}
                    </div>
                    <span className="text-[#9a9080] text-[10px] group-hover:text-[#c9a96e] transition-colors tracking-wider">
                      {sns.label}
                    </span>
                  </a>
                ))}
              </div>
            </div>

            <div className="h-px bg-[#2e2820]" />

            <div className="bg-[#191510] border border-[#2e2820] p-7">
              <p className="text-[#c9a96e] text-[10px] tracking-[0.4em] mb-5">
                ご予約の注意事項
              </p>
              <ul className="space-y-2 text-[#9a9080] text-xs leading-7">
                <li>・ご予約は2名様より承ります</li>
                <li>・キャンセルは前日17時までにご連絡ください</li>
                <li>・当日キャンセルはキャンセル料が発生する場合があります</li>
                <li>・コースのみのご予約となります（要事前確認）</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
