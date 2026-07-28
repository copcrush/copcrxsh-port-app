import Image from "next/image";
import Link from "next/link";

import type { Work } from "@/features/works/types";
import { cn } from "@/lib/utils";

type WorksGridProps = {
  works: Work[];
  className?: string;
};

export function WorksGrid({ works, className }: WorksGridProps) {
  if (works.length === 0) {
    return (
      <div
        className={cn(
          "rounded-lg border border-dashed p-10 text-center text-sm text-muted-foreground",
          className,
        )}
      >
        No published work yet.
      </div>
    );
  }

  return (
    <div className={cn("grid gap-6 sm:grid-cols-2 lg:grid-cols-3", className)}>
      {works.map((work) => (
        <Link
          key={work.id}
          href={`/works/${work.slug}`}
          className="group overflow-hidden rounded-lg border bg-card transition duration-200 hover:scale-[1.02] hover:shadow-lg focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
        >
          <div className="relative aspect-4/3 bg-muted">
            {work.cover_image_url ? (
              <Image
                src={work.cover_image_url}
                alt={work.title}
                fill
                className="object-cover"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
            ) : (
              <div className="absolute inset-0 bg-linear-to-br from-primary/30 via-ocean-blue/20 to-dark-teal/40" />
            )}
          </div>
          <div className="p-5">
            {work.tags[0] ? (
              <p className="text-xs tracking-wide text-muted-foreground uppercase">
                {work.tags[0]}
              </p>
            ) : null}
            <h3 className="mt-2 font-heading text-xl font-semibold">
              {work.title}
            </h3>
            <p className="mt-2 line-clamp-2 text-sm leading-6 text-muted-foreground">
              {work.description}
            </p>
          </div>
        </Link>
      ))}
    </div>
  );
}
