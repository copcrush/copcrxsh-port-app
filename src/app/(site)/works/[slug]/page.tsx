import { ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";
import type { Metadata } from "next";
import { notFound } from "next/navigation";

import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/sections/reveal";
import { WorkPreviewCard } from "@/components/sections/work-preview-card";
import { buttonVariants } from "@/components/ui/button";
import { WindowFrame } from "@/components/ui/window-frame";
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

        <div className="mt-8 flex flex-col gap-6 sm:flex-row sm:items-end sm:justify-between">
          <div className="max-w-3xl">
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
          {work.live_url ? (
            <a
              href={work.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(
                buttonVariants({ size: "lg" }),
                "shrink-0 gap-2",
              )}
            >
              Open live preview
              <ExternalLink aria-hidden="true" className="size-4" />
            </a>
          ) : null}
        </div>

        <WindowFrame
          accent={1}
          title={`${work.slug}.preview`}
          className="mt-12"
        >
          <WorkPreviewCard
            title={work.title}
            liveUrl={work.live_url}
            coverImageUrl={work.cover_image_url}
            priority
            className="border-b-0"
          />
        </WindowFrame>

        {work.live_url ? (
          <div className="mt-8 flex flex-wrap items-center gap-3 rounded-2xl border-[2.5px] border-foreground bg-muted px-4 py-3 shadow-hard-sm">
            <p className="text-sm font-medium">
              Live preview for HR / reviewers:
            </p>
            <a
              href={work.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 break-all font-mono text-sm font-semibold text-primary underline decoration-2 underline-offset-4"
            >
              {work.live_url.replace(/^https?:\/\//, "")}
              <ExternalLink aria-hidden="true" className="size-3.5 shrink-0" />
            </a>
          </div>
        ) : null}

        {content.highlights && content.highlights.length > 0 ? (
          <ul className="mt-12 grid gap-4 sm:grid-cols-2">
            {content.highlights.map((item) => (
              <li
                key={item}
                className="rounded-2xl border-[2.5px] border-foreground bg-card p-4 text-sm leading-7 text-muted-foreground shadow-hard-sm"
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

        <div className="mt-14 flex flex-wrap gap-3">
          {work.live_url ? (
            <a
              href={work.live_url}
              target="_blank"
              rel="noopener noreferrer"
              className={cn(buttonVariants({ size: "lg" }), "gap-2")}
            >
              Go Live
              <ExternalLink aria-hidden="true" className="size-4" />
            </a>
          ) : null}
          <Link
            href="/hire"
            className={cn(
              buttonVariants({
                variant: work.live_url ? "outline" : "default",
                size: "lg",
              }),
              "gap-2",
            )}
          >
            Discuss a similar project
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </Link>
        </div>
      </Reveal>
    </Container>
  );
}
