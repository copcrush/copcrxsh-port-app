import Link from "next/link";

import { Container } from "@/components/layout/container";
import { PixelDivider } from "@/components/sections/pixel-divider";
import { buttonVariants } from "@/components/ui/button";
import { cv } from "@/content/cv";
import { cn } from "@/lib/utils";

function PixelHeart() {
  return (
    <svg
      aria-hidden="true"
      viewBox="0 0 11 10"
      className="inline-block size-3 text-primary"
      shapeRendering="crispEdges"
    >
      <rect x="1" y="1" width="1" height="1" fill="currentColor" />
      <rect x="2" y="1" width="1" height="1" fill="currentColor" />
      <rect x="4" y="1" width="1" height="1" fill="currentColor" />
      <rect x="5" y="1" width="1" height="1" fill="currentColor" />
      <rect x="0" y="2" width="1" height="1" fill="currentColor" />
      <rect x="3" y="2" width="1" height="1" fill="currentColor" />
      <rect x="6" y="2" width="1" height="1" fill="currentColor" />
      <rect x="0" y="3" width="1" height="1" fill="currentColor" />
      <rect x="6" y="3" width="1" height="1" fill="currentColor" />
      <rect x="1" y="4" width="1" height="1" fill="currentColor" />
      <rect x="5" y="4" width="1" height="1" fill="currentColor" />
      <rect x="2" y="5" width="1" height="1" fill="currentColor" />
      <rect x="4" y="5" width="1" height="1" fill="currentColor" />
      <rect x="3" y="6" width="1" height="1" fill="currentColor" />
    </svg>
  );
}

export function Footer() {
  return (
    <footer className="border-t-[2.5px] border-foreground py-8">
      <div className="mb-6">
        <PixelDivider />
      </div>
      <Container className="flex flex-col gap-4 text-sm text-muted-foreground sm:flex-row sm:items-center sm:justify-between">
        <div className="space-y-1">
          <p className="inline-flex items-center gap-2 font-semibold text-foreground">
            © {new Date().getFullYear()} {cv.brand}.
            <PixelHeart />
          </p>
          <p>
            {cv.name} · {cv.title} · {cv.location}
          </p>
        </div>
        <Link href="/hire" className={cn(buttonVariants({ size: "sm" }))}>
          Contact Us
        </Link>
      </Container>
    </footer>
  );
}
