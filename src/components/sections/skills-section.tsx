import { Container } from "@/components/layout/container";
import { Reveal } from "@/components/sections/reveal";
import { Stagger, StaggerItem } from "@/components/sections/stagger";
import { WindowFrame } from "@/components/ui/window-frame";
import { cv } from "@/content/cv";

export function SkillsSection() {
  return (
    <section
      id="skills"
      className="border-t-[2.5px] border-foreground bg-dot-grid py-20 sm:py-28"
    >
      <Container>
        <Reveal>
          <p className="mb-4 text-sm font-bold tracking-widest text-primary uppercase">
            Skills
          </p>
          <h2 className="max-w-2xl font-heading text-3xl font-bold sm:text-4xl">
            Technical stack from production work.
          </h2>
        </Reveal>
        <Stagger className="mt-10 grid gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {cv.skills.map((group, index) => (
            <StaggerItem key={group.group}>
              <WindowFrame
                accent={index}
                title={`${group.group.toLowerCase().replace(/\s+/g, "-")}.skills`}
              >
                <div className="p-5">
                  <h3 className="font-heading text-lg font-bold">
                    {group.group}
                  </h3>
                  <ul className="mt-4 flex flex-wrap gap-2">
                    {group.items.map((skill) => (
                      <li
                        key={skill}
                        className="rounded-full border-[2.5px] border-foreground bg-muted px-3 py-1 text-xs font-bold"
                      >
                        {skill}
                      </li>
                    ))}
                  </ul>
                </div>
              </WindowFrame>
            </StaggerItem>
          ))}
        </Stagger>
      </Container>
    </section>
  );
}
