import type { components } from "@/shared/api/schema"

export type News = components["schemas"]["NewsOutputDto"]
export type CreateNews = components["schemas"]["CreateNewsDto"]
export type UpdateNews = components["schemas"]["UpdateNewsDto"]
export type TranslatableText = components["schemas"]["TranslatableTextDto"]

export type NewsCategory = "MATCH_RESULT" | "TRANSFER" | "ANNOUNCEMENT" | "INTERVIEW" | "GENERAL"
