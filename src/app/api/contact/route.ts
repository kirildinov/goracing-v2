import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  const { name, phone, email, message } = await req.json();

  if (!name || !phone || !message) {
    return NextResponse.json({ error: "Missing required fields: name, phone, message" }, { status: 400 });
  }

  const RESEND_API_KEY = process.env.RESEND_API_KEY;
  if (!RESEND_API_KEY) {
    console.error("RESEND_API_KEY not configured");
    return NextResponse.json({ error: "Email service not configured" }, { status: 500 });
  }

  try {
    const response = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${RESEND_API_KEY}`,
      },
      body: JSON.stringify({
        from: "GoRacing Website <noreply@pixelmill.dev>",
        to: "info@goracing.ro",
        subject: `Mesaj nou de pe goracing.ro — ${name}`,
        reply_to: email || undefined,
        html: `
          <h2>Mesaj nou din formularul de contact</h2>
          <p><strong>Nume:</strong> ${name}</p>
          <p><strong>Telefon:</strong> ${phone}</p>
          ${email ? `<p><strong>Email:</strong> ${email}</p>` : ""}
          <p><strong>Mesaj:</strong></p>
          <p>${message.replace(/\n/g, "<br>")}</p>
          <hr>
          <p style="color: #999; font-size: 12px;">Trimis din formularul de contact goracing.ro</p>
        `,
      }),
    });

    if (!response.ok) {
      const error = await response.text();
      console.error("Resend API error:", error);
      return NextResponse.json({ error: "Failed to send email" }, { status: 500 });
    }

    return NextResponse.json({ success: true });
  } catch (err) {
    console.error("Email send error:", err);
    return NextResponse.json({ error: "Internal server error" }, { status: 500 });
  }
}
