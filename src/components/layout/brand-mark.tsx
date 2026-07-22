import { CodeXml } from "lucide-react";

import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2 font-heading text-lg font-bold tracking-[-0.04em]",
        className,
      )}
    >
      <span className="grid size-8 place-items-center rounded-md bg-foreground text-background">
        <CodeXml aria-hidden="true" className="size-4 stroke-[2.5]" />
      </span>
      <span>
        COPCRXSH<span className="text-primary">.</span>
      </span>
    </span>
  );
}
