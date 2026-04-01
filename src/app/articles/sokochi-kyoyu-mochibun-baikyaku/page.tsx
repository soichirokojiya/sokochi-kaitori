import Link from "next/link";
import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "底地の共有持分を売却する4つの方法｜メリット・デメリット比較",
  description:
    "底地の共有持分は他の共有者の同意なしで売却可能。4つの売却方法を比較し、最適な方法の選び方を解説。",
};

export default function SokochiKyoyuMochibunBaikyaku() {
  return (
    <>
      {/* パンくずリスト */}
      <nav className="max-w-4xl mx-auto px-4 py-4 text-sm text-[var(--color-text-light)]">
        <ol className="flex items-center gap-2 flex-wrap">
          <li>
            <Link href="/" className="hover:text-[var(--color-primary)] transition">
              ホーム
            </Link>
          </li>
          <li>/</li>
          <li>
            <Link href="/#articles" className="hover:text-[var(--color-primary)] transition">
              コラム
            </Link>
          </li>
          <li>/</li>
          <li className="text-[var(--color-text)]">底地の共有持分を売却する4つの方法</li>
        </ol>
      </nav>

      <article className="max-w-4xl mx-auto px-4 py-12">
        {/* H1 */}
        <header className="mb-12">
          <span className="inline-block text-xs font-bold text-[var(--color-accent)] bg-[var(--color-accent)]/10 px-3 py-1 rounded-full mb-4">
            売却方法
          </span>
          <h1 className="text-3xl md:text-4xl font-extrabold leading-tight mb-6 text-[var(--color-primary)]">
            底地の共有持分を売却する4つの方法｜あなたに最適な方法は？
          </h1>
          <p className="text-lg text-[var(--color-text-light)] leading-relaxed">
            「底地を相続で共有しているが、自分の持分だけ手放したい」「他の共有者と意見が合わず売却が進まない」。こうしたお悩みをお持ちの方に向けて、底地の共有持分を売却する4つの方法を、メリット・デメリットとともにわかりやすく解説します。あなたの状況に最適な売却方法がきっと見つかるはずです。
          </p>
        </header>

        {/* セクション1: 底地の共有持分は単独で売却できる */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6 text-[var(--color-primary)] border-b-2 border-[var(--color-primary)] pb-3">
            底地の共有持分は単独で売却できる
          </h2>
          <p className="text-[var(--color-text-light)] leading-relaxed mb-6">
            まず大前提として押さえておきたいのが、<strong>底地の共有持分は、他の共有者の同意がなくても単独で売却できる</strong>ということです。これは民法第206条（所有権の内容）と第249条以下（共有に関する規定）に基づいています。
          </p>
          <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)] mb-6">
            <h3 className="font-bold mb-3 text-[var(--color-primary)]">民法上の根拠</h3>
            <p className="text-[var(--color-text-light)] leading-relaxed mb-4">
              民法第206条は「所有者は、法令の制限内において、自由にその所有物の使用、収益及び処分をする権利を有する」と定めており、各共有者は自分の持分について自由に処分（売却・譲渡）することが認められています。共有不動産「全体」の売却には全員の同意が必要ですが（民法第251条）、「自分の持分」だけであれば単独で売却可能です。
            </p>
            <p className="text-[var(--color-text-light)] leading-relaxed">
              この原則は底地であっても変わりません。底地に借地権が設定されていても、地主としての所有権（底地権）の共有持分は各共有者が自由に処分できます。借地人への通知や同意も法律上は不要です。
            </p>
          </div>
          <div className="bg-[var(--color-accent)]/10 border-l-4 border-[var(--color-accent)] p-4 mb-6">
            <p className="font-bold mb-2">ただし、知っておきたい注意点</p>
            <ul className="text-[var(--color-text-light)] leading-relaxed space-y-2">
              <li>
                <strong>売却価格は市場価格より大幅に低くなる傾向があります。</strong>底地はそもそも更地に比べて流動性が低い上に、共有持分だけの売却となると買い手が限られるためです。一般的には更地価格の10〜15%程度が目安と言われています。
              </li>
              <li>
                <strong>共有者間の人間関係に影響が出る可能性があります。</strong>事前に他の共有者に声をかけずに第三者へ売却した場合、後にトラブルになるリスクがあります。法的には問題なくても、円満な解決を望むなら事前の相談を検討しましょう。
              </li>
              <li>
                <strong>買主が限定されます。</strong>底地の共有持分を購入するのは、基本的に不動産投資家や専門買取業者です。一般個人が購入するケースはほとんどありません。
              </li>
            </ul>
          </div>
          <p className="text-[var(--color-text-light)] leading-relaxed">
            以上を踏まえた上で、具体的な4つの売却方法を見ていきましょう。それぞれにメリット・デメリットがありますので、ご自身の状況に合わせて最適な方法を選んでください。
          </p>
        </section>

        {/* セクション2: 売却方法1 他の共有者に買い取ってもらう */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6 text-[var(--color-primary)] border-b-2 border-[var(--color-primary)] pb-3">
            売却方法1｜他の共有者に買い取ってもらう
          </h2>
          <p className="text-[var(--color-text-light)] leading-relaxed mb-6">
            最もシンプルな方法が、他の共有者に自分の持分を買い取ってもらう方法です。共有者同士での売買であれば、底地の共有状態が解消に向かうため、双方にとってメリットがあります。
          </p>
          <p className="text-[var(--color-text-light)] leading-relaxed mb-6">
            例えば、兄弟3人で底地を共有している場合、自分の持分（3分の1）を他の兄弟に売却することで、共有者が2人に減り、将来的な意思決定がスムーズになります。買い取る側も、持分割合が増えることで底地全体に対する支配力が高まります。
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)]">
              <h3 className="font-bold mb-3 text-green-600">メリット</h3>
              <ul className="text-[var(--color-text-light)] leading-relaxed space-y-2 text-sm">
                <li>・第三者への売却より高い価格で売れる可能性がある</li>
                <li>・共有者間の関係が良好なら話がまとまりやすい</li>
                <li>・共有状態の解消に向かうため双方にメリットがある</li>
                <li>・不動産業者を介さずに済むため仲介手数料が不要</li>
              </ul>
            </div>
            <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)]">
              <h3 className="font-bold mb-3 text-red-600">デメリット</h3>
              <ul className="text-[var(--color-text-light)] leading-relaxed space-y-2 text-sm">
                <li>・相手に購入資金がなければ実現しない</li>
                <li>・価格交渉で揉める可能性がある</li>
                <li>・共有者と連絡が取れない・関係が悪い場合は使えない</li>
                <li>・適正価格から大きく乖離すると贈与税がかかるリスク</li>
              </ul>
            </div>
          </div>

          <div className="bg-[var(--color-accent)]/10 border-l-4 border-[var(--color-accent)] p-4">
            <p className="font-bold mb-2">この方法が向いている人</p>
            <p className="text-[var(--color-text-light)] leading-relaxed">
              他の共有者と良好な関係を維持しており、かつ相手に購入意思と資金力がある場合に最適です。家族間での円満な解決を望む方におすすめの方法です。まずは他の共有者に打診してみることをお勧めします。
            </p>
          </div>
        </section>

        {/* セクション3: 売却方法2 借地人に売却する */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6 text-[var(--color-primary)] border-b-2 border-[var(--color-primary)] pb-3">
            売却方法2｜借地人に売却する
          </h2>
          <p className="text-[var(--color-text-light)] leading-relaxed mb-6">
            底地の上には借地人が建物を建てて住んでいます。この借地人に底地の共有持分を売却する方法も有力な選択肢です。借地人が底地（またはその一部）を取得すれば、土地の完全な所有権に近づくため、借地人にとっても大きなメリットがあります。
          </p>
          <p className="text-[var(--color-text-light)] leading-relaxed mb-6">
            借地人側から見ると、底地を購入することで地代の支払いが不要になり、借地契約の更新料や建替承諾料といった費用もなくなります。また、土地の所有権を取得すれば銀行融資を受けやすくなるなど、資産価値が大幅に向上します。
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)]">
              <h3 className="font-bold mb-3 text-green-600">メリット</h3>
              <ul className="text-[var(--color-text-light)] leading-relaxed space-y-2 text-sm">
                <li>・借地人は土地を使っている当事者なので購入動機が強い</li>
                <li>・第三者への売却より高い価格になりやすい</li>
                <li>・借地権と底地権の統合で双方にメリットがある</li>
                <li>・借地人が購入すれば地代収入の分配問題も解消</li>
              </ul>
            </div>
            <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)]">
              <h3 className="font-bold mb-3 text-red-600">デメリット</h3>
              <ul className="text-[var(--color-text-light)] leading-relaxed space-y-2 text-sm">
                <li>・借地人に購入資金がなければ実現しない</li>
                <li>・借地人が高齢の場合、購入意欲が低いことが多い</li>
                <li>・共有持分の一部だけでは借地人のメリットが限定的</li>
                <li>・他の共有者との調整が複雑になることがある</li>
              </ul>
            </div>
          </div>

          <div className="bg-[var(--color-accent)]/10 border-l-4 border-[var(--color-accent)] p-4">
            <p className="font-bold mb-2">この方法が向いている人</p>
            <p className="text-[var(--color-text-light)] leading-relaxed">
              借地人と良好な関係がある場合、または借地人から底地購入の打診を受けている場合に最適です。他の共有者も同時に売却する意思がある場合は、底地全体を借地人に売却するとより高い価格になります。できれば共有者全員で足並みを揃えて借地人に提案するのが理想的です。
            </p>
          </div>
        </section>

        {/* セクション4: 売却方法3 専門買取業者に売却する */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6 text-[var(--color-primary)] border-b-2 border-[var(--color-primary)] pb-3">
            売却方法3｜専門買取業者に売却する
          </h2>
          <p className="text-[var(--color-text-light)] leading-relaxed mb-6">
            底地の共有持分を専門に買い取る不動産業者に売却する方法です。共有者間の調整が難しい場合や、早急に現金化したい場合に最も現実的な選択肢となります。専門買取業者は底地や共有持分の取り扱いに慣れているため、複雑な権利関係があってもスムーズに取引が進みます。
          </p>
          <p className="text-[var(--color-text-light)] leading-relaxed mb-6">
            専門買取業者は、買い取った持分を活用して、他の共有者との交渉や借地人との権利調整を行い、最終的に底地全体の売却や借地権との統合を目指します。このノウハウがあるからこそ、一般の不動産会社では対応できない底地の共有持分も買い取ることができるのです。
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)]">
              <h3 className="font-bold mb-3 text-green-600">メリット</h3>
              <ul className="text-[var(--color-text-light)] leading-relaxed space-y-2 text-sm">
                <li>・他の共有者の同意不要で、自分だけで売却完結</li>
                <li>・最短数日〜数週間で現金化可能</li>
                <li>・複雑な権利関係でも対応してもらえる</li>
                <li>・仲介手数料不要（直接買取の場合）</li>
                <li>・面倒な手続きや交渉を業者が代行してくれる</li>
              </ul>
            </div>
            <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)]">
              <h3 className="font-bold mb-3 text-red-600">デメリット</h3>
              <ul className="text-[var(--color-text-light)] leading-relaxed space-y-2 text-sm">
                <li>・売却価格は他の方法と比べると最も低くなりがち</li>
                <li>・業者によって買取価格に大きな差がある</li>
                <li>・悪質な業者に当たるリスクがある</li>
                <li>・買取後に他の共有者とトラブルになる場合がある</li>
              </ul>
            </div>
          </div>

          <div className="bg-[var(--color-accent)]/10 border-l-4 border-[var(--color-accent)] p-4">
            <p className="font-bold mb-2">この方法が向いている人</p>
            <p className="text-[var(--color-text-light)] leading-relaxed">
              「他の共有者と連絡が取れない」「早急に現金化したい」「面倒な交渉はしたくない」という方に最適です。特に相続税の納付期限が迫っている場合や、共有者間の関係が悪化している場合は、専門買取業者への売却が最もスムーズな解決策となります。ただし、業者選びは慎重に行いましょう（後述のチェックポイントを参照）。
            </p>
          </div>
        </section>

        {/* セクション5: 売却方法4 共有物分割請求で解消してから売る */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6 text-[var(--color-primary)] border-b-2 border-[var(--color-primary)] pb-3">
            売却方法4｜共有物分割請求で解消してから売る
          </h2>
          <p className="text-[var(--color-text-light)] leading-relaxed mb-6">
            共有物分割請求とは、民法第256条に基づき、共有者がいつでも共有状態の解消を求めることができる法的手続きです。まず当事者間で話し合い（協議）を行い、まとまらなければ裁判所に調停・訴訟を申し立てます。
          </p>
          <p className="text-[var(--color-text-light)] leading-relaxed mb-6">
            共有物分割には主に3つの方法があります。<strong>現物分割</strong>（土地を物理的に分ける）、<strong>代償分割</strong>（一人が取得して他の共有者に金銭を支払う）、<strong>換価分割</strong>（売却して代金を分配する）です。底地の場合、現物分割は借地権との関係で難しいことが多く、代償分割か換価分割が現実的です。
          </p>

          <div className="grid md:grid-cols-2 gap-4 mb-6">
            <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)]">
              <h3 className="font-bold mb-3 text-green-600">メリット</h3>
              <ul className="text-[var(--color-text-light)] leading-relaxed space-y-2 text-sm">
                <li>・共有状態を完全に解消できる</li>
                <li>・裁判所が介在するため公正な解決が期待できる</li>
                <li>・換価分割なら底地全体の売却となり高値になりやすい</li>
                <li>・他の共有者が協力しない場合でも法的に解決可能</li>
              </ul>
            </div>
            <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)]">
              <h3 className="font-bold mb-3 text-red-600">デメリット</h3>
              <ul className="text-[var(--color-text-light)] leading-relaxed space-y-2 text-sm">
                <li>・弁護士費用がかかる（着手金30万円〜、成功報酬別途）</li>
                <li>・裁判になると解決まで1〜2年以上かかることも</li>
                <li>・共有者間の関係が決定的に悪化する可能性</li>
                <li>・競売になると市場価格より大幅に安くなるリスク</li>
              </ul>
            </div>
          </div>

          <div className="bg-[var(--color-accent)]/10 border-l-4 border-[var(--color-accent)] p-4">
            <p className="font-bold mb-2">この方法が向いている人</p>
            <p className="text-[var(--color-text-light)] leading-relaxed">
              他の共有者との協議が完全に行き詰まっている場合や、共有状態を根本的に解消したい場合に適しています。時間とコストをかけてでも正当な価格で売却したい方、または持分割合が大きく底地全体の売却を主導したい方におすすめです。ただし、弁護士への相談は必須です。
            </p>
          </div>
        </section>

        {/* セクション6: 4つの方法を比較 */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6 text-[var(--color-primary)] border-b-2 border-[var(--color-primary)] pb-3">
            4つの方法を比較
          </h2>
          <p className="text-[var(--color-text-light)] leading-relaxed mb-6">
            ここまでご紹介した4つの売却方法を一覧表で比較してみましょう。ご自身の状況に照らし合わせて、最適な方法を判断する参考にしてください。
          </p>
          <div className="overflow-x-auto mb-6">
            <table className="w-full border-collapse text-sm">
              <thead>
                <tr className="bg-[var(--color-primary)] text-white">
                  <th className="p-3 text-left font-bold">比較項目</th>
                  <th className="p-3 text-left font-bold">共有者に売却</th>
                  <th className="p-3 text-left font-bold">借地人に売却</th>
                  <th className="p-3 text-left font-bold">専門買取業者</th>
                  <th className="p-3 text-left font-bold">共有物分割請求</th>
                </tr>
              </thead>
              <tbody>
                <tr className="bg-white border-b border-[var(--color-border)]">
                  <td className="p-3 font-bold">売却価格</td>
                  <td className="p-3">高め</td>
                  <td className="p-3">高め</td>
                  <td className="p-3">低め</td>
                  <td className="p-3">ケースによる</td>
                </tr>
                <tr className="bg-[var(--color-bg)] border-b border-[var(--color-border)]">
                  <td className="p-3 font-bold">スピード</td>
                  <td className="p-3">1〜3ヶ月</td>
                  <td className="p-3">1〜6ヶ月</td>
                  <td className="p-3">数日〜数週間</td>
                  <td className="p-3">半年〜2年以上</td>
                </tr>
                <tr className="bg-white border-b border-[var(--color-border)]">
                  <td className="p-3 font-bold">他の共有者の同意</td>
                  <td className="p-3">必要（買主として）</td>
                  <td className="p-3">不要</td>
                  <td className="p-3">不要</td>
                  <td className="p-3">不要（法的手続き）</td>
                </tr>
                <tr className="bg-[var(--color-bg)] border-b border-[var(--color-border)]">
                  <td className="p-3 font-bold">手間・負担</td>
                  <td className="p-3">少ない</td>
                  <td className="p-3">やや多い</td>
                  <td className="p-3">少ない</td>
                  <td className="p-3">非常に多い</td>
                </tr>
                <tr className="bg-white border-b border-[var(--color-border)]">
                  <td className="p-3 font-bold">費用</td>
                  <td className="p-3">ほぼ不要</td>
                  <td className="p-3">ほぼ不要</td>
                  <td className="p-3">不要（直接買取）</td>
                  <td className="p-3">弁護士費用が高額</td>
                </tr>
                <tr className="bg-[var(--color-bg)] border-b border-[var(--color-border)]">
                  <td className="p-3 font-bold">確実性</td>
                  <td className="p-3">相手次第</td>
                  <td className="p-3">相手次第</td>
                  <td className="p-3">高い</td>
                  <td className="p-3">高い（法的強制力）</td>
                </tr>
                <tr className="bg-white">
                  <td className="p-3 font-bold">おすすめ度</td>
                  <td className="p-3">関係良好なら最優先</td>
                  <td className="p-3">借地人に意欲があれば</td>
                  <td className="p-3">迷ったらまず相談</td>
                  <td className="p-3">最後の手段</td>
                </tr>
              </tbody>
            </table>
          </div>
          <div className="bg-[var(--color-accent)]/10 border-l-4 border-[var(--color-accent)] p-4">
            <p className="font-bold mb-2">結局どの方法がベスト？</p>
            <p className="text-[var(--color-text-light)] leading-relaxed">
              まずは他の共有者や借地人に売却の意思を打診してみるのが第一歩です。それが難しい場合や、スピーディーな解決を望む場合は、底地の共有持分に強い専門買取業者に無料査定を依頼しましょう。査定額を知ることで、他の方法との比較材料にもなります。共有物分割請求は費用と時間がかかるため、他の方法を試した後の最終手段として考えるのが合理的です。
            </p>
          </div>
        </section>

        {/* セクション7: 売却の流れ */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6 text-[var(--color-primary)] border-b-2 border-[var(--color-primary)] pb-3">
            売却の流れ（ステップ解説）
          </h2>
          <p className="text-[var(--color-text-light)] leading-relaxed mb-6">
            ここでは最も一般的な「専門買取業者に売却する場合」の流れをステップごとに解説します。他の方法でも基本的な流れは共通する部分が多いので、参考にしてください。
          </p>
          <div className="space-y-0">
            {[
              {
                step: "STEP 1",
                title: "現状の整理と必要書類の準備",
                desc: "まず、登記簿謄本（登記事項証明書）を取得して、正確な持分割合や権利関係を確認しましょう。固定資産税の納税通知書、借地契約書のコピーなどもあると査定がスムーズです。相続登記がまだ済んでいない場合は、売却前に完了させる必要があります。",
              },
              {
                step: "STEP 2",
                title: "買取業者への無料査定依頼",
                desc: "複数の専門買取業者に査定を依頼しましょう。電話やWebフォームで申し込めば、物件情報をもとに概算の査定額が提示されます。この時点では費用は一切かかりません。複数社に依頼して比較することで、適正な相場観が掴めます。",
              },
              {
                step: "STEP 3",
                title: "物件調査と正式な買取価格の提示",
                desc: "業者が登記簿謄本や周辺相場、借地条件などを詳しく調査し、正式な買取価格を提示します。この金額に納得いかなければ、断っても問題ありません。疑問点があれば遠慮なく質問しましょう。",
              },
              {
                step: "STEP 4",
                title: "売買契約の締結",
                desc: "買取金額に合意したら、売買契約を締結します。契約書の内容は細かく確認し、不明点は必ず説明を受けましょう。手付金が支払われるのが一般的です。なお、契約時に仲介手数料が発生する場合としない場合がありますので、事前に確認しておくことが重要です。",
              },
              {
                step: "STEP 5",
                title: "決済・引き渡し（所有権移転登記）",
                desc: "残代金の支払いと同時に、持分の所有権移転登記を行います。司法書士が手続きを代行してくれるのが一般的です。登記が完了すれば、売却は完了。あなたは底地の共有持分から完全に解放されます。",
              },
            ].map((item, i) => (
              <div key={i} className="flex gap-6 relative">
                <div className="flex flex-col items-center">
                  <div className="w-12 h-12 bg-[var(--color-primary)] text-white rounded-full flex items-center justify-center font-bold text-sm flex-shrink-0 z-10">
                    {i + 1}
                  </div>
                  {i < 4 && <div className="w-0.5 h-full bg-[var(--color-primary)]/20 my-1" />}
                </div>
                <div className="pb-10">
                  <div className="text-xs font-bold text-[var(--color-accent)] mb-1">{item.step}</div>
                  <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                  <p className="text-sm text-[var(--color-text-light)] leading-relaxed">{item.desc}</p>
                </div>
              </div>
            ))}
          </div>
          <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)]">
            <h3 className="font-bold mb-3 text-[var(--color-primary)]">売却にかかる期間の目安</h3>
            <p className="text-[var(--color-text-light)] leading-relaxed">
              専門買取業者への売却の場合、査定依頼から現金化まで<strong>最短3日〜2週間程度</strong>が目安です。相続登記が未了の場合はその手続き期間（1〜2ヶ月程度）が追加されます。他の共有者や借地人への売却の場合は交渉期間を含めて1〜6ヶ月程度を見込んでおきましょう。
            </p>
          </div>
        </section>

        {/* セクション8: 買取業者を選ぶ3つのチェックポイント */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6 text-[var(--color-primary)] border-b-2 border-[var(--color-primary)] pb-3">
            買取業者を選ぶ3つのチェックポイント
          </h2>
          <p className="text-[var(--color-text-light)] leading-relaxed mb-6">
            専門買取業者に売却する場合、業者選びが売却の成否を左右します。底地の共有持分は特殊な不動産であるため、業者の専門性や対応力にばらつきがあります。以下の3つのポイントを必ずチェックしましょう。
          </p>

          <div className="space-y-6">
            <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[var(--color-primary)] text-[var(--color-accent)] rounded-lg flex items-center justify-center font-extrabold flex-shrink-0">
                  1
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">底地・共有持分の専門実績があるか</h3>
                  <p className="text-[var(--color-text-light)] leading-relaxed">
                    一般的な不動産買取業者は、底地や共有持分の取り扱い経験が少ないことがあります。「底地の共有持分」というニッチな分野の買取実績が豊富な業者を選びましょう。実績が多い業者ほど、適正な査定ができ、権利関係の調整ノウハウも持っています。ホームページに事例紹介がある業者や、具体的な買取件数を公開している業者は信頼性が高いと言えます。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[var(--color-primary)] text-[var(--color-accent)] rounded-lg flex items-center justify-center font-extrabold flex-shrink-0">
                  2
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">弁護士・税理士との連携体制があるか</h3>
                  <p className="text-[var(--color-text-light)] leading-relaxed">
                    底地の共有持分の売却では、法律面（民法の共有規定、借地借家法）や税務面（譲渡所得税、相続税）の専門知識が不可欠です。提携の弁護士や税理士がいる業者なら、売却に関する法的リスクの確認や税金対策までワンストップで対応してもらえます。「売却後に思わぬ税金がかかった」という事態を防ぐためにも、税務面のサポート体制は重要なチェックポイントです。
                  </p>
                </div>
              </div>
            </div>

            <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)]">
              <div className="flex items-start gap-4">
                <div className="w-10 h-10 bg-[var(--color-primary)] text-[var(--color-accent)] rounded-lg flex items-center justify-center font-extrabold flex-shrink-0">
                  3
                </div>
                <div>
                  <h3 className="font-bold text-lg mb-2">査定の透明性と対応の丁寧さ</h3>
                  <p className="text-[var(--color-text-light)] leading-relaxed">
                    査定額の根拠を明確に説明してくれるかどうかは、信頼できる業者を見分ける重要なポイントです。「なぜこの金額になるのか」「どのような計算根拠で査定したのか」を丁寧に説明してくれる業者は信頼性が高いです。逆に、「今すぐ契約しないと価格が下がる」などと急かす業者には注意しましょう。複数社に査定を依頼して、金額だけでなく対応の質も比較することをお勧めします。
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* セクション9: まとめ */}
        <section className="mb-14">
          <h2 className="text-2xl font-bold mb-6 text-[var(--color-primary)] border-b-2 border-[var(--color-primary)] pb-3">
            まとめ
          </h2>
          <div className="bg-[var(--color-bg)] rounded-xl p-6 border border-[var(--color-border)] mb-6">
            <ul className="space-y-3 text-[var(--color-text-light)] leading-relaxed">
              <li>
                <strong>底地の共有持分は、他の共有者の同意なしに単独で売却できます</strong>（民法上の権利）
              </li>
              <li>
                売却方法は大きく4つ：<strong>他の共有者への売却</strong>、<strong>借地人への売却</strong>、<strong>専門買取業者への売却</strong>、<strong>共有物分割請求</strong>
              </li>
              <li>
                <strong>価格重視なら</strong>他の共有者や借地人への売却、<strong>スピード重視なら</strong>専門買取業者への売却が有利
              </li>
              <li>
                共有物分割請求は時間とコストがかかるため、<strong>他の方法が使えない場合の最終手段</strong>として位置づける
              </li>
              <li>
                専門買取業者を選ぶ際は、<strong>底地の実績・専門家との連携・査定の透明性</strong>の3点をチェック
              </li>
              <li>
                迷ったら、まずは<strong>複数の専門業者に無料査定を依頼</strong>して相場観を掴むことが大切
              </li>
            </ul>
          </div>
          <p className="text-[var(--color-text-light)] leading-relaxed">
            底地の共有持分は、一般的な不動産とは異なる特殊な資産です。「底地」と「共有」という二重の制約があるため、売却にはそれぞれの分野の専門知識が必要になります。一人で悩まず、まずは底地と共有持分の両方に精通した専門家に相談することが、最適な解決への第一歩です。
          </p>
        </section>

        {/* CTA セクション */}
        <section className="bg-[var(--color-accent)] text-[var(--color-primary)] rounded-2xl p-8 md:p-12 text-center mb-14">
          <h2 className="text-2xl md:text-3xl font-extrabold mb-4">
            底地の共有持分、まずは無料査定から
          </h2>
          <p className="mb-6 opacity-90 leading-relaxed">
            他の共有者の同意は不要。あなたの持分だけで売却できます。<br />
            経験豊富な専門スタッフが、最適な売却方法をご提案します。
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/#contact"
              className="bg-[var(--color-primary)] text-white px-8 py-4 rounded-lg font-bold text-lg hover:opacity-90 transition inline-block"
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

        {/* 関連記事リンク */}
        <section className="mb-14">
          <h2 className="text-xl font-bold mb-6 text-[var(--color-primary)]">関連記事</h2>
          <div className="grid md:grid-cols-2 gap-4">
            {[
              {
                href: "/articles/sokochi-kyoyu-mochibun-kiso",
                title: "底地×共有持分の基礎知識",
                desc: "底地と共有持分の意味、両方が絡むケースの問題点を基本から解説",
                tag: "基礎知識",
              },
              {
                href: "/articles/sokochi-kyoyu-mochibun-souba",
                title: "底地の共有持分、買取相場はいくら？",
                desc: "相場の目安と価格を左右する要素、路線価からの概算方法を紹介",
                tag: "相場",
              },
              {
                href: "/articles/sokochi-souzoku-trouble",
                title: "底地の相続トラブル事例と解決法",
                desc: "兄弟間の揉め事、音信不通の共有者…よくある事例と解決策",
                tag: "相続",
              },
              {
                href: "/articles/sokochi-kyoyu-mochibun-zeikin",
                title: "底地の共有持分を売却した時の税金",
                desc: "譲渡所得税の計算方法、使える特例、確定申告の手順を解説",
                tag: "税金",
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
              "底地の共有持分を売却する4つの方法｜あなたに最適な方法は？",
            description:
              "底地の共有持分は他の共有者の同意なしで売却可能。4つの売却方法を比較し、最適な方法の選び方を解説。",
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
                "https://sokochi-kaitori.vercel.app/articles/sokochi-kyoyu-mochibun-baikyaku",
            },
            datePublished: "2025-01-01",
            dateModified: "2025-01-01",
          }),
        }}
      />
    </>
  );
}
