"use server"

import { prisma } from "@/lib/prisma"
import { revalidatePath } from "next/cache"
import type { ActionResult, OverviewData, DailyRegistration } from "@/lib/types"

// --- Overview Page Actions ---
export async function getOverviewData(): Promise<ActionResult<OverviewData>> {
  try {
    const [freeCount, paidCount] = await Promise.all([
      prisma.freeOrder.count(),
      prisma.paidOrder.count(),
    ])

    const revenueResult = await prisma.paidOrder.aggregate({
      _sum: { amount: true },
    })

    console.log("💰 Revenue total cents:", revenueResult._sum.amount)

    const thirtyDaysAgo = new Date()
    thirtyDaysAgo.setDate(thirtyDaysAgo.getDate() - 30)

    const [freeOrdersByDay, paidOrdersByDay] = await Promise.all([
      prisma.freeOrder.groupBy({
        by: ["createdAt"],
        where: { createdAt: { gte: thirtyDaysAgo } },
        _count: { id: true },
      }),
      prisma.paidOrder.groupBy({
        by: ["createdAt"],
        where: { createdAt: { gte: thirtyDaysAgo } },
        _count: { id: true },
      }),
    ])

    const dailyData = new Map<string, { freeCount: number; paidCount: number }>()

    for (let i = 6; i >= 0; i--) {
      const date = new Date()
      date.setDate(date.getDate() - i)
      const dateStr = date.toISOString().split("T")[0]
      dailyData.set(dateStr, { freeCount: 0, paidCount: 0 })
    }

    freeOrdersByDay.forEach((item) => {
      const dateStr = item.createdAt.toISOString().split("T")[0]
      const existing = dailyData.get(dateStr) || { freeCount: 0, paidCount: 0 }
      existing.freeCount += item._count.id
      dailyData.set(dateStr, existing)
    })

    paidOrdersByDay.forEach((item) => {
      const dateStr = item.createdAt.toISOString().split("T")[0]
      const existing = dailyData.get(dateStr) || { freeCount: 0, paidCount: 0 }
      existing.paidCount += item._count.id
      dailyData.set(dateStr, existing)
    })

    const dailyRegistrationsData: DailyRegistration[] = Array.from(dailyData.entries())
      .map(([date, counts]) => ({
        date: date,
        freeCount: counts.freeCount,
        paidCount: counts.paidCount,
        totalCount: counts.freeCount + counts.paidCount,
      }))
      .sort((a, b) => new Date(a.date).getTime() - new Date(b.date).getTime())

    const data: OverviewData = {
      totalSignups: freeCount + paidCount,
      freeRegistrations: freeCount,
      paidUsers: paidCount,
      totalRevenue: revenueResult._sum.amount || 0,
      dailyRegistrationsData,
    }

    return { success: true, data }
  } catch (error) {
    console.error("Failed to fetch overview data:", error)
    return { success: false, error: "Failed to fetch overview data" }
  }
}

// --- Discount Codes Actions ---
export async function getDiscountCodes(): Promise<ActionResult<Awaited<ReturnType<typeof prisma.discountCode.findMany>>>> {
  try {
    const discountCodes = await prisma.discountCode.findMany({ orderBy: { createdAt: "desc" } })
    return { success: true, data: discountCodes }
  } catch (error) {
    console.error("Failed to fetch discount codes:", error)
    return { success: false, error: "Failed to fetch discount codes" }
  }
}

export async function addDiscountCode(data: {
  code: string
  percentage: number
  ownerName: string
}): Promise<ActionResult<Awaited<ReturnType<typeof prisma.discountCode.create>>>> {
  try {
    if (!data.code || !data.ownerName || data.percentage < 0 || data.percentage > 100) {
      return { success: false, error: "Invalid input data" }
    }

    const newDiscount = await prisma.discountCode.create({
      data: {
        code: data.code.toUpperCase().trim(),
        percentage: Math.round(data.percentage),
        ownerName: data.ownerName.trim(),
      },
    })

    revalidatePath("/dashboard/discounts")
    return { success: true, data: newDiscount }
  } catch (error: any) {
    console.error("Failed to add discount code:", error)

    if (error.code === "P2002") {
      return { success: false, error: "Discount code already exists" }
    }

    return { success: false, error: "Failed to add discount code" }
  }
}

export async function deleteDiscountCode(id: string): Promise<ActionResult> {
  try {
    await prisma.discountCode.delete({ where: { id } })
    revalidatePath("/dashboard/discounts")
    return { success: true }
  } catch (error: any) {
    console.error("Failed to delete discount code:", error)

    if (error.code === "P2025") {
      return { success: false, error: "Discount code not found" }
    }

    return { success: false, error: "Failed to delete discount code" }
  }
}

// --- Registrations Page Actions ---

// ✅ Free Registrations
export async function getFreeRegistrations(): Promise<ActionResult<Awaited<ReturnType<typeof prisma.freeOrder.findMany>>>> {
  try {
    const freeOrders = await prisma.freeOrder.findMany({
      orderBy: { createdAt: "desc" },
      take: 100,
    })
    return { success: true, data: freeOrders }
  } catch (error) {
    console.error("Failed to fetch free registrations:", error)
    return { success: false, error: "Failed to fetch free registrations" }
  }
}

// ✅ Paid Registrations
export async function getPaidRegistrations(): Promise<ActionResult<Awaited<ReturnType<typeof prisma.paidOrder.findMany>>>> {
  try {
    const paidOrders = await prisma.paidOrder.findMany({
      orderBy: { createdAt: "desc" },
      take: 100,
    })
    return { success: true, data: paidOrders }
  } catch (error) {
    console.error("Failed to fetch paid registrations:", error)
    return { success: false, error: "Failed to fetch paid registrations" }
  }
}

// ✅ 🔥 Unpaid Registrations
export async function getUnpaidRegistrations(): Promise<ActionResult<Awaited<ReturnType<typeof prisma.paidOrder.findMany>>>> {
  try {
    const unpaidOrders = await prisma.paidOrder.findMany({
      where: { paymentStatus: "unpaid" },
      orderBy: { createdAt: "desc" },
      take: 100,
    })
    return { success: true, data: unpaidOrders }
  } catch (error) {
    console.error("Failed to fetch unpaid registrations:", error)
    return { success: false, error: "Failed to fetch unpaid registrations" }
  }
}

// --- Health Check ---
export async function healthCheck(): Promise<ActionResult<{ dbConnected: boolean }>> {
  try {
    await prisma.$queryRaw`SELECT 1`
    return { success: true, data: { dbConnected: true } }
  } catch (error) {
    console.error("Database health check failed:", error)
    return { success: false, error: "Database connection failed" }
  }
}
