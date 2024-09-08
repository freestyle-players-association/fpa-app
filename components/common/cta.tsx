"use client";

import Link from "next/link";
import { Card } from "@/components/ui/card";
import { Label } from "@/components/ui/label";
import { buttonVariants } from "@/components/ui/button";
import { PropsWithChildren } from "react";

export default function CTA({ children }: PropsWithChildren) {
  return (
    <Card className="container p-4 flex justify-between items-center text-base">
      <Label>
        Finalise your profile to be able to attend to events and create those.
      </Label>
      <Link
        className={buttonVariants({ variant: "default" })}
        href="/user-profile/update"
      >
        Finalise
      </Link>
    </Card>
  );
}
