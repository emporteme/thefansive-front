import { z } from "zod"

export const signupSchema = z.object({
  fullName: z.string().min(1, "Full name is required").min(2, "Name must be at least 2 characters"),
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  emailCode: z.string().min(1, "Email code is required").min(4, "Code must be at least 4 characters"),
  password: z.string().min(1, "Password is required").min(6, "Password must be at least 6 characters"),
})

export type SignupFormData = z.infer<typeof signupSchema>
