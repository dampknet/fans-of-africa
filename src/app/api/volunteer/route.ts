import { NextResponse } from "next/server";
import { Resend } from "resend";

type Body = {
  name?: string;
  email?: string;
  phone?: string;
  whatsapp?: string;
  note?: string;
};

function isEmailValid(email: string) {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim());
}

function isPhoneValid(value: string) {
  return /^\+?\d{7,15}$/.test(value.trim());
}

export async function POST(req: Request) {
  try {
    const body = (await req.json()) as Body;

    const name = (body.name ?? "").trim();
    const email = (body.email ?? "").trim();
    const phone = (body.phone ?? "").trim();
    const whatsapp = (body.whatsapp ?? "").trim();
    const note = (body.note ?? "").trim();

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
    if (!isPhoneValid(phone)) {
      return NextResponse.json(
        { ok: false, message: "Valid phone number is required." },
        { status: 400 }
      );
    }
    if (!isPhoneValid(whatsapp)) {
      return NextResponse.json(
        { ok: false, message: "Valid WhatsApp number is required." },
        { status: 400 }
      );
    }

    const resendKey = process.env.RESEND_API_KEY;
    const toEmail = process.env.VOLUNTEER_TO_EMAIL;
    const fromEmail = process.env.FROM_EMAIL || "Fans of Africa <onboarding@resend.dev>";

    if (!resendKey || !toEmail) {
      // Still log so you don't lose messages during setup
      console.log("Volunteer submission (email not configured):", {
        name,
        email,
        phone,
        whatsapp,
        note,
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

    const subject = `New Volunteer Application — ${name}`;

    const html = `
      <div style="font-family: Arial, sans-serif; line-height: 1.6;">
        <h2 style="margin:0 0 10px;">New Volunteer Application</h2>
        <p style="margin:0 0 10px;">You received a new volunteer request.</p>
        <table style="border-collapse: collapse; width: 100%;">
          <tr><td style="padding:6px 0;"><strong>Name:</strong></td><td>${escapeHtml(name)}</td></tr>
          <tr><td style="padding:6px 0;"><strong>Email:</strong></td><td>${escapeHtml(email)}</td></tr>
          <tr><td style="padding:6px 0;"><strong>Phone:</strong></td><td>${escapeHtml(phone)}</td></tr>
          <tr><td style="padding:6px 0;"><strong>WhatsApp:</strong></td><td>${escapeHtml(whatsapp)}</td></tr>
        </table>
        ${
          note
            ? `<p style="margin:14px 0 6px;"><strong>Note:</strong></p>
               <p style="margin:0; white-space: pre-wrap;">${escapeHtml(note)}</p>`
            : `<p style="margin:14px 0 0;"><strong>Note:</strong> (none)</p>`
        }
        <hr style="margin:18px 0; border:none; border-top:1px solid #eee;" />
        <p style="margin:0; color:#666; font-size:12px;">Fans of Africa website form submission</p>
      </div>
    `;

    await resend.emails.send({
      from: fromEmail,
      to: toEmail,
      replyTo: email, // so you can reply directly to the volunteer
      subject,
      html,
    });

    return NextResponse.json(
      { ok: true, message: "Submitted successfully." },
      { status: 200 }
    );
  } catch (err) {
    console.error("Volunteer route error:", err);
    return NextResponse.json(
      { ok: false, message: "Invalid request." },
      { status: 400 }
    );
  }
}

// Tiny helper to prevent HTML injection in emails
function escapeHtml(input: string) {
  return input
    .replaceAll("&", "&amp;")
    .replaceAll("<", "&lt;")
    .replaceAll(">", "&gt;")
    .replaceAll('"', "&quot;")
    .replaceAll("'", "&#039;");
}
