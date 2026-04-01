import type { Metadata } from "next";
import { Noto_Sans_JP, Geist } from "next/font/google";
import "./globals.css";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { cn } from "@/lib/utils";

const geist = Geist({subsets:['latin'],variable:'--font-sans'});

const notoSansJP = Noto_Sans_JP({
  variable: "--font-noto-sans-jp",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
});

export const metadata: Metadata = {
  metadataBase: new URL("https://sokochi-kaitori.vercel.app"),
  title: {
    default: "底地の共有持分買取｜最短当日買取・上限価格なし｜Common Future & Co.",
    template: "%s｜底地の共有持分買取 Common Future & Co.",
  },
  description:
    "底地の共有持分でお困りですか？他の共有者の同意不要で、あなたの持分だけ売却できます。最短当日買取・上限価格なし。底地×共有持分に特化した専門買取。全国対応。",
  keywords: ["底地", "共有持分", "買取", "底地 売却", "共有持分 売却", "底地 共有持分", "底地 相続", "底地 買取業者"],
  icons: { icon: "/favicon.png", apple: "/apple-touch-icon.png" },
  openGraph: {
    type: "website",
    locale: "ja_JP",
    siteName: "底地の共有持分買取｜Common Future & Co.",
    title: "底地の共有持分買取｜最短当日買取・上限価格なし",
    description: "他の共有者の同意不要。あなたの持分だけ売却可能。最短当日買取・上限価格なし。",
  },
  twitter: {
    card: "summary_large_image",
    title: "底地の共有持分買取｜Common Future & Co.",
    description: "底地の共有持分に特化した専門買取サービス。最短当日買取・上限価格なし・全国対応。",
  },
  robots: { index: true, follow: true },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ja" className={cn("h-full", "antialiased", notoSansJP.variable, "font-sans", geist.variable)}>
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "Organization",
              name: "Common Future & Co.株式会社",
              description: "底地の共有持分に特化した専門買取サービス",
              url: "https://sokochi-kaitori.vercel.app",
              logo: "https://sokochi-kaitori.vercel.app/favicon.png",
            }),
          }}
        />
      </head>
      <body
        className="min-h-full flex flex-col"
        style={{ fontFamily: "var(--font-noto-sans-jp), sans-serif" }}
      >
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
