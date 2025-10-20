import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, subject, message } = await request.json()

    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 })
    }

    const toAddress = "papamoacounsellinghub@gmail.com"

    await resend.emails.send({
      from: "Papamoa Counselling Hub <onboarding@resend.dev>",
      to: [toAddress],
      subject: `New enquiry: ${subject}`,
      reply_to: email,
      text: `From: ${firstName} ${lastName} <${email}>
Subject: ${subject}

${message}`,
    })

    return NextResponse.json({ ok: true })
  } catch (error) {
    return NextResponse.json({ ok: false, error: "Failed to send message" }, { status: 500 })
  }
}
