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
    const name = session.customer_details?.name || ""
    const phone = session.customer_details?.phone || ""
    const amount = session.amount_total || 0
    console.log("Stripe Session amount_total:", amount)

    const status = session.payment_status

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
      console.log(`Payment recorded: ${email}`)
    }
  }

  return NextResponse.json({ received: true })
}
