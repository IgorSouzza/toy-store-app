import { z } from 'zod'

export const addCustomerFormSchema = z.object({
  name: z.string().min(2, 'O nome precisa ter no mínimo 2 caracteres'),
  email: z.string().email('E-mail inválido'),
  birthdate: z.string().date('Data inválida'),
})

export type AddCustomerFormSchema = z.infer<typeof addCustomerFormSchema>