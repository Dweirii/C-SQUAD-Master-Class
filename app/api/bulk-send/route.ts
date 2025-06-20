import { NextResponse } from "next/server"
import { resend } from "@/lib/resend"
import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
  const body = await req.json()
  const { type, subject, html, scheduled } = body

  if (!subject || !html || !type) {
    return NextResponse.json({ success: false, message: "Missing required fields" }, { status: 400 })
  }

  if (scheduled) {
    try {
      await prisma.scheduledEmail.create({
        data: {
          type,
          subject,
          html,
          scheduledAt: new Date(scheduled),
          status: "pending",
        },
      })

      return NextResponse.json({ success: true, message: "Email scheduled successfully" })
    } catch (error) {
      console.error("Error scheduling email:", error)
      return NextResponse.json({ success: false, message: "Failed to schedule email" }, { status: 500 })
    }
  }

  let users: { email: string; name?: string }[] = []

  if (type === "free") {
    users = await prisma.freeOrder.findMany({ select: { email: true, name: true } })
  } else if (type === "paid") {
    users = await prisma.paidOrder.findMany({
      where: { paymentStatus: "paid" },
      select: { email: true, name: true },
    })
  } else if (type === "unpaid") {
    users = await prisma.paidOrder.findMany({
      where: { paymentStatus: { not: "paid" } },
      select: { email: true, name: true },
    })
  }

  try {
    await Promise.all(
      users.map((user) =>
        resend.emails.send({
          from: "C-Squad <programs@c-squad.org>",
          to: user.email,
          subject,
          html: html.replace("{{name}}", user.name || "مشارك"),
        })
      )
    )

    return NextResponse.json({ success: true, message: "Emails sent successfully" })
  } catch (error) {
    console.error("Email send error:", error)
    return NextResponse.json({ success: false, message: "Failed to send emails" }, { status: 500 })
  }
}
