import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "底地の共有持分の買取相場はいくら？価格の決まり方と査定ポイント",
  description:
    "底地の共有持分の相場目安と価格を左右する5つの要素を解説。路線価からの概算方法も紹介。",
  openGraph: {
    title: "底地の共有持分の買取相場はいくら？価格の決まり方と査定ポイント",
    description:
      "底地の共有持分の相場目安と価格を左右する5つの要素を解説。路線価からの概算方法も紹介。",
    type: "article",
    locale: "ja_JP",
  },
};

export default function SokochiKyoyuMochibunSoubaPage() {
  return (
    <>
      {/* パンくずリスト */}
      <nav aria-label="パンくずリスト" className="bg-[var(--color-bg)] border-b border-[var(--color-border)]">
        <div className="max-w-4xl mx-auto px-4 py-3">
          <ol className="flex items-center gap-2 text-sm text-[var(--color-text-light)]">
            <li>
              <Link href="/" className="hover:text-[var(--color-primary)] transition">
                ホーム
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <span className="text-[var(--color-text)]">
                底地の共有持分の買取相場
              </span>
            </li>
          </ol>
        </div>
      </nav>

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* H1 */}
        <header className="mb-12">
          <div className="inline-block text-xs font-bold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-3 py-1 rounded mb-4">
            相場
          </div>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight text-[var(--color-primary)]">
            底地の共有持分の買取相場はいくら？<br className="hidden md:block" />
            価格の決まり方を徹底解説
          </h1>
          <p className="mt-4 text-[var(--color-text-light)] leading-relaxed">
            底地の共有持分を売却したいけれど、「いくらで売れるのか」が分からず不安に感じていませんか？
            底地はただでさえ市場流通性が低いうえ、共有持分という制約が加わると価格はさらに下がります。
            この記事では、底地の共有持分の相場目安、価格を左右する要素、路線価から概算する具体的な計算方法まで、
            分かりやすく解説します。
          </p>
        </header>

        {/* 目次 */}
        <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)] mb-12">
          <h2 className="font-bold text-lg mb-4">この記事の目次</h2>
          <ol className="space-y-2 text-sm text-[var(--color-text-light)]">
            <li>
              <a href="#how-price-is-determined" className="hover:text-[var(--color-primary)] transition">
                1. 底地の共有持分の価格はどう決まるのか
              </a>
            </li>
            <li>
              <a href="#market-price" className="hover:text-[var(--color-primary)] transition">
                2. 底地の共有持分の相場目安
              </a>
            </li>
            <li>
              <a href="#five-factors" className="hover:text-[var(--color-primary)] transition">
                3. 査定額を左右する5つの要素
              </a>
            </li>
            <li>
              <a href="#calculation" className="hover:text-[var(--color-primary)] transition">
                4. 路線価から概算する方法
              </a>
            </li>
            <li>
              <a href="#tips" className="hover:text-[var(--color-primary)] transition">
                5. 査定額をできるだけ高くするコツ
              </a>
            </li>
            <li>
              <a href="#summary" className="hover:text-[var(--color-primary)] transition">
                6. まとめ
              </a>
            </li>
          </ol>
        </div>

        {/* ============================================================ */}
        {/* H2: 底地の共有持分の価格はどう決まるのか */}
        {/* ============================================================ */}
        <section id="how-price-is-determined" className="mb-14">
          <h2 className="text-2xl font-bold mb-6 text-[var(--color-primary)]">
            底地の共有持分の価格はどう決まるのか
          </h2>
          <p className="text-[var(--color-text-light)] leading-relaxed mb-6">
            底地の共有持分の価格は、大きく分けて<strong>3つの要因</strong>の掛け合わせで決まります。
            それぞれが価格を押し下げる方向に作用するため、最終的な金額は更地価格よりも大幅に低くなります。
          </p>

          <div className="space-y-6">
            <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)]">
              <h3 className="font-bold text-lg mb-2 text-[var(--color-primary)]">1. 底地割合（底地の価値の低さ）</h3>
              <p className="text-[var(--color-text-light)] leading-relaxed">
                借地権が設定された土地では、土地の価値のうち借地権割合（通常60〜70%）は借地人側に帰属します。
                地主に残る「底地」の価値は更地価格の30〜40%程度にとどまります。
                さらに、実際の取引では底地単独での流通性の低さから、路線価ベースの底地割合よりさらに低い価格で取引されるのが一般的です。
              </p>
            </div>

            <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)]">
              <h3 className="font-bold text-lg mb-2 text-[var(--color-primary)]">2. 持分ディスカウント</h3>
              <p className="text-[var(--color-text-light)] leading-relaxed">
                不動産の共有持分は、「完全所有権の持分割合分」よりも低い価格で取引されます。
                これは、持分だけでは不動産全体を自由に使えず、他の共有者との調整が必要になるためです。
                一般に共有持分のディスカウント率は<strong>30〜50%程度</strong>と言われています。
              </p>
            </div>

            <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)]">
              <h3 className="font-bold text-lg mb-2 text-[var(--color-primary)]">3. 借地条件の影響</h3>
              <p className="text-[var(--color-text-light)] leading-relaxed">
                借地契約の内容も価格に大きく影響します。地代が適正に見直されているか、
                契約の残存期間はどれくらいか、借地人との関係は良好かなど、
                借地条件が良好であれば価格は高くなり、不利な条件では価格が下がります。
              </p>
            </div>
          </div>

          <div className="bg-[var(--color-accent)]/10 border-l-4 border-[var(--color-accent)] p-4 mt-6 rounded-r-lg">
            <p className="text-sm font-bold mb-1">ポイント</p>
            <p className="text-sm text-[var(--color-text-light)] leading-relaxed">
              底地の共有持分の価格 = 更地価格 x 底地割合 x 持分割合 x ディスカウント率。
              3つの減額要因が掛け合わさるため、更地価格の10〜15%程度になることが多いのです。
            </p>
          </div>
        </section>

        {/* ============================================================ */}
        {/* H2: 底地の共有持分の相場目安 */}
        {/* ============================================================ */}
        <section id="market-price" className="mb-14">
          <h2 className="text-2xl font-bold mb-6 text-[var(--color-primary)]">
            底地の共有持分の相場目安
          </h2>
          <p className="text-[var(--color-text-light)] leading-relaxed mb-6">
            実務上、底地の共有持分の売却価格は<strong>更地価格の10〜15%程度</strong>が一般的な目安です。
            ただし、条件次第でこの範囲を上回ることも下回ることもあります。
          </p>

          <div className="grid md:grid-cols-2 gap-6 mb-6">
            <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)]">
              <h3 className="font-bold text-lg mb-3 text-[var(--color-primary)]">相場が上がるケース</h3>
              <ul className="space-y-2 text-sm text-[var(--color-text-light)]">
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent)] mt-0.5">&#9650;</span>
                  借地人が底地の買取に前向き（底地と借地権の同時売却が見込める）
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent)] mt-0.5">&#9650;</span>
                  駅徒歩圏内・都心部など立地が良い
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent)] mt-0.5">&#9650;</span>
                  地代が適正に改定されており利回りが見込める
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent)] mt-0.5">&#9650;</span>
                  他の共有者全員が売却に同意している
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-[var(--color-accent)] mt-0.5">&#9650;</span>
                  借地契約の残存期間が短い（近い将来の更地復帰の可能性）
                </li>
              </ul>
            </div>
            <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)]">
              <h3 className="font-bold text-lg mb-3 text-[var(--color-primary)]">相場が下がるケース</h3>
              <ul className="space-y-2 text-sm text-[var(--color-text-light)]">
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#9660;</span>
                  他の共有者と連絡が取れない・関係が悪い
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#9660;</span>
                  借地人との間でトラブルがある
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#9660;</span>
                  地代が相場より極端に安い（地代の増額が困難）
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#9660;</span>
                  郊外や地方で土地の流動性が低い
                </li>
                <li className="flex items-start gap-2">
                  <span className="text-red-500 mt-0.5">&#9660;</span>
                  借地契約の残存期間が非常に長い
                </li>
              </ul>
            </div>
          </div>

          <div className="bg-[var(--color-accent)]/10 border-l-4 border-[var(--color-accent)] p-4 rounded-r-lg">
            <p className="text-sm font-bold mb-1">知っておきたいこと</p>
            <p className="text-sm text-[var(--color-text-light)] leading-relaxed">
              「更地価格の10〜15%」はあくまで目安です。実際には個別の事情により大きく変動します。
              正確な金額を知るには、底地×共有持分に詳しい専門業者による査定が不可欠です。
            </p>
          </div>
        </section>

        {/* ============================================================ */}
        {/* H2: 査定額を左右する5つの要素 */}
        {/* ============================================================ */}
        <section id="five-factors" className="mb-14">
          <h2 className="text-2xl font-bold mb-6 text-[var(--color-primary)]">
            査定額を左右する5つの要素
          </h2>
          <p className="text-[var(--color-text-light)] leading-relaxed mb-6">
            専門業者が底地の共有持分を査定する際に重視する5つのポイントを解説します。
          </p>

          <div className="space-y-6">
            {[
              {
                num: "1",
                title: "立地・用途地域",
                desc: "都心か郊外か、商業地か住宅地かで土地の基本的な価値が変わります。駅からの距離、周辺の開発状況、将来的な土地需要なども重要な判断材料です。商業地域で利便性の高い立地であるほど、査定額は高くなります。",
              },
              {
                num: "2",
                title: "借地人との関係",
                desc: "借地人との関係が良好で、地代の支払いが滞りなく行われている場合は高評価になります。逆に、地代の滞納がある、借地人との間で紛争が起きている場合は、大きなマイナス要因です。",
              },
              {
                num: "3",
                title: "他の共有者の状況",
                desc: "共有者の人数、各持分割合、共有者間の関係性が査定に影響します。共有者が少なく全員と連絡が取れる状態であれば、将来的な権利整理の見通しが立ちやすく、査定額にプラスに働きます。",
              },
              {
                num: "4",
                title: "地代の適正性",
                desc: "現在の地代が周辺相場と比べて適正な水準かどうかが重要です。長年据え置きで相場より大幅に安い地代の場合、増額交渉のハードルも考慮されるため査定額が下がる傾向にあります。",
              },
              {
                num: "5",
                title: "借地契約の残存期間",
                desc: "旧借地法による契約か、借地借家法による定期借地権かで大きく異なります。旧借地法の場合は事実上更新が繰り返されるため価格が低くなりがちです。定期借地権で残存期間が短い場合は、更地復帰が見込めるため価格が上がります。",
              },
            ].map((item) => (
              <div
                key={item.num}
                className="flex gap-5 bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)]"
              >
                <div className="flex-shrink-0 w-10 h-10 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-bold text-sm">
                  {item.num}
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--color-text-light)] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* H2: 路線価から概算する方法 */}
        {/* ============================================================ */}
        <section id="calculation" className="mb-14">
          <h2 className="text-2xl font-bold mb-6 text-[var(--color-primary)]">
            路線価から概算する方法
          </h2>
          <p className="text-[var(--color-text-light)] leading-relaxed mb-6">
            国税庁が公表する路線価を使えば、底地の共有持分の概算価格を自分で計算できます。
            以下の4ステップで算出してみましょう。
          </p>

          <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)] mb-8">
            <h3 className="font-bold text-lg mb-4 text-[var(--color-primary)]">計算の4ステップ</h3>
            <div className="space-y-4">
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[var(--color-accent)] text-[var(--color-primary)] rounded-full flex items-center justify-center font-bold text-sm">
                  1
                </div>
                <div>
                  <p className="font-bold mb-1">路線価から更地価格を算出</p>
                  <p className="text-sm text-[var(--color-text-light)]">
                    路線価（円/㎡） x 土地面積（㎡） x 1.25（路線価は時価の約80%のため）
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[var(--color-accent)] text-[var(--color-primary)] rounded-full flex items-center justify-center font-bold text-sm">
                  2
                </div>
                <div>
                  <p className="font-bold mb-1">底地価格を算出</p>
                  <p className="text-sm text-[var(--color-text-light)]">
                    更地価格 x（1 - 借地権割合）= 底地価格
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[var(--color-accent)] text-[var(--color-primary)] rounded-full flex items-center justify-center font-bold text-sm">
                  3
                </div>
                <div>
                  <p className="font-bold mb-1">持分割合を掛ける</p>
                  <p className="text-sm text-[var(--color-text-light)]">
                    底地価格 x あなたの持分割合 = 持分の底地価格
                  </p>
                </div>
              </div>
              <div className="flex gap-4">
                <div className="flex-shrink-0 w-8 h-8 bg-[var(--color-accent)] text-[var(--color-primary)] rounded-full flex items-center justify-center font-bold text-sm">
                  4
                </div>
                <div>
                  <p className="font-bold mb-1">共有持分のディスカウントを適用</p>
                  <p className="text-sm text-[var(--color-text-light)]">
                    持分の底地価格 x 0.5〜0.7（ディスカウント30〜50%）= 買取価格の目安
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* 計算例 */}
          <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)]">
            <h3 className="font-bold text-lg mb-4 text-[var(--color-primary)]">
              具体的な計算例
            </h3>
            <p className="text-sm text-[var(--color-text-light)] mb-4">
              路線価30万円/㎡、面積100㎡、借地権割合60%、あなたの持分1/3のケースで計算してみます。
            </p>
            <div className="space-y-3">
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 py-2 border-b border-[var(--color-border)]">
                <span className="text-sm font-bold min-w-[200px]">STEP 1: 更地価格（時価換算）</span>
                <span className="font-mono text-sm">
                  30万円 x 100㎡ x 1.25 = <strong>3,750万円</strong>
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 py-2 border-b border-[var(--color-border)]">
                <span className="text-sm font-bold min-w-[200px]">STEP 2: 底地価格</span>
                <span className="font-mono text-sm">
                  3,750万円 x（1 - 0.6）= <strong>1,500万円</strong>
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 py-2 border-b border-[var(--color-border)]">
                <span className="text-sm font-bold min-w-[200px]">STEP 3: 持分の底地価格</span>
                <span className="font-mono text-sm">
                  1,500万円 x 1/3 = <strong>500万円</strong>
                </span>
              </div>
              <div className="flex flex-col sm:flex-row sm:items-center gap-2 py-2 border-b border-[var(--color-border)]">
                <span className="text-sm font-bold min-w-[200px]">STEP 4: ディスカウント適用</span>
                <span className="font-mono text-sm">
                  500万円 x 0.5〜0.7 = <strong>250万〜350万円</strong>
                </span>
              </div>
              <div className="bg-[var(--color-primary)] text-white rounded-lg p-4 mt-4">
                <p className="text-center font-bold">
                  買取価格の目安: <span className="text-[var(--color-accent)] text-xl font-mono">250万〜350万円</span>
                </p>
                <p className="text-center text-sm opacity-80 mt-1">
                  （更地価格3,750万円の約6.7〜9.3%）
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[var(--color-accent)]/10 border-l-4 border-[var(--color-accent)] p-4 mt-6 rounded-r-lg">
            <p className="text-sm font-bold mb-1">注意点</p>
            <p className="text-sm text-[var(--color-text-light)] leading-relaxed">
              この計算はあくまで概算です。実際の買取価格は、前述の5つの査定要素に加え、
              市場環境や買取業者の評価基準によっても変動します。
              正確な金額を知りたい場合は、専門業者の無料査定をご利用ください。
            </p>
          </div>
        </section>

        {/* ============================================================ */}
        {/* H2: 査定額をできるだけ高くするコツ */}
        {/* ============================================================ */}
        <section id="tips" className="mb-14">
          <h2 className="text-2xl font-bold mb-6 text-[var(--color-primary)]">
            査定額をできるだけ高くするコツ
          </h2>
          <p className="text-[var(--color-text-light)] leading-relaxed mb-6">
            底地の共有持分は制約が多い分、少しの工夫で査定額が変わることがあります。
            売却前に以下のポイントを押さえておきましょう。
          </p>

          <div className="space-y-4">
            {[
              {
                title: "複数の専門業者に査定を依頼する",
                desc: "底地の共有持分は一般的な不動産とは評価基準が異なるため、業者によって査定額に差が出やすい分野です。最低でも2〜3社に査定を依頼し、比較することをおすすめします。",
              },
              {
                title: "他の共有者に売却の打診をする",
                desc: "他の共有者が持分の買い取りに応じてくれれば、ディスカウントなしの価格で売却できる可能性があります。外部に売る前に一度相談してみる価値はあります。",
              },
              {
                title: "借地人に底地の買取を提案する",
                desc: "借地人は底地を購入すれば完全所有権を得られるため、底地に最も高い価値を見出す存在です。借地人が購入に前向きであれば、第三者への売却よりも高値が期待できます。",
              },
              {
                title: "必要書類を事前に揃えておく",
                desc: "登記簿謄本、借地契約書、固定資産税の課税明細書、地代の入金記録など、査定に必要な書類を事前に準備しておくと、正確な査定が可能になり、査定額が上がることもあります。",
              },
              {
                title: "底地×共有持分の専門業者を選ぶ",
                desc: "一般の不動産会社よりも、底地や共有持分に特化した専門業者のほうが適正な評価ができます。専門知識があるからこそ、リスクを正確に見積もり、相場に近い金額を提示できるのです。",
              },
            ].map((item, i) => (
              <div key={i} className="bg-[var(--color-bg)] rounded-xl p-5 border border-[var(--color-border)]">
                <h3 className="font-bold mb-2 flex items-center gap-2">
                  <svg
                    className="w-5 h-5 text-[var(--color-accent)] flex-shrink-0"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                  >
                    <path
                      fillRule="evenodd"
                      d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z"
                      clipRule="evenodd"
                    />
                  </svg>
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-text-light)] leading-relaxed pl-7">{item.desc}</p>
              </div>
            ))}
          </div>
        </section>

        {/* ============================================================ */}
        {/* H2: まとめ */}
        {/* ============================================================ */}
        <section id="summary" className="mb-14">
          <h2 className="text-2xl font-bold mb-6 text-[var(--color-primary)]">
            まとめ
          </h2>
          <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)] mb-6">
            <ul className="space-y-3 text-[var(--color-text-light)]">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent)] font-bold mt-0.5">&#10003;</span>
                底地の共有持分の相場は、更地価格の<strong>10〜15%程度</strong>が目安
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent)] font-bold mt-0.5">&#10003;</span>
                価格は「底地割合」「持分ディスカウント」「借地条件」の3要因で決まる
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent)] font-bold mt-0.5">&#10003;</span>
                立地・借地人との関係・他の共有者の状況・地代・残存期間の5つが査定の鍵
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent)] font-bold mt-0.5">&#10003;</span>
                路線価から概算はできるが、正確な金額は専門業者の査定が必要
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent)] font-bold mt-0.5">&#10003;</span>
                複数社への査定依頼、借地人への打診などで査定額アップの余地あり
              </li>
            </ul>
          </div>
          <p className="text-[var(--color-text-light)] leading-relaxed">
            底地の共有持分は非常にニッチな不動産であり、一般の不動産会社では適切な評価が難しい分野です。
            「いくらで売れるか知りたい」という方は、まずは底地×共有持分に特化した専門業者に無料査定を依頼するのが最善の一歩です。
          </p>
        </section>

        {/* ============================================================ */}
        {/* CTA セクション */}
        {/* ============================================================ */}
        <section className="bg-[var(--color-accent)] text-[var(--color-primary)] rounded-2xl p-8 md:p-10 text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
            あなたの底地の共有持分、<br className="md:hidden" />
            いくらになるか知りたいですか？
          </h2>
          <p className="mb-6 opacity-80">
            底地×共有持分に特化した専門スタッフが、無料で査定いたします。<br className="hidden md:block" />
            他の共有者の同意は不要。まずはお気軽にご相談ください。
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-[var(--color-primary)] text-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition shadow-lg"
          >
            無料査定を申し込む
          </Link>
          <div className="flex justify-center gap-6 mt-6 text-sm opacity-70">
            <span>最短即日査定</span>
            <span>仲介手数料0円</span>
            <span>全国対応</span>
          </div>
        </section>

        {/* ============================================================ */}
        {/* 関連記事 */}
        {/* ============================================================ */}
        <section className="mb-14">
          <h2 className="text-xl font-bold mb-6 text-[var(--color-primary)]">関連記事</h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                href: "/articles/sokochi-kyoyu-mochibun-kiso",
                title: "底地×共有持分の基礎知識",
                desc: "底地と共有持分それぞれの意味と、両方が絡むケースの問題点を基本から解説",
                tag: "基礎知識",
              },
              {
                href: "/articles/sokochi-kyoyu-mochibun-baikyaku",
                title: "底地の共有持分を売却する4つの方法",
                desc: "売却方法を比較し、あなたの状況に最適な方法がわかります",
                tag: "売却方法",
              },
              {
                href: "/articles/sokochi-kyoyu-mochibun-zeikin",
                title: "底地の共有持分を売却した時の税金",
                desc: "譲渡所得税の計算方法、使える特例、確定申告の手順を解説",
                tag: "税金",
              },
              {
                href: "/articles/sokochi-souzoku-trouble",
                title: "底地の相続トラブル事例と解決法",
                desc: "兄弟間の揉め事、音信不通の共有者など、よくある事例と解決策",
                tag: "相続",
              },
            ].map((item, i) => (
              <Link
                key={i}
                href={item.href}
                className="bg-[var(--color-bg)] rounded-xl border border-[var(--color-border)] p-5 hover:shadow-md transition group"
              >
                <span className="inline-block text-xs font-bold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-2 py-1 rounded mb-2">
                  {item.tag}
                </span>
                <h3 className="font-bold mb-1 group-hover:text-[var(--color-primary)] transition">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--color-text-light)]">{item.desc}</p>
              </Link>
            ))}
          </div>
        </section>
      </article>

      {/* Article JSON-LD */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "Article",
            headline:
              "底地の共有持分の買取相場はいくら？価格の決まり方と査定ポイント",
            description:
              "底地の共有持分の相場目安と価格を左右する5つの要素を解説。路線価からの概算方法も紹介。",
            author: {
              "@type": "Organization",
              name: "Common Future & Co.株式会社",
              url: "https://sokochi-kaitori.vercel.app",
            },
            publisher: {
              "@type": "Organization",
              name: "Common Future & Co.株式会社",
              url: "https://sokochi-kaitori.vercel.app",
            },
            mainEntityOfPage: {
              "@type": "WebPage",
              "@id":
                "https://sokochi-kaitori.vercel.app/articles/sokochi-kyoyu-mochibun-souba",
            },
            datePublished: "2026-04-01",
            dateModified: "2026-04-01",
          }),
        }}
      />
    </>
  );
}
