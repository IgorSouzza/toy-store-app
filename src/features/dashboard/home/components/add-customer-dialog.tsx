"use client";

import { useForm } from "react-hook-form";
import { toast } from "sonner";
import { useState } from "react";
import { LoaderCircle } from "lucide-react";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/shared/components/ui/button";
import {
  Dialog,
  DialogClose,
  DialogContent,
  DialogDescription,
  DialogFooter,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/shared/components/ui/dialog";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import {
  addCustomerFormSchema,
  AddCustomerFormSchema,
} from "../schemas/add-customer-schema";
import { addCustomersAction } from "../actions/add-customer";

export function AddCustomerDialog() {
  const [isOpen, setIsOpen] = useState(false);
  const addCustomerForm = useForm<AddCustomerFormSchema>({
    resolver: zodResolver(addCustomerFormSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = addCustomerForm;

  async function onAddCustomer(data: AddCustomerFormSchema) {
    try {
      await addCustomersAction(data);
      toast.success("Cliente adicionado com sucesso!");
      setIsOpen(false);
    } catch (error) {
      if (!(error instanceof Error)) return;
      toast.error("Uh oh! Alguma coisa deu errado.", {
        description: error.message,
      });
    }
  }

  function handleDialogOpenChange(open: boolean) {
    setIsOpen(open);
    addCustomerForm.reset();
  }

  return (
    <Dialog open={isOpen} onOpenChange={handleDialogOpenChange}>
      <DialogTrigger asChild>
        <Button type="button">Novo cliente</Button>
      </DialogTrigger>
      <DialogContent className="sm:max-w-[425px]">
        <DialogHeader>
          <DialogTitle>Novo cliente</DialogTitle>
          <DialogDescription>
            *O cliente será criado com estatísticas randômicas.
          </DialogDescription>
        </DialogHeader>
        <form onSubmit={handleSubmit(onAddCustomer)}>
          <div className="grid gap-4">
            <div className="grid gap-3">
              <Label htmlFor="name">Nome</Label>
              <Input {...register("name")} />
              {errors.name && (
                <p className="text-sm font-medium text-red-500 dark:text-red-400">
                  {errors.name.message}
                </p>
              )}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="email">E-mail</Label>
              <Input {...register("email")} type="email" />
              {errors.email && (
                <p className="text-sm font-medium text-red-500 dark:text-red-400">
                  {errors.email.message}
                </p>
              )}
            </div>
            <div className="grid gap-3">
              <Label htmlFor="birthdate">Data de nascimento</Label>
              <Input
                {...register("birthdate")}
                type="date"
                className="no-calendar"
              />
              {errors.birthdate && (
                <p className="text-sm font-medium text-red-500 dark:text-red-400">
                  {errors.birthdate.message}
                </p>
              )}
            </div>
          </div>
          <DialogFooter className="mt-4">
            <DialogClose asChild>
              <Button variant="outline">Cancelar</Button>
            </DialogClose>
            <Button type="submit" disabled={isSubmitting}>
              {isSubmitting ? (
                <>
                  <LoaderCircle className="animate-spin" />
                  <span>Salvar</span>
                </>
              ) : (
                "Salvar"
              )}
            </Button>
          </DialogFooter>
        </form>
      </DialogContent>
    </Dialog>
  );
}
