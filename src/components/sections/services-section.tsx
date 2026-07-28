import { Reveal } from "@/components/sections/reveal";
import { Container } from "@/components/layout/container";

const services = [
  {
    title: "Product websites",
    description:
      "Marketing sites and portfolios with clear structure, fast load, and room to grow.",
  },
  {
    title: "Full-stack web apps",
    description:
      "Authenticated products with database, storage, and APIs owned end to end.",
  },
  {
    title: "Freelance build support",
    description:
      "Scoped delivery for founders and teams who need one developer across the stack.",
  },
];

export function ServicesSection() {
  return (
    <section id="services" className="border-t py-20 sm:py-28">
      <Container>
        <Reveal>
          <p className="mb-4 text-sm font-semibold tracking-widest text-primary uppercase">
            Services
          </p>
          <h2 className="max-w-2xl font-heading text-3xl font-semibold sm:text-4xl">
            How I can help on a freelance engagement.
          </h2>
          <div className="mt-12 grid gap-10 md:grid-cols-3">
            {services.map((service) => (
              <article key={service.title}>
                <h3 className="font-heading text-xl font-semibold">
                  {service.title}
                </h3>
                <p className="mt-3 text-sm leading-7 text-muted-foreground">
                  {service.description}
                </p>
              </article>
            ))}
          </div>
        </Reveal>
      </Container>
    </section>
  );
}
