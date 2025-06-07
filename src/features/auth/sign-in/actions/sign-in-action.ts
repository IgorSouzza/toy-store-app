"use server";

import { cookies } from "next/headers";

import {
  SignInFormSchema,
  signInFormSchema,
} from "@/features/auth/sign-in/schemas/sign-in-schema";

export async function signInAction(data: SignInFormSchema): Promise<void> {
  const result = signInFormSchema.safeParse(data);

  if (!result.success) {
    throw new Error("An error ocurred while trying to sign-in.");
  }

  const cookiesStore = await cookies();
  // *** Get cookie from header in a real application ***
  // e.g:
  // const response = await axios.post('/auth/sign-in', data, {
  //   withCredentials: true,
  // })
  // const setCookieHeader = response.headers['set-cookie']

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
