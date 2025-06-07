"use client";

import { toast } from "sonner";

import { Button } from "@/shared/components/ui/button";
import { resetCustomersAction } from "../actions/reset-customers";

export function ResetCustomersButton() {
  async function handleResetCustomers() {
    await resetCustomersAction();
    toast("Clientes resetados com sucesso!");
  }

  return (
    <Button variant="outline" onClick={handleResetCustomers}>
      Remover clientes randômicos
    </Button>
  );
}
