import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      {/* Hero - クリーンで信頼感 */}
      <section className="hero-bg text-white">
        <div className="max-w-5xl mx-auto px-5 py-20 md:py-28">
          <div className="max-w-2xl">
            <p className="inline-block text-sm font-semibold bg-white/15 backdrop-blur-sm px-4 py-1.5 rounded-full mb-8 border border-white/20">
              底地 × 共有持分 専門の買取サービス
            </p>
            <h1 className="text-3xl md:text-[44px] font-extrabold leading-[1.3] mb-6">
              底地の共有持分、<br />
              あなたの持分だけ<br />
              売却できます。
            </h1>
            <p className="text-lg md:text-xl opacity-90 mb-10 leading-relaxed">
              他の共有者の同意は不要です。<br />
              <strong>最短当日買取。上限価格なし。</strong><br />
              複雑な権利関係も、専門スタッフが丁寧に対応します。
            </p>
            <Link
              href="#contact"
              className="inline-block bg-[var(--color-cta)] text-white px-10 py-4 rounded-xl font-bold text-lg hover:bg-[var(--color-cta-light)] transition-colors duration-200 cursor-pointer"
            >
              無料査定を申し込む
            </Link>
            <div className="flex flex-wrap gap-5 mt-10 text-[15px] opacity-85">
              {["最短当日買取", "上限価格なし", "全国対応", "秘密厳守"].map((t) => (
                <span key={t} className="flex items-center gap-1.5">
                  <svg className="w-5 h-5 text-[var(--color-primary-light)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                  {t}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* 実績バー */}
      <section className="bg-white border-b border-[var(--color-border)] py-8">
        <div className="max-w-5xl mx-auto px-5">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
            {[
              { value: "最短当日", label: "買取スピード" },
              { value: "上限なし", label: "買取価格" },
              { value: "0円", label: "仲介手数料" },
              { value: "全国", label: "対応エリア" },
            ].map((item) => (
              <div key={item.label}>
                <div className="text-2xl md:text-3xl font-extrabold text-[var(--color-primary)]">{item.value}</div>
                <div className="text-sm text-[var(--color-text-muted)] mt-1">{item.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 安心ポイント */}
      <section className="bg-[var(--color-bg)] py-6">
        <div className="max-w-5xl mx-auto px-5">
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-[15px] text-[var(--color-text-light)]">
            {[
              { label: "宅地建物取引業者", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
              { label: "弁護士・税理士と提携", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" },
              { label: "秘密厳守", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
              { label: "しつこい営業なし", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
            ].map((item) => (
              <span key={item.label} className="flex items-center gap-2 font-medium">
                <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} /></svg>
                {item.label}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* お悩み */}
      <section className="py-20 bg-white">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">こんなお悩み、ありませんか？</h2>
          <p className="text-center text-[var(--color-text-muted)] mb-12">底地の共有持分は、通常の不動産以上に問題が複雑です</p>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-5">
            {[
              { title: "共有者と連絡が取れない", desc: "相続で底地を共有しているが、他の共有者と音信不通。売却も管理もできない" },
              { title: "地代が少なく固定資産税が重い", desc: "微々たる地代しか入らないのに固定資産税はかかる。毎年赤字が出ている" },
              { title: "兄弟間で意見が合わない", desc: "売りたい人と持ち続けたい人で意見が割れて膠着状態" },
              { title: "不動産会社に断られた", desc: "底地の共有持分は特殊すぎて一般の不動産会社では取り扱えないと言われた" },
              { title: "相続手続きが複雑すぎる", desc: "権利関係が入り組んでいて何から手をつけていいかわからない" },
              { title: "早急に現金化したい", desc: "相続税の支払い期限が迫っている。一刻も早く現金化したい" },
            ].map((item, i) => (
              <div key={i} className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)]">
                <h3 className="font-bold text-[17px] mb-2 text-[var(--color-text)]">{item.title}</h3>
                <p className="text-[var(--color-text-light)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <p className="text-center mt-10 text-lg font-bold text-[var(--color-primary)]">
            これらの問題、すべて解決できます。
          </p>
        </div>
      </section>

      {/* 選ばれる理由 */}
      <section id="about" className="py-20 bg-[var(--color-bg)]">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">選ばれる理由</h2>
          <p className="text-center text-[var(--color-text-muted)] mb-12">底地×共有持分の専門家として、複雑な案件に対応します</p>
          <div className="grid md:grid-cols-2 gap-6">
            {[
              { num: "01", title: "底地×共有持分に完全特化", desc: "「底地の共有持分」という最もニッチな領域に特化。借地権が絡む複雑な権利関係にも精通しています。" },
              { num: "02", title: "他の共有者の同意不要", desc: "民法上、共有持分は各共有者が自由に処分できます。他の共有者と連絡が取れなくても売却可能です。" },
              { num: "03", title: "最短当日買取・上限価格なし", desc: "スピードと価格に自信があります。最短当日での買取が可能。買取価格に上限は設けておりません。" },
              { num: "04", title: "弁護士・税理士との連携体制", desc: "相続問題や税務の疑問も、提携の専門家チームがワンストップでサポート。仲介手数料も不要です。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-5 bg-white rounded-xl p-7 border border-[var(--color-border)]">
                <div className="flex-shrink-0 w-12 h-12 bg-[var(--color-primary)] text-white rounded-lg flex items-center justify-center font-extrabold text-lg">
                  {item.num}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-[var(--color-text-light)] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* 底地の共有持分とは */}
      <section className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            そもそも「底地の共有持分」とは？
          </h2>
          <div className="space-y-6">
            <div className="bg-[var(--color-bg)] rounded-xl p-7 border border-[var(--color-border)]">
              <h3 className="font-bold text-lg mb-3 text-[var(--color-primary)]">底地（そこち）とは</h3>
              <p className="text-[var(--color-text-light)] leading-relaxed">
                借地権が設定されている土地のうち、地主が持っている所有権のことです。借地人が建物を建てて使用しているため、地主は自由に土地を使えず、得られる収益は地代のみ。更地に比べて市場価値が大幅に低くなります。
              </p>
            </div>
            <div className="bg-[var(--color-bg)] rounded-xl p-7 border border-[var(--color-border)]">
              <h3 className="font-bold text-lg mb-3 text-[var(--color-primary)]">共有持分とは</h3>
              <p className="text-[var(--color-text-light)] leading-relaxed">
                一つの不動産を複数人で所有している場合の、各人の持ち分（権利の割合）のことです。主に相続をきっかけに発生し、全員の同意がないと不動産全体の売却や大規模な変更ができません。
              </p>
            </div>
            <div className="bg-[var(--color-bg-muted)] rounded-xl p-7 border-2 border-[var(--color-cta)]/30">
              <h3 className="font-bold text-lg mb-3 text-[var(--color-cta)]">底地 × 共有持分 = 二重の制約</h3>
              <p className="text-[var(--color-text-light)] leading-relaxed">
                「借地権の制約」と「共有の制約」が二重にかかった状態です。一般の不動産会社では取り扱いが難しく、専門知識を持った業者でなければ適切な査定・買取ができません。だからこそ、<strong className="text-[var(--color-primary)]">専門特化した当社</strong>にお任せください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* 買取の流れ */}
      <section id="flow" className="py-20 bg-[var(--color-bg)]">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">かんたん4ステップ</h2>
          <div className="space-y-0">
            {[
              { title: "無料査定のお申し込み", desc: "フォームでお気軽にご連絡ください。", time: "所要時間：5分" },
              { title: "物件調査・査定", desc: "登記簿謄本や周辺相場をもとに適正に査定します。", time: "最短即日" },
              { title: "買取金額のご提示", desc: "査定結果をご説明します。お断りいただいても構いません。", time: "査定後すぐ" },
              { title: "契約・お支払い", desc: "契約締結後、指定口座にお振込み。手続きは当社が代行。", time: "最短当日で完了" },
            ].map((item, i) => (
              <div key={i} className="flex gap-6">
                <div className="flex flex-col items-center">
                  <div className="w-11 h-11 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-bold flex-shrink-0 z-10">
                    {i + 1}
                  </div>
                  {i < 3 && <div className="w-px h-full bg-[var(--color-border)] my-1" />}
                </div>
                <div className="pb-10">
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-[var(--color-text-light)] mb-2">{item.desc}</p>
                  <span className="text-sm text-[var(--color-primary)] font-medium">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-20 bg-white">
        <div className="max-w-3xl mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">よくあるご質問</h2>
          <div className="space-y-3">
            {[
              { q: "他の共有者に知られずに売却できますか？", a: "はい、可能です。共有持分の売却は各共有者の権利として認められており、他の共有者の同意や通知は法律上不要です。秘密厳守で対応いたします。" },
              { q: "底地の共有持分はいくらぐらいで売れますか？", a: "一般的な目安として更地価格の10〜15%程度ですが、条件によって大きく変わります。当社は上限価格なしで査定しますので、まずは無料査定をご利用ください。" },
              { q: "本当に当日買取できますか？", a: "はい。書類が揃っていれば最短当日での買取が可能です。お急ぎの場合はその旨をお伝えください。" },
              { q: "相続登記がまだ済んでいませんが売却できますか？", a: "売却前に相続登記が必要ですが、提携の司法書士がサポートいたしますのでご安心ください。" },
              { q: "遠方に住んでいますが対応してもらえますか？", a: "全国どこからでもご対応可能です。郵送やオンラインでの契約にも対応しております。" },
              { q: "査定だけでも大丈夫ですか？", a: "もちろんです。査定は完全無料で、お断りいただいても費用はかかりません。しつこい営業も一切いたしません。" },
            ].map((item, i) => (
              <details key={i} className="group border border-[var(--color-border)] rounded-xl overflow-hidden bg-[var(--color-bg)]">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-bold hover:bg-white transition-colors duration-200">
                  <span className="flex items-center gap-3 text-[var(--color-text)]">
                    <span className="text-[var(--color-primary)] font-extrabold">Q.</span>
                    {item.q}
                  </span>
                  <svg className="w-5 h-5 text-[var(--color-text-muted)] group-open:rotate-180 transition-transform duration-200 flex-shrink-0 ml-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-[var(--color-text-light)] leading-relaxed">
                  <span className="text-[var(--color-cta)] font-extrabold mr-2">A.</span>{item.a}
                </div>
              </details>
            ))}
          </div>
          <script
            type="application/ld+json"
            dangerouslySetInnerHTML={{
              __html: JSON.stringify({
                "@context": "https://schema.org",
                "@type": "FAQPage",
                mainEntity: [
                  { "@type": "Question", name: "他の共有者に知られずに売却できますか？", acceptedAnswer: { "@type": "Answer", text: "はい、可能です。共有持分の売却は各共有者の権利として認められており、他の共有者の同意や通知は法律上不要です。" } },
                  { "@type": "Question", name: "底地の共有持分はいくらぐらいで売れますか？", acceptedAnswer: { "@type": "Answer", text: "一般的な目安として更地価格の10〜15%程度ですが、条件によって大きく変わります。" } },
                  { "@type": "Question", name: "本当に当日買取できますか？", acceptedAnswer: { "@type": "Answer", text: "はい。書類が揃っていれば最短当日での買取が可能です。" } },
                  { "@type": "Question", name: "相続登記がまだ済んでいませんが売却できますか？", acceptedAnswer: { "@type": "Answer", text: "売却前に相続登記が必要ですが、提携の司法書士がサポートいたします。" } },
                  { "@type": "Question", name: "遠方に住んでいますが対応してもらえますか？", acceptedAnswer: { "@type": "Answer", text: "全国どこからでもご対応可能です。郵送やオンラインでの契約にも対応しております。" } },
                  { "@type": "Question", name: "査定だけでも大丈夫ですか？", acceptedAnswer: { "@type": "Answer", text: "もちろんです。査定は完全無料で、お断りいただいても費用はかかりません。" } },
                ],
              }),
            }}
          />
        </div>
      </section>

      {/* コラム */}
      <section id="articles" className="py-20 bg-[var(--color-bg)]">
        <div className="max-w-5xl mx-auto px-5">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">お役立ちコラム</h2>
          <p className="text-center text-[var(--color-text-muted)] mb-12">底地・共有持分に関する専門知識をわかりやすく解説</p>
          <div className="grid md:grid-cols-3 gap-5">
            {[
              { href: "/articles/sokochi-kyoyu-mochibun-kiso", title: "底地×共有持分の基礎知識", desc: "両方が絡むケースの問題点を基本から解説", tag: "基礎知識" },
              { href: "/articles/sokochi-kyoyu-mochibun-baikyaku", title: "売却する4つの方法", desc: "あなたの状況に最適な方法がわかります", tag: "売却方法" },
              { href: "/articles/sokochi-kyoyu-mochibun-souba", title: "買取相場はいくら？", desc: "相場の目安と路線価からの概算方法", tag: "相場" },
              { href: "/articles/sokochi-souzoku-trouble", title: "相続トラブル事例と解決法", desc: "よくある事例と解決策をご紹介", tag: "相続" },
              { href: "/articles/sokochi-kyoyu-mochibun-zeikin", title: "売却した時の税金", desc: "計算方法と使える特例を解説", tag: "税金" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="bg-white rounded-xl border border-[var(--color-border)] overflow-hidden hover:shadow-md transition-shadow duration-200 group cursor-pointer">
                <div className="h-1.5 bg-[var(--color-primary)]" />
                <div className="p-5">
                  <span className="inline-block text-xs font-bold text-[var(--color-primary)] bg-[var(--color-bg)] px-2.5 py-1 rounded mb-3">{item.tag}</span>
                  <h3 className="font-bold mb-2 group-hover:text-[var(--color-primary)] transition-colors duration-200">{item.title}</h3>
                  <p className="text-sm text-[var(--color-text-muted)]">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + フォーム */}
      <section id="contact" className="py-20 hero-bg text-white">
        <div className="max-w-3xl mx-auto px-5">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">まずは無料査定からお気軽にどうぞ</h2>
            <p className="opacity-90 text-lg leading-relaxed">
              底地の共有持分のことなら何でもご相談ください。<br />
              経験豊富な専門スタッフが丁寧にご対応します。
            </p>
          </div>
          <ContactForm />
        </div>
      </section>
    </>
  );
}
