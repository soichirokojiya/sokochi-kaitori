"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-[var(--color-border)]">
      <div className="max-w-5xl mx-auto px-5 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 cursor-pointer">
          <div className="w-10 h-10 bg-[var(--color-primary)] rounded-lg flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 48 48" fill="none" className="w-6 h-6">
              <path d="M24 8L8 20v18a2 2 0 002 2h10v-10h8v10h10a2 2 0 002-2V20L24 8z" fill="#fff"/>
              <rect x="18" y="28" width="4" height="4" fill="#14B8A6"/>
            </svg>
          </div>
          <div className="leading-snug">
            <div className="text-[15px] font-bold text-[var(--color-primary)]">底地の共有持分買取</div>
            <div className="text-[11px] text-[var(--color-text-muted)]">Common Future & Co.株式会社</div>
          </div>
        </Link>

        <nav className="hidden md:flex items-center gap-8 text-[15px] font-medium text-[var(--color-text-light)]">
          <Link href="/#about" className="hover:text-[var(--color-primary)] transition-colors duration-200 cursor-pointer">選ばれる理由</Link>
          <Link href="/#flow" className="hover:text-[var(--color-primary)] transition-colors duration-200 cursor-pointer">買取の流れ</Link>
          <Link href="/#faq" className="hover:text-[var(--color-primary)] transition-colors duration-200 cursor-pointer">よくある質問</Link>
          <Link href="/#articles" className="hover:text-[var(--color-primary)] transition-colors duration-200 cursor-pointer">コラム</Link>
          <Link
            href="/#contact"
            className="bg-[var(--color-cta)] text-white px-6 py-2.5 rounded-lg font-bold hover:bg-[var(--color-cta-light)] transition-colors duration-200 cursor-pointer"
          >
            無料査定はこちら
          </Link>
        </nav>

        <button
          className="md:hidden p-2 cursor-pointer"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-[var(--color-text)] transition-transform duration-200 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[var(--color-text)] transition-opacity duration-200 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[var(--color-text)] transition-transform duration-200 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {menuOpen && (
        <nav id="mobile-menu" className="md:hidden bg-white px-5 pb-5 space-y-1 border-t border-[var(--color-border)]">
          {[
            { href: "/#about", label: "選ばれる理由" },
            { href: "/#flow", label: "買取の流れ" },
            { href: "/#faq", label: "よくある質問" },
            { href: "/#articles", label: "コラム" },
          ].map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className="block py-3 text-[var(--color-text-light)] border-b border-[var(--color-border)] hover:text-[var(--color-primary)] transition-colors duration-200 cursor-pointer"
              onClick={() => setMenuOpen(false)}
            >
              {item.label}
            </Link>
          ))}
          <Link
            href="/#contact"
            className="block text-center bg-[var(--color-cta)] text-white px-5 py-3 rounded-lg font-bold mt-3 cursor-pointer"
            onClick={() => setMenuOpen(false)}
          >
            無料査定はこちら
          </Link>
        </nav>
      )}
    </header>
  );
}
