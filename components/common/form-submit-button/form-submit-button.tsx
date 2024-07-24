"use client";
import { PropsWithChildren } from "react";
import { useFormStatus } from "react-dom";

export default function FormSubmitButton({ children }: PropsWithChildren) {
  const { pending } = useFormStatus();

  return (
    <button type="submit" disabled={pending}>
      {pending ? "loading..." : children}
    </button>
  );
}
