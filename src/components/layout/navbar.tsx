import Link from "next/link";

import { BrandMark } from "@/components/layout/brand-mark";
import { Container } from "@/components/layout/container";
import { ThemeToggle } from "@/components/theme/theme-toggle";
import { buttonVariants } from "@/components/ui/button";
import { hireCta, siteNav } from "@/content/nav";
import { cn } from "@/lib/utils";

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b-[2.5px] border-foreground bg-background/95 backdrop-blur-sm">
      <Container className="flex h-16 items-center justify-between gap-4">
        <Link
          href="/"
          className="rounded-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          aria-label="COPCRXSH home"
        >
          <BrandMark />
        </Link>
        <div className="flex items-center gap-2 sm:gap-4">
          <nav aria-label="Main navigation" className="hidden sm:block">
            <ul className="flex items-center gap-5 text-sm font-semibold sm:gap-7">
              {siteNav.map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="cursor-pointer transition-colors hover:text-primary focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </nav>
          <ThemeToggle />
          <Link
            href={hireCta.href}
            className={cn(buttonVariants({ size: "sm" }), "cursor-pointer")}
          >
            {hireCta.label}
          </Link>
        </div>
      </Container>
    </header>
  );
}
