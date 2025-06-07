"use client";

import { zodResolver } from "@hookform/resolvers/zod";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { useForm } from "react-hook-form";
import { toast } from "sonner";

import { Button } from "@/shared/components/ui/button";
import { Input } from "@/shared/components/ui/input";
import { Label } from "@/shared/components/ui/label";
import { cn } from "@/shared/lib/utils";

import { SignInFormSchema, signInFormSchema } from "../schemas/sign-in-schema";

export function SignInForm({
  className,
  ...props
}: React.ComponentPropsWithoutRef<"form">) {
  const router = useRouter();
  const signInForm = useForm<SignInFormSchema>({
    resolver: zodResolver(signInFormSchema),
  });

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = signInForm;

  async function onSignIn(data: SignInFormSchema) {
    try {
      console.log(data);
      // await signInAction(data);
      router.push("/dashboard");
    } catch (error) {
      if (!(error instanceof Error)) return;
      toast.error("Uh oh! Alguma coisa deu errado.", {
        description: error.message,
      });
    }
  }

  return (
    <form
      className={cn("flex flex-col gap-6", className)}
      {...props}
      onSubmit={handleSubmit(onSignIn)}
    >
      <div className="flex flex-col items-center gap-2 text-center">
        <h1 className="text-2xl font-bold">Faça login</h1>
        <p className="text-balance text-sm text-muted-foreground">
          Acesse sua conta com seu email
        </p>
      </div>
      <div className="grid gap-6">
        <div className="grid gap-2">
          <Label htmlFor="email">Email</Label>
          <Input placeholder="m@example.com" {...register("email")} />
          {errors.email && (
            <p className="text-sm font-medium text-red-500 dark:text-red-400">
              {errors.email.message}
            </p>
          )}
        </div>
        <div className="grid gap-2">
          <div className="flex items-center">
            <Label htmlFor="password">Password</Label>
          </div>
          <Input id="password" type="password" {...register("password")} />
          {errors.password && (
            <p className="text-sm font-medium text-red-500 dark:text-red-400">
              {errors.password.message}
            </p>
          )}
        </div>
        <Button type="submit" className="w-full" disabled={isSubmitting}>
          Login
        </Button>
      </div>
      <div className="text-center text-sm">
        Não tem uma conta?{" "}
        <Link href="/register" className="underline underline-offset-4">
          Cadastre-se
        </Link>
      </div>
    </form>
  );
}
