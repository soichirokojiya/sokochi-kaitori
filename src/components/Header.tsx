"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white sticky top-0 z-50 border-b border-[var(--color-border)]">
      <div className="max-w-5xl mx-auto px-5 py-4 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3 cursor-pointer">
          <div className="w-11 h-11 bg-[var(--color-primary)] rounded-lg flex items-center justify-center flex-shrink-0">
            <svg viewBox="0 0 48 48" fill="none" className="w-6 h-6">
              <path d="M10 32 C14 28, 20 30, 24 26 C28 22, 34 24, 38 20" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
              <path d="M10 26 C14 22, 20 24, 24 20 C28 16, 34 18, 38 14" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.9"/>
              <path d="M10 20 C14 16, 20 18, 24 14 C28 10, 34 12, 38 8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5"/>
              <rect x="8" y="36" width="32" height="3" rx="1.5" fill="#60A5FA" opacity="0.6"/>
            </svg>
          </div>
          <div className="leading-snug">
            <div className="text-base font-bold text-[var(--color-primary)]">底地の共有持分専門</div>
            <div className="text-xs text-[var(--color-text-muted)]">底地ドットコム</div>
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
