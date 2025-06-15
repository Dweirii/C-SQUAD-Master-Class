// app/api/track-paid-order/route.ts
import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(req: Request) {
  try {
    const { name, email, phone, amount, stripeSessionId } = await req.json()

    if (!email || !stripeSessionId || !amount) {
      return NextResponse.json({ success: false, error: "Missing required fields" }, { status: 400 })
    }

    await prisma.paidOrder.create({
      data: {
        name,
        email,
        phone,
        amount,
        stripeSessionId,
        paymentStatus: "completed",
      },
    })

    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Failed to track paid order:", error)
    return NextResponse.json({ success: false, error: "Failed to track order" }, { status: 500 })
  }
}
