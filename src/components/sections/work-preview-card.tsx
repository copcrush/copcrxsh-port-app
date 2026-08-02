import { ExternalLink } from "lucide-react";
import Image from "next/image";

import { cn } from "@/lib/utils";

type WorkPreviewCardProps = {
  title: string;
  liveUrl: string | null;
  coverImageUrl: string | null;
  className?: string;
  priority?: boolean;
};

function displayHost(url: string) {
  try {
    return new URL(url).host;
  } catch {
    return url.replace(/^https?:\/\//, "");
  }
}

export function WorkPreviewCard({
  title,
  liveUrl,
  coverImageUrl,
  className,
  priority = false,
}: WorkPreviewCardProps) {
  return (
    <div
      className={cn(
        "relative overflow-hidden border-b-[2.5px] border-foreground bg-muted",
        className,
      )}
    >
      {/* Browser chrome URL bar */}
      <div className="flex items-center gap-2 border-b-[2.5px] border-foreground bg-card px-3 py-2">
        <span className="hidden size-2 shrink-0 rounded-full bg-foreground/25 sm:block" />
        <div className="flex min-w-0 flex-1 items-center gap-2 rounded-full border-[2.5px] border-foreground bg-muted px-3 py-1">
          {liveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="flex min-w-0 flex-1 items-center gap-1.5 font-mono text-[10px] font-bold text-foreground sm:text-xs"
            >
              <span className="truncate">{displayHost(liveUrl)}</span>
              <ExternalLink
                aria-hidden="true"
                className="size-3 shrink-0 text-primary"
              />
            </a>
          ) : (
            <span className="truncate font-mono text-[10px] text-muted-foreground sm:text-xs">
              preview unavailable
            </span>
          )}
        </div>
      </div>

      <div className="relative aspect-16/10">
        {coverImageUrl ? (
          <Image
            src={coverImageUrl}
            alt={`${title} website preview`}
            fill
            priority={priority}
            className="object-cover object-top"
            sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
          />
        ) : (
          <div className="absolute inset-0 bg-linear-to-br from-primary/50 via-ocean-blue/40 to-dark-teal/50" />
        )}

        {liveUrl ? (
          <a
            href={liveUrl}
            target="_blank"
            rel="noopener noreferrer"
            className="absolute inset-0 z-10 bg-foreground/0 transition-colors hover:bg-foreground/10 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-inset"
            aria-label={`Open live preview of ${title}`}
          />
        ) : null}
      </div>
    </div>
  );
}
