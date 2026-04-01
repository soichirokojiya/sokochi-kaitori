import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, phone, email, location, share, message } = body;

    if (!name || !phone || !email) {
      return Response.json(
        { error: "お名前、電話番号、メールアドレスは必須です" },
        { status: 400 }
      );
    }

    const emailHtml = `
      <div style="font-family: sans-serif; max-width: 600px; margin: 0 auto;">
        <h2 style="color: #1a3a5c; border-bottom: 2px solid #c8a45e; padding-bottom: 10px;">
          底地共有持分 買取査定のお問い合わせ
        </h2>
        <table style="width: 100%; border-collapse: collapse; margin-top: 20px;">
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 12px; font-weight: bold; width: 140px; color: #1a3a5c;">お名前</td>
            <td style="padding: 12px;">${name}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 12px; font-weight: bold; color: #1a3a5c;">電話番号</td>
            <td style="padding: 12px;">${phone}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 12px; font-weight: bold; color: #1a3a5c;">メールアドレス</td>
            <td style="padding: 12px;">${email}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 12px; font-weight: bold; color: #1a3a5c;">物件所在地</td>
            <td style="padding: 12px;">${location || "未入力"}</td>
          </tr>
          <tr style="border-bottom: 1px solid #eee;">
            <td style="padding: 12px; font-weight: bold; color: #1a3a5c;">共有持分の割合</td>
            <td style="padding: 12px;">${share || "未入力"}</td>
          </tr>
          <tr>
            <td style="padding: 12px; font-weight: bold; color: #1a3a5c; vertical-align: top;">ご相談内容</td>
            <td style="padding: 12px; white-space: pre-wrap;">${message || "未入力"}</td>
          </tr>
        </table>
        <p style="margin-top: 20px; font-size: 12px; color: #999;">
          このメールは底地共有持分買取サイトのお問い合わせフォームから送信されました。
        </p>
      </div>
    `;

    await resend.emails.send({
      from: "底地共有持分買取 <onboarding@resend.dev>",
      to: ["koujiy@souichirou.org", "mokeygod@gmail.com"],
      subject: `【底地買取査定】${name}様からのお問い合わせ`,
      html: emailHtml,
      replyTo: email,
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
