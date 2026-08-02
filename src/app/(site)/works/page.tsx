import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/sections/reveal";
import { WorksGrid } from "@/components/sections/works-grid";
import { getPublishedWorks } from "@/features/works/queries";

export const metadata: Metadata = {
  title: "Works",
  description: "Selected case studies and live portfolio work by COPCRXSH.",
};

export default async function WorksPage() {
  let works: Awaited<ReturnType<typeof getPublishedWorks>> = [];

  try {
    works = await getPublishedWorks();
  } catch {
    works = [];
  }

  return (
    <div className="bg-dot-grid">
      <Container className="py-20 sm:py-28">
        <Reveal>
          <div className="max-w-3xl">
            <p className="mb-4 text-sm font-semibold tracking-widest text-primary uppercase">
              Works
            </p>
            <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-6xl">
              Selected work, with live previews.
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Each project window includes a Go Live link so HR and reviewers can
              open the running site in one click.
            </p>
          </div>
          <WorksGrid works={works} className="mt-14" />
        </Reveal>
      </Container>
    </div>
  );
}
