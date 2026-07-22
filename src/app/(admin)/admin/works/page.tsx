import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";

export default function AdminWorksPage() {
  return (
    <div>
      <div className="flex items-center justify-between gap-6">
        <div>
          <p className="text-sm font-semibold tracking-widest text-primary uppercase">
            Content
          </p>
          <h1 className="mt-3 font-heading text-3xl font-semibold">Works</h1>
        </div>
        <Link href="/admin/works/new" className={buttonVariants()}>
          Add work
        </Link>
      </div>
      <div className="mt-8 rounded-lg border border-dashed p-10 text-center text-sm text-muted-foreground">
        No work entries yet.
      </div>
    </div>
  );
}
