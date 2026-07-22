import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { ContactForm } from "@/components/sections/contact-form";
import { getContactEmail } from "@/features/contact/config";

export const metadata: Metadata = {
  title: "Hire Me",
  description:
    "Hire COPCRXSH as a freelance full-stack developer. Send a project inquiry and get a clear next step.",
};

export default function ContactPage() {
  const contactEmail = getContactEmail();

  return (
    <Container className="py-20 sm:py-28">
      <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
        <div>
          <p className="mb-4 text-sm font-semibold tracking-widest text-primary uppercase">
            Freelance
          </p>
          <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-5xl">
            Let’s build something together.
          </h1>
          <p className="mt-6 text-lg leading-8 text-muted-foreground">
            I’m available for freelance work as a full-stack developer. If you
            need a website, web app, API, or someone who can own the build end
            to end, send a short brief and I’ll reply with availability and next
            steps.
          </p>
          <ul className="mt-8 space-y-3 text-sm leading-6 text-muted-foreground">
            <li>Freelance websites, web apps, and backend work</li>
            <li>Clear scope, timeline, and communication</li>
            <li>Good fit for startups, founders, and small teams</li>
          </ul>
          <a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactEmail)}`}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-10 inline-flex items-center gap-2 border-b-2 border-primary pb-1 text-base font-semibold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
          >
            {contactEmail}
            <ArrowUpRight aria-hidden="true" className="size-4" />
          </a>
          <p className="mt-3 text-xs text-muted-foreground">
            Prefer email? Open Gmail above, or use the form to prefill a hire
            request.
          </p>
        </div>

        <div className="rounded-lg border bg-card p-6 sm:p-8">
          <h2 className="font-heading text-2xl font-semibold">
            Freelance hire request
          </h2>
          <p className="mt-2 text-sm text-muted-foreground">
            Fill this out and Gmail will open with a ready-to-send message to
            me. You only need to hit Send.
          </p>
          <div className="mt-8">
            <ContactForm />
          </div>
        </div>
      </div>
    </Container>
  );
}
