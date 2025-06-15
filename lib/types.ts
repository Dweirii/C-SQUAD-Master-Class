import type { DiscountCode, FreeOrder, PaidOrder } from "@prisma/client"
export type { DiscountCode, FreeOrder, PaidOrder }


export interface OverviewData {
  totalSignups: number
  freeRegistrations: number
  paidUsers: number
  totalRevenue: number
  dailyRegistrationsData: DailyRegistration[]
}

export interface ActionResult<T = unknown> {
  success: boolean
  data?: T
  error?: string
}

export interface DailyRegistration {
  date: string
  freeCount: number
  paidCount: number
  totalCount: number
}
