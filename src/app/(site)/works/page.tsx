import type { Metadata } from "next";

import { Container } from "@/components/layout/container";

export const metadata: Metadata = {
  title: "Works",
};

export default function WorksPage() {
  return (
    <Container className="py-20 sm:py-28">
      <div className="max-w-3xl">
        <p className="mb-4 text-sm font-semibold tracking-widest text-primary uppercase">
          Works
        </p>
        <h1 className="font-heading text-4xl font-semibold tracking-tight sm:text-6xl">
          Selected work, with the thinking left in.
        </h1>
        <p className="mt-6 text-lg leading-8 text-muted-foreground">
          Case studies will appear here after the portfolio schema and content
          are approved in Supabase.
        </p>
      </div>
      <div className="mt-14 rounded-lg border border-dashed p-10 text-center text-sm text-muted-foreground">
        No published work yet.
      </div>
    </Container>
  );
}
