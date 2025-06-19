import { NextResponse } from "next/server"
import { stripe } from "@/lib/stripe"
import { prisma } from "@/lib/prisma"
import Stripe from "stripe"

const endpointSecret = process.env.STRIPE_WEBHOOK_SECRET!

export async function POST(req: Request) {
  const body = await req.text()
  const signature = req.headers.get("stripe-signature")!

  let event: Stripe.Event

  try {
    event = stripe.webhooks.constructEvent(body, signature, endpointSecret)
  } catch (err) {
    console.error("❌ Webhook signature verification failed:", err)
    return NextResponse.json({ error: "Invalid signature" }, { status: 400 })
  }

  if (event.type === "checkout.session.completed") {
    const session = event.data.object as Stripe.Checkout.Session

    const stripeSessionId = session.id
    const paymentStatus = session.payment_status // should be "paid"

    try {
      // ✅ تحديث حالة الطلب إلى "paid"
      const updated = await prisma.paidOrder.update({
        where: { stripeSessionId },
        data: { paymentStatus },
      })

      console.log(`✅ Payment status updated to '${paymentStatus}' for ${updated.email}`)
    } catch (err: any) {
      console.error("⚠️ Failed to update paidOrder:", err.message)
    }
  } else {
    console.log(`ℹ️ Unhandled event type: ${event.type}`)
  }

  return NextResponse.json({ received: true })
}
