import { z } from 'zod'

export const signUpFormSchema = z
  .object({
    name: z.string().min(1).max(255),
    email: z.string().email(),
    password: z.string().min(3),
    confirm_password: z.string().min(6).max(30),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: 'As senhas devem ser iguais.',
    path: ['confirm_password'],
  })

export type SignUpFormSchema = z.infer<typeof signUpFormSchema>