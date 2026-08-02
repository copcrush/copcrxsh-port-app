import { cn } from "@/lib/utils";

type BrandIconProps = {
  className?: string;
  title?: string;
};

/**
 * Neo-brutalist COPCRXSH mark: C</>
 * High-contrast candy colors so it pops on white.
 */
export function BrandIcon({
  className,
  title = "COPCRXSH",
}: BrandIconProps) {
  return (
    <svg
      viewBox="0 0 64 64"
      xmlns="http://www.w3.org/2000/svg"
      role="img"
      aria-label={title}
      className={cn("shrink-0", className)}
    >
      <title>{title}</title>
      {/* Yellow tile — pops on white bg */}
      <rect
        x="2"
        y="2"
        width="60"
        height="60"
        rx="14"
        fill="#ffe566"
        stroke="#0b1f33"
        strokeWidth="4"
      />
      {/* Blue chip */}
      <rect
        x="7"
        y="7"
        width="12"
        height="12"
        rx="3"
        fill="#4da3ff"
        stroke="#0b1f33"
        strokeWidth="2.5"
      />
      {/* C — solid green */}
      <path
        fill="#22c55e"
        stroke="#0b1f33"
        strokeWidth="2"
        strokeLinejoin="round"
        d="M22.5 18c-7.5 0-13 5.6-13 14s5.5 14 13 14c4.2 0 7.6-1.6 9.8-4.2l-3.8-3.6c-1.3 1.4-3.2 2.3-6 2.3-4.4 0-7.4-3.2-7.4-8.5s3-8.5 7.4-8.5c2.8 0 4.7.9 6 2.3l3.8-3.6C30.1 19.6 26.7 18 22.5 18Z"
      />
      {/* < blue */}
      <path
        fill="none"
        stroke="#4da3ff"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M37 24 31 32l6 8"
      />
      {/* / pink */}
      <path
        fill="none"
        stroke="#ff6b9d"
        strokeWidth="5"
        strokeLinecap="round"
        d="M44 22 40 42"
      />
      {/* > orange */}
      <path
        fill="none"
        stroke="#ff8a3d"
        strokeWidth="5"
        strokeLinecap="round"
        strokeLinejoin="round"
        d="M47 24 53 32l-6 8"
      />
    </svg>
  );
}
