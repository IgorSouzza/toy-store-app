import { z } from "zod";

export const signUpFormSchema = z
  .object({
    name: z
      .string()
      .trim()
      .min(2, "O nome precisa ter no mínimo 2 caracteres")
      .max(255)
      .regex(/^[A-Za-zÀ-ÿ\s]+$/, "O nome deve conter apenas letras"),
    email: z.string().email("E-mail inválido"),
    password: z.string().min(3, "Senha inválida"),
    confirm_password: z
      .string()
      .min(6, "A senha tem que ter no mínimo 6 caracteres")
      .max(30, "A senha tem que ter no máximo 30 caracteres"),
  })
  .refine((data) => data.password === data.confirm_password, {
    message: "As senhas devem ser iguais.",
    path: ["confirm_password"],
  });

export type SignUpFormSchema = z.infer<typeof signUpFormSchema>;
