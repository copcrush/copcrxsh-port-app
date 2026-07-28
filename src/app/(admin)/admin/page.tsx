import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { countWorks, getAllWorks } from "@/features/works/queries";
import { cn } from "@/lib/utils";

export default async function AdminDashboardPage() {
  let total = 0;
  let published = 0;
  let loadError: string | null = null;

  try {
    const [count, works] = await Promise.all([countWorks(), getAllWorks()]);
    total = count;
    published = works.filter((work) => work.published).length;
  } catch (error) {
    loadError =
      error instanceof Error ? error.message : "Unable to load dashboard.";
  }

  return (
    <div>
      <p className="text-sm font-semibold tracking-widest text-primary uppercase">
        Backoffice
      </p>
      <h1 className="mt-3 font-heading text-3xl font-semibold">Dashboard</h1>

      {loadError ? (
        <p role="alert" className="mt-8 text-sm text-primary">
          {loadError}
        </p>
      ) : (
        <div className="mt-8 grid gap-4 sm:grid-cols-2">
          <div className="rounded-lg border bg-card p-6">
            <p className="text-sm text-muted-foreground">Total works</p>
            <p className="mt-2 font-heading text-3xl font-semibold">{total}</p>
          </div>
          <div className="rounded-lg border bg-card p-6">
            <p className="text-sm text-muted-foreground">Published</p>
            <p className="mt-2 font-heading text-3xl font-semibold">
              {published}
            </p>
          </div>
        </div>
      )}

      <Link
        href="/admin/works/new"
        className={cn(buttonVariants(), "mt-8 inline-flex")}
      >
        Add work
      </Link>
    </div>
  );
}
