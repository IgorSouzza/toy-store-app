"use server";

import { cookies } from "next/headers";

import {
  SignInFormSchema,
  signInFormSchema,
} from "@/features/auth/sign-in/schemas/sign-in-schema";

export async function signUpAction(data: SignInFormSchema): Promise<void> {
  const result = signInFormSchema.safeParse(data);

  if (!result.success) {
    throw new Error("An error ocurred while trying to sign-up.");
  }

  const cookiesStore = await cookies();
  // *** Get cookie from response header in a real application ***
  const setCookieHeader = { token: "fake-token" };
  if (setCookieHeader) {
    cookiesStore.set("token", setCookieHeader.token, {
      httpOnly: true,
      secure: process.env.NODE_ENV === "production",
      sameSite: "strict",
      path: "/",
    });
  }
}
