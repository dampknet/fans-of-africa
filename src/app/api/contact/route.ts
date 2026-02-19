import { NextResponse } from "next/server";
import { Resend } from "resend";

type Body = {
  name?: string;
  email?: string;
  subject?: string;
  message?: string;
};

function isEmailValid(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Body;

    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const subject = (body.subject ?? "").trim();
    const message = (body.message ?? "").trim();

    if (name.length < 2) {
      return NextResponse.json(
        { ok: false, message: "Full name is required." },
        { status: 400 }
      );
    }
    if (!isEmailValid(email)) {
      return NextResponse.json(
        { ok: false, message: "Valid email is required." },
        { status: 400 }
      );
    }
    if (subject.length < 3) {
      return NextResponse.json(
        { ok: false, message: "Subject is too short." },
        { status: 400 }
      );
    }
    if (message.length < 10) {
      return NextResponse.json(
        { ok: false, message: "Message is too short." },
        { status: 400 }
      );
    }

    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.CONTACT_TO_EMAIL;
    const fromEmail = process.env.FROM_EMAIL || "Fans of Africa <onboarding@resend.dev>";

    if (!resendKey || !toEmail) {
      console.log("Contact submission (email not configured):", {
        name,
        email,
        subject,
        message,
      });

      return NextResponse.json(
        {
          ok: true,
          message:
            "Submitted successfully (email delivery not configured on server yet).",
        },
        { status: 200 }
      );
    }

    const resend = new Resend(resendKey);

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="margin:0 0 10px;">New Contact Message</h2>
        <table style="border-collapse: collapse; width: 100%;">
          <tr><td style="padding:6px 0;"><strong>Name:</strong></td><td>${escapeHtml(name)}</td></tr>
          <tr><td style="padding:6px 0;"><strong>Email:</strong></td><td>${escapeHtml(email)}</td></tr>
          <tr><td style="padding:6px 0;"><strong>Subject:</strong></td><td>${escapeHtml(subject)}</td></tr>
        </table>
        <p style="margin:14px 0 6px;"><strong>Message:</strong></p>
        <p style="margin:0; white-space: pre-wrap;">${escapeHtml(message)}</p>
        <hr style="margin:18px 0; border:none; border-top:1px solid #eee;" />
        <p style="margin:0; color:#666; font-size:12px;">Fans of Africa website form submission</p>
      </div>
    `;

    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email,
      subject: `Contact Form — ${subject}`,
      html,
    });

    return NextResponse.json(
      { ok: true, message: "Submitted successfully." },
      { status: 200 }
    );
  } catch (err) {
    console.error("Contact route error:", err);
    return NextResponse.json(
      { ok: false, message: "Invalid request." },
      { status: 400 }
    );
  }
}

function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
