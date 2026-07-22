import type { Metadata } from "next";

import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "About",
};

export default function AboutPage() {
  return (
    <Container className="py-20 sm:py-28">
      <div className="grid gap-12 lg:grid-cols-[1fr_2fr]">
        <p className="text-sm font-semibold tracking-widest text-primary uppercase">
          About
        </p>
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
          </div>
        </div>
      </div>
    </Container>
  );
}
