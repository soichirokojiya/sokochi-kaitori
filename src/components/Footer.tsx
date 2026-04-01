import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-slate-800 text-white">
      <div className="max-w-5xl mx-auto px-5 py-14">
        <div className="grid md:grid-cols-3 gap-10">
          <div>
            <div className="flex items-center gap-3 mb-5">
              <div className="w-10 h-10 bg-white/10 rounded-lg flex items-center justify-center">
                <svg viewBox="0 0 48 48" fill="none" className="w-6 h-6">
                  <path d="M10 32 C14 28, 20 30, 24 26 C28 22, 34 24, 38 20" stroke="#60A5FA" strokeWidth="2.5" strokeLinecap="round" fill="none"/>
                  <path d="M10 26 C14 22, 20 24, 24 20 C28 16, 34 18, 38 14" stroke="#ffffff" strokeWidth="2.5" strokeLinecap="round" fill="none" opacity="0.9"/>
                  <path d="M10 20 C14 16, 20 18, 24 14 C28 10, 34 12, 38 8" stroke="#ffffff" strokeWidth="2" strokeLinecap="round" fill="none" opacity="0.5"/>
                  <rect x="8" y="36" width="32" height="3" rx="1.5" fill="#60A5FA" opacity="0.6"/>
                </svg>
              </div>
              <div>
                <div className="font-bold text-[15px]">底地の共有持分買取</div>
                <div className="text-xs opacity-60">Common Future & Co.株式会社</div>
              </div>
            </div>
            <p className="text-sm opacity-70 leading-relaxed">
              底地の共有持分に特化した専門買取サービス。<br />
              他の共有者の同意不要で、あなたの持分だけ売却できます。<br />
              最短当日買取・上限価格なし。
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-[var(--color-primary-light)]">サービス</h3>
            <ul className="space-y-2.5 text-sm opacity-70">
              <li><Link href="/#about" className="hover:opacity-100 transition-opacity duration-200">選ばれる理由</Link></li>
              <li><Link href="/#flow" className="hover:opacity-100 transition-opacity duration-200">買取の流れ</Link></li>
              <li><Link href="/#faq" className="hover:opacity-100 transition-opacity duration-200">よくある質問</Link></li>
              <li><Link href="/#contact" className="hover:opacity-100 transition-opacity duration-200">無料査定</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-[var(--color-primary-light)]">お役立ちコラム</h3>
            <ul className="space-y-2.5 text-sm opacity-70">
              <li><Link href="/articles/sokochi-kyoyu-mochibun-kiso" className="hover:opacity-100 transition-opacity duration-200">底地×共有持分の基礎知識</Link></li>
              <li><Link href="/articles/sokochi-kyoyu-mochibun-baikyaku" className="hover:opacity-100 transition-opacity duration-200">売却方法を徹底比較</Link></li>
              <li><Link href="/articles/sokochi-kyoyu-mochibun-souba" className="hover:opacity-100 transition-opacity duration-200">買取相場の目安</Link></li>
              <li><Link href="/articles/sokochi-souzoku-trouble" className="hover:opacity-100 transition-opacity duration-200">相続トラブル解決法</Link></li>
              <li><Link href="/articles/sokochi-kyoyu-mochibun-zeikin" className="hover:opacity-100 transition-opacity duration-200">売却時の税金</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/15 mt-10 pt-8 text-center text-sm opacity-50 space-y-1">
          <p>
            運営：
            <a href="https://cfac.co.jp" target="_blank" rel="noopener noreferrer" className="underline hover:opacity-100 transition-opacity duration-200">
              Common Future & Company株式会社
            </a>
          </p>
          <p>&copy; {new Date().getFullYear()} Common Future & Company株式会社 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
