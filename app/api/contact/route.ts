import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, subject, message } = await request.json()

    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 })
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY not found")
      return NextResponse.json({ ok: false, error: "Email service not configured" }, { status: 500 })
    }

    const toAddress = "papamoacounsellinghub@gmail.com"

    const result = await resend.emails.send({
      from: "Papamoa Counselling Hub <onboarding@resend.dev>",
      to: [toAddress],
      subject: `New enquiry: ${subject}`,
      reply_to: email,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${firstName} ${lastName}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Message:</strong></p>
        <p>${message.replace(/\n/g, '<br>')}</p>
      `,
      text: `From: ${firstName} ${lastName} <${email}>
Subject: ${subject}

${message}`,
    })

    console.log("Email sent successfully:", result)
    return NextResponse.json({ ok: true, data: result })
  } catch (error) {
    console.error("Error sending email:", error)
    return NextResponse.json({ 
      ok: false, 
      error: "Failed to send message",
      details: error instanceof Error ? error.message : "Unknown error"
    }, { status: 500 })
  }
}
