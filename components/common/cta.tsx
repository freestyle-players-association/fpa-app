"use client";

import { PropsWithChildren } from "react";
import { Card } from "./card";
import { Label } from "./label";
import { buttonVariants } from "./button";
import { Link } from "@/i18n/routing";

export default function CTA({ children }: PropsWithChildren) {
  return (
    <Card className="container p-4 flex justify-between items-center text-base">
      <Label>
        Complete your profile information to be able to create and attend to
        events.
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
