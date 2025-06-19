export interface FreeOrder {
  id: string
  name: string
  email: string
  phone: string
  code: string
  createdAt: string | Date
}

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

// For Server Action results
export interface ServerActionResult<T> {
  success: boolean
  data?: T
  error?: string
}