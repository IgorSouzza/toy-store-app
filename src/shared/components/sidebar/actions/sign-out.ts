"use server";

import { cookies } from "next/headers";
import { redirect } from "next/navigation";

export async function signOutAction(): Promise<void> {
  const cookiesStore = await cookies();
  cookiesStore.delete("token");
  redirect('/sign-in')
}
