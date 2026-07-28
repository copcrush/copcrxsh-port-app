import Link from "next/link";

import { buttonVariants } from "@/components/ui/button";
import { getAllWorks } from "@/features/works/queries";
import { cn } from "@/lib/utils";

export default async function AdminWorksPage() {
  let works: Awaited<ReturnType<typeof getAllWorks>> = [];
  let loadError: string | null = null;

  try {
    works = await getAllWorks();
  } catch (error) {
    loadError =
      error instanceof Error ? error.message : "Unable to load works.";
  }

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

      {loadError ? (
        <p role="alert" className="mt-8 text-sm text-primary">
          {loadError}
        </p>
      ) : null}

      {works.length === 0 && !loadError ? (
        <div className="mt-8 rounded-lg border border-dashed p-10 text-center text-sm text-muted-foreground">
          No work entries yet.
        </div>
      ) : (
        <div className="mt-8 overflow-x-auto rounded-lg border">
          <table className="w-full min-w-[640px] text-left text-sm">
            <thead className="border-b bg-muted/50">
              <tr>
                <th className="px-4 py-3 font-medium">Title</th>
                <th className="px-4 py-3 font-medium">Slug</th>
                <th className="px-4 py-3 font-medium">Status</th>
                <th className="px-4 py-3 font-medium">Updated</th>
                <th className="px-4 py-3 font-medium"> </th>
              </tr>
            </thead>
            <tbody>
              {works.map((work) => (
                <tr key={work.id} className="border-b last:border-b-0">
                  <td className="px-4 py-3 font-medium">{work.title}</td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {work.slug}
                  </td>
                  <td className="px-4 py-3">
                    {work.published ? "Published" : "Draft"}
                  </td>
                  <td className="px-4 py-3 text-muted-foreground">
                    {new Date(work.updated_at).toLocaleDateString()}
                  </td>
                  <td className="px-4 py-3 text-right">
                    <Link
                      href={`/admin/works/${work.id}`}
                      className={cn(
                        buttonVariants({ variant: "outline", size: "sm" }),
                      )}
                    >
                      Edit
                    </Link>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
}
