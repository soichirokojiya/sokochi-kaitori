import Link from "next/link";
import ContactForm from "@/components/ContactForm";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="hero-gradient text-white relative overflow-hidden">
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-10 left-10 w-64 h-64 border border-white/30 rounded-full" />
          <div className="absolute bottom-10 right-10 w-96 h-96 border border-white/20 rounded-full" />
        </div>
        <div className="max-w-6xl mx-auto px-4 py-16 md:py-24 relative z-10">
          <div className="grid md:grid-cols-2 gap-10 items-center">
            <div>
              <div className="inline-flex items-center gap-2 bg-white/15 backdrop-blur-sm text-white text-sm font-bold px-4 py-2 rounded-full mb-6 border border-white/20">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M6.267 3.455a3.066 3.066 0 001.745-.723 3.066 3.066 0 013.976 0 3.066 3.066 0 001.745.723 3.066 3.066 0 012.812 2.812c.051.643.304 1.254.723 1.745a3.066 3.066 0 010 3.976 3.066 3.066 0 00-.723 1.745 3.066 3.066 0 01-2.812 2.812 3.066 3.066 0 00-1.745.723 3.066 3.066 0 01-3.976 0 3.066 3.066 0 00-1.745-.723 3.066 3.066 0 01-2.812-2.812 3.066 3.066 0 00-.723-1.745 3.066 3.066 0 010-3.976 3.066 3.066 0 00.723-1.745 3.066 3.066 0 012.812-2.812zm7.44 5.252a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" /></svg>
                底地 × 共有持分 専門
              </div>
              <h1 className="text-3xl md:text-5xl font-extrabold leading-tight mb-6">
                底地の共有持分、<br />
                <span className="text-[var(--color-accent)]">あなたの持分だけ</span><br />
                売却できます。
              </h1>
              <p className="text-lg md:text-xl opacity-90 mb-8 leading-relaxed">
                他の共有者の同意は不要。<br />
                <strong>最短当日買取・上限価格なし。</strong><br className="hidden md:block" />
                底地×共有持分に特化した専門買取で、<br className="hidden md:block" />
                複雑な権利関係もスムーズに解決します。
              </p>
              <div className="flex flex-col sm:flex-row gap-4">
                <Link
                  href="#contact"
                  className="bg-[var(--color-accent)] text-white px-8 py-4 rounded-xl font-bold text-lg hover:bg-[var(--color-accent-light)] transition text-center shadow-lg"
                >
                  無料査定を申し込む
                </Link>
              </div>
              <div className="flex flex-wrap items-center gap-4 md:gap-6 mt-8 text-sm opacity-90">
                {["最短当日買取", "上限価格なし", "全国対応", "秘密厳守"].map((text, i) => (
                  <div key={i} className="flex items-center gap-1.5">
                    <svg className="w-5 h-5 text-[var(--color-accent)]" fill="currentColor" viewBox="0 0 20 20"><path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" /></svg>
                    {text}
                  </div>
                ))}
              </div>
            </div>
            <div className="hidden md:block">
              <div className="bg-white/10 backdrop-blur-sm rounded-2xl p-8 border border-white/20">
                <div className="text-center mb-6">
                  <div className="text-6xl font-extrabold text-[var(--color-accent)]">98<span className="text-3xl">%</span></div>
                  <div className="text-sm mt-2 opacity-80">ご相談者様の満足度</div>
                </div>
                <div className="grid grid-cols-2 gap-4 text-center">
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-[var(--color-accent)]">最短<span className="text-base">当日</span></div>
                    <div className="text-xs mt-1 opacity-80">買取可能</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-[var(--color-accent)]">上限<span className="text-base">なし</span></div>
                    <div className="text-xs mt-1 opacity-80">買取価格</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-[var(--color-accent)]">0<span className="text-sm">円</span></div>
                    <div className="text-xs mt-1 opacity-80">仲介手数料</div>
                  </div>
                  <div className="bg-white/10 rounded-xl p-4">
                    <div className="text-2xl font-bold text-[var(--color-accent)]">全国</div>
                    <div className="text-xs mt-1 opacity-80">対応エリア</div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trust badges - 安心感を出すバー */}
      <section className="bg-white border-b border-[var(--color-border)] py-5">
        <div className="max-w-6xl mx-auto px-4">
          <div className="flex flex-wrap justify-center items-center gap-6 md:gap-10 text-sm text-[var(--color-text-light)]">
            {[
              { label: "宅地建物取引業者", icon: "M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" },
              { label: "弁護士・税理士と提携", icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z" },
              { label: "秘密厳守", icon: "M12 15v2m-6 4h12a2 2 0 002-2v-6a2 2 0 00-2-2H6a2 2 0 00-2 2v6a2 2 0 002 2zm10-10V7a4 4 0 00-8 0v4h8z" },
              { label: "しつこい営業なし", icon: "M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" },
            ].map((item, i) => (
              <div key={i} className="flex items-center gap-2">
                <svg className="w-5 h-5 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                </svg>
                <span className="font-medium">{item.label}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pain Points Section */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              こんなお悩み、<span className="text-[var(--color-primary)]">ありませんか？</span>
            </h2>
            <p className="text-[var(--color-text-light)]">底地の共有持分は、通常の不動産以上に問題が複雑です</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {[
              { icon: "M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z", title: "共有者と連絡が取れない", desc: "相続で底地を共有しているが、他の共有者と音信不通になり、売却も管理もできない状態が続いている" },
              { icon: "M17 9V7a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2m2 4h10a2 2 0 002-2v-6a2 2 0 00-2-2H9a2 2 0 00-2 2v6a2 2 0 002 2z", title: "地代が少なく固定資産税が重い", desc: "微々たる地代しか入らないのに固定資産税はかかる。持っているだけで毎年赤字が出ている" },
              { icon: "M12 4.354a4 4 0 110 5.292M15 21H3v-1a6 6 0 0112 0v1zm0 0h6v-1a6 6 0 00-9-5.197M13 7a4 4 0 11-8 0 4 4 0 018 0z", title: "兄弟間で意見が合わない", desc: "売りたい人と持ち続けたい人で意見が割れて膠着状態。関係悪化も心配" },
              { icon: "M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4", title: "不動産会社に断られた", desc: "底地の共有持分は特殊すぎて、一般の不動産会社では取り扱えないと言われた" },
              { icon: "M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z", title: "相続手続きが複雑すぎる", desc: "親から底地を相続したが、権利関係が入り組んでいて何から手をつけていいかわからない" },
              { icon: "M12 8c-1.657 0-3 .895-3 2s1.343 2 3 2 3 .895 3 2-1.343 2-3 2m0-8c1.11 0 2.08.402 2.599 1M12 8V7m0 1v8m0 0v1m0-1c-1.11 0-2.08-.402-2.599-1M21 12a9 9 0 11-18 0 9 9 0 0118 0z", title: "早急に現金化したい", desc: "相続税の支払い期限が迫っている。借入の返済のために一刻も早く現金化したい" },
            ].map((item, i) => (
              <div key={i} className="bg-[var(--color-soft-green)] rounded-xl p-6 border border-[var(--color-border)] hover:shadow-md transition">
                <div className="w-12 h-12 bg-[var(--color-primary)]/10 rounded-lg flex items-center justify-center mb-4">
                  <svg className="w-6 h-6 text-[var(--color-primary)]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d={item.icon} />
                  </svg>
                </div>
                <h3 className="font-bold mb-2 text-lg">{item.title}</h3>
                <p className="text-[var(--color-text-light)] leading-relaxed">{item.desc}</p>
              </div>
            ))}
          </div>
          <div className="text-center mt-10">
            <div className="inline-block bg-[var(--color-primary)] text-white px-8 py-4 rounded-xl text-lg">
              これらの問題、<span className="text-[var(--color-accent)] font-bold">すべて解決</span>できます
            </div>
          </div>
        </div>
      </section>

      {/* About / Why Choose Us */}
      <section id="about" className="py-16 md:py-20 bg-[var(--color-bg)]">
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              <span className="text-[var(--color-primary)]">Common Future & Co.</span>が選ばれる理由
            </h2>
            <p className="text-[var(--color-text-light)]">底地×共有持分の専門家として、複雑な案件に対応します</p>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            {[
              { num: "01", title: "底地×共有持分に完全特化", desc: "一般的な共有持分買取業者とは異なり、「底地の共有持分」という最もニッチな領域に特化。借地権が絡む複雑な権利関係にも精通しています。" },
              { num: "02", title: "他の共有者の同意不要", desc: "民法上、共有持分は各共有者が自由に処分できます。他の共有者と連絡が取れなくても、あなたの持分だけで売却可能です。" },
              { num: "03", title: "最短当日買取・上限価格なし", desc: "スピードと価格に自信があります。最短当日での買取が可能。買取価格に上限は設けておりません。" },
              { num: "04", title: "弁護士・税理士との連携体制", desc: "相続問題や税務に関する疑問も、提携の専門家チームがワンストップでサポート。仲介手数料も一切不要です。" },
            ].map((item, i) => (
              <div key={i} className="flex gap-5 bg-white rounded-xl p-6 shadow-sm border border-[var(--color-border)]">
                <div className="flex-shrink-0 w-14 h-14 bg-[var(--color-primary)] text-white rounded-xl flex items-center justify-center font-extrabold text-xl">
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

      {/* Explanation: What is Sokochi Kyoyu Mochibun */}
      <section className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            そもそも<span className="text-[var(--color-primary)]">「底地の共有持分」</span>とは？
          </h2>
          <div className="space-y-8">
            <div className="bg-[var(--color-soft-green)] rounded-xl p-6 md:p-8 border border-[var(--color-border)]">
              <h3 className="text-lg font-bold mb-3 text-[var(--color-primary)]">底地（そこち）とは</h3>
              <p className="text-[var(--color-text-light)] leading-relaxed">
                借地権が設定されている土地のうち、地主が持っている所有権のことです。借地人が建物を建てて使用しているため、地主は自由に土地を使えず、得られる収益は地代のみ。更地に比べて市場価値が大幅に低くなります。
              </p>
            </div>
            <div className="bg-[var(--color-soft-green)] rounded-xl p-6 md:p-8 border border-[var(--color-border)]">
              <h3 className="text-lg font-bold mb-3 text-[var(--color-primary)]">共有持分とは</h3>
              <p className="text-[var(--color-text-light)] leading-relaxed">
                一つの不動産を複数人で所有している場合の、各人の持ち分（権利の割合）のことです。主に相続をきっかけに発生し、全員の同意がないと不動産全体の売却や大規模な変更ができません。
              </p>
            </div>
            <div className="bg-[var(--color-accent)]/10 rounded-xl p-6 md:p-8 border-2 border-[var(--color-accent)]">
              <h3 className="text-lg font-bold mb-3 text-[var(--color-primary)]">底地 × 共有持分 = 二重の制約</h3>
              <p className="text-[var(--color-text-light)] leading-relaxed">
                底地の共有持分は、「借地権の制約」と「共有の制約」が二重にかかった状態です。一般の不動産会社では取り扱いが難しく、専門知識を持った業者でなければ適切な査定・買取ができません。だからこそ、<strong className="text-[var(--color-primary)]">専門特化した当社</strong>にお任せください。
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Flow */}
      <section id="flow" className="py-16 md:py-20 bg-[var(--color-bg)]">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            買取までの<span className="text-[var(--color-primary)]">かんたん4ステップ</span>
          </h2>
          <div className="space-y-0">
            {[
              { step: "STEP 1", title: "無料査定のお申し込み", desc: "フォームでお気軽にご連絡ください。物件の概要をお伺いします。", time: "所要時間：5分" },
              { step: "STEP 2", title: "物件調査・査定", desc: "登記簿謄本や周辺相場をもとに、底地の共有持分を適正に査定します。", time: "最短即日" },
              { step: "STEP 3", title: "買取金額のご提示", desc: "査定結果と買取金額をご説明します。ご納得いただけない場合はお断りいただいて構いません。", time: "査定後すぐ" },
              { step: "STEP 4", title: "契約・お支払い", desc: "契約書の締結後、指定口座にお振込みします。面倒な手続きは当社が代行します。", time: "最短当日で買取完了" },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 relative">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 z-10">
                    {i + 1}
                  </div>
                  {i < 3 && <div className="w-0.5 h-full bg-[var(--color-primary)]/20 my-1" />}
                </div>
                <div className="pb-10">
                  <div className="text-xs font-bold text-[var(--color-accent)] mb-1">{item.step}</div>
                  <h3 className="font-bold text-lg mb-1">{item.title}</h3>
                  <p className="text-[var(--color-text-light)] mb-2">{item.desc}</p>
                  <span className="text-xs bg-[var(--color-primary)]/10 text-[var(--color-primary)] px-3 py-1 rounded-full font-medium">{item.time}</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section id="faq" className="py-16 md:py-20 bg-white">
        <div className="max-w-4xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
            よくある<span className="text-[var(--color-primary)]">ご質問</span>
          </h2>
          <div className="space-y-4">
            {[
              { q: "他の共有者に知られずに売却できますか？", a: "はい、可能です。共有持分の売却は各共有者の権利として認められており、他の共有者の同意や通知は法律上不要です。秘密厳守で対応いたしますのでご安心ください。" },
              { q: "底地の共有持分はいくらぐらいで売れますか？", a: "一般的な目安として、更地価格の10〜15%程度になることが多いですが、借地条件や立地、持分割合によって大きく変わります。当社は上限価格なしで査定いたしますので、まずは無料査定をご利用ください。" },
              { q: "本当に当日買取できますか？", a: "はい。物件の状況によりますが、書類が揃っていれば最短当日での買取が可能です。お急ぎの場合はその旨をお伝えください。" },
              { q: "相続登記がまだ済んでいませんが、売却できますか？", a: "売却前に相続登記を完了する必要がありますが、手続きのサポートも行っておりますのでご安心ください。提携の司法書士がスムーズに対応します。" },
              { q: "遠方に住んでいますが対応してもらえますか？", a: "全国どこからでもご対応可能です。郵送やオンラインでの契約にも対応しておりますので、現地にお越しいただく必要はありません。" },
              { q: "査定だけでも大丈夫ですか？", a: "もちろんです。査定は完全無料で、査定後にお断りいただいても一切費用はかかりません。しつこい営業も一切いたしません。まずはお気軽にご相談ください。" },
            ].map((item, i) => (
              <details key={i} className="group bg-[var(--color-bg)] rounded-xl border border-[var(--color-border)] overflow-hidden">
                <summary className="flex items-center justify-between p-5 cursor-pointer font-bold hover:bg-[var(--color-bg-dark)] transition text-base">
                  <span className="flex items-center gap-3">
                    <span className="text-[var(--color-accent)] font-extrabold">Q.</span>
                    {item.q}
                  </span>
                  <svg className="w-5 h-5 text-[var(--color-text-light)] group-open:rotate-180 transition-transform flex-shrink-0 ml-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                  </svg>
                </summary>
                <div className="px-5 pb-5 text-[var(--color-text-light)] leading-relaxed">
                  <span className="text-[var(--color-primary)] font-extrabold mr-2">A.</span>
                  {item.a}
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
                  { "@type": "Question", name: "底地の共有持分はいくらぐらいで売れますか？", acceptedAnswer: { "@type": "Answer", text: "一般的な目安として、更地価格の10〜15%程度になることが多いですが、借地条件や立地、持分割合によって大きく変わります。" } },
                  { "@type": "Question", name: "本当に当日買取できますか？", acceptedAnswer: { "@type": "Answer", text: "はい。物件の状況によりますが、書類が揃っていれば最短当日での買取が可能です。" } },
                  { "@type": "Question", name: "相続登記がまだ済んでいませんが、売却できますか？", acceptedAnswer: { "@type": "Answer", text: "売却前に相続登記を完了する必要がありますが、手続きのサポートも行っております。" } },
                  { "@type": "Question", name: "遠方に住んでいますが対応してもらえますか？", acceptedAnswer: { "@type": "Answer", text: "全国どこからでもご対応可能です。郵送やオンラインでの契約にも対応しております。" } },
                  { "@type": "Question", name: "査定だけでも大丈夫ですか？", acceptedAnswer: { "@type": "Answer", text: "もちろんです。査定は完全無料で、査定後にお断りいただいても一切費用はかかりません。" } },
                ],
              }),
            }}
          />
        </div>
      </section>

      {/* Articles Section */}
      <section id="articles" className="py-16 md:py-20 bg-[var(--color-bg)]">
        <div className="max-w-6xl mx-auto px-4">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">
            お役立ち<span className="text-[var(--color-primary)]">コラム</span>
          </h2>
          <p className="text-center text-[var(--color-text-light)] mb-10">底地・共有持分に関する専門知識をわかりやすく解説</p>
          <div className="grid md:grid-cols-3 gap-6">
            {[
              { href: "/articles/sokochi-kyoyu-mochibun-kiso", title: "底地×共有持分の基礎知識", desc: "底地と共有持分それぞれの意味、両方が絡むケースの問題点を基本から解説", tag: "基礎知識" },
              { href: "/articles/sokochi-kyoyu-mochibun-baikyaku", title: "底地の共有持分を売却する4つの方法", desc: "売却方法を比較し、あなたの状況に最適な方法がわかります", tag: "売却方法" },
              { href: "/articles/sokochi-kyoyu-mochibun-souba", title: "底地の共有持分、買取相場はいくら？", desc: "相場の目安と価格を左右する要素、路線価からの概算方法を紹介", tag: "相場" },
              { href: "/articles/sokochi-souzoku-trouble", title: "底地の相続トラブル事例と解決法", desc: "兄弟間の揉め事、音信不通の共有者…よくある事例と解決策", tag: "相続" },
              { href: "/articles/sokochi-kyoyu-mochibun-zeikin", title: "底地の共有持分を売却した時の税金", desc: "譲渡所得税の計算方法、使える特例、確定申告の手順を解説", tag: "税金" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="bg-white rounded-xl border border-[var(--color-border)] overflow-hidden hover:shadow-lg transition group">
                <div className="h-2 bg-[var(--color-primary)]" />
                <div className="p-5">
                  <span className="inline-block text-xs font-bold text-[var(--color-primary)] bg-[var(--color-soft-green)] px-2 py-1 rounded mb-3">{item.tag}</span>
                  <h3 className="font-bold mb-2 group-hover:text-[var(--color-primary)] transition">{item.title}</h3>
                  <p className="text-sm text-[var(--color-text-light)]">{item.desc}</p>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* CTA + Contact Form */}
      <section id="contact" className="py-16 md:py-20 hero-gradient text-white">
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-10">
            <h2 className="text-2xl md:text-3xl font-bold mb-4">
              まずは<span className="text-[var(--color-accent)]">無料査定</span>からお気軽にどうぞ
            </h2>
            <p className="opacity-90 text-lg">
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
