"use client";

import { useState } from "react";

interface FormData {
  name: string;
  phone: string;
  email: string;
  location: string;
  share: string;
  message: string;
}

export default function ContactForm() {
  const [formData, setFormData] = useState<FormData>({
    name: "",
    phone: "",
    email: "",
    location: "",
    share: "",
    message: "",
  });
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle");
  const [errorMessage, setErrorMessage] = useState("");

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>
  ) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setStatus("sending");
    setErrorMessage("");

    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(formData),
      });

      if (!res.ok) {
        const data = await res.json();
        throw new Error(data.error || "送信に失敗しました");
      }

      setStatus("success");
      setFormData({ name: "", phone: "", email: "", location: "", share: "", message: "" });
    } catch (err) {
      setStatus("error");
      setErrorMessage(err instanceof Error ? err.message : "送信に失敗しました");
    }
  };

  if (status === "success") {
    return (
      <div className="bg-white rounded-2xl p-8 shadow-lg text-center">
        <div className="w-16 h-16 bg-[var(--color-success)] rounded-full flex items-center justify-center mx-auto mb-4">
          <svg className="w-8 h-8 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
          </svg>
        </div>
        <h3 className="text-xl font-bold mb-2">送信完了しました</h3>
        <p className="text-[var(--color-text-light)]">
          お問い合わせありがとうございます。<br />
          担当者より1営業日以内にご連絡いたします。
        </p>
        <button
          onClick={() => setStatus("idle")}
          className="mt-6 text-[var(--color-primary)] underline text-sm"
        >
          別のお問い合わせをする
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="bg-white rounded-2xl p-6 md:p-8 shadow-lg space-y-5">
      <div className="grid md:grid-cols-2 gap-5">
        <div>
          <label className="block text-sm font-bold mb-1">
            お名前 <span className="text-red-500 text-xs">必須</span>
          </label>
          <input
            type="text"
            name="name"
            required
            value={formData.name}
            onChange={handleChange}
            placeholder="山田 太郎"
            className="w-full border border-[var(--color-border)] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition"
          />
        </div>
        <div>
          <label className="block text-sm font-bold mb-1">
            電話番号 <span className="text-red-500 text-xs">必須</span>
          </label>
          <input
            type="tel"
            name="phone"
            required
            value={formData.phone}
            onChange={handleChange}
            placeholder="090-1234-5678"
            className="w-full border border-[var(--color-border)] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition"
          />
        </div>
      </div>

      <div>
        <label className="block text-sm font-bold mb-1">
          メールアドレス <span className="text-red-500 text-xs">必須</span>
        </label>
        <input
          type="email"
          name="email"
          required
          value={formData.email}
          onChange={handleChange}
          placeholder="example@email.com"
          className="w-full border border-[var(--color-border)] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition"
        />
      </div>

      <div>
        <label className="block text-sm font-bold mb-1">
          物件所在地 <span className="text-[var(--color-text-light)] text-xs font-normal">任意</span>
        </label>
        <input
          type="text"
          name="location"
          value={formData.location}
          onChange={handleChange}
          placeholder="東京都新宿区○○町1-2-3"
          className="w-full border border-[var(--color-border)] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition"
        />
      </div>

      <div>
        <label className="block text-sm font-bold mb-1">
          共有持分の割合 <span className="text-[var(--color-text-light)] text-xs font-normal">任意</span>
        </label>
        <select
          name="share"
          value={formData.share}
          onChange={handleChange}
          className="w-full border border-[var(--color-border)] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition bg-white"
        >
          <option value="">選択してください</option>
          <option value="1/2">1/2（2分の1）</option>
          <option value="1/3">1/3（3分の1）</option>
          <option value="1/4">1/4（4分の1）</option>
          <option value="1/5以下">1/5以下</option>
          <option value="その他">その他・不明</option>
        </select>
      </div>

      <div>
        <label className="block text-sm font-bold mb-1">
          ご相談内容 <span className="text-[var(--color-text-light)] text-xs font-normal">任意</span>
        </label>
        <textarea
          name="message"
          rows={4}
          value={formData.message}
          onChange={handleChange}
          placeholder="ご状況やご質問をお聞かせください"
          className="w-full border border-[var(--color-border)] rounded-lg px-4 py-3 text-sm focus:outline-none focus:ring-2 focus:ring-[var(--color-accent)] transition resize-none"
        />
      </div>

      {status === "error" && (
        <div className="bg-red-50 text-red-600 text-sm p-3 rounded-lg">
          {errorMessage}
        </div>
      )}

      <button
        type="submit"
        disabled={status === "sending"}
        className="w-full bg-[var(--color-accent)] text-[var(--color-primary)] py-4 rounded-lg font-bold text-lg hover:bg-[var(--color-accent-light)] transition disabled:opacity-50 disabled:cursor-not-allowed cursor-pointer"
      >
        {status === "sending" ? "送信中..." : "無料査定を申し込む"}
      </button>

      <p className="text-xs text-center text-[var(--color-text-light)]">
        ※ しつこい営業は一切いたしません。秘密厳守でご対応します。
      </p>
    </form>
  );
}
