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

export type FavoriteTeam = {
  id: number
  userId: number
  teamId: number
  addedAt: string
  team: Team
}

export type EmptyTeam = {
  id: number
  logoUrl: string
}

export type SportTypeValue =
  | "FOOTBALL"
  | "BASKETBALL"
  | "HOCKEY"
  | "VOLLEYBALL"
  | "TENNIS"
  | "RUGBY"
  | "BASEBALL"
  | "OTHER"

export type SportType = {
  value: SportTypeValue
  label: string
}
