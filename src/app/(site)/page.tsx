import { ArrowUpRight, Braces, Database, ServerCog } from "lucide-react";
import Link from "next/link";

import { Container } from "@/components/layout/container";
import { buttonVariants } from "@/components/ui/button";
import { Reveal } from "@/components/sections/reveal";
import { cn } from "@/lib/utils";

export default function HomePage() {
  return (
    <>
      <section className="border-b py-20 sm:py-28 lg:py-36">
        <Container>
          <p className="mb-6 text-sm font-semibold tracking-widest text-primary uppercase">
            Full-stack developer · Bangkok
          </p>
          <h1 className="max-w-5xl font-heading text-5xl leading-none font-semibold tracking-tight sm:text-6xl">
            I build complete web products, from interface to infrastructure.
          </h1>
          <div className="mt-10 flex flex-col gap-4 sm:flex-row sm:items-center">
            <Link
              href="/contact"
              className={cn(buttonVariants({ size: "lg" }), "gap-2")}
            >
              Contact Me
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </Link>
            <Link
              href="/works"
              className={buttonVariants({ variant: "outline", size: "lg" })}
            >
              Explore selected work
            </Link>
          </div>
        </Container>
      </section>

      <section className="py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="mb-10 flex items-end justify-between gap-6">
              <div>
                <p className="mb-3 text-sm font-semibold tracking-widest text-primary uppercase">
                  Selected work
                </p>
                <h2 className="font-heading text-3xl font-semibold sm:text-4xl">
                  One developer. The full stack.
                </h2>
              </div>
              <Link
                href="/works"
                className="hidden text-sm font-semibold underline decoration-primary decoration-2 underline-offset-4 sm:block"
              >
                View all work
              </Link>
            </div>
            <div className="grid gap-6 md:grid-cols-3">
              {[
                {
                  color: "bg-primary",
                  label: "Frontend engineering",
                  description: "Fast, accessible interfaces built with React.",
                  icon: Braces,
                },
                {
                  color: "bg-golden-pollen",
                  label: "Backend & APIs",
                  description: "Typed services with clear boundaries.",
                  icon: ServerCog,
                },
                {
                  color: "bg-emerald",
                  label: "Cloud & data",
                  description: "Reliable databases, auth, and deployment.",
                  icon: Database,
                },
              ].map(({ color, label, description, icon: Icon }, index) => (
                <article
                  key={label}
                  className="group overflow-hidden rounded-lg border bg-card transition duration-200 hover:scale-[1.02] hover:shadow-lg"
                >
                  <div
                    className={cn(
                      "grid aspect-4/3 place-items-center text-foreground",
                      color,
                    )}
                  >
                    <Icon aria-hidden="true" className="size-12 stroke-[1.5]" />
                  </div>
                  <div className="p-5">
                    <p className="text-xs text-muted-foreground">
                      0{index + 1}
                    </p>
                    <h3 className="mt-2 font-heading text-xl font-semibold">
                      {label}
                    </h3>
                    <p className="mt-2 text-sm leading-6 text-muted-foreground">
                      {description}
                    </p>
                  </div>
                </article>
              ))}
            </div>
          </Reveal>
        </Container>
      </section>

      <section className="border-t py-20 sm:py-28">
        <Container>
          <Reveal>
            <div className="max-w-3xl">
              <p className="mb-4 text-sm font-semibold tracking-widest text-primary uppercase">
                Freelance
              </p>
              <h2 className="font-heading text-3xl font-semibold sm:text-4xl">
                Need a freelance full-stack developer?
              </h2>
              <p className="mt-5 text-lg leading-8 text-muted-foreground">
                Share your project brief, budget, and timeline. I’ll reply with
                availability and a practical plan — then we can start building.
              </p>
              <Link
                href="/contact"
                className={cn(buttonVariants({ size: "lg" }), "mt-8 gap-2")}
              >
                Contact Me
                <ArrowUpRight aria-hidden="true" className="size-4" />
              </Link>
            </div>
          </Reveal>
        </Container>
      </section>
    </>
  );
}
