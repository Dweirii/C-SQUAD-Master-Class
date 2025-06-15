import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { stripe } from "@/lib/stripe"

export async function POST(req: Request) {
  try {
    const { name, email, phone, amount, stripeSessionId } = await req.json()

    if (!email || !stripeSessionId || !amount) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    const session = await stripe.checkout.sessions.retrieve(stripeSessionId)

    if (session.payment_status !== "paid") {
      return NextResponse.json({ success: false, error: "Payment not completed" }, { status: 400 })
    }

    const existing = await prisma.paidOrder.findUnique({
      where: { stripeSessionId },
    })

    if (existing) {
      return NextResponse.json({ success: true }) 
    }

    await prisma.paidOrder.create({
      data: {
        name,
        email,
        phone,
        amount,
        stripeSessionId,
        paymentStatus: session.payment_status,
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Failed to track paid order:", error)
    return NextResponse.json({ success: false, error: "Internal Server Error" }, { status: 500 })
  }
}
