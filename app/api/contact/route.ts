import { NextResponse } from "next/server"
import { Resend } from "resend"

const resend = new Resend(process.env.RESEND_API_KEY)

export async function POST(request: Request) {
  try {
    const { firstName, lastName, email, subject, message } = await request.json()

    console.log("Contact form submission received:", { firstName, lastName, email, subject })

    if (!firstName || !lastName || !email || !subject || !message) {
      return NextResponse.json({ ok: false, error: "Missing required fields" }, { status: 400 })
    }

    if (!process.env.RESEND_API_KEY) {
      console.error("RESEND_API_KEY not found")
      return NextResponse.json({ ok: false, error: "Email service not configured" }, { status: 500 })
    }

    const toAddress = "papamoacounsellinghub@gmail.com"
    console.log("Sending email to:", toAddress)

    const result = await resend.emails.send({
      from: "Papamoa Counselling Hub <onboarding@resend.dev>",
      to: [toAddress],
      subject: `New enquiry: ${subject}`,
      replyTo: email,
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
    console.log("Resend response:", JSON.stringify(result, null, 2))
    
    return NextResponse.json({ 
      ok: true, 
      data: result,
      message: "Email sent successfully to papamoacounsellinghub@gmail.com"
    })
  } catch (error) {
    console.error("Error sending email:", error)
    console.error("Error details:", JSON.stringify(error, null, 2))
    return NextResponse.json({ 
      ok: false, 
      error: "Failed to send message",
      details: error instanceof Error ? error.message : "Unknown error"
    }, { status: 500 })
  }
}

// Test endpoint to verify Resend configuration
export async function GET() {
  try {
    if (!process.env.RESEND_API_KEY) {
      return NextResponse.json({ 
        ok: false, 
        error: "RESEND_API_KEY not configured",
        hasApiKey: false
      })
    }

    // Test the Resend API by getting domains
    const domains = await resend.domains.list()
    
    return NextResponse.json({ 
      ok: true, 
      hasApiKey: true,
      domains: domains.data,
      message: "Resend API is configured correctly"
    })
  } catch (error) {
    console.error("Resend test error:", error)
    return NextResponse.json({ 
      ok: false, 
      error: "Resend API test failed",
      details: error instanceof Error ? error.message : "Unknown error"
    })
  }
}
