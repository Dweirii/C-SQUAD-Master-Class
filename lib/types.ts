import type { DiscountCode, FreeOrder } from "@prisma/client"

export type { DiscountCode, FreeOrder }

export interface OverviewData {
  totalSignups: number
  freeRegistrations: number
  paidUsers: number
  totalRevenue: number
  dailyRegistrationsData: Array<{
    date: string
    freeCount: number
    paidCount: number
    totalCount: number
  }>
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