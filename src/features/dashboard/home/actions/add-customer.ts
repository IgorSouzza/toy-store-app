"use server";

import { api } from "@/shared/lib/axios";

import {
  addCustomerFormSchema,
  AddCustomerFormSchema,
} from "../schemas/add-customer-schema";
import { revalidatePath } from "next/cache";

export async function addCustomersAction(data: AddCustomerFormSchema) {
  const result = addCustomerFormSchema.safeParse(data);

  if (!result.success) {
    throw new Error("An error ocurred while trying to add a new customer");
  }

  await api.post("/api/customers", { ...data });
  revalidatePath("/dashboard");
}
