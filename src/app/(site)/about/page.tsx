import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { HeroCollage } from "@/components/sections/hero-collage";
import { Reveal } from "@/components/sections/reveal";

export const metadata: Metadata = {
  title: "About",
  description:
    "About COPCRXSH — full-stack developer with a practical craft mindset.",
};

export default function AboutPage() {
  return (
    <Container className="py-20 sm:py-28">
      <Reveal>
        <div className="grid items-start gap-12 lg:grid-cols-[1fr_1.2fr] lg:gap-16">
          <div>
            <p className="mb-4 text-sm font-semibold tracking-widest text-primary uppercase">
              About
            </p>
            <HeroCollage />
          </div>
          <div className="max-w-3xl">
            <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-6xl">
              I turn product ideas into production-ready software.
            </h1>
            <div className="mt-10 space-y-6 text-lg leading-8 text-muted-foreground">
              <p>
                I work across frontend, backend, databases, authentication, and
                deployment to build products as one coherent system.
              </p>
              <p>
                My approach stays practical: understand the requirement, choose
                the simplest durable architecture, ship in small steps, and keep
                the code easy for the next developer to extend.
              </p>
              <p>
                Outside of work I care about visual culture, music, and retro
                games — influences that show up as small signatures, never as
                the whole brand.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </Container>
  );
}
