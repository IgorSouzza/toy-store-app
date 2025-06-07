import { z } from 'zod'

export const addCustomerFormSchema = z.object({
  name: z
    .string()
    .trim()
    .min(2, 'O nome precisa ter no mínimo 2 caracteres')
    .regex(/^[A-Za-zÀ-ÿ\s]+$/, 'O nome deve conter apenas letras'),
  email: z.string().email('E-mail inválido'),
  birthdate: z.string().date('Data inválida'),
})

export type AddCustomerFormSchema = z.infer<typeof addCustomerFormSchema>