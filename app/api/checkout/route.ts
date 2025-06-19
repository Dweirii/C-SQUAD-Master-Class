import { NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"
import { stripe } from "@/lib/stripe"

export async function POST(req: Request) {
  try {
    const body = await req.json()
    const { firstName, lastName, email, phone, code } = body

    const fullName = `${firstName} ${lastName}`.trim()
    let discount = 0

    if (code) {
      const found = await prisma.discountCode.findUnique({
        where: { code: code.trim().toUpperCase() },
      })
      if (found) discount = found.percentage
    }

    const basePrice = 7400 // $74.00 in cents
    const finalPrice = Math.round(basePrice * (1 - discount / 100))

    const origin = req.headers.get("origin") ?? "http://localhost:3000"

    if (discount === 100) {
      await prisma.freeOrder.create({
        data: {
          name: fullName,
          email,
          phone,
          code: code || "",
        },
      })

      await fetch(`${origin}/api/send-registration-email`, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          email,
          name: fullName,
          isPaid: false,
        }),
      })

      return NextResponse.json({
        redirectUrl: "/thank-you?free=true",
      })
    }

    const session = await stripe.checkout.sessions.create({
      payment_method_types: ["card"],
      customer_email: email,
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: {
              name: "Innovation Code Masterclass",
              description: "Access to both live sessions + workbook",
            },
            unit_amount: finalPrice,
          },
          quantity: 1,
        },
      ],
      mode: "payment",
      success_url: `${origin}/thank-you?paid=true&session_id={CHECKOUT_SESSION_ID}`,
      cancel_url: `${origin}/checkout?cancelled=true`,
      metadata: {
        fullName,
        phone,
        code: code || "",
      },
    })

    await prisma.paidOrder.create({
      data: {
        name: fullName,
        email,
        phone,
        amount: finalPrice,
        stripeSessionId: session.id,
        paymentStatus: "pending",
      },
    })

    await fetch(`${origin}/api/send-registration-email`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        email,
        name: fullName,
        isPaid: true,
      }),
    })

    return NextResponse.json({ url: session.url })
  } catch (error: any) {
    console.error("Error in /api/checkout:", error.message)
    return NextResponse.json(
      { error: "خطأ أثناء إنشاء جلسة الدفع" },
      { status: 500 }
    )
  }
}
