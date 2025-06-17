import { type NextRequest, NextResponse } from "next/server"
import { prisma } from "@/lib/prisma"

export async function POST(request: NextRequest) {
  try {
    const { promoCode } = await request.json()

    if (!promoCode) {
      return NextResponse.json({ valid: false, message: "كود الخصم مطلوب" }, { status: 400 })
    }

    // Query the database for the discount code
    const discountCode = await prisma.discountCode.findUnique({
      where: {
        code: promoCode.trim().toUpperCase(),
      },
    })

    if (!discountCode) {
      return NextResponse.json(
        {
          valid: false,
          message: "كود الخصم غير صحيح",
        },
        { status: 404 },
      )
    }

    return NextResponse.json({
      valid: true,
      discount: discountCode.percentage,
      message:
        discountCode.percentage === 100 ? "تهانينا! حصلت على الكورس مجاناً" : `تم تطبيق خصم ${discountCode.percentage}%`,
    })
  } catch (error) {
    console.error("Error validating promo code:", error)
    return NextResponse.json(
      {
        valid: false,
        message: "حدث خطأ في الخادم",
      },
      { status: 500 },
    )
  }
}
