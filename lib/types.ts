
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

// Manual (UI-friendly) version of FreeOrder
export interface FreeOrder {
  id: string
  name: string
  email: string
  phone: string
  code: string
  createdAt: string | Date
}

// Manual (UI-friendly) version of PaidOrder
export interface PaidOrder {
  id: string
  name: string
  email: string
  amount: number // Amount in cents
  paymentStatus: string
  createdAt: string | Date
}

// Generic column definition for the reusable table card
export interface ColumnDefinition<T> {
  key: string // Unique key for the column
  header: string
  cell: (item: T) => React.ReactNode
  headClassName?: string
  cellClassName?: string
}

// For server actions
export interface ServerActionResult<T> {
  success: boolean
  data?: T
  error?: string
}

// Only import DiscountCode from Prisma (no conflict)
import type { DiscountCode } from "@prisma/client"
export type { DiscountCode }

export const STAGES = [
  "أحاول أبدأ مشروع من شغفي",
  "أعمل على مشروع حاليًا وأواجه تحديات",
  "مُوظف وأسعى لتطوير مهاراتي العملية أو خلق مصدر دخل إضافي",
  "طالب وأسعى لزيادة تميزي ومهاراتي لمواكبة سوق العمل",
] as const

export type Stage = typeof STAGES[number]

