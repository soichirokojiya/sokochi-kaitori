import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title:
    "底地×共有持分とは？基礎知識をわかりやすく解説",
  description:
    "底地と共有持分それぞれの意味、両方が絡むケースの問題点を基本から解説。底地の共有持分でお困りの方に向けた完全ガイド。",
  openGraph: {
    title:
      "底地×共有持分とは？基礎知識をわかりやすく解説｜底地の共有持分買取 Common Future & Co.",
    description:
      "底地と共有持分それぞれの意味、両方が絡むケースの問題点を基本から解説。底地の共有持分でお困りの方に向けた完全ガイド。",
    type: "article",
    locale: "ja_JP",
  },
};

const jsonLd = {
  "@context": "https://schema.org",
  "@type": "Article",
  headline: "底地×共有持分とは？基礎知識をわかりやすく解説",
  description:
    "底地と共有持分それぞれの意味、両方が絡むケースの問題点を基本から解説。底地の共有持分でお困りの方に向けた完全ガイド。",
  author: {
    "@type": "Organization",
    name: "Common Future & Co.株式会社",
  },
  publisher: {
    "@type": "Organization",
    name: "Common Future & Co.株式会社",
  },
  datePublished: "2026-04-01",
  dateModified: "2026-04-01",
  mainEntityOfPage: {
    "@type": "WebPage",
    "@id":
      "https://sokochi-kaitori.vercel.app/articles/sokochi-kyoyu-mochibun-kiso",
  },
};

export default function SokochiKyoyuMochibunKisoPage() {
  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* パンくずリスト */}
        <nav aria-label="パンくずリスト" className="mb-8 text-sm text-gray-500">
          <ol className="flex items-center gap-2 flex-wrap">
            <li>
              <Link href="/" className="hover:text-[var(--color-primary)] transition">
                トップ
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li>
              <Link
                href="/articles"
                className="hover:text-[var(--color-primary)] transition"
              >
                コラム
              </Link>
            </li>
            <li aria-hidden="true">/</li>
            <li className="text-[var(--color-primary)] font-medium">
              底地×共有持分の基礎知識
            </li>
          </ol>
        </nav>

        {/* H1 */}
        <header className="mb-12">
          <h1 className="text-3xl md:text-4xl font-extrabold text-[var(--color-primary)] leading-tight mb-4">
            底地×共有持分とは？基礎知識をわかりやすく解説
          </h1>
          <p className="text-gray-600 leading-relaxed text-lg">
            「底地」と「共有持分」。不動産に関わる方でも、この2つが同時に絡むケースについて正しく理解している方は多くありません。
            本記事では、底地と共有持分それぞれの基本的な意味から、両方が重なった場合に生じる問題点、そして具体的な解決策までを網羅的に解説します。
            底地の共有持分でお悩みの方が最初に読むべき完全ガイドです。
          </p>
          <div className="mt-4 text-sm text-gray-400">
            更新日：2026年4月1日
          </div>
        </header>

        {/* 目次 */}
        <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)] mb-12">
          <h2 className="text-lg font-bold text-[var(--color-primary)] mb-4">
            目次
          </h2>
          <ol className="space-y-2 text-sm text-gray-700 list-decimal list-inside">
            <li>
              <a href="#sokochi" className="hover:text-[var(--color-accent)] transition">
                底地（そこち）とは？
              </a>
            </li>
            <li>
              <a href="#kyoyu-mochibun" className="hover:text-[var(--color-accent)] transition">
                共有持分とは？
              </a>
            </li>
            <li>
              <a href="#sokochi-kyoyu" className="hover:text-[var(--color-accent)] transition">
                底地が共有状態になるケースとは
              </a>
            </li>
            <li>
              <a href="#risk" className="hover:text-[var(--color-accent)] transition">
                底地の共有持分を放置するリスク
              </a>
            </li>
            <li>
              <a href="#solution" className="hover:text-[var(--color-accent)] transition">
                底地の共有持分の解決策
              </a>
            </li>
            <li>
              <a href="#matome" className="hover:text-[var(--color-accent)] transition">
                まとめ
              </a>
            </li>
          </ol>
        </div>

        {/* セクション1: 底地とは */}
        <section id="sokochi" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-6 pb-3 border-b-2 border-[var(--color-primary)]">
            底地（そこち）とは？
          </h2>

          <h3 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-4">
            底地の定義
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            底地（そこち）とは、借地権が設定されている土地の所有権のことを指します。言い換えれば、他人に土地を貸している地主が持っている土地の権利が「底地」です。
            底地は「底地権」とも呼ばれ、借地権者（借地人）がその土地の上に建物を建てて使用している状態の土地を、所有者側から見たときの呼び方です。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            通常の土地であれば、所有者は自由にその土地を使用・収益・処分することができます。しかし、底地の場合は借地人が土地を使用しているため、地主は自ら土地を使うことができず、その利用は大きく制限されます。
            地主が得られるのは借地人から支払われる地代のみであり、しかもその地代は近隣の賃料相場と比較して著しく低い場合がほとんどです。
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            底地は不動産登記簿上、通常の「所有権」として登記されています。登記を見ただけでは底地かどうかは判別できず、借地権の有無を確認して初めて「底地」であることが分かります。
            このような権利関係の分かりにくさも、底地の問題を複雑にしている要因のひとつです。
          </p>

          <h3 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-4">
            借地権との関係
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            土地の権利は大きく分けて「底地権（所有権）」と「借地権」の2つに分かれます。この2つを合わせると完全な所有権になります。
            つまり、底地と借地権は表裏一体の関係にあり、一つの土地の上に2つの権利が併存している状態です。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            借地権とは、建物を所有する目的で他人の土地を借りる権利のことです。借地借家法に基づく借地権は非常に強力な権利であり、地主が正当な事由なく借地契約を解除することは極めて困難です。
            借地権には「普通借地権」と「定期借地権」がありますが、既存の底地の多くは旧借地法時代に設定された普通借地権であり、事実上半永久的に継続します。
          </p>
          <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)] mb-6">
            <h4 className="font-bold text-[var(--color-primary)] mb-3">
              底地と借地権の権利関係
            </h4>
            <ul className="space-y-2 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent)] font-bold mt-0.5">&#9679;</span>
                <span>
                  <strong>完全な所有権</strong> ＝ 底地権 ＋ 借地権
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent)] font-bold mt-0.5">&#9679;</span>
                <span>
                  <strong>地主の権利（底地権）</strong>：地代を受け取る権利、借地契約満了時の更新料を受け取る権利、借地権の譲渡・建替え承諾料を受け取る権利
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent)] font-bold mt-0.5">&#9679;</span>
                <span>
                  <strong>借地人の権利（借地権）</strong>：土地を使用する権利、建物を所有する権利、借地契約を更新する権利
                </span>
              </li>
            </ul>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            地主と借地人は契約関係にあるため、両者の協力がなければ土地の有効活用は困難です。
            たとえば、借地人が建物を建て替えたい場合は地主の承諾が必要ですし、地代を値上げしたい場合は借地人の合意が必要です。
            このように、底地と借地権は相互に影響し合う関係にあります。
          </p>

          <h3 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-4">
            底地の評価が低い理由
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            底地は不動産市場において評価が非常に低くなります。更地（完全な所有権の土地）と比較すると、底地の市場価格は更地価格の10～15％程度にしかならないことも珍しくありません。
            これには以下のような理由があります。
          </p>
          <div className="bg-[var(--color-accent)]/10 border-l-4 border-[var(--color-accent)] p-4 mb-6">
            <h4 className="font-bold mb-2">底地の評価が低い主な理由</h4>
            <ul className="space-y-2 text-gray-700">
              <li>
                <strong>1. 自己使用ができない：</strong>
                借地人が土地を使用しているため、地主は自分でその土地を使うことができません。土地を買っても自分で利用できないため、購入希望者が極めて限られます。
              </li>
              <li>
                <strong>2. 地代収入が低い：</strong>
                多くの底地では、地代が固定資産税・都市計画税の2～3倍程度にとどまっています。投資用不動産として見た場合、利回りが著しく低く、投資対象としての魅力に欠けます。
              </li>
              <li>
                <strong>3. 借地権の解消が困難：</strong>
                借地借家法により借地人は手厚く保護されているため、正当な事由なく借地契約を終了させることはできません。
                借地権を回収して更地にするには、多額の立退料の支払いが必要になるケースがほとんどです。
              </li>
              <li>
                <strong>4. 流通性が低い：</strong>
                底地は一般的な不動産市場ではほとんど取引されません。不動産仲介会社も底地の取り扱いに消極的であり、売却先を見つけることが困難です。
              </li>
              <li>
                <strong>5. 融資が受けにくい：</strong>
                金融機関は底地を担保として評価しないことが多く、底地を担保にした融資を受けることはほぼできません。このことも底地の流動性を低下させる要因となっています。
              </li>
            </ul>
          </div>
          <p className="text-gray-700 leading-relaxed mb-4">
            ただし、相続税の評価においては、底地の評価額は路線価に「（1－借地権割合）」を掛けて算出されます。
            たとえば借地権割合が70％の地域であれば、底地の相続税評価額は更地価格の30％となります。
            市場価格よりも相続税評価額の方が高くなるケースも多く、「売れない・使えないのに相続税は高い」というジレンマに陥る方も少なくありません。
          </p>
          <p className="text-gray-700 leading-relaxed">
            このように、底地は保有しているだけでは経済的メリットが少なく、かといって売却も困難という厄介な不動産です。
            さらに、この底地が複数人の共有状態になると、問題はさらに複雑になります。次のセクションでは「共有持分」について詳しく解説します。
          </p>
        </section>

        {/* セクション2: 共有持分とは */}
        <section id="kyoyu-mochibun" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-6 pb-3 border-b-2 border-[var(--color-primary)]">
            共有持分とは？
          </h2>

          <h3 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-4">
            共有持分の定義
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            共有持分とは、一つの不動産を複数の人が共同で所有している場合に、各所有者がその不動産に対して持っている権利の割合のことです。
            たとえば、兄弟3人で一つの土地を相続した場合、各自が3分の1ずつの共有持分を持つことになります。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            共有持分は、不動産全体のうち「どの部分を所有しているか」という物理的な区分ではありません。あくまで「不動産全体に対する権利の割合」です。
            3分の1の共有持分を持っているからといって、土地の3分の1の区画を自由に使えるわけではないのです。
            共有持分権者は、不動産全体を持分に応じて使用する権利を持っています。
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            共有持分は不動産登記簿に「持分〇分の〇」という形で記載されます。
            共有持分権者はそれぞれが登記簿上の所有者として登記され、共有持分の割合も明示されます。
            この持分割合に応じて、固定資産税の負担義務や不動産の管理に関する権限が定められています。
          </p>

          <h3 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-4">
            共有持分が発生するケース
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            不動産が共有状態になるケースはいくつかありますが、代表的なものは以下の通りです。
          </p>

          <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)] mb-6">
            <h4 className="font-bold text-[var(--color-primary)] mb-4">
              共有持分が発生する主なケース
            </h4>

            <div className="mb-6">
              <h5 className="font-bold mb-2">1. 相続による共有</h5>
              <p className="text-gray-700 leading-relaxed">
                最も多いのが相続をきっかけとした共有です。不動産の所有者が亡くなり、複数の相続人がいる場合、遺産分割協議がまとまるまでの間は法定相続分に応じた共有状態となります。
                遺産分割協議で不動産を単独の相続人に取得させる合意ができればよいのですが、「誰が相続するか」で揉めたり、「代償金を支払う資力がない」といった理由で、結局共有のまま相続登記をするケースが非常に多く見られます。
                さらに、共有者の一人が亡くなると、その持分がさらに相続され、共有者の数がどんどん増えていくことになります。
              </p>
            </div>

            <div className="mb-6">
              <h5 className="font-bold mb-2">2. 共同購入</h5>
              <p className="text-gray-700 leading-relaxed">
                夫婦や親子で不動産を共同購入した場合にも共有状態が生じます。
                住宅ローンを組む際に、夫婦がそれぞれの収入に応じてローンを負担するケースでは、出資割合に応じた共有持分で登記するのが一般的です。
                底地の場合では、投資目的で複数人が資金を出し合って購入するケースもあります。
              </p>
            </div>

            <div>
              <h5 className="font-bold mb-2">3. 贈与・譲渡</h5>
              <p className="text-gray-700 leading-relaxed">
                不動産の所有者が生前に一部の持分を家族に贈与した場合にも共有状態が発生します。
                相続対策として、毎年少しずつ持分を子どもに贈与する方法は以前よく行われていました。
                しかし、これにより不動産が複数人の共有状態となり、将来的な処分が困難になるケースも少なくありません。
              </p>
            </div>
          </div>

          <h3 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-4">
            共有持分でできること・できないこと
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            共有不動産について、各共有者が単独でできる行為と、他の共有者の同意が必要な行為は、民法によって明確に分類されています。
            この区分を理解しておくことは、共有持分を保有する上で非常に重要です。
          </p>

          <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)] mb-6">
            <div className="mb-6">
              <h5 className="font-bold text-[var(--color-primary)] mb-2">
                単独で可能な行為（保存行為）
              </h5>
              <ul className="space-y-1 text-gray-700 list-disc list-inside">
                <li>不動産の現状維持のための修繕</li>
                <li>不法占拠者への明け渡し請求</li>
                <li>共有持分のみの売却や抵当権設定</li>
                <li>共有物分割請求</li>
              </ul>
            </div>

            <div className="mb-6">
              <h5 className="font-bold text-[var(--color-primary)] mb-2">
                過半数の同意が必要な行為（管理行為）
              </h5>
              <ul className="space-y-1 text-gray-700 list-disc list-inside">
                <li>不動産の賃貸借契約の締結・解除</li>
                <li>不動産の利用方法の変更</li>
                <li>軽微な改良行為</li>
              </ul>
            </div>

            <div>
              <h5 className="font-bold text-[var(--color-primary)] mb-2">
                全員の同意が必要な行為（変更・処分行為）
              </h5>
              <ul className="space-y-1 text-gray-700 list-disc list-inside">
                <li>不動産全体の売却</li>
                <li>建物の取り壊し</li>
                <li>大規模な改良工事</li>
                <li>不動産全体への抵当権の設定</li>
              </ul>
            </div>
          </div>

          <div className="bg-[var(--color-accent)]/10 border-l-4 border-[var(--color-accent)] p-4 mb-6">
            <h4 className="font-bold mb-2">重要ポイント</h4>
            <p className="text-gray-700 leading-relaxed">
              ここで注目すべきは、<strong>「自分の共有持分だけであれば、他の共有者の同意なく売却できる」</strong>という点です。
              共有不動産の全体を売却するには共有者全員の同意が必要ですが、自分の持分のみを第三者に譲渡することは、民法上、各共有者が単独で行える保存行為として認められています。
              底地の共有持分を手放したいが他の共有者と話がまとまらないという場合、この制度を利用して持分のみを売却するという選択肢があります。
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed">
            共有持分の概念を理解したところで、次は底地が共有状態になる具体的なケースについて見ていきましょう。
            底地と共有持分が同時に絡むことで、問題はさらに複雑さを増します。
          </p>
        </section>

        {/* セクション3: 底地が共有状態になるケース */}
        <section id="sokochi-kyoyu" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-6 pb-3 border-b-2 border-[var(--color-primary)]">
            底地が共有状態になるケースとは
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            底地が共有状態になるケースは大きく分けて2つあります。「相続による共有」と「複数人での底地購入」です。
            いずれのケースでも、底地という特殊な不動産が共有状態になることで、通常の共有不動産以上に複雑な問題が発生します。
          </p>

          <h3 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-4">
            相続による底地の共有
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            底地が共有状態になる最も多いケースが、地主の相続です。
            地主が亡くなり、複数の相続人がいる場合に、底地が共有名義で相続されることになります。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            典型的なのは、先代の地主が複数の借地人に土地を貸していたケースです。地主が亡くなると、その土地全体が相続の対象となります。
            相続人が3人いれば、原則として法定相続分に従い各3分の1ずつの共有持分を取得します。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            底地の相続で特に問題となるのは、以下のような点です。
          </p>
          <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)] mb-6">
            <ul className="space-y-4 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent)] font-bold mt-0.5">&#9679;</span>
                <span>
                  <strong>分割が困難：</strong>
                  通常の土地であれば物理的に分筆して各相続人に分配できますが、底地の場合は借地人との関係があるため、単純に分筆するわけにはいきません。
                  借地人から見れば地主が誰であるかは重要な問題であり、地主が複数になること自体がトラブルの原因になり得ます。
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent)] font-bold mt-0.5">&#9679;</span>
                <span>
                  <strong>代償分割の困難さ：</strong>
                  一人の相続人が底地を単独で取得し、他の相続人には代償金（金銭）を支払う「代償分割」も考えられますが、底地は流動性が低く市場価値も低いため、代償金の額で合意に至らないケースが多くあります。
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent)] font-bold mt-0.5">&#9679;</span>
                <span>
                  <strong>換価分割も困難：</strong>
                  底地を売却してその代金を分配する「換価分割」も選択肢ですが、底地は一般市場での売却が極めて難しく、買い手が見つからないという問題があります。
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent)] font-bold mt-0.5">&#9679;</span>
                <span>
                  <strong>地代の分配問題：</strong>
                  底地を共有で相続した場合、借地人から支払われる地代を共有者間で分配する必要があります。
                  しかし、地代の管理や分配方法をめぐって共有者間で揉めるケースは珍しくありません。
                </span>
              </li>
            </ul>
          </div>
          <p className="text-gray-700 leading-relaxed mb-6">
            さらに深刻な問題は、共有者の一人が亡くなった場合です。その共有持分がさらに相続されることで、共有者の数は世代を経るごとに増加していきます。
            3人の共有者がそれぞれ2人の子どもに相続すれば、次の世代では6人の共有者になります。
            こうした「ネズミ算式」の共有者増加は、意思決定をさらに困難にし、事実上、底地の処分が不可能な状態に陥らせます。
          </p>

          <h3 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-4">
            複数人での底地購入
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            もうひとつのケースは、複数人が共同で底地を購入する場合です。
            これは相続とは異なり、自らの意思で共有状態を選択するケースですが、将来的に同様の問題が生じ得ます。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            底地を共同購入するケースとしては、以下のようなものがあります。
          </p>
          <ul className="space-y-3 text-gray-700 mb-6">
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-accent)] font-bold mt-0.5">&#9679;</span>
              <span>
                <strong>借地人の関係者が共同で購入：</strong>
                借地人自身が底地を購入すれば完全な所有権を取得できますが、一人では資金が不足する場合に、親族や知人と共同で底地を購入するケースがあります。
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-accent)] font-bold mt-0.5">&#9679;</span>
              <span>
                <strong>投資家グループによる購入：</strong>
                底地の地代収入を投資目的として、複数の投資家が共同で購入するケースです。地代は安定収入ではありますが、利回りが低いため、一人あたりの投資額を抑えるために共同購入する場合があります。
              </span>
            </li>
            <li className="flex items-start gap-2">
              <span className="text-[var(--color-accent)] font-bold mt-0.5">&#9679;</span>
              <span>
                <strong>親族間での購入：</strong>
                将来の相続対策も兼ねて、親子や兄弟で底地を共同購入するケースです。しかし、購入時は良好だった関係が将来にわたって続く保証はなく、結果的にトラブルの種を自ら蒔いてしまうことになりかねません。
              </span>
            </li>
          </ul>

          <div className="bg-[var(--color-accent)]/10 border-l-4 border-[var(--color-accent)] p-4 mb-6">
            <h4 className="font-bold mb-2">重要ポイント</h4>
            <p className="text-gray-700 leading-relaxed">
              底地の共有は、相続であれ共同購入であれ、結局のところ同じ問題に行き着きます。
              それは、<strong>底地という元々扱いが難しい不動産に、共有という別の制約が加わることで、問題が二重に複雑化する</strong>ということです。
              底地単独でも売却が困難なのに、共有持分のみとなるとさらに市場価値は下がり、処分はより一層困難になります。
            </p>
          </div>
        </section>

        {/* セクション4: リスク */}
        <section id="risk" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-6 pb-3 border-b-2 border-[var(--color-primary)]">
            底地の共有持分を放置するリスク
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            底地の共有持分を「いつか解決しよう」と放置してしまう方は少なくありません。
            しかし、放置すればするほど問題は深刻化し、解決の難易度とコストは増大します。
            ここでは、底地の共有持分を放置した場合に生じる具体的なリスクについて解説します。
          </p>

          <h3 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-4">
            固定資産税の問題
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            底地にも固定資産税・都市計画税は課税されます。
            共有不動産の固定資産税は、共有者全員が連帯して納税する義務を負います（地方税法第10条の2）。
            これは、共有者の一人が自分の持分に応じた税額だけを負担すればよいということではなく、税金全額について各共有者が連帯して責任を負うことを意味します。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            実際には、共有者の代表者に納税通知書が届き、その代表者が税金を支払った後に各共有者に持分に応じた金額を請求するのが一般的です。
            しかし、共有者の中に支払いに応じない人がいた場合、代表者が全額を負担させられるリスクがあります。
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            底地の場合、地代収入から固定資産税を支払っているケースが多いですが、地代の管理や分配が適切に行われていない場合、固定資産税の滞納につながる危険性もあります。
            固定資産税を滞納すると、最悪の場合、不動産が差し押さえられて公売にかけられる可能性もあります。
          </p>

          <h3 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-4">
            管理の問題
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            底地の管理には、借地人との様々なやり取りが発生します。
            地代の値上げ交渉、借地契約の更新、借地人からの建替え承諾の申し出、借地権の譲渡承諾の申し出など、地主として対応すべき事項は多岐にわたります。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            底地が共有状態にある場合、これらの管理行為を誰が行うのかという問題が生じます。
            前述の通り、管理行為は共有者の持分の過半数の同意が必要ですが、共有者が遠方に住んでいたり、連絡が取れなかったりすると、適時適切な対応が困難になります。
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            たとえば、借地人から「建物を建て替えたい」という申し出があった場合、地主としては承諾料を受け取って承諾するのが一般的です。
            しかし共有者間で「承諾するかどうか」「承諾料の額をいくらにするか」について意見が分かれ、対応が遅れると、借地人との関係が悪化する原因になります。
            最悪の場合、借地人が裁判所に「借地条件の変更」や「増改築の許可」を申し立てる事態に発展することもあります。
          </p>

          <h3 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-4">
            資産価値の低下
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            底地の共有持分を放置することは、資産価値を着実に低下させます。
            前述の通り、底地単体でも市場価値は低いですが、共有持分のみとなるとさらに市場価値は下がります。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            共有持分のみの底地を購入したいと考える人は、ほぼ皆無と言ってよいでしょう。
            底地の共有持分を買っても、自分で土地を使えるわけでもなく、地代収入も持分割合に応じた僅かな金額にしかならず、かつ他の共有者との調整が必要です。
            一般の不動産市場で売却先を見つけることはまず不可能であり、専門の買取業者に依頼するほかありません。
          </p>
          <p className="text-gray-700 leading-relaxed mb-6">
            さらに、建物の老朽化や借地人の高齢化が進むと、将来的な借地契約の継続性にも不安が生じます。
            借地人が亡くなった後、その相続人が借地権を相続するケースもありますが、借地権を放棄するケースもあります。
            借地人がいなくなると底地から更地に戻りますが、更地にするための建物解体費用の負担問題など、新たな課題が浮上します。
          </p>

          <h3 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-4">
            相続の複雑化
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            底地の共有持分を放置し続けると、世代交代とともに相続がますます複雑化します。
            先ほども触れた通り、共有者の一人が亡くなるとその持分はさらに相続されるため、世代を経るごとに共有者の数は増加します。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            たとえば、祖父の代から3人で共有していた底地が、3世代後には数十人の共有状態になっているということは決して珍しくありません。
            共有者の数が増えれば、全員の同意を得ることはほぼ不可能になり、不動産は事実上「塩漬け」の状態になります。
          </p>

          <div className="bg-[var(--color-accent)]/10 border-l-4 border-[var(--color-accent)] p-4 mb-6">
            <h4 className="font-bold mb-2">2024年4月から相続登記が義務化されました</h4>
            <p className="text-gray-700 leading-relaxed">
              不動産登記法の改正により、2024年4月1日から相続登記が義務化されました。
              相続の開始を知り、かつ所有権を取得したことを知った日から3年以内に相続登記をしなければ、正当な理由がない限り10万円以下の過料が科される可能性があります。
              過去の相続についても遡及適用されるため、<strong>底地の共有持分を相続したまま放置している方は、早急に対応を検討する必要があります。</strong>
            </p>
          </div>

          <p className="text-gray-700 leading-relaxed">
            このように、底地の共有持分は放置すればするほど問題が深刻化します。
            「今は特に困っていないから」と先送りにするのではなく、早めに解決策を検討することが重要です。
            次のセクションでは、底地の共有持分を解消するための具体的な方法について解説します。
          </p>
        </section>

        {/* セクション5: 解決策 */}
        <section id="solution" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-6 pb-3 border-b-2 border-[var(--color-primary)]">
            底地の共有持分の解決策
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            底地の共有持分を解消するには、いくつかの方法があります。
            それぞれの方法にメリット・デメリットがありますので、ご自身の状況に合った方法を選択することが重要です。
          </p>

          <h3 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-4">
            1. 他の共有者に買い取ってもらう
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            最もシンプルな解決策は、他の共有者に自分の持分を買い取ってもらうことです。
            共有者の中に底地全体を一人で管理したいと考えている人がいれば、その人に持分を譲渡することで共有状態を解消できます。
          </p>
          <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)] mb-6">
            <div className="mb-3">
              <span className="text-green-600 font-bold">メリット：</span>
              <span className="text-gray-700">
                共有者間の取引であるため、第三者に持分が渡ることを防げます。また、共有者は底地の状況を理解しているため、交渉がスムーズに進む可能性があります。
              </span>
            </div>
            <div>
              <span className="text-red-600 font-bold">デメリット：</span>
              <span className="text-gray-700">
                他の共有者に購入資力がない場合や、そもそも買い取る意思がない場合はこの方法は使えません。価格交渉で折り合いがつかず、かえって関係が悪化するリスクもあります。
              </span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-4">
            2. 借地人に売却する
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            底地を借地人に売却するという方法もあります。
            借地人にとっては、底地を取得することで完全な所有権（借地権＋底地権）を手に入れることができるため、大きなメリットがあります。
            完全な所有権になれば、土地の資産価値は大幅に上昇し、自由な利用や売却が可能になります。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            ただし、共有持分のみを借地人に売却する場合は注意が必要です。
            底地全体を売却するのであれば借地人にとって大きなメリットがありますが、共有持分の一部だけでは完全な所有権にはならず、借地人にとっての魅力は半減します。
          </p>
          <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)] mb-6">
            <div className="mb-3">
              <span className="text-green-600 font-bold">メリット：</span>
              <span className="text-gray-700">
                借地人は底地の状況を熟知しているため、外部の第三者に売却するよりも交渉がしやすい場合があります。借地人が底地全体を購入する場合は、共有者全員にとって最良の解決策になり得ます。
              </span>
            </div>
            <div>
              <span className="text-red-600 font-bold">デメリット：</span>
              <span className="text-gray-700">
                借地人に購入意思や資金がない場合はこの方法は成立しません。また、借地人への売却には全共有者の同意が必要なため（底地全体を売却する場合）、共有者間で合意形成が必要です。
              </span>
            </div>
          </div>

          <h3 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-4">
            3. 専門買取業者に売却する
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            底地の共有持分を最もスピーディーかつ確実に解消する方法が、専門の買取業者に売却することです。
            底地や共有持分を専門に取り扱う買取業者は、これらの複雑な権利関係を持つ不動産の取り扱いに長けており、適正な価格で買い取ってくれます。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            専門買取業者の最大の特徴は、<strong>共有持分のみの売却が可能である</strong>という点です。
            前述の通り、自分の共有持分は他の共有者の同意なく売却できるため、他の共有者との交渉が不要です。
            共有者間の関係が悪化していて話し合いが困難な場合でも、自分の持分だけを売却して共有関係から離脱することができます。
          </p>
          <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)] mb-6">
            <div className="mb-3">
              <span className="text-green-600 font-bold">メリット：</span>
              <span className="text-gray-700">
                他の共有者の同意が不要。最短で即日査定、数日で現金化が可能。複雑な権利関係もプロが対応。面倒な交渉や手続きを任せられる。
              </span>
            </div>
            <div>
              <span className="text-red-600 font-bold">デメリット：</span>
              <span className="text-gray-700">
                更地の市場価格と比較すると売却価格は低くなります。また、信頼できる業者を選ぶ必要があります。底地×共有持分の両方に精通した専門業者に依頼することが重要です。
              </span>
            </div>
          </div>

          <div className="bg-[var(--color-accent)]/10 border-l-4 border-[var(--color-accent)] p-4 mb-6">
            <h4 className="font-bold mb-2">専門業者を選ぶポイント</h4>
            <ul className="space-y-2 text-gray-700">
              <li>底地と共有持分の両方の取り扱い実績があるか</li>
              <li>査定は無料で、強引な営業がないか</li>
              <li>弁護士・司法書士など専門家との連携体制があるか</li>
              <li>全国対応しているか</li>
              <li>秘密厳守（他の共有者に知られずに進められるか）</li>
            </ul>
          </div>

          <h3 className="text-xl font-bold text-[var(--color-primary)] mt-8 mb-4">
            4. 共有物分割請求を行う
          </h3>
          <p className="text-gray-700 leading-relaxed mb-4">
            共有者間で話し合いがまとまらない場合の最終手段として、裁判所に「共有物分割請求」を申し立てる方法があります。
            共有物分割請求は、民法第256条に基づき、各共有者がいつでも行使できる権利です。
          </p>
          <p className="text-gray-700 leading-relaxed mb-4">
            共有物分割の方法には、以下の3つがあります。
          </p>
          <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)] mb-6">
            <div className="mb-4">
              <h5 className="font-bold mb-1">現物分割</h5>
              <p className="text-gray-700">
                不動産を物理的に分割して各共有者に配分する方法です。
                ただし、底地の場合は借地権との関係があるため、現物分割は現実的に困難なケースがほとんどです。
              </p>
            </div>
            <div className="mb-4">
              <h5 className="font-bold mb-1">代償分割（価格賠償）</h5>
              <p className="text-gray-700">
                一人の共有者が不動産全体を取得し、他の共有者には持分に相当する金銭（代償金）を支払う方法です。
                底地の評価額について争いになることが多いですが、裁判所が鑑定人を選任して適正価格を判断します。
              </p>
            </div>
            <div>
              <h5 className="font-bold mb-1">換価分割（競売）</h5>
              <p className="text-gray-700">
                不動産を競売にかけて売却し、その代金を持分割合に応じて分配する方法です。
                現物分割も代償分割も困難な場合に選択されますが、競売では市場価格を大きく下回る金額でしか売却できないのが通常です。
                底地の場合は特に買い手が限られるため、競売価格はさらに低くなる傾向があります。
              </p>
            </div>
          </div>

          <div className="bg-[var(--color-accent)]/10 border-l-4 border-[var(--color-accent)] p-4 mb-6">
            <h4 className="font-bold mb-2">重要ポイント</h4>
            <p className="text-gray-700 leading-relaxed">
              共有物分割請求は法的手続きであるため、弁護士費用や裁判費用がかかります。また、裁判は長期化することもあり、精神的な負担も大きくなります。
              <strong>できる限り裁判になる前に、話し合いや専門業者への売却で解決することをお勧めします。</strong>
            </p>
          </div>
        </section>

        {/* セクション6: まとめ */}
        <section id="matome" className="mb-16">
          <h2 className="text-2xl md:text-3xl font-bold text-[var(--color-primary)] mb-6 pb-3 border-b-2 border-[var(--color-primary)]">
            まとめ
          </h2>

          <p className="text-gray-700 leading-relaxed mb-6">
            本記事では、底地と共有持分の基礎知識について網羅的に解説しました。最後に要点を整理します。
          </p>

          <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)] mb-6">
            <ul className="space-y-3 text-gray-700">
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent)] font-bold mt-0.5">&#10003;</span>
                <span>
                  <strong>底地</strong>とは借地権が設定された土地の所有権のこと。自己使用ができず、市場価値は更地の10～15％程度と低い。
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent)] font-bold mt-0.5">&#10003;</span>
                <span>
                  <strong>共有持分</strong>とは不動産を複数人で所有する場合の各所有者の権利割合。自分の持分のみであれば他の共有者の同意なく売却が可能。
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent)] font-bold mt-0.5">&#10003;</span>
                <span>
                  底地が共有状態になる主な原因は<strong>相続</strong>。世代を経るごとに共有者が増加し、問題は深刻化する。
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent)] font-bold mt-0.5">&#10003;</span>
                <span>
                  放置すると<strong>固定資産税の問題・管理の問題・資産価値の低下・相続の複雑化</strong>といったリスクがある。
                </span>
              </li>
              <li className="flex items-start gap-2">
                <span className="text-[var(--color-accent)] font-bold mt-0.5">&#10003;</span>
                <span>
                  解決策としては、共有者間の売買、借地人への売却、専門買取業者への売却、共有物分割請求がある。<strong>専門買取業者への売却</strong>が最もスピーディーかつ確実。
                </span>
              </li>
            </ul>
          </div>

          <p className="text-gray-700 leading-relaxed mb-6">
            底地の共有持分は、放置すればするほど問題が複雑化・深刻化します。
            「今は困っていない」と感じていても、相続や税制の変更など外部環境の変化によって、ある日突然問題が顕在化することもあります。
            少しでも不安や疑問がある方は、早めに専門家に相談することをお勧めします。
          </p>
          <p className="text-gray-700 leading-relaxed">
            Common Future & Co.では、底地×共有持分に特化した専門買取を行っています。
            他の共有者の同意は不要、最短即日で査定が可能です。
            まずはお気軽に無料査定をご利用ください。
          </p>
        </section>

        {/* CTA セクション */}
        <section className="bg-[var(--color-primary)] rounded-2xl p-8 md:p-12 text-white text-center mb-16">
          <h2 className="text-2xl md:text-3xl font-bold mb-4">
            底地の共有持分でお困りですか？
          </h2>
          <p className="text-lg opacity-90 mb-6 max-w-2xl mx-auto leading-relaxed">
            他の共有者の同意は不要。あなたの持分だけ売却できます。
            まずは無料査定で、あなたの持分の価値を確認してみませんか？
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="inline-block bg-[var(--color-accent)] text-[var(--color-primary)] px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition shadow-lg"
            >
              無料査定を申し込む
            </Link>
          </div>
          <div className="flex items-center justify-center gap-6 mt-6 text-sm opacity-80">
            <span>最短即日査定</span>
            <span>全国対応</span>
            <span>秘密厳守</span>
          </div>
        </section>

        {/* 関連記事 */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
            関連記事
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/articles/sokochi-kyoyu-mochibun-baikyaku"
              className="block bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)] hover:shadow-md transition"
            >
              <h3 className="font-bold text-[var(--color-primary)] mb-2">
                底地の共有持分は売却できる？方法と注意点
              </h3>
              <p className="text-sm text-gray-600">
                底地の共有持分を売却する具体的な方法、手続きの流れ、注意点について詳しく解説します。
              </p>
            </Link>
            <Link
              href="/articles/sokochi-kyoyu-mochibun-souba"
              className="block bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)] hover:shadow-md transition"
            >
              <h3 className="font-bold text-[var(--color-primary)] mb-2">
                底地の共有持分の相場はいくら？
              </h3>
              <p className="text-sm text-gray-600">
                底地の共有持分の価格相場と評価方法、高く売るためのポイントを解説します。
              </p>
            </Link>
            <Link
              href="/articles/sokochi-kyoyu-mochibun-zeikin"
              className="block bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)] hover:shadow-md transition"
            >
              <h3 className="font-bold text-[var(--color-primary)] mb-2">
                底地の共有持分にかかる税金は？
              </h3>
              <p className="text-sm text-gray-600">
                固定資産税、相続税、譲渡所得税など、底地の共有持分に関わる税金を分かりやすく解説します。
              </p>
            </Link>
            <Link
              href="/articles/sokochi-souzoku-trouble"
              className="block bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)] hover:shadow-md transition"
            >
              <h3 className="font-bold text-[var(--color-primary)] mb-2">
                底地の相続トラブル事例と対策
              </h3>
              <p className="text-sm text-gray-600">
                底地の相続で起こりがちなトラブル事例と、事前にできる対策について解説します。
              </p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
