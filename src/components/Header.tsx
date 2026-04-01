"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-white text-[var(--color-text)] sticky top-0 z-50 shadow-sm border-b border-[var(--color-border)]">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-3">
          <div className="w-10 h-10 bg-[var(--color-primary)] rounded-lg flex items-center justify-center">
            <svg viewBox="0 0 48 48" fill="none" className="w-7 h-7">
              <path d="M24 8L8 20v18a2 2 0 002 2h10v-10h8v10h10a2 2 0 002-2V20L24 8z" fill="#ffffff"/>
              <rect x="18" y="28" width="4" height="4" fill="#e8943a"/>
            </svg>
          </div>
          <div className="leading-tight">
            <div className="text-base font-bold text-[var(--color-primary)]">底地の共有持分買取</div>
            <div className="text-xs text-[var(--color-text-light)]">Common Future & Co.株式会社</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/#about" className="hover:text-[var(--color-primary)] transition">選ばれる理由</Link>
          <Link href="/#flow" className="hover:text-[var(--color-primary)] transition">買取の流れ</Link>
          <Link href="/#faq" className="hover:text-[var(--color-primary)] transition">よくある質問</Link>
          <Link href="/articles/sokochi-kyoyu-mochibun-baikyaku" className="hover:text-[var(--color-primary)] transition">コラム</Link>
          <Link
            href="/#contact"
            className="bg-[var(--color-accent)] text-white px-5 py-2.5 rounded-lg font-bold hover:bg-[var(--color-accent-light)] transition shadow-sm"
          >
            無料査定はこちら
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
          aria-expanded={menuOpen}
          aria-controls="mobile-menu"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-[var(--color-text)] transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[var(--color-text)] transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-[var(--color-text)] transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav id="mobile-menu" className="md:hidden bg-[var(--color-bg)] px-4 py-4 space-y-3 border-t border-[var(--color-border)]">
          <Link href="/#about" className="block py-2 border-b border-[var(--color-border)]" onClick={() => setMenuOpen(false)}>選ばれる理由</Link>
          <Link href="/#flow" className="block py-2 border-b border-[var(--color-border)]" onClick={() => setMenuOpen(false)}>買取の流れ</Link>
          <Link href="/#faq" className="block py-2 border-b border-[var(--color-border)]" onClick={() => setMenuOpen(false)}>よくある質問</Link>
          <Link href="/articles/sokochi-kyoyu-mochibun-baikyaku" className="block py-2 border-b border-[var(--color-border)]" onClick={() => setMenuOpen(false)}>コラム</Link>
          <Link
            href="/#contact"
            className="block text-center bg-[var(--color-accent)] text-white px-5 py-3 rounded-lg font-bold mt-2"
            onClick={() => setMenuOpen(false)}
          >
            無料査定はこちら
          </Link>
        </nav>
      )}
    </header>
  );
}
