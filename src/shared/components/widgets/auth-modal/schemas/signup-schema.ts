import { z } from "zod"

export const signupSchema = z.object({
  email: z.string().min(1, "Email is required").email("Invalid email address"),
  password: z.string().min(1, "Password is required").min(6, "Password must be at least 6 characters"),
  lastName: z.string().min(1, "Last name is required").min(2, "Last name must be at least 2 characters"),
  firstName: z.string().min(1, "First name is required").min(2, "First name must be at least 2 characters"),
})

export type SignupFormData = z.infer<typeof signupSchema>
