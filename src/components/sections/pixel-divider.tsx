export function PixelDivider() {
  return (
    <div
      aria-hidden="true"
      className="mx-auto flex h-2 w-full max-w-xs items-center justify-center gap-1"
    >
      {Array.from({ length: 12 }).map((_, index) => (
        <span
          key={index}
          className="size-1.5 bg-foreground/30"
          style={{
            opacity: index % 3 === 0 ? 1 : 0.45,
          }}
        />
      ))}
    </div>
  );
}
