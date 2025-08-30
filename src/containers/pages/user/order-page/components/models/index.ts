export type PaymentStatus = "paid" | "pending" | "failed"

export interface PaymentStatusData {
  label: string
  className: string
  icon: React.ReactNode
}

export type DeliveryStatus = "delivered" | "pending"

export interface DeliveryStatusData {
  label: string
  labelClassName: string
  icon: React.ReactNode
}
