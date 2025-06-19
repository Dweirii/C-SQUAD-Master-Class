import { NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"
import { prisma } from "@/lib/prisma"
import Stripe from "stripe"
import { sendInnovationEmail } from "@/lib/email"

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(req: Request) {
  const body = await req.text()
  const signature = req.headers.get("stripe-signature")!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, endpointSecret)
  } catch (err) {
    console.error("Webhook signature verification failed:", err)
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session

    const stripeSessionId = session.id
    const paymentStatus = session.payment_status
    const email = session.customer_email || ""
    const name = session.metadata?.fullName || "مشارك"

    try {
      const updated = await prisma.paidOrder.update({
        where: { stripeSessionId },
        data: { paymentStatus },
      })

      if (paymentStatus === "paid") {
        await sendInnovationEmail({ email, name ,isPaid: true,})
        console.log(`📩 Confirmation email sent to ${email}`)
      }

    } catch (err: any) {
      console.error("⚠️ Failed to process webhook:", err.message)
    }
  } else {
    console.log(`ℹ️ Unhandled event type: ${event.type}`)
  }

  return NextResponse.json({ received: true })
}
