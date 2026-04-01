import { Resend } from "resend";

export const dynamic = "force-dynamic";

const escapeHtml = (s: string) =>
  s
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#39;");

export async function POST(request: Request) {
  const resend = new Resend(process.env.RESEND_API_KEY);

  let body: unknown;
  try {
    body = await request.json();
  } catch {
    return Response.json({ error: "不正なリクエストです" }, { status: 400 });
  }

  if (typeof body !== "object" || body === null) {
    return Response.json({ error: "不正なリクエストです" }, { status: 400 });
  }

  const { name, phone, email, location, share, message } = body as Record<string, unknown>;

  if (typeof name !== "string" || typeof phone !== "string" || typeof email !== "string" || typeof location !== "string" || typeof message !== "string") {
    return Response.json(
      { error: "必須項目を入力してください" },
      { status: 400 }
    );
  }

  const trimmedName = name.trim();
  const trimmedPhone = phone.trim();
  const trimmedEmail = email.trim();
  const trimmedLocation = location.trim();
  const trimmedMessage = message.trim();

  if (!trimmedName || !trimmedPhone || !trimmedEmail || !trimmedLocation || !trimmedMessage) {
    return Response.json(
      { error: "お名前、電話番号、メールアドレス、物件所在地、ご相談内容は必須です" },
      { status: 400 }
    );
  }

  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(trimmedEmail)) {
    return Response.json({ error: "メールアドレスの形式が正しくありません" }, { status: 400 });
  }

  if (trimmedName.length > 100 || trimmedPhone.length > 30 || trimmedEmail.length > 254) {
    return Response.json({ error: "入力値が長すぎます" }, { status: 400 });
  }

  const safeName = escapeHtml(trimmedName);
  const safePhone = escapeHtml(trimmedPhone);
  const safeEmail = escapeHtml(trimmedEmail);
  const safeLocation = escapeHtml(typeof location === "string" ? location.trim() : "");
  const safeShare = escapeHtml(typeof share === "string" ? share.trim() : "");
  const safeMessage = escapeHtml(typeof message === "string" ? message.trim() : "");

  try {
    const emailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1b6b5a; border-bottom: 2px solid #e8943a; padding-bottom: 10px;">
          底地共有持分 買取査定のお問い合わせ
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 12px; font-weight: bold; width: 140px; color: #1b6b5a;">お名前</td>
            <td style="padding: 12px;">${safeName}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 12px; font-weight: bold; color: #1b6b5a;">電話番号</td>
            <td style="padding: 12px;">${safePhone}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 12px; font-weight: bold; color: #1b6b5a;">メールアドレス</td>
            <td style="padding: 12px;">${safeEmail}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 12px; font-weight: bold; color: #1b6b5a;">物件所在地</td>
            <td style="padding: 12px;">${safeLocation || "未入力"}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 12px; font-weight: bold; color: #1b6b5a;">共有持分の割合</td>
            <td style="padding: 12px;">${safeShare || "未入力"}</td>
          </tr>
          <tr>
            <td style="padding: 12px; font-weight: bold; color: #1b6b5a; vertical-align: top;">ご相談内容</td>
            <td style="padding: 12px; white-space: pre-wrap;">${safeMessage || "未入力"}</td>
          </tr>
        </table>
        <p style="margin-top: 20px; font-size: 12px; color: #999;">
          このメールは底地共有持分買取サイトのお問い合わせフォームから送信されました。
        </p>
      </div>
    `;

    await resend.emails.send({
      from: "底地ドットコム <info@socochi.com>",
      to: ["koujiy@souichirou.org", "mokeygod@gmail.com"],
      subject: `【底地買取査定】${safeName}様からのお問い合わせ`,
      html: emailHtml,
      replyTo: trimmedEmail,
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error("Contact form error:", error);
    return Response.json(
      { error: "メールの送信に失敗しました。しばらく時間をおいて再度お試しください。" },
      { status: 500 }
    );
  }
}
