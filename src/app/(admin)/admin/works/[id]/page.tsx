import { notFound } from "next/navigation";

import { WorkForm } from "@/components/admin/work-form";
import { getWorkById } from "@/features/works/queries";

export default async function EditWorkPage({
  params,
}: {
  params: Promise<{ id: string }>;
}) {
  const { id } = await params;
  const work = await getWorkById(id).catch(() => null);

  if (!work) {
    notFound();
  }

  return (
    <div>
      <p className="text-sm font-semibold tracking-widest text-primary uppercase">
        Works
      </p>
      <h1 className="mt-3 font-heading text-3xl font-semibold">Edit work</h1>
      <WorkForm work={work} />
    </div>
  );
}
