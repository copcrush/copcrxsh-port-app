import { Reveal } from "@/components/sections/reveal";
import { Container } from "@/components/layout/container";

const skills = [
  "TypeScript",
  "React / Next.js",
  "Node.js",
  "PostgreSQL",
  "Supabase",
  "Tailwind CSS",
  "Auth & security",
  "API design",
  "Deployment",
];

export function SkillsSection() {
  return (
    <section id="skills" className="border-t py-20 sm:py-28">
      <Container>
        <Reveal>
          <p className="mb-4 text-sm font-semibold tracking-widest text-primary uppercase">
            Skills
          </p>
          <h2 className="max-w-2xl font-heading text-3xl font-semibold sm:text-4xl">
            Tools I reach for when shipping production work.
          </h2>
          <ul className="mt-10 grid gap-3 sm:grid-cols-2 lg:grid-cols-3">
            {skills.map((skill) => (
              <li
                key={skill}
                className="border-b border-border py-3 text-base font-medium"
              >
                {skill}
              </li>
            ))}
          </ul>
        </Reveal>
      </Container>
    </section>
  );
}
