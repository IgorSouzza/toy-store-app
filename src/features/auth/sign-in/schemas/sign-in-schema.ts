import { z } from "zod";

export const signInFormSchema = z.object({
  email: z.string().email("E-mail inválido"),
  password: z.string().min(3, "Senha inválida"),
});

export type SignInFormSchema = z.infer<typeof signInFormSchema>;
