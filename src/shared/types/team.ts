import type { Language, SocialMedia } from "./app"

export type Team = {
  id: number
  name: Record<Language, string>
  shortName: Record<Language, string>
  description: Record<Language, string>
  sportType: string
  logoUrl: string
  coverImageUrl: string
  websiteUrl: string
  socialLinks: Record<SocialMedia, string>
  country: string
  city: string
  foundedYear: number
}
