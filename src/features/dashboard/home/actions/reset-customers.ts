"use server";

import { api } from "@/shared/lib/axios";

import { revalidatePath } from "next/cache";

export async function resetCustomersAction() {
  await api.delete("/api/customers");
  revalidatePath("/dashboard");
}
