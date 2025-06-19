import { NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"
import { prisma } from "@/lib/prisma"
import Stripe from "stripe"

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(req: Request) {
  const body = await req.text()
  const signature = req.headers.get("stripe-signature")!

  let event

  try {
    event = stripe.webhooks.constructEvent(body, signature, endpointSecret)
  } catch (err) {
    console.error("Webhook signature verification failed:", err)
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session

    const stripeSessionId = session.id
    const email = session.customer_email
    const name = session.metadata?.fullName || ""
    const phone = session.metadata?.phone || ""
    const code = session.metadata?.code || ""
    const amount = session.amount_total || 0
    const status = session.payment_status

    console.log("Stripe session received:", { email, amount, code })

    const existing = await prisma.paidOrder.findUnique({
      where: { stripeSessionId },
    })

    if (!existing && status === "paid") {
      await prisma.paidOrder.create({
        data: {
          name,
          email: email!,
          phone,
          amount,
          stripeSessionId,
          paymentStatus: status,
        },
      })

      console.log(`Payment recorded for: ${email}`)
    } else {
      console.log(`Duplicate or unpaid session ignored: ${stripeSessionId}`)
    }
  } else {
    console.log(`Unhandled event: ${event.type}`)
  }

  return NextResponse.json({ received: true })
}
