import { Reveal } from "@/components/sections/reveal";
import { Stagger, StaggerItem } from "@/components/sections/stagger";
import { Container } from "@/components/layout/container";
import { WindowFrame } from "@/components/ui/window-frame";

const services = [
  {
    title: "Product websites",
    filename: "websites.service",
    description:
      "Marketing sites and portfolios with clear structure, fast load, and room to grow.",
  },
  {
    title: "Full-stack web apps",
    filename: "apps.service",
    description:
      "Authenticated products with database, storage, and APIs owned end to end.",
  },
  {
    title: "Freelance build support",
    filename: "freelance.service",
    description:
      "Scoped delivery for founders and teams who need one developer across the stack.",
  },
];

export function ServicesSection() {
  return (
    <section
      id="services"
      className="border-t-[2.5px] border-foreground py-20 sm:py-28"
    >
      <Container>
        <Reveal>
          <p className="mb-4 text-sm font-bold tracking-widest text-primary uppercase">
            Services
          </p>
          <h2 className="max-w-2xl font-heading text-3xl font-bold sm:text-4xl">
            How I can help on a freelance engagement.
          </h2>
        </Reveal>
        <Stagger className="mt-12 grid gap-6 md:grid-cols-3">
          {services.map((service, index) => (
            <StaggerItem key={service.title}>
              <WindowFrame accent={index + 1} title={service.filename}>
                <div className="p-5">
                  <h3 className="font-heading text-xl font-bold">
                    {service.title}
                  </h3>
                  <p className="mt-3 text-sm leading-7 text-muted-foreground">
                    {service.description}
                  </p>
                </div>
              </WindowFrame>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
