"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";

import { cv } from "@/content/cv";

type ProfileHeroProps = {
  /** Decorative filename in the window chrome */
  filename?: string;
};

export function ProfileHero({
  filename = "navaphan.profile",
}: ProfileHeroProps) {
  const reduceMotion = useReducedMotion();

  return (
    <div className="relative mx-auto w-full max-w-md lg:max-w-none">
      {/* Soft candy blobs behind the card */}
      <motion.div
        aria-hidden="true"
        className="absolute -top-4 -right-3 size-24 rounded-full border-[2.5px] border-foreground bg-ocean-blue shadow-hard-sm sm:size-28"
        animate={reduceMotion ? undefined : { y: [0, -8, 0] }}
        transition={{ duration: 4.5, repeat: Infinity, ease: "easeInOut" }}
      />
      <motion.div
        aria-hidden="true"
        className="absolute -bottom-3 -left-4 size-20 rounded-full border-[2.5px] border-foreground bg-candy-pink shadow-hard-sm sm:size-24"
        animate={reduceMotion ? undefined : { y: [0, 6, 0] }}
        transition={{ duration: 5.2, repeat: Infinity, ease: "easeInOut" }}
      />
      <div
        aria-hidden="true"
        className="absolute top-1/3 -left-6 size-14 rotate-12 rounded-2xl border-[2.5px] border-foreground bg-golden-pollen shadow-hard-sm"
      />
      <div
        aria-hidden="true"
        className="absolute right-2 bottom-16 size-10 rotate-[-8deg] rounded-full border-[2.5px] border-foreground bg-candy-orange shadow-hard-sm"
      />

      <motion.article
        className="relative overflow-hidden rounded-2xl border-[2.5px] border-foreground bg-card shadow-hard"
        initial={reduceMotion ? false : { opacity: 0, y: 16, rotate: -1 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0, rotate: 0 }}
        transition={{ duration: 0.5, ease: "easeOut" }}
      >
        <header className="flex items-center gap-2 border-b-[2.5px] border-foreground bg-primary px-3 py-2.5">
          <span className="flex items-center gap-1.5" aria-hidden="true">
            <span className="size-3 rounded-full border-[2.5px] border-foreground bg-card" />
            <span className="size-3 rounded-full border-[2.5px] border-foreground bg-card" />
            <span className="size-3 rounded-full border-[2.5px] border-foreground bg-card" />
          </span>
          <p className="min-w-0 flex-1 truncate text-center font-mono text-[11px] font-bold text-foreground sm:text-xs">
            {filename}
          </p>
          <span className="w-[52px]" aria-hidden="true" />
        </header>

        <div className="relative bg-muted p-4 sm:p-5">
          <div className="relative mx-auto aspect-square max-w-sm overflow-hidden rounded-2xl border-[2.5px] border-foreground bg-card shadow-hard-sm">
            <Image
              src="/images/profile.png"
              alt={`${cv.name} — ${cv.title}`}
              fill
              priority
              className="object-cover object-[center_20%]"
              sizes="(max-width: 768px) 90vw, 420px"
            />
          </div>
          <div className="mt-4 flex flex-wrap items-center justify-between gap-2 rounded-2xl border-[2.5px] border-foreground bg-card px-4 py-3 shadow-hard-sm">
            <div>
              <p className="font-heading text-base font-bold leading-tight">
                {cv.name}
              </p>
              <p className="text-xs font-semibold text-muted-foreground">
                {cv.title}
              </p>
            </div>
            <span className="rounded-full border-[2.5px] border-foreground bg-golden-pollen px-3 py-1 text-[10px] font-bold uppercase tracking-wide">
              Open to work
            </span>
          </div>
        </div>
      </motion.article>
    </div>
  );
}
