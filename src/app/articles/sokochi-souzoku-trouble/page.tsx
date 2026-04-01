import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "底地を共有名義で相続するとなぜ揉める？トラブル事例と解決法",
  description:
    "底地を兄弟で相続して揉めていませんか？よくあるトラブル事例3選と、それぞれの解決策を専門家が解説。",
  openGraph: {
    title: "底地を共有名義で相続するとなぜ揉める？トラブル事例と解決法",
    description:
      "底地を兄弟で相続して揉めていませんか？よくあるトラブル事例3選と、それぞれの解決策を専門家が解説。",
    type: "article",
    locale: "ja_JP",
  },
};

export default function SokochiSouzokuTroublePage() {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: "底地を共有名義で相続するとなぜ揉める？トラブル事例と解決法",
    description:
      "底地を兄弟で相続して揉めていませんか？よくあるトラブル事例3選と、それぞれの解決策を専門家が解説。",
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
        "https://sokochi-kaitori.vercel.app/articles/sokochi-souzoku-trouble",
    },
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
      />

      {/* パンくずリスト */}
      <nav aria-label="パンくずリスト" className="max-w-4xl mx-auto px-4 pt-8">
        <ol className="flex items-center gap-2 text-sm text-[var(--color-text-light)]">
          <li>
            <Link href="/" className="hover:text-[var(--color-primary)] transition">
              トップ
            </Link>
          </li>
          <li>/</li>
          <li className="text-[var(--color-text)]">
            底地を共有名義で相続するとなぜ揉める？
          </li>
        </ol>
      </nav>

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* H1 */}
        <h1 className="text-3xl md:text-4xl font-extrabold text-[var(--color-primary)] mb-8 leading-tight">
          底地を共有名義で相続するとなぜ揉める？トラブル事例と解決法
        </h1>

        <p className="text-lg leading-relaxed mb-10">
          親が所有していた底地を兄弟姉妹で相続した結果、「地代を誰が受け取るのか」「固定資産税は誰が払うのか」といった問題が次々と浮上し、家族関係が悪化してしまう――。底地の共有名義相続は、こうしたトラブルの温床になりやすいのです。この記事では、底地を共有名義で相続した際によくあるトラブル事例と、その具体的な解決法を詳しく解説します。
        </p>

        {/* ── 底地を共有名義で相続するとなぜ揉めるのか ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
            底地を共有名義で相続するとなぜ揉めるのか
          </h2>
          <p className="leading-relaxed mb-6">
            底地の共有名義相続がトラブルに発展しやすい理由は、大きく3つあります。
          </p>

          <div className="space-y-6">
            <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)]">
              <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">
                地代収入の分配
              </h3>
              <p className="leading-relaxed">
                底地には借地人から地代が支払われますが、共有者が複数いる場合、その分配方法が曖昧になりがちです。振込先が特定の一人に設定されたまま放置されるケースや、「管理の手間をかけているのだから多めにもらうべき」と主張する共有者が出てくるケースは珍しくありません。地代は年額数万円から数十万円程度のことが多く、少額であるがゆえに話し合いが後回しにされ、不満が蓄積していきます。
              </p>
            </div>

            <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)]">
              <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">
                固定資産税の負担
              </h3>
              <p className="leading-relaxed">
                固定資産税の納税通知書は、代表者一人に届きます。代表者が立て替えて支払った後、他の共有者に持分に応じた金額を請求しても「お金がない」「そんな約束は知らない」と支払いを拒否されることがあります。特に相続から時間が経つと、各自の経済状況や底地への関心が変わり、負担の公平性をめぐる対立が深刻化します。
              </p>
            </div>

            <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)]">
              <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">
                借地人との交渉
              </h3>
              <p className="leading-relaxed">
                地代の値上げ交渉や借地契約の更新など、借地人との交渉には共有者全員の合意が必要です。しかし共有者間で意見が分かれると、交渉そのものが進められなくなります。「地代を上げたい」「現状維持でいい」「そもそも売ってしまいたい」といった意見の違いは、時間が経つほど溝が深まっていきます。
              </p>
            </div>
          </div>
        </section>

        {/* ── よくあるトラブル事例3選 ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
            よくあるトラブル事例3選
          </h2>

          {/* 事例1 */}
          <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)] mb-6">
            <p className="font-bold text-lg text-[var(--color-primary)] mb-3">
              事例1：兄弟の一人が地代を独占
            </p>
            <p className="leading-relaxed mb-4">
              都内在住のAさん（50代）は、父の死後、兄と2人で底地を相続しました。兄が実家近くに住んでいたため、借地人との連絡窓口を兄が担当することに。ところが数年後、Aさんが地代の分配を確認すると、兄はすべての地代を自分の口座で受け取り、Aさんには一円も渡していなかったことが発覚しました。
            </p>
            <p className="leading-relaxed">
              兄は「管理の手間をかけているのだから当然」と主張。Aさんは「持分は半分ずつなのだから地代も折半すべき」と譲らず、兄弟関係は完全に破綻してしまいました。最終的にAさんは弁護士を介して未払い分の地代を請求することになり、解決までに1年以上を要しました。
            </p>
          </div>

          {/* 事例2 */}
          <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)] mb-6">
            <p className="font-bold text-lg text-[var(--color-primary)] mb-3">
              事例2：共有者の一人が音信不通
            </p>
            <p className="leading-relaxed mb-4">
              Bさん（60代）は、母の相続で弟・妹の3人で底地を共有しました。相続直後は特に問題はなかったのですが、10年が経過した頃、妹が海外移住して連絡が取れなくなりました。
            </p>
            <p className="leading-relaxed">
              借地契約の更新時期が迫っても、妹の同意が得られず手続きが進みません。Bさんと弟は「底地を売却して現金化したい」と考えていましたが、共有者全員の同意なしには底地全体の売却ができません。不在者財産管理人の選任を家庭裁判所に申し立てることも検討しましたが、手続きの煩雑さと費用を前に途方に暮れています。
            </p>
          </div>

          {/* 事例3 */}
          <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)] mb-6">
            <p className="font-bold text-lg text-[var(--color-primary)] mb-3">
              事例3：売りたい人と持ち続けたい人の対立
            </p>
            <p className="leading-relaxed mb-4">
              Cさん（40代）は、父の底地を姉と共有で相続しました。Cさんは「底地の地代収入は年間数万円程度で、固定資産税を差し引くとほとんど利益がない。早く売却して現金化したい」と考えています。
            </p>
            <p className="leading-relaxed">
              一方、姉は「父が大切にしていた土地だから手放したくない」と主張。話し合いは平行線をたどり、年に数回の法事の場でも底地の話題が出るたびに険悪な雰囲気に。Cさんは自分の持分だけでも売却したいと考えていますが、「共有持分だけ売れるのか」「そもそも誰が買うのか」が分からず、身動きが取れない状況が続いています。
            </p>
          </div>

          <div className="bg-[var(--color-accent)]/10 border-l-4 border-[var(--color-accent)] p-4 rounded-r-lg">
            <p className="font-bold mb-1">
              こうしたトラブルに共通するのは、「共有」という状態が長引くほど問題が複雑化するという点です。
            </p>
            <p className="leading-relaxed">
              早期に対策を講じることが、被害を最小限に抑える鍵となります。
            </p>
          </div>
        </section>

        {/* ── トラブルの解決方法 ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
            トラブルの解決方法
          </h2>

          <div className="space-y-6">
            <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)]">
              <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">
                遺産分割協議
              </h3>
              <p className="leading-relaxed">
                相続発生後、まだ遺産分割が完了していない場合は、遺産分割協議で底地の帰属を一人に集約する方法が最も有効です。底地を取得する人が他の相続人に代償金を支払う「代償分割」を活用すれば、共有状態を避けつつ公平な相続が実現できます。協議がまとまらない場合は、家庭裁判所の遺産分割調停を利用することも選択肢です。
              </p>
            </div>

            <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)]">
              <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">
                共有物分割請求訴訟
              </h3>
              <p className="leading-relaxed">
                共有者間の話し合いが行き詰まった場合、裁判所に共有物分割請求訴訟を提起できます。裁判所は、現物分割・代金分割（競売）・価格賠償（一人が他の共有者の持分を買い取る）のいずれかの方法で共有関係の解消を命じます。底地の場合、物理的な分割は困難なため、価格賠償か競売になることがほとんどです。ただし訴訟には時間と費用がかかるため、最終手段と考えましょう。
              </p>
            </div>

            <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)]">
              <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">
                持分売却で離脱
              </h3>
              <p className="leading-relaxed">
                共有持分は、他の共有者の同意がなくても自分の持分だけを第三者に売却できます。共有関係から即座に離脱でき、まとまった現金を手にすることが可能です。特に底地の共有持分は専門の買取業者が存在しており、一般の不動産会社では断られるような複雑なケースにも対応してもらえます。
              </p>
            </div>
          </div>

          <div className="bg-[var(--color-accent)]/10 border-l-4 border-[var(--color-accent)] p-4 rounded-r-lg mt-6">
            <p className="font-bold mb-1">
              共有持分の売却は、他の共有者の同意なく実行できる唯一の方法です。
            </p>
            <p className="leading-relaxed">
              共有状態から抜け出すための最も現実的な選択肢として、多くの方が活用しています。
            </p>
          </div>
        </section>

        {/* ── 相続時に底地の共有を避けるための対策 ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
            相続時に底地の共有を避けるための対策
          </h2>

          <div className="space-y-6">
            <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)]">
              <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">
                遺言書の作成
              </h3>
              <p className="leading-relaxed">
                底地の共有トラブルを未然に防ぐ最も確実な方法は、遺言書で底地の帰属先を明確に指定しておくことです。「底地は長男に相続させる。他の財産で調整する」といった内容を公正証書遺言で残しておけば、相続発生時に共有状態を回避できます。遺言書がない場合、法定相続分に従って自動的に共有になるため、底地を持っている方は早めの遺言書作成をお勧めします。
              </p>
            </div>

            <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)]">
              <h3 className="text-xl font-bold text-[var(--color-primary)] mb-3">
                生前の持分整理
              </h3>
              <p className="leading-relaxed">
                すでに共有状態にある場合は、被相続人が存命のうちに持分を整理しておく方法もあります。具体的には、底地を生前に売却して現金化する、あるいは特定の相続人に生前贈与するといった方法です。生前贈与の場合は贈与税の問題がありますが、相続時精算課税制度を活用すれば税負担を抑えられる場合もあります。税理士と相談のうえ、最適な方法を選びましょう。
              </p>
            </div>
          </div>
        </section>

        {/* ── まとめ ── */}
        <section className="mb-12">
          <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
            まとめ
          </h2>
          <p className="leading-relaxed mb-4">
            底地を共有名義で相続すると、地代の分配・固定資産税の負担・借地人との交渉など、さまざまな場面でトラブルが発生します。共有状態が長引くほど問題は複雑化し、解決のコストも増大していきます。
          </p>
          <p className="leading-relaxed mb-4">
            すでにトラブルが発生している場合は、遺産分割協議・共有物分割請求訴訟・持分売却による離脱といった解決法を検討しましょう。まだ相続が発生していない段階であれば、遺言書の作成や生前の持分整理で共有を避ける対策を講じることが重要です。
          </p>
          <p className="leading-relaxed">
            「共有持分だけでも売却できるのか分からない」「誰に相談すればいいのか分からない」という方は、底地の共有持分を専門に扱う当社にお気軽にご相談ください。
          </p>
        </section>

        {/* ── CTAセクション ── */}
        <section className="bg-[var(--color-accent)] text-[var(--color-primary)] rounded-2xl p-8 md:p-12 text-center mb-12">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
            底地の共有持分、お悩みではありませんか？
          </h2>
          <p className="text-lg mb-6 opacity-90">
            他の共有者の同意は不要。あなたの持分だけ売却可能です。
            <br />
            最短即日査定・全国対応・秘密厳守。まずはお気軽にご相談ください。
          </p>
          <Link
            href="/#contact"
            className="inline-block bg-[var(--color-primary)] text-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition"
          >
            無料査定を申し込む
          </Link>
        </section>

        {/* ── 関連記事 ── */}
        <section>
          <h2 className="text-2xl font-bold text-[var(--color-primary)] mb-6">
            関連記事
          </h2>
          <div className="grid sm:grid-cols-2 gap-4">
            <Link
              href="/articles/sokochi-kyoyu-mochibun-baikyaku"
              className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)] hover:border-[var(--color-accent)] transition block"
            >
              <p className="font-bold text-[var(--color-primary)] mb-2">
                底地の共有持分は売却できる？方法と注意点
              </p>
              <p className="text-sm text-[var(--color-text-light)]">
                共有持分だけの売却方法と、売却時に知っておくべきポイントを解説します。
              </p>
            </Link>
            <Link
              href="/articles/sokochi-kyoyu-mochibun-souba"
              className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)] hover:border-[var(--color-accent)] transition block"
            >
              <p className="font-bold text-[var(--color-primary)] mb-2">
                底地の共有持分の相場はいくら？
              </p>
              <p className="text-sm text-[var(--color-text-light)]">
                底地の共有持分の価格相場と、査定額に影響する要素を詳しく解説します。
              </p>
            </Link>
            <Link
              href="/articles/sokochi-kyoyu-mochibun-zeikin"
              className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)] hover:border-[var(--color-accent)] transition block"
            >
              <p className="font-bold text-[var(--color-primary)] mb-2">
                底地の共有持分にかかる税金とは？
              </p>
              <p className="text-sm text-[var(--color-text-light)]">
                相続税・固定資産税・譲渡所得税など、底地の共有持分に関する税金を整理します。
              </p>
            </Link>
            <Link
              href="/articles/sokochi-kyoyu-mochibun-kiso"
              className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)] hover:border-[var(--color-accent)] transition block"
            >
              <p className="font-bold text-[var(--color-primary)] mb-2">
                底地の共有持分とは？基礎知識を解説
              </p>
              <p className="text-sm text-[var(--color-text-light)]">
                底地の共有持分の基本的な仕組みと、権利関係のポイントを分かりやすく解説します。
              </p>
            </Link>
          </div>
        </section>
      </article>
    </>
  );
}
