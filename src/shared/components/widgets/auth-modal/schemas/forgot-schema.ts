import { z } from "zod"

export const forgotSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
})

export type ForgotFormData = z.infer<typeof forgotSchema>
