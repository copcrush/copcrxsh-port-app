import { BrandIcon } from "@/components/layout/brand-icon";
import { cn } from "@/lib/utils";

export function BrandMark({ className }: { className?: string }) {
  return (
    <span
      className={cn(
        "inline-flex items-center gap-2.5 font-heading text-lg font-bold tracking-[-0.04em]",
        className,
      )}
    >
      <BrandIcon className="size-9 sm:size-10" />
      <span>
        COPCRXSH<span className="text-ocean-blue">.</span>
      </span>
    </span>
  );
}
