"use client";

import { motion, useReducedMotion } from "framer-motion";

export function HeroCollage() {
  const reduceMotion = useReducedMotion();

  return (
    <div
      aria-hidden="true"
      className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none"
    >
      <motion.div
        className="absolute inset-0 overflow-hidden rounded-[2px] border-2 border-foreground bg-card shadow-hard"
        initial={reduceMotion ? false : { opacity: 0, y: 12 }}
        animate={reduceMotion ? undefined : { opacity: 1, y: 0 }}
        transition={{ duration: 0.45, ease: "easeOut" }}
      >
        <div className="flex items-center gap-1.5 border-b-2 border-foreground bg-muted px-3 py-2">
          <span className="size-2.5 rounded-full border-2 border-foreground bg-primary" />
          <span className="size-2.5 rounded-full border-2 border-foreground bg-golden-pollen" />
          <span className="size-2.5 rounded-full border-2 border-foreground bg-emerald" />
          <span className="ml-2 font-mono text-[10px] text-muted-foreground">
            desk.widget
          </span>
        </div>

        <div className="relative h-[calc(100%-2.25rem)] overflow-hidden p-4">
          <motion.div
            className="absolute inset-[10%] bg-dark-teal"
            animate={
              reduceMotion
                ? undefined
                : { rotate: [-4, -7, -4], y: [0, -4, 0] }
            }
            transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-[18%_14%_16%_24%] bg-ocean-blue"
            animate={
              reduceMotion
                ? undefined
                : { rotate: [5, 8, 5], x: [0, 3, 0] }
            }
            transition={{ duration: 5.5, repeat: Infinity, ease: "easeInOut" }}
          />
          <motion.div
            className="absolute inset-[28%_30%_20%_14%] bg-primary"
            animate={
              reduceMotion
                ? undefined
                : { rotate: [-6, -10, -6] }
            }
            transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
          />
          <div className="absolute inset-[44%_20%_30%_40%] rotate-[8deg] bg-golden-pollen" />
          <div className="absolute inset-[58%_44%_14%_24%] -rotate-[2deg] border-2 border-foreground bg-emerald" />
          <div className="absolute top-[14%] right-[10%] size-8 rotate-45 border-2 border-foreground bg-foreground" />
          <div className="absolute bottom-[12%] left-[10%] h-2.5 w-16 bg-foreground" />
        </div>
      </motion.div>
    </div>
  );
}
