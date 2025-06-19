import { NextResponse } from "next/server"
import { sendInnovationEmail } from "@/lib/email"

export async function POST(req: Request) {
  const body = await req.json()
  const { email, name } = body

  try {
    await sendInnovationEmail({ email, name, isPaid: false,})
    return NextResponse.json({ success: true })
  } catch (error) {
    console.error("Email Error", error)
    return NextResponse.json({ success: false, error }, { status: 500 })
  }
}
