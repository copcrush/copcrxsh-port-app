import { ArrowUpRight, ExternalLink } from "lucide-react";
import type { Metadata } from "next";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { ProfileHero } from "@/components/sections/profile-hero";
import { Reveal } from "@/components/sections/reveal";
import { Stagger, StaggerItem } from "@/components/sections/stagger";
import { buttonVariants } from "@/components/ui/button";
import { WindowFrame } from "@/components/ui/window-frame";
import { cv } from "@/content/cv";
import { cn } from "@/lib/utils";

export const metadata: Metadata = {
  title: "About",
  description: `${cv.name} — ${cv.title} based in ${cv.location}.`,
};

export default function AboutPage() {
  return (
    <>
      <Container className="py-20 sm:py-28">
        <Reveal>
          <div className="grid items-start gap-12 lg:grid-cols-[0.9fr_1.1fr] lg:gap-16">
            <div>
              <p className="mb-4 text-sm font-semibold tracking-widest text-primary uppercase">
                About
              </p>
              <ProfileHero filename="about.me" />
            </div>
            <div className="max-w-3xl">
              <p className="mb-3 font-heading text-2xl font-semibold text-primary sm:text-3xl">
                {cv.brand}
              </p>
              <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
                {cv.name}
              </h1>
              <p className="mt-3 text-lg font-medium text-muted-foreground">
                {cv.title} · {cv.location}
              </p>
              <p className="mt-8 text-lg leading-8 text-muted-foreground">
                {cv.summary}
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a
                  href={`mailto:${cv.email}`}
                  className={cn(buttonVariants({ size: "sm" }), "gap-1.5")}
                >
                  Email
                  <ArrowUpRight aria-hidden="true" className="size-3.5" />
                </a>
                <a
                  href={cv.linkedin}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "gap-1.5",
                  )}
                >
                  LinkedIn
                  <ExternalLink aria-hidden="true" className="size-3.5" />
                </a>
                <a
                  href={cv.github}
                  target="_blank"
                  rel="noopener noreferrer"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "gap-1.5",
                  )}
                >
                  GitHub
                  <ExternalLink aria-hidden="true" className="size-3.5" />
                </a>
                <Link
                  href="/hire"
                  className={cn(
                    buttonVariants({ variant: "outline", size: "sm" }),
                    "gap-1.5",
                  )}
                >
                  Contact Us
                  <ArrowUpRight aria-hidden="true" className="size-3.5" />
                </Link>
              </div>
            </div>
          </div>
        </Reveal>
      </Container>

      <section className="border-t-[2.5px] border-foreground bg-dot-grid py-20 sm:py-28">
        <Container>
          <Reveal>
            <p className="mb-4 text-sm font-semibold tracking-widest text-primary uppercase">
              Experience
            </p>
            <h2 className="font-heading text-3xl font-semibold sm:text-4xl">
              Work history from the CV.
            </h2>
          </Reveal>
          <Stagger className="mt-10 space-y-6">
            {cv.experience.map((job, index) => (
              <StaggerItem key={`${job.company}-${job.period}`}>
                <WindowFrame
                  accent={index}
                  title={`${job.company.toLowerCase().replace(/\s+/g, "-")}.role`}
                >
                  <div className="p-5 sm:p-6">
                    <div className="flex flex-col gap-2 sm:flex-row sm:items-baseline sm:justify-between">
                      <div>
                        <h3 className="font-heading text-xl font-semibold">
                          {job.role}
                        </h3>
                        <p className="mt-1 text-sm font-medium text-primary">
                          {job.company}
                        </p>
                      </div>
                      <p className="font-mono text-xs text-muted-foreground sm:text-sm">
                        {job.period}
                      </p>
                    </div>
                    {"note" in job && job.note ? (
                      <p className="mt-2 text-xs text-muted-foreground">
                        {job.note}
                      </p>
                    ) : null}
                    <ul className="mt-4 space-y-2 text-sm leading-7 text-muted-foreground">
                      {job.bullets.map((bullet) => (
                        <li key={bullet} className="flex gap-2">
                          <span
                            aria-hidden="true"
                            className="mt-2.5 size-1.5 shrink-0 bg-primary"
                          />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </WindowFrame>
              </StaggerItem>
            ))}
          </Stagger>
        </Container>
      </section>

      <section className="border-t-[2.5px] border-foreground py-20 sm:py-28">
        <Container>
          <Reveal>
            <p className="mb-4 text-sm font-semibold tracking-widest text-primary uppercase">
              Education
            </p>
            <h2 className="font-heading text-3xl font-semibold sm:text-4xl">
              Education & certifications.
            </h2>
            <ul className="mt-10 grid gap-4 md:grid-cols-3">
              {cv.education.map((item) => (
                <li
                  key={item.title}
                  className="rounded-2xl border-[2.5px] border-foreground bg-card p-5 shadow-hard-sm"
                >
                  <h3 className="font-heading text-base font-semibold leading-snug">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-sm text-primary">{item.org}</p>
                  <p className="mt-1 font-mono text-xs text-muted-foreground">
                    {item.period}
                  </p>
                </li>
              ))}
            </ul>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
