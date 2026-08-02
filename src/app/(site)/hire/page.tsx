import { ArrowUpRight } from "lucide-react";
import type { Metadata } from "next";

import { Container } from "@/components/layout/container";
import { ContactForm } from "@/components/sections/contact-form";
import { Reveal } from "@/components/sections/reveal";
import { WindowFrame } from "@/components/ui/window-frame";
import { cv } from "@/content/cv";
import { getContactEmail } from "@/features/contact/config";

export const metadata: Metadata = {
  title: "Contact Us",
  description:
    "Send a freelance hire request to COPCRXSH. Share your brief, budget, and timeline.",
};

export default function HirePage() {
  const contactEmail = getContactEmail();

  return (
    <Container className="py-20 sm:py-28">
      <Reveal>
        <div className="grid gap-14 lg:grid-cols-[1fr_1.2fr] lg:gap-20">
          <div>
            <p className="mb-4 text-sm font-bold tracking-widest text-primary uppercase">
              Contact Us
            </p>
            <h1 className="font-heading text-4xl font-bold tracking-tight sm:text-5xl">
              Send a hire request.
            </h1>
            <p className="mt-6 text-lg leading-8 text-muted-foreground">
              Fill in the form and Gmail will open with a ready message to{" "}
              {cv.name}. Add your brief, budget, and timeline — then hit Send.
            </p>
            <ul className="mt-8 space-y-3 text-sm leading-6 text-muted-foreground">
              <li className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="mt-2 size-1.5 shrink-0 bg-primary"
                />
                Freelance websites, web apps, and backend work
              </li>
              <li className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="mt-2 size-1.5 shrink-0 bg-primary"
                />
                Clear scope, timeline, and communication
              </li>
              <li className="flex gap-2">
                <span
                  aria-hidden="true"
                  className="mt-2 size-1.5 shrink-0 bg-primary"
                />
                Good fit for startups, founders, and small teams
              </li>
            </ul>
            <a
              href={`https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(contactEmail)}`}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-10 inline-flex items-center gap-2 border-b-[2.5px] border-primary pb-1 text-base font-bold focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring"
            >
              {contactEmail}
              <ArrowUpRight aria-hidden="true" className="size-4" />
            </a>
            <p className="mt-3 text-xs text-muted-foreground">
              Or email directly — the form below prefills a hire request for
              you.
            </p>
          </div>

          <WindowFrame accent={3} title="hire-request.form">
            <div className="p-6 sm:p-8">
              <h2 className="font-heading text-2xl font-bold">
                Freelance hire request
              </h2>
              <p className="mt-2 text-sm text-muted-foreground">
                Submit this form to open Gmail with your hire message ready to
                send.
              </p>
              <div className="mt-8">
                <ContactForm />
              </div>
            </div>
          </WindowFrame>
        </div>
      </Reveal>
    </Container>
  );
}
