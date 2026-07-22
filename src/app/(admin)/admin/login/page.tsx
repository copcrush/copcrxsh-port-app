import Link from "next/link";

import { LoginForm } from "@/components/admin/login-form";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export default function AdminLoginPage() {
  return (
    <div className="mx-auto max-w-md rounded-lg border bg-card p-8">
      <h1 className="font-heading text-3xl font-semibold">Admin sign in</h1>
      <p className="mt-3 text-sm leading-6 text-muted-foreground">
        Use the email and password configured in Supabase Auth.
      </p>
      <LoginForm />
      <Link
        href="/"
        className={cn(
          buttonVariants({ variant: "outline", size: "default" }),
          "mt-3 w-full",
        )}
      >
        Return to portfolio
      </Link>
    </div>
  );
}
