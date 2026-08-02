import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { cn } from "@/lib/utils";

const links = [
  { href: "/works", label: "Works", tone: "bg-ocean-blue" },
  { href: "/about", label: "About", tone: "bg-golden-pollen" },
  { href: "/#skills", label: "Skills", tone: "bg-primary" },
  { href: "/contact", label: "Contact", tone: "bg-candy-orange" },
];

type QuickLinksProps = {
  className?: string;
};

export function QuickLinks({ className }: QuickLinksProps) {
  return (
    <div
      className={cn(
        "border-y-[2.5px] border-foreground bg-dot-grid py-8",
        className,
      )}
    >
      <Container>
        <nav
          aria-label="Quick links"
          className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4"
        >
          {links.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className={cn(
                "flex items-center justify-between gap-3 rounded-2xl border-[2.5px] border-foreground px-5 py-4 text-sm font-bold shadow-hard transition-[transform,box-shadow] duration-150 hover:-translate-x-0.5 hover:-translate-y-0.5 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring active:translate-x-[3px] active:translate-y-[3px] active:shadow-none",
                link.tone,
              )}
            >
              <span>{link.label}</span>
              <ArrowUpRight
                aria-hidden="true"
                className="size-4 shrink-0"
              />
            </Link>
          ))}
        </nav>
      </Container>
    </div>
  );
}
