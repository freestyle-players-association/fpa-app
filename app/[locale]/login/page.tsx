import { SubmitButton } from "./submit-button";
import { signIn } from "@/next-server-functions/user/auth-actions";
import { Input } from "@/components/common/input";
import { Label } from "@/components/common/label";
import { buttonVariants } from "@/components/common/button";
import { Link } from "@/i18n/routing";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

export default function Login({
  searchParams,
}: {
  searchParams: { message: string };
}) {
  return (
    <div className="flex-1 flex flex-col w-full px-8 sm:max-w-md justify-center gap-2">
      <form className="flex-1 flex flex-col w-full justify-center gap-2 text-foreground">
        <Label className="text-md" htmlFor="email">
          Email
        </Label>
        <Input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          name="email"
          placeholder="you@example.com"
          required
        />
        <Label className="text-md" htmlFor="password">
          Password
        </Label>
        <Input
          className="rounded-md px-4 py-2 bg-inherit border mb-6"
          type="password"
          name="password"
          placeholder="••••••••"
          required
        />
        <SubmitButton formAction={signIn} pendingText="Signing In...">
          Sign In
        </SubmitButton>
        <Link
          href={"/sign-up"}
          className={buttonVariants({ variant: "default" })}
        >
          Sign Up
        </Link>
        {searchParams?.message && (
          <p className="mt-4 p-4 bg-foreground/10 text-foreground text-center">
            {searchParams.message}
          </p>
        )}
      </form>
    </div>
  );
}
