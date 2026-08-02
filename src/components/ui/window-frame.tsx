import type { ReactNode } from "react";

import { cn } from "@/lib/utils";

const titleBarColors = [
  "bg-ocean-blue",
  "bg-golden-pollen",
  "bg-primary",
  "bg-candy-orange",
  "bg-candy-pink",
  "bg-candy-purple",
] as const;

type WindowFrameProps = {
  title: string;
  children: ReactNode;
  className?: string;
  bodyClassName?: string;
  /** Cycles candy title-bar colors for modern neo-brutalism */
  accent?: number;
};

export function WindowFrame({
  title,
  children,
  className,
  bodyClassName,
  accent = 0,
}: WindowFrameProps) {
  const barColor = titleBarColors[accent % titleBarColors.length];

  return (
    <article
      className={cn(
        "group overflow-hidden rounded-2xl border-[2.5px] border-foreground bg-card shadow-hard transition-[transform,box-shadow] duration-200 hover:-translate-x-0.5 hover:-translate-y-0.5",
        className,
      )}
    >
      <header
        className={cn(
          "flex items-center gap-2 border-b-[2.5px] border-foreground px-3 py-2.5",
          barColor,
        )}
      >
        <span className="flex items-center gap-1.5" aria-hidden="true">
          <span className="size-3 rounded-full border-[2.5px] border-foreground bg-card" />
          <span className="size-3 rounded-full border-[2.5px] border-foreground bg-card" />
          <span className="size-3 rounded-full border-[2.5px] border-foreground bg-card" />
        </span>
        <p className="min-w-0 flex-1 truncate text-center font-mono text-[11px] font-bold tracking-tight text-foreground sm:text-xs">
          {title}
        </p>
        <span className="w-[52px]" aria-hidden="true" />
      </header>
      <div className={cn(bodyClassName)}>{children}</div>
    </article>
  );
}
