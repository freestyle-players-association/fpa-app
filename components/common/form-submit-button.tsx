"use client";
import { PropsWithChildren } from "react";
import { useFormStatus } from "react-dom";
import { buttonVariants, Button } from "@/components/ui/button";

export default function FormSubmitButton({ children }: PropsWithChildren) {
  const { pending } = useFormStatus();

  return (
    <Button
      type="submit"
      className={buttonVariants({ variant: "default" })}
      disabled={pending}
    >
      {pending ? "loading..." : children}
    </Button>
  );
}
