import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "底地の共有持分を売却した時の税金｜計算方法と使える特例",
  description:
    "底地の共有持分を売却した際の税金を具体的な計算例つきで解説。使える特例や確定申告の手順も紹介。",
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "底地の共有持分を売却した時の税金｜計算方法と使える特例",
  description:
    "底地の共有持分を売却した際の税金を具体的な計算例つきで解説。使える特例や確定申告の手順も紹介。",
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
  datePublished: "2026-04-01",
  dateModified: "2026-04-01",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://sokochi-kaitori.vercel.app/articles/sokochi-kyoyu-mochibun-zeikin",
  },
};

export default function SokochiKyoyuMochibunZeikinPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* パンくずリスト */}
      <nav className="max-w-4xl mx-auto px-4 pt-8 text-sm text-gray-500">
        <ol className="flex items-center gap-2 flex-wrap">
          <li>
            <Link href="/" className="hover:text-[var(--color-primary)] transition">
              トップ
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/articles" className="hover:text-[var(--color-primary)] transition">
              お役立ち記事
            </Link>
          </li>
          <li>/</li>
          <li className="text-[var(--color-primary)] font-medium">
            底地の共有持分を売却した時の税金
          </li>
        </ol>
      </nav>

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* H1 */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-[var(--color-primary)] mb-6 leading-tight">
          底地の共有持分を売却した時の税金｜計算方法と使える特例
        </h1>
        <p className="text-lg text-gray-700 mb-12 leading-relaxed">
          底地の共有持分を売却すると、譲渡所得税をはじめとする税金が発生します。しかし、計算方法や使える特例を正しく理解していれば、税負担を大幅に軽減できる可能性があります。この記事では、具体的な計算シミュレーションを交えながら、底地の共有持分売却時の税金について詳しく解説します。
        </p>

        {/* ========== 売却時にかかる税金一覧 ========== */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
            売却時にかかる税金一覧
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            底地の共有持分を売却した場合、主に以下の税金がかかります。
          </p>

          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm md:text-base">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="px-4 py-3 text-left font-semibold">税金の種類</th>
                  <th className="px-4 py-3 text-left font-semibold">税率・金額</th>
                  <th className="px-4 py-3 text-left font-semibold">課税タイミング</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="px-4 py-3 font-medium">譲渡所得税（所得税）</td>
                  <td className="px-4 py-3">長期15%／短期30%</td>
                  <td className="px-4 py-3">確定申告時</td>
                </tr>
                <tr className="border-b border-[var(--color-border)] bg-gray-50">
                  <td className="px-4 py-3 font-medium">住民税</td>
                  <td className="px-4 py-3">長期5%／短期9%</td>
                  <td className="px-4 py-3">翌年6月以降</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="px-4 py-3 font-medium">復興特別所得税</td>
                  <td className="px-4 py-3">所得税額の2.1%</td>
                  <td className="px-4 py-3">確定申告時</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">印紙税</td>
                  <td className="px-4 py-3">契約金額により1,000円〜</td>
                  <td className="px-4 py-3">契約締結時</td>
                </tr>
              </tbody>
            </table>
          </div>

          <div className="bg-[var(--color-accent)]/10 border-l-4 border-[var(--color-accent)] p-4 rounded-r-lg">
            <p className="text-gray-700 text-sm leading-relaxed">
              <span className="font-bold">重要：</span>
              長期譲渡所得と短期譲渡所得では税率が大きく異なります。所有期間が売却した年の1月1日時点で5年を超えていれば「長期」、5年以下であれば「短期」に分類されます。底地は相続で取得するケースが多く、被相続人の取得日を引き継げるため、多くの場合は長期譲渡所得に該当します。
            </p>
          </div>
        </section>

        {/* ========== 譲渡所得の計算方法 ========== */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
            譲渡所得の計算方法
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            譲渡所得は以下の計算式で求めます。
          </p>

          <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)] mb-6">
            <p className="text-center text-lg font-bold text-[var(--color-primary)] mb-2">
              譲渡所得 ＝ 売却価格 −（取得費 ＋ 譲渡費用）
            </p>
          </div>

          <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3 mt-8">
            取得費の算出
          </h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            取得費とは、底地を取得した際にかかった費用（購入代金・仲介手数料・登記費用など）を指します。
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-4">
            <li>購入時の契約書が残っていれば、その金額が取得費になります。</li>
            <li>
              <span className="font-bold">先祖代々の土地で取得費が不明な場合</span>は、売却額の5%を概算取得費として使用できます（例：500万円で売却 → 取得費25万円）。
            </li>
            <li>相続で取得した場合は、被相続人の取得費を引き継ぎます。</li>
          </ul>

          <div className="bg-[var(--color-accent)]/10 border-l-4 border-[var(--color-accent)] p-4 rounded-r-lg mb-6">
            <p className="text-gray-700 text-sm leading-relaxed">
              <span className="font-bold">重要：</span>
              取得費が不明で概算取得費（5%）を使うと、課税対象が売却額の95%にまで膨らみます。古い土地でも、契約書や領収書がないか必ず確認しましょう。
            </p>
          </div>

          <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3 mt-8">
            譲渡費用
          </h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            譲渡費用として認められるのは、売却のために直接かかった費用です。
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6">
            <li>不動産会社への仲介手数料</li>
            <li>売買契約書の印紙代</li>
            <li>測量費用（売却のために行った場合）</li>
            <li>建物の解体費用（更地にして売却した場合）</li>
          </ul>

          <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3 mt-8">
            長期譲渡所得 vs 短期譲渡所得
          </h3>
          <div className="overflow-x-auto">
            <table className="w-full border-collapse text-sm md:text-base">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="px-4 py-3 text-left font-semibold">区分</th>
                  <th className="px-4 py-3 text-left font-semibold">所有期間</th>
                  <th className="px-4 py-3 text-left font-semibold">所得税</th>
                  <th className="px-4 py-3 text-left font-semibold">住民税</th>
                  <th className="px-4 py-3 text-left font-semibold">合計税率</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="px-4 py-3 font-medium">長期</td>
                  <td className="px-4 py-3">5年超</td>
                  <td className="px-4 py-3">15.315%</td>
                  <td className="px-4 py-3">5%</td>
                  <td className="px-4 py-3 font-bold">20.315%</td>
                </tr>
                <tr className="bg-gray-50">
                  <td className="px-4 py-3 font-medium">短期</td>
                  <td className="px-4 py-3">5年以下</td>
                  <td className="px-4 py-3">30.63%</td>
                  <td className="px-4 py-3">9%</td>
                  <td className="px-4 py-3 font-bold">39.63%</td>
                </tr>
              </tbody>
            </table>
          </div>
          <p className="text-sm text-gray-500 mt-2">
            ※所得税には復興特別所得税（2.1%）を含みます。
          </p>
        </section>

        {/* ========== 具体的な計算シミュレーション ========== */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
            具体的な計算シミュレーション
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            以下の条件で、実際に税金を計算してみましょう。
          </p>

          <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)] mb-6">
            <h3 className="text-lg font-bold text-[var(--color-primary)] mb-4">
              ケース：持分1/3・売却額500万円の場合
            </h3>
            <div className="space-y-3 text-gray-700">
              <div className="flex flex-wrap gap-x-8 gap-y-2">
                <p><span className="font-semibold">共有持分：</span>1/3</p>
                <p><span className="font-semibold">売却価格：</span>500万円</p>
                <p><span className="font-semibold">所有期間：</span>15年（長期譲渡所得）</p>
              </div>
              <p><span className="font-semibold">取得費：</span>不明のため概算取得費を使用 → 500万円 × 5% ＝ <span className="font-bold text-[var(--color-primary)]">25万円</span></p>
              <p><span className="font-semibold">譲渡費用：</span>仲介手数料等 → <span className="font-bold text-[var(--color-primary)]">20万円</span></p>
            </div>

            <div className="border-t border-[var(--color-border)] mt-4 pt-4">
              <h4 className="font-bold text-[var(--color-primary)] mb-3">計算の流れ</h4>
              <div className="space-y-2 text-gray-700">
                <p>
                  <span className="font-semibold">1. 譲渡所得：</span>
                  500万円 −（25万円 ＋ 20万円）＝ <span className="font-bold text-[var(--color-primary)]">455万円</span>
                </p>
                <p>
                  <span className="font-semibold">2. 所得税（復興税込）：</span>
                  455万円 × 15.315% ＝ <span className="font-bold text-[var(--color-primary)]">約69万6,800円</span>
                </p>
                <p>
                  <span className="font-semibold">3. 住民税：</span>
                  455万円 × 5% ＝ <span className="font-bold text-[var(--color-primary)]">22万7,500円</span>
                </p>
                <p className="text-lg font-bold border-t border-[var(--color-border)] pt-3 mt-3">
                  合計税額：約<span className="text-[var(--color-primary)]">92万4,300円</span>
                </p>
              </div>
            </div>
          </div>

          <div className="bg-[var(--color-accent)]/10 border-l-4 border-[var(--color-accent)] p-4 rounded-r-lg">
            <p className="text-gray-700 text-sm leading-relaxed">
              <span className="font-bold">重要：</span>
              この例では売却額500万円に対して約92万円の税金がかかっています。取得費が判明すれば、譲渡所得が下がり税額を大幅に減らせる可能性があります。
            </p>
          </div>
        </section>

        {/* ========== 使える特例・控除 ========== */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
            使える特例・控除
          </h2>

          <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3 mt-6">
            3,000万円特別控除は底地に使えるか
          </h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            居住用財産を売却した場合に使える「3,000万円特別控除」は、マイホーム（建物とその敷地）を売却した場合に適用されます。
          </p>
          <div className="bg-[var(--color-accent)]/10 border-l-4 border-[var(--color-accent)] p-4 rounded-r-lg mb-6">
            <p className="text-gray-700 text-sm leading-relaxed">
              <span className="font-bold">重要：</span>
              底地は借地人が建物を所有している土地であり、底地の所有者自身が居住しているわけではないため、原則として3,000万円特別控除の適用は受けられません。ただし、底地と借地権を同時に取得し自己の居住用として使用していた場合など、例外的に適用できるケースもあります。
            </p>
          </div>

          <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3 mt-8">
            相続財産の取得費加算の特例
          </h3>
          <p className="text-gray-700 mb-4 leading-relaxed">
            相続で取得した底地を、相続税の申告期限の翌日から3年以内に売却した場合、支払った相続税の一部を取得費に加算できます。
          </p>
          <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)] mb-4">
            <h4 className="font-bold text-[var(--color-primary)] mb-3">適用要件</h4>
            <ul className="list-disc pl-6 text-gray-700 space-y-2">
              <li>相続または遺贈により財産を取得した人であること</li>
              <li>その財産を取得した人に相続税が課税されていること</li>
              <li>相続開始のあった日の翌日から<span className="font-bold">相続税の申告期限の翌日以後3年を経過する日まで</span>に売却すること</li>
            </ul>
          </div>
          <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)]">
            <h4 className="font-bold text-[var(--color-primary)] mb-3">計算例</h4>
            <div className="text-gray-700 space-y-2">
              <p>
                <span className="font-semibold">相続税額：</span>600万円
              </p>
              <p>
                <span className="font-semibold">相続財産の総額：</span>6,000万円
              </p>
              <p>
                <span className="font-semibold">売却した底地の相続税評価額：</span>1,000万円
              </p>
              <p className="border-t border-[var(--color-border)] pt-2 mt-2">
                <span className="font-semibold">加算できる取得費：</span>
                600万円 ×（1,000万円 ÷ 6,000万円）＝ <span className="font-bold text-[var(--color-primary)]">100万円</span>
              </p>
              <p className="text-sm text-gray-500 mt-1">
                この100万円を取得費に上乗せできるため、譲渡所得が減り、税額が軽減されます。
              </p>
            </div>
          </div>
        </section>

        {/* ========== 確定申告の手続きと必要書類 ========== */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
            確定申告の手続きと必要書類
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            底地の共有持分を売却して譲渡所得が発生した場合、翌年の2月16日〜3月15日の間に確定申告を行う必要があります。
          </p>

          <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">
            必要書類一覧
          </h3>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm md:text-base">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="px-4 py-3 text-left font-semibold">書類</th>
                  <th className="px-4 py-3 text-left font-semibold">入手先</th>
                </tr>
              </thead>
              <tbody>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="px-4 py-3">確定申告書B</td>
                  <td className="px-4 py-3">税務署・e-Tax</td>
                </tr>
                <tr className="border-b border-[var(--color-border)] bg-gray-50">
                  <td className="px-4 py-3">譲渡所得の内訳書</td>
                  <td className="px-4 py-3">税務署・e-Tax</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="px-4 py-3">売買契約書のコピー</td>
                  <td className="px-4 py-3">売却時に取得</td>
                </tr>
                <tr className="border-b border-[var(--color-border)] bg-gray-50">
                  <td className="px-4 py-3">取得時の契約書・領収書</td>
                  <td className="px-4 py-3">手元の書類</td>
                </tr>
                <tr className="border-b border-[var(--color-border)]">
                  <td className="px-4 py-3">仲介手数料の領収書</td>
                  <td className="px-4 py-3">不動産会社</td>
                </tr>
                <tr className="border-b border-[var(--color-border)] bg-gray-50">
                  <td className="px-4 py-3">登記事項証明書</td>
                  <td className="px-4 py-3">法務局</td>
                </tr>
                <tr>
                  <td className="px-4 py-3">本人確認書類</td>
                  <td className="px-4 py-3">マイナンバーカード等</td>
                </tr>
              </tbody>
            </table>
          </div>

          <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">
            申告の手順
          </h3>
          <ol className="list-decimal pl-6 text-gray-700 space-y-3 leading-relaxed">
            <li>
              <span className="font-semibold">譲渡所得の内訳書を作成</span>
              ：売却額・取得費・譲渡費用を記入し、譲渡所得を計算します。
            </li>
            <li>
              <span className="font-semibold">確定申告書を作成</span>
              ：e-Taxまたは紙の申告書に、給与所得等と合わせて譲渡所得を記入します。
            </li>
            <li>
              <span className="font-semibold">特例の適用を申請</span>
              ：取得費加算の特例等を使う場合は、必要な添付書類を忘れずに提出します。
            </li>
            <li>
              <span className="font-semibold">申告・納税</span>
              ：e-Tax送信または税務署へ提出し、所得税を納付します。住民税は後日通知されます。
            </li>
          </ol>
        </section>

        {/* ========== 税理士に相談すべきケース ========== */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
            税理士に相談すべきケース
          </h2>
          <p className="text-gray-700 mb-6 leading-relaxed">
            以下のケースに当てはまる場合は、税理士への相談をおすすめします。
          </p>
          <ul className="space-y-4">
            {[
              {
                title: "取得費が不明な場合",
                desc: "概算取得費（5%）以外の方法で取得費を推定できる可能性があります。市街地価格指数を使った算出など、専門家のアドバイスで税額が大きく変わることがあります。",
              },
              {
                title: "相続が絡む場合",
                desc: "取得費加算の特例の適用可否や、相続税との関連で複雑な計算が必要になります。",
              },
              {
                title: "複数の共有者で売却する場合",
                desc: "各共有者の取得費や所有期間が異なるケースでは、それぞれ個別の計算が必要です。",
              },
              {
                title: "売却額が高額な場合",
                desc: "税額が大きくなるため、特例の適用漏れがないか慎重に確認すべきです。",
              },
              {
                title: "過去に確定申告をしたことがない場合",
                desc: "初めての確定申告では、手続きの不備によるペナルティを避けるためにもプロのサポートが有効です。",
              },
            ].map((item, i) => (
              <li
                key={i}
                className="bg-[var(--color-bg)] rounded-xl p-5 border border-[var(--color-border)]"
              >
                <p className="font-bold text-[var(--color-primary)] mb-1">
                  {item.title}
                </p>
                <p className="text-gray-700 text-sm leading-relaxed">{item.desc}</p>
              </li>
            ))}
          </ul>
        </section>

        {/* ========== まとめ ========== */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
            まとめ
          </h2>
          <p className="text-gray-700 mb-4 leading-relaxed">
            底地の共有持分を売却した際の税金について、ポイントを整理します。
          </p>
          <ul className="list-disc pl-6 text-gray-700 space-y-2 mb-6 leading-relaxed">
            <li>主にかかる税金は譲渡所得税・住民税・復興特別所得税・印紙税の4種類</li>
            <li>長期譲渡所得（5年超）なら合計税率は約20.315%、短期なら約39.63%</li>
            <li>取得費が不明な場合は売却額の5%が概算取得費となり、税負担が重くなる</li>
            <li>相続で取得した底地は「取得費加算の特例」で税額を軽減できる可能性がある</li>
            <li>3,000万円特別控除は底地には原則として適用不可</li>
            <li>確定申告は売却の翌年2月16日〜3月15日に行う</li>
          </ul>
          <p className="text-gray-700 leading-relaxed">
            税金の計算は複雑ですが、正しく特例を活用すれば節税が可能です。不明点がある場合は、早めに税理士へ相談することをおすすめします。
          </p>
        </section>

        {/* ========== CTA ========== */}
        <section className="bg-[var(--color-accent)] rounded-2xl p-8 md:p-10 text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold text-[var(--color-primary)] mb-4">
            底地の共有持分、売却をお考えですか？
          </h2>
          <p className="text-[var(--color-primary)] mb-6 leading-relaxed">
            税金のことも含めて、まずは無料査定でいくらになるか確認してみませんか？<br />
            底地×共有持分に特化した専門スタッフが丁寧にご対応します。
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-[var(--color-primary)] text-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition shadow-lg"
          >
            無料査定を申し込む
          </Link>
          <p className="text-[var(--color-primary)] text-sm mt-4 opacity-80">
            最短即日査定・全国対応・秘密厳守
          </p>
        </section>

        {/* ========== 関連記事 ========== */}
        <section>
          <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
            関連記事
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            {[
              {
                href: "/articles/sokochi-kyoyu-mochibun-kiso",
                title: "底地の共有持分とは？基礎知識をわかりやすく解説",
              },
              {
                href: "/articles/sokochi-kyoyu-mochibun-baikyaku",
                title: "底地の共有持分を売却する方法と注意点",
              },
              {
                href: "/articles/sokochi-kyoyu-mochibun-souba",
                title: "底地の共有持分の相場はいくら？価格の決まり方",
              },
              {
                href: "/articles/sokochi-souzoku-trouble",
                title: "底地の相続トラブルと解決策",
              },
            ].map((article, i) => (
              <Link
                key={i}
                href={article.href}
                className="block bg-[var(--color-bg)] rounded-xl p-5 border border-[var(--color-border)] hover:shadow-md transition"
              >
                <p className="font-bold text-[var(--color-primary)] leading-snug">
                  {article.title}
                </p>
                <span className="text-sm text-gray-500 mt-2 inline-block">
                  記事を読む →
                </span>
              </Link>
            ))}
          </div>
        </section>
      </article>
    </>
  );
}
