"use client";

import { useState, useEffect } from "react";

const navLinks = [
  { label: "コンセプト", href: "#concept" },
  { label: "メニュー", href: "#menu" },
  { label: "ギャラリー", href: "#gallery" },
  { label: "スタッフ", href: "#staff" },
  { label: "お知らせ", href: "#news" },
  { label: "アクセス", href: "#access" },
];

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled
          ? "bg-[#0e0c09]/95 backdrop-blur-sm border-b border-[#2e2820]"
          : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-6 h-16 flex items-center justify-between">
        {/* Logo */}
        <a
          href="#"
          className="text-[#c9a96e] font-bold text-lg tracking-widest"
        >
          麺匠 龍神
        </a>

        {/* Desktop nav */}
        <nav className="hidden lg:flex items-center gap-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              className="text-xs text-[#ede8de]/70 hover:text-[#c9a96e] tracking-widest transition-colors duration-200"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            className="ml-4 px-5 py-2 border border-[#c9a96e] text-[#c9a96e] text-xs tracking-widest hover:bg-[#c9a96e] hover:text-[#0e0c09] transition-all duration-200"
          >
            ご予約
          </a>
        </nav>

        {/* Hamburger */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="lg:hidden flex flex-col justify-center gap-[5px] w-8 h-8"
          aria-label="メニューを開く"
        >
          <span
            className={`block h-px bg-[#c9a96e] transition-all duration-300 origin-center ${
              isOpen ? "rotate-45 translate-y-[6px]" : ""
            }`}
          />
          <span
            className={`block h-px bg-[#c9a96e] transition-all duration-300 ${
              isOpen ? "opacity-0" : ""
            }`}
          />
          <span
            className={`block h-px bg-[#c9a96e] transition-all duration-300 origin-center ${
              isOpen ? "-rotate-45 -translate-y-[6px]" : ""
            }`}
          />
        </button>
      </div>

      {/* Mobile menu */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96" : "max-h-0"
        } bg-[#0e0c09]/98 border-t border-[#2e2820]`}
      >
        <nav className="flex flex-col gap-6 px-6 py-8">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={() => setIsOpen(false)}
              className="text-[#ede8de]/80 hover:text-[#c9a96e] tracking-widest text-sm transition-colors"
            >
              {link.label}
            </a>
          ))}
          <a
            href="#contact"
            onClick={() => setIsOpen(false)}
            className="inline-block text-center py-3 border border-[#c9a96e] text-[#c9a96e] text-sm tracking-widest hover:bg-[#c9a96e] hover:text-[#0e0c09] transition-all"
          >
            ご予約
          </a>
        </nav>
      </div>
    </header>
  );
}
