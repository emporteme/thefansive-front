// Типы для страницы example-page

export type PaymentStatus = "paid" | "pending" | "failed"

export interface PaymentStatusData {
  label: string
  className: string
}
