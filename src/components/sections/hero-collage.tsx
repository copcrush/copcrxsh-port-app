export function HeroCollage() {
  return (
    <div
      aria-hidden="true"
      className="relative mx-auto aspect-square w-full max-w-md lg:max-w-none"
    >
      <div className="absolute inset-[8%] rotate-[-6deg] bg-dark-teal" />
      <div className="absolute inset-[18%_12%_12%_22%] rotate-[4deg] bg-ocean-blue" />
      <div className="absolute inset-[28%_28%_18%_12%] -rotate-[8deg] bg-primary" />
      <div className="absolute inset-[42%_18%_28%_38%] rotate-[10deg] bg-golden-pollen" />
      <div className="absolute inset-[55%_42%_12%_22%] -rotate-[3deg] border-4 border-foreground bg-emerald" />
      <div className="absolute top-[12%] right-[8%] size-10 rotate-45 bg-foreground" />
      <div className="absolute bottom-[10%] left-[8%] h-3 w-20 bg-foreground" />
    </div>
  );
}
