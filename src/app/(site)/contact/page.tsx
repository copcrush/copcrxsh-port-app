import type { Metadata } from "next";
import Link from "next/link";
import {
  ArrowUpRight,
  Code2,
  ExternalLink,
  Mail,
  MapPin,
  Phone,
  UserRound,
} from "lucide-react";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/sections/reveal";
import { buttonVariants } from "@/components/ui/button";
import { WindowFrame } from "@/components/ui/window-frame";
import { cv } from "@/content/cv";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "Contact",
  description: `Contact ${cv.name} — ${cv.title} in ${cv.location}.`,
};

const channels = [
  {
    label: "Email",
    value: cv.email,
    href: `mailto:${cv.email}`,
    icon: Mail,
    external: false,
  },
  {
    label: "Phone",
    value: cv.phone,
    href: `tel:${cv.phone.replace(/[^+\d]/g, "")}`,
    icon: Phone,
    external: false,
  },
  {
    label: "LinkedIn",
    value: "navaphan-singkaew",
    href: cv.linkedin,
    icon: UserRound,
    external: true,
  },
  {
    label: "GitHub",
    value: "copcrush",
    href: cv.github,
    icon: Code2,
    external: true,
  },
] as const;

export default function ContactPage() {
  return (
    <Container className="py-20 sm:py-28">
      <Reveal>
        <div className="max-w-3xl">
          <p className="mb-4 text-sm font-bold tracking-widest text-primary uppercase">
            Contact
          </p>
          <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
            {cv.name}
          </h1>
          <p className="mt-3 text-lg font-medium text-muted-foreground">
            {cv.title} · {cv.location}
          </p>
          <p className="mt-6 flex items-center gap-2 text-sm text-muted-foreground">
            <MapPin aria-hidden="true" className="size-4 shrink-0 text-primary" />
            {cv.location}
          </p>
        </div>

        <div className="mt-12 grid gap-4 sm:grid-cols-2">
          {channels.map((channel, index) => {
            const Icon = channel.icon;
            return (
              <WindowFrame
                key={channel.label}
                accent={index}
                title={`${channel.label.toLowerCase()}.contact`}
              >
                <a
                  href={channel.href}
                  {...(channel.external
                    ? { target: "_blank", rel: "noopener noreferrer" }
                    : {})}
                  className="flex items-start gap-4 p-5 transition-colors hover:bg-muted/60 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
                >
                  <span className="grid size-10 shrink-0 place-items-center rounded-xl border-[2.5px] border-foreground bg-card">
                    <Icon aria-hidden="true" className="size-4" />
                  </span>
                  <span className="min-w-0 flex-1">
                    <span className="block text-xs font-bold tracking-wide text-primary uppercase">
                      {channel.label}
                    </span>
                    <span className="mt-1 flex items-center gap-1.5 break-all font-heading text-base font-bold">
                      {channel.value}
                      {channel.external ? (
                        <ExternalLink
                          aria-hidden="true"
                          className="size-3.5 shrink-0 text-muted-foreground"
                        />
                      ) : (
                        <ArrowUpRight
                          aria-hidden="true"
                          className="size-3.5 shrink-0 text-muted-foreground"
                        />
                      )}
                    </span>
                  </span>
                </a>
              </WindowFrame>
            );
          })}
        </div>

        <div className="mt-12 rounded-2xl border-[2.5px] border-foreground bg-card p-6 shadow-hard sm:p-8">
          <h2 className="font-heading text-xl font-bold">Looking to hire?</h2>
          <p className="mt-2 text-sm leading-7 text-muted-foreground">
            Send a freelance hire request with your project brief, budget, and
            timeline.
          </p>
          <Link
            href="/hire"
            className={cn(buttonVariants({ size: "lg" }), "mt-6 gap-2")}
          >
            Contact Us
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </Reveal>
    </Container>
  );
}
