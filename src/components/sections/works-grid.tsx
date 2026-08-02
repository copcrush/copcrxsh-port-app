import { ArrowUpRight, ExternalLink } from "lucide-react";
import Link from "next/link";

import { Stagger, StaggerItem } from "@/components/sections/stagger";
import { WorkPreviewCard } from "@/components/sections/work-preview-card";
import { buttonVariants } from "@/components/ui/button";
import { WindowFrame } from "@/components/ui/window-frame";
import type { Work } from "@/features/works/types";
import { cn } from "@/lib/utils";

type WorksGridProps = {
  works: Work[];
  className?: string;
};

function windowTitle(work: Work) {
  return `${work.slug}.preview`;
}

export function WorksGrid({ works, className }: WorksGridProps) {
  if (works.length === 0) {
    return (
      <div
        className={cn(
          "rounded-2xl border-[2.5px] border-dashed border-foreground p-10 text-center text-sm text-muted-foreground",
          className,
        )}
      >
        No published work yet.
      </div>
    );
  }

  return (
    <Stagger className={cn("grid gap-8 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {works.map((work, index) => (
        <StaggerItem key={work.id}>
          <WindowFrame
            accent={index}
            title={windowTitle(work)}
            bodyClassName="flex h-full flex-col"
          >
            <WorkPreviewCard
              title={work.title}
              liveUrl={work.live_url}
              coverImageUrl={work.cover_image_url}
              priority={index < 3}
            />
            <div className="flex flex-1 flex-col p-5">
              {work.tags[0] ? (
                <p className="text-xs font-bold tracking-wide text-primary uppercase">
                  {work.tags[0]}
                </p>
              ) : null}
              <h3 className="mt-2 font-heading text-xl font-bold leading-tight">
                {work.title}
              </h3>
              <p className="mt-2 line-clamp-2 flex-1 text-sm leading-6 text-muted-foreground">
                {work.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {work.live_url ? (
                  <a
                    href={work.live_url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={cn(buttonVariants({ size: "sm" }), "gap-1.5")}
                  >
                    Go Live
                    <ExternalLink aria-hidden="true" className="size-3.5" />
                  </a>
                ) : null}
                <Link
                  href={`/works/${work.slug}`}
                  className={cn(
                    buttonVariants({
                      variant: work.live_url ? "outline" : "default",
                      size: "sm",
                    }),
                    "gap-1.5",
                  )}
                >
                  Case study
                  <ArrowUpRight aria-hidden="true" className="size-3.5" />
                </Link>
              </div>
            </div>
          </WindowFrame>
        </StaggerItem>
      ))}
    </Stagger>
  );
}
