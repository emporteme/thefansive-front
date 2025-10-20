import { Team } from "./team"
import { Language } from "../constants"

export type CertificateType = "fan" | "donation"

export type ProductCategory = "FAN_SUPPORT"

export type Product = {
  id: number
  productName: Record<Language, string>
  productDescription: Record<Language, string> | null
  productCategory: ProductCategory
  productImageUrl: string | null
  priceCents: number
  currencyCode: string
  isActive: boolean
  teamId: number | null
  team?: Team | null
  createdAt: string
  updatedAt: string
}
