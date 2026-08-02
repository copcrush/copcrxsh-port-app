import { ArrowUpRight } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { ProfileHero } from "@/components/sections/profile-hero";
import { Reveal } from "@/components/sections/reveal";
import { ServicesSection } from "@/components/sections/services-section";
import { SkillsSection } from "@/components/sections/skills-section";
import { WorksGrid } from "@/components/sections/works-grid";
import { buttonVariants } from "@/components/ui/button";
import { cv } from "@/content/cv";
import { hireCta } from "@/content/nav";
import { getPublishedWorks } from "@/features/works/queries";
import { cn } from "@/lib/utils";

export default async function HomePage() {
  let works: Awaited<ReturnType<typeof getPublishedWorks>> = [];

  try {
    works = await getPublishedWorks();
  } catch {
    works = [];
  }

  const featured = works.slice(0, 3);

  return (
    <>
      {/* 1. Hero — brand + profile + one hire CTA */}
      <section className="overflow-hidden border-b-[2.5px] border-foreground py-16 sm:py-24 lg:py-28">
        <Container>
          <div className="grid items-center gap-12 lg:grid-cols-[1.1fr_0.9fr] lg:gap-16">
            <div>
              <p className="mb-4 font-heading text-4xl font-bold tracking-tight text-primary sm:text-5xl lg:text-6xl">
                {cv.brand}
                <span className="text-foreground">.</span>
              </p>
              <h1 className="max-w-xl font-heading text-2xl leading-tight font-semibold tracking-tight sm:text-4xl">
                {cv.heroLine}
              </h1>
              <p className="mt-6 max-w-lg text-lg leading-8 text-muted-foreground">
                Based in {cv.location}. Available for freelance full-stack work —
                clear scope, live previews, and production-ready delivery.
              </p>
              <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
                <Link
                  href={hireCta.href}
                  className={cn(buttonVariants({ size: "lg" }), "gap-2")}
                >
                  {hireCta.label}
                  <ArrowUpRight aria-hidden="true" className="size-4" />
                </Link>
                <Link
                  href="/works"
                  className={buttonVariants({ variant: "outline", size: "lg" })}
                >
                  Explore selected work
                </Link>
              </div>
            </div>
            <ProfileHero />
          </div>
        </Container>
      </section>

      {/* 2. Works — live previews for HR */}
      <section className="bg-dot-grid py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <p className="mb-3 text-sm font-semibold tracking-widest text-primary uppercase">
                  Selected work
                </p>
                <h2 className="font-heading text-3xl font-semibold sm:text-4xl">
                  Live builds you can open and check.
                </h2>
              </div>
              <Link
                href="/works"
                className="hidden text-sm font-semibold underline decoration-primary decoration-2 underline-offset-4 sm:block"
              >
                View all work
              </Link>
            </div>
            <WorksGrid works={featured} />
          </Reveal>
        </Container>
      </section>

      {/* 3. Skills — CV stack */}
      <SkillsSection />

      {/* 4. Services — what you hire for */}
      <ServicesSection />
    </>
  );
}
