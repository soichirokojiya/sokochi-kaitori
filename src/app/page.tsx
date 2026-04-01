import Link from "next/link";
import Image from "next/image";
import ContactForm from "@/components/ContactForm";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Separator } from "@/components/ui/separator";
import { Button } from "@/components/ui/button";

function CheckIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="currentColor" viewBox="0 0 20 20">
      <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
    </svg>
  );
}

function ShieldIcon({ className }: { className?: string }) {
  return (
    <svg className={className} fill="none" stroke="currentColor" viewBox="0 0 24 24" strokeWidth={1.5}>
      <path strokeLinecap="round" strokeLinejoin="round" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z" />
    </svg>
  );
}

export default function Home() {
  return (
    <>
      {/* ===== Hero ===== */}
      <section className="relative overflow-hidden hero-bg text-white">
        <Image
          src="https://images.unsplash.com/photo-1751203659198-6fee30bf6df2?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=srgb&w=1600"
          alt="日本の住宅街"
          fill
          className="object-cover opacity-10 mix-blend-overlay"
          priority
        />
        <div className="relative z-10 max-w-5xl mx-auto px-6 py-24 md:py-32">
          <Badge variant="secondary" className="mb-6 bg-white/15 text-white border-white/25 backdrop-blur-sm text-sm px-4 py-1.5">
            底地 × 共有持分 専門
          </Badge>
          <h1 className="text-4xl md:text-[52px] font-extrabold leading-[1.2] tracking-tight mb-6">
            底地の共有持分、<br />
            あなたの持分だけ<br />
            売却できます。
          </h1>
          <p className="text-lg md:text-xl opacity-90 mb-10 leading-relaxed max-w-lg">
            他の共有者の同意は不要です。<br />
            <strong className="text-white">最短当日買取。上限価格なし。</strong><br />
            複雑な権利関係も、専門スタッフが丁寧に対応します。
          </p>
          <Button asChild size="lg" className="bg-white text-[var(--color-primary-dark)] hover:bg-white/90 font-bold text-lg px-10 py-6 rounded-xl shadow-lg cursor-pointer">
            <Link href="#contact">無料査定を申し込む</Link>
          </Button>
          <div className="flex flex-wrap gap-6 mt-10 text-[15px]">
            {["最短当日買取", "上限価格なし", "全国対応", "秘密厳守"].map((t) => (
              <span key={t} className="flex items-center gap-1.5 opacity-90">
                <CheckIcon className="w-4 h-4" />{t}
              </span>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 実績 ===== */}
      <section className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-10">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
            {[
              { value: "最短当日", label: "買取スピード" },
              { value: "上限なし", label: "買取価格" },
              { value: "0円", label: "仲介手数料" },
              { value: "全国", label: "対応エリア" },
            ].map((item) => (
              <div key={item.label}>
                <p className="text-2xl md:text-3xl font-extrabold text-primary">{item.value}</p>
                <p className="text-sm text-muted-foreground mt-1">{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 安心バッジ ===== */}
      <section className="bg-secondary/50 py-5">
        <div className="max-w-5xl mx-auto px-6 flex flex-wrap justify-center gap-x-8 gap-y-3 text-sm text-muted-foreground">
          {["宅地建物取引業者", "弁護士・税理士と提携", "秘密厳守", "しつこい営業なし"].map((label) => (
            <span key={label} className="flex items-center gap-2 font-medium">
              <ShieldIcon className="w-4 h-4 text-primary" />{label}
            </span>
          ))}
        </div>
      </section>

      {/* ===== お悩み ===== */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold">こんなお悩み、ありませんか？</h2>
            <p className="text-muted-foreground mt-3">底地の共有持分は、通常の不動産以上に問題が複雑です</p>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {[
              { title: "共有者と連絡が取れない", desc: "相続で底地を共有しているが、他の共有者と音信不通。売却も管理もできない" },
              { title: "地代が少なく固定資産税が重い", desc: "微々たる地代しか入らないのに固定資産税はかかる。毎年赤字が出ている" },
              { title: "兄弟間で意見が合わない", desc: "売りたい人と持ち続けたい人で意見が割れて膠着状態" },
              { title: "不動産会社に断られた", desc: "底地の共有持分は特殊すぎて一般の不動産会社では取り扱えないと言われた" },
              { title: "相続手続きが複雑すぎる", desc: "権利関係が入り組んでいて何から手をつけていいかわからない" },
              { title: "早急に現金化したい", desc: "相続税の支払い期限が迫っている。一刻も早く現金化したい" },
            ].map((item, i) => (
              <Card key={i} className="bg-card">
                <CardContent className="p-6">
                  <h3 className="font-bold text-[17px] mb-2">{item.title}</h3>
                  <p className="text-muted-foreground leading-relaxed text-[15px]">{item.desc}</p>
                </CardContent>
              </Card>
            ))}
          </div>
          <p className="text-center mt-12">
            <Badge variant="default" className="text-base px-6 py-2 bg-primary text-primary-foreground">
              これらの問題、すべて解決できます
            </Badge>
          </p>
        </div>
      </section>

      {/* ===== 選ばれる理由 ===== */}
      <section id="about" className="py-20 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-6">
          <div className="text-center mb-14">
            <h2 className="text-2xl md:text-3xl font-bold">選ばれる理由</h2>
            <p className="text-muted-foreground mt-3">底地×共有持分の専門家として、複雑な案件に対応します</p>
          </div>
          <div className="grid md:grid-cols-2 gap-5">
            {[
              { num: "01", title: "底地×共有持分に完全特化", desc: "「底地の共有持分」という最もニッチな領域に特化。借地権が絡む複雑な権利関係にも精通しています。" },
              { num: "02", title: "他の共有者の同意不要", desc: "民法上、共有持分は各共有者が自由に処分できます。他の共有者と連絡が取れなくても売却可能です。" },
              { num: "03", title: "最短当日買取・上限価格なし", desc: "スピードと価格に自信があります。最短当日での買取が可能。買取価格に上限は設けておりません。" },
              { num: "04", title: "弁護士・税理士との連携体制", desc: "相続問題や税務の疑問も、提携の専門家チームがワンストップでサポート。仲介手数料も不要です。" },
            ].map((item, i) => (
              <Card key={i}>
                <CardContent className="p-7 flex gap-5">
                  <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-primary text-primary-foreground flex items-center justify-center font-extrabold text-lg">
                    {item.num}
                  </div>
                  <div>
                    <h3 className="font-bold text-lg mb-2">{item.title}</h3>
                    <p className="text-muted-foreground leading-relaxed">{item.desc}</p>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 底地×共有持分とは ===== */}
      <section className="py-20">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-14">そもそも「底地の共有持分」とは？</h2>
          <div className="grid md:grid-cols-2 gap-8 items-start">
            <div className="space-y-5">
              <Card>
                <CardContent className="p-7">
                  <h3 className="font-bold text-lg mb-3 text-primary">底地（そこち）とは</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    借地権が設定されている土地のうち、地主が持っている所有権のことです。借地人が建物を建てて使用しているため、地主は自由に土地を使えず、得られる収益は地代のみ。更地に比べて市場価値が大幅に低くなります。
                  </p>
                </CardContent>
              </Card>
              <Card>
                <CardContent className="p-7">
                  <h3 className="font-bold text-lg mb-3 text-primary">共有持分とは</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    一つの不動産を複数人で所有している場合の、各人の持ち分のことです。主に相続をきっかけに発生し、全員の同意がないと不動産全体の売却や大規模な変更ができません。
                  </p>
                </CardContent>
              </Card>
            </div>
            <div className="space-y-5">
              <div className="relative h-52 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1744591848461-a4b392d0245f?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=srgb&w=800"
                  alt="日本の住宅街の様子"
                  fill
                  className="object-cover"
                />
              </div>
              <Card className="border-2 border-primary/30 bg-primary/5">
                <CardContent className="p-7">
                  <h3 className="font-bold text-lg mb-3 text-primary">底地 × 共有持分 = 二重の制約</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    「借地権の制約」と「共有の制約」が二重にかかった状態です。一般の不動産会社では取り扱いが難しく、<strong className="text-foreground">専門特化した当社</strong>にお任せください。
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      </section>

      {/* ===== 買取の流れ ===== */}
      <section id="flow" className="py-20 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-14">かんたん4ステップ</h2>
          <div className="grid md:grid-cols-2 gap-10 items-start">
            <div className="space-y-6">
              {[
                { title: "無料査定のお申し込み", desc: "フォームでお気軽にご連絡ください。", time: "所要時間：5分" },
                { title: "物件調査・査定", desc: "登記簿謄本や周辺相場をもとに適正に査定します。", time: "最短即日" },
                { title: "買取金額のご提示", desc: "査定結果をご説明します。お断りいただいても構いません。", time: "査定後すぐ" },
                { title: "契約・お支払い", desc: "契約締結後、指定口座にお振込み。手続きは当社が代行。", time: "最短当日で完了" },
              ].map((item, i) => (
                <div key={i} className="flex gap-4 items-start">
                  <div className="w-10 h-10 rounded-full bg-primary text-primary-foreground flex items-center justify-center font-bold flex-shrink-0 text-sm">
                    {i + 1}
                  </div>
                  <div>
                    <h3 className="font-bold text-[17px] mb-0.5">{item.title}</h3>
                    <p className="text-muted-foreground text-[15px]">{item.desc}</p>
                    <Badge variant="secondary" className="mt-2 text-xs">{item.time}</Badge>
                  </div>
                </div>
              ))}
            </div>
            <div className="space-y-4">
              <div className="relative h-56 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=srgb&w=800"
                  alt="査定・書類確認の様子"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="relative h-56 rounded-xl overflow-hidden">
                <Image
                  src="https://images.unsplash.com/photo-1603796846097-bee99e4a601f?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=srgb&w=800"
                  alt="契約書へのサイン"
                  fill
                  className="object-cover"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ===== FAQ ===== */}
      <section id="faq" className="py-20">
        <div className="max-w-3xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-14">よくあるご質問</h2>
          <Accordion type="single" collapsible className="space-y-3">
            {[
              { q: "他の共有者に知られずに売却できますか？", a: "はい、可能です。共有持分の売却は各共有者の権利として認められており、他の共有者の同意や通知は法律上不要です。秘密厳守で対応いたします。" },
              { q: "底地の共有持分はいくらぐらいで売れますか？", a: "一般的な目安として更地価格の10〜15%程度ですが、条件によって大きく変わります。当社は上限価格なしで査定しますので、まずは無料査定をご利用ください。" },
              { q: "本当に当日買取できますか？", a: "はい。書類が揃っていれば最短当日での買取が可能です。お急ぎの場合はその旨をお伝えください。" },
              { q: "相続登記がまだ済んでいませんが売却できますか？", a: "売却前に相続登記が必要ですが、提携の司法書士がサポートいたしますのでご安心ください。" },
              { q: "遠方に住んでいますが対応してもらえますか？", a: "全国どこからでもご対応可能です。郵送やオンラインでの契約にも対応しております。" },
              { q: "査定だけでも大丈夫ですか？", a: "もちろんです。査定は完全無料で、お断りいただいても費用はかかりません。しつこい営業も一切いたしません。" },
            ].map((item, i) => (
              <AccordionItem key={i} value={`faq-${i}`} className="border rounded-xl px-5 bg-card">
                <AccordionTrigger className="text-left font-bold py-5 text-[16px] cursor-pointer hover:no-underline">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground leading-relaxed pb-5 text-[15px]">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
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

      <Separator />

      {/* ===== コラム ===== */}
      <section id="articles" className="py-20 bg-secondary/30">
        <div className="max-w-5xl mx-auto px-6">
          <h2 className="text-2xl md:text-3xl font-bold text-center mb-4">お役立ちコラム</h2>
          <p className="text-center text-muted-foreground mb-14">底地・共有持分に関する専門知識をわかりやすく解説</p>
          <div className="grid md:grid-cols-3 gap-4">
            {[
              { href: "/articles/sokochi-kyoyu-mochibun-kiso", title: "底地×共有持分の基礎知識", desc: "両方が絡むケースの問題点を基本から解説", tag: "基礎知識" },
              { href: "/articles/sokochi-kyoyu-mochibun-baikyaku", title: "売却する4つの方法", desc: "あなたの状況に最適な方法がわかります", tag: "売却方法" },
              { href: "/articles/sokochi-kyoyu-mochibun-souba", title: "買取相場はいくら？", desc: "相場の目安と路線価からの概算方法", tag: "相場" },
              { href: "/articles/sokochi-souzoku-trouble", title: "相続トラブル事例と解決法", desc: "よくある事例と解決策をご紹介", tag: "相続" },
              { href: "/articles/sokochi-kyoyu-mochibun-zeikin", title: "売却した時の税金", desc: "計算方法と使える特例を解説", tag: "税金" },
            ].map((item, i) => (
              <Link key={i} href={item.href} className="group cursor-pointer">
                <Card className="h-full hover:shadow-md transition-shadow duration-200 overflow-hidden">
                  <div className="h-1 bg-primary" />
                  <CardContent className="p-5">
                    <Badge variant="secondary" className="mb-3 text-xs">{item.tag}</Badge>
                    <h3 className="font-bold mb-2 group-hover:text-primary transition-colors duration-200">{item.title}</h3>
                    <p className="text-sm text-muted-foreground">{item.desc}</p>
                  </CardContent>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>

      {/* ===== CTA + フォーム ===== */}
      <section id="contact" className="relative py-20 text-white overflow-hidden">
        <Image
          src="https://images.unsplash.com/photo-1742317402143-449e8b4cbf91?ixlib=rb-4.1.0&q=80&fm=jpg&crop=entropy&cs=srgb&w=1600"
          alt=""
          fill
          className="object-cover"
          aria-hidden="true"
        />
        <div className="absolute inset-0 bg-[var(--color-primary)]/85" />
        <div className="relative z-10 max-w-3xl mx-auto px-6">
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
