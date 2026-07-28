import Image from "next/image";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/sections/reveal";
import { buttonVariants } from "@/components/ui/button";
import { getPublishedWorkBySlug } from "@/features/works/queries";
import { parseWorkContent } from "@/features/works/types";
import { cn } from "@/lib/utils";

type WorkDetailPageProps = {
  params: Promise<{ slug: string }>;
};

export async function generateMetadata({
  params,
}: WorkDetailPageProps): Promise<Metadata> {
  const { slug } = await params;

  try {
    const work = await getPublishedWorkBySlug(slug);
    if (!work) return { title: "Work" };
    return {
      title: work.title,
      description: work.description,
    };
  } catch {
    return { title: "Work" };
  }
}

export default async function WorkDetailPage({ params }: WorkDetailPageProps) {
  const { slug } = await params;
  const work = await getPublishedWorkBySlug(slug).catch(() => null);

  if (!work) {
    notFound();
  }

  const content = parseWorkContent(work.content);

  return (
    <Container className="py-20 sm:py-28">
      <Reveal>
        <Link
          href="/works"
          className="text-sm font-semibold text-muted-foreground transition-colors hover:text-primary"
        >
          ← All works
        </Link>
        <div className="mt-8 max-w-3xl">
          {work.tags.length > 0 ? (
            <p className="mb-4 text-sm font-semibold tracking-widest text-primary uppercase">
              {work.tags.join(" · ")}
            </p>
          ) : null}
          <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-6xl">
            {work.title}
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            {work.description}
          </p>
        </div>

        {work.cover_image_url ? (
          <div className="relative mt-12 aspect-video overflow-hidden rounded-lg border bg-muted">
            <Image
              src={work.cover_image_url}
              alt={work.title}
              fill
              className="object-cover"
              sizes="(max-width: 1200px) 100vw, 1152px"
              priority
            />
          </div>
        ) : null}

        {content.highlights && content.highlights.length > 0 ? (
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {content.highlights.map((item) => (
              <li
                key={item}
                className="border-l-2 border-primary pl-4 text-sm leading-7 text-muted-foreground"
              >
                {item}
              </li>
            ))}
          </ul>
        ) : null}

        {content.body ? (
          <div className="mt-12 max-w-3xl space-y-6 text-lg leading-8 whitespace-pre-wrap text-muted-foreground">
            {content.body}
          </div>
        ) : null}

        <Link
          href="/contact"
          className={cn(buttonVariants({ size: "lg" }), "mt-14")}
        >
          Discuss a similar project
        </Link>
      </Reveal>
    </Container>
  );
}
