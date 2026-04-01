"use client";

import Link from "next/link";
import { useState } from "react";

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="bg-[var(--color-primary)] text-white sticky top-0 z-50 shadow-lg">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 bg-[var(--color-accent)] rounded flex items-center justify-center text-[var(--color-primary)] font-bold text-sm">
            CF
          </div>
          <div className="leading-tight">
            <div className="text-sm font-bold tracking-wide">底地の共有持分買取</div>
            <div className="text-[10px] opacity-70">Common Future & Co.</div>
          </div>
        </Link>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-6 text-sm">
          <Link href="/#about" className="hover:text-[var(--color-accent)] transition">選ばれる理由</Link>
          <Link href="/#flow" className="hover:text-[var(--color-accent)] transition">買取の流れ</Link>
          <Link href="/#faq" className="hover:text-[var(--color-accent)] transition">よくある質問</Link>
          <Link href="/articles/sokochi-kyoyu-mochibun-baikyaku" className="hover:text-[var(--color-accent)] transition">コラム</Link>
          <Link
            href="/#contact"
            className="bg-[var(--color-accent)] text-[var(--color-primary)] px-5 py-2 rounded font-bold hover:bg-[var(--color-accent-light)] transition"
          >
            無料査定はこちら
          </Link>
        </nav>

        {/* Mobile hamburger */}
        <button
          className="md:hidden p-2"
          onClick={() => setMenuOpen(!menuOpen)}
          aria-label="メニュー"
        >
          <div className="space-y-1.5">
            <span className={`block w-6 h-0.5 bg-white transition-transform ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-opacity ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`block w-6 h-0.5 bg-white transition-transform ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </div>
        </button>
      </div>

      {/* Mobile menu */}
      {menuOpen && (
        <nav className="md:hidden bg-[var(--color-primary-light)] px-4 py-4 space-y-3">
          <Link href="/#about" className="block py-2 border-b border-white/20" onClick={() => setMenuOpen(false)}>選ばれる理由</Link>
          <Link href="/#flow" className="block py-2 border-b border-white/20" onClick={() => setMenuOpen(false)}>買取の流れ</Link>
          <Link href="/#faq" className="block py-2 border-b border-white/20" onClick={() => setMenuOpen(false)}>よくある質問</Link>
          <Link href="/articles/sokochi-kyoyu-mochibun-baikyaku" className="block py-2 border-b border-white/20" onClick={() => setMenuOpen(false)}>コラム</Link>
          <Link
            href="/#contact"
            className="block text-center bg-[var(--color-accent)] text-[var(--color-primary)] px-5 py-3 rounded font-bold mt-2"
            onClick={() => setMenuOpen(false)}
          >
            無料査定はこちら
          </Link>
        </nav>
      )}
    </header>
  );
}
