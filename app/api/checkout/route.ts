import { NextResponse } from "next/server";
import { prisma } from "@/lib/prisma"
import { stripe } from "@/lib/stripe"

export async function POST(req: Request) {
    const body = await req.json()
    const {firstName, lastName, email, phone, code} = body

    const fullName = `${firstName} ${lastName}`.trim()
    let discount = 0

    if(code) {
        const found = await prisma.discountCode.findUnique({
            where: { code: code.trim().toUpperCase() },
        })
        if(found) discount = found.percentage
    }

    const basePrice = 100
    const finalPrice = Math.round(basePrice * (1 - discount / 100 ))

    if(discount === 100) {
        await prisma.freeOrder.create({
            data: {
                name: fullName,
                email,
                phone,
                code: code || "",
            },
        })

        return NextResponse.redirect(new URL("/thank-you?free=true", req.url))
    }

    const session = await stripe.checkout.sessions.create({
        payment_method_types:["card"],
        customer_email:email,
        line_items: [
            {
                price_data:{
                    currency:"usd",
                    product_data:{
                        name:"MasterClass",
                    },
                    unit_amount: finalPrice,
                },
                quantity:1,
            },
        ],
        mode: "payment",
        success_url: `${req.headers.get("origin")}/thank-you?paid=true`,
        cancel_url: `${req.headers.get("origin")}/checkout?cancelled=true`,
    })

    return NextResponse.redirect(session.url!, 303)
}