import Link from "next/link";

import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { cn } from "@/lib/utils";

export function Footer() {
  return (
    <footer className="border-t py-8">
      <Container className="flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p>© {new Date().getFullYear()} COPCRXSH.</p>
          <p>Engineered with intent. Built without excess.</p>
        </div>
        <Link href="/contact" className={cn(buttonVariants({ size: "sm" }))}>
          Contact Me
        </Link>
      </Container>
    </footer>
  );
}
