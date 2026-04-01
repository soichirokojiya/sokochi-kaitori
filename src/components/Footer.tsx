import Link from "next/link";

export default function Footer() {
  return (
    <footer className="bg-[var(--color-primary)] text-white">
      <div className="max-w-6xl mx-auto px-4 py-12">
        <div className="grid md:grid-cols-3 gap-8">
          <div>
            <div className="flex items-center gap-2 mb-4">
              <div className="w-8 h-8 bg-[var(--color-accent)] rounded flex items-center justify-center text-[var(--color-primary)] font-bold text-sm">
                CF
              </div>
              <div>
                <div className="font-bold">底地の共有持分買取</div>
                <div className="text-xs opacity-70">Common Future & Co.株式会社</div>
              </div>
            </div>
            <p className="text-sm opacity-80 leading-relaxed">
              底地の共有持分に特化した専門買取サービス。
              他の共有者の同意不要で、あなたの持分だけ売却できます。
            </p>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-[var(--color-accent)]">サービス</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link href="/#about" className="hover:opacity-100 transition">選ばれる理由</Link></li>
              <li><Link href="/#flow" className="hover:opacity-100 transition">買取の流れ</Link></li>
              <li><Link href="/#faq" className="hover:opacity-100 transition">よくある質問</Link></li>
              <li><Link href="/#contact" className="hover:opacity-100 transition">無料査定</Link></li>
            </ul>
          </div>

          <div>
            <h3 className="font-bold mb-4 text-[var(--color-accent)]">お役立ちコラム</h3>
            <ul className="space-y-2 text-sm opacity-80">
              <li><Link href="/articles/sokochi-kyoyu-mochibun-kiso" className="hover:opacity-100 transition">底地×共有持分の基礎知識</Link></li>
              <li><Link href="/articles/sokochi-kyoyu-mochibun-baikyaku" className="hover:opacity-100 transition">売却方法を徹底比較</Link></li>
              <li><Link href="/articles/sokochi-kyoyu-mochibun-souba" className="hover:opacity-100 transition">買取相場の目安</Link></li>
              <li><Link href="/articles/sokochi-souzoku-trouble" className="hover:opacity-100 transition">相続トラブル解決法</Link></li>
              <li><Link href="/articles/sokochi-kyoyu-mochibun-zeikin" className="hover:opacity-100 transition">売却時の税金</Link></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/20 mt-8 pt-8 text-center text-sm opacity-60">
          <p>&copy; {new Date().getFullYear()} Common Future & Co.株式会社 All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
